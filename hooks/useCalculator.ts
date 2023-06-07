import { KeyboardEventHandler, useCallback, useRef, useState } from "react";
import trimZero from "@/libs/trimZero";
import plus from "@/libs/plus";
import minus from "@/libs/minus";
import times from "@/libs/times";
import div from "@/libs/div";

type KeyNumber = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";
type Operator = "+" | "-" | "*" | "/";

function calc({
  operator,
  v1,
  v2,
}: {
  operator: Operator;
  v1: string;
  v2: string;
}) {
  switch (operator) {
    case "+":
      return plus(v1, v2);
    case "-":
      return minus(v1, v2);
    case "*":
      return times(v1, v2);
    case "/":
      return div(v1, v2);
  }
}

export default function useCalculator() {
  const [result, setResult] = useState("0");
  const isNextInput = useRef(false);
  const operator = useRef<Operator[]>([]);
  const operand = useRef<string[]>([]);

  const handleBackspace = useCallback(() => {
    if (result.length === 1) {
      setResult("0");
    }

    if (result.length > 1) {
      setResult(result.slice(0, -1));
    }
  }, [result]);

  const handleNumber = useCallback(
    (number: KeyNumber) => {
      if (isNextInput.current) {
        setResult(number);
        isNextInput.current = false;
        return;
      }

      if (result.includes(".")) {
        setResult(`${result}${number}`);
        return;
      }

      setResult(trimZero(`${result}${number}`));
    },
    [result]
  );

  const handleDec = useCallback(() => {
    if (result.includes(".")) {
      return;
    }

    setResult(`${result}.`);
  }, [result]);

  const handlePlusAndMinus = useCallback(
    (key: "+" | "-") => {
      if (isNextInput.current) {
        operator.current.pop();
        operator.current.push(key);
        return;
      }

      let lastOperand = operand.current.at(-1);
      let lastOperator = operator.current.at(-1);
      let calcResult = result;

      while (lastOperand && lastOperator) {
        calcResult = calc({
          operator: lastOperator,
          v1: lastOperand,
          v2: calcResult,
        });

        operand.current.pop();
        operator.current.pop();

        lastOperand = operand.current.at(-1);
        lastOperator = operator.current.at(-1);
      }

      setResult(calcResult);
      operand.current.push(calcResult);
      operator.current.push(key);
      isNextInput.current = true;
    },
    [result]
  );

  const handleTimesAndDiv = useCallback(
    (key: "*" | "/") => {
      if (isNextInput.current) {
        operator.current.pop();
        operator.current.push(key);
        return;
      }

      const lastOperand = operand.current.at(-1);
      const lastOperator = operator.current.at(-1);

      if (lastOperand && lastOperator && ["*", "/"].includes(lastOperator)) {
        const calcResult = calc({
          operator: lastOperator,
          v1: lastOperand,
          v2: result,
        });

        setResult(
          calc({
            operator: lastOperator,
            v1: lastOperand,
            v2: result,
          })
        );

        operand.current.pop();
        operator.current.pop();

        operand.current.push(calcResult);
        operator.current.push(key);
        isNextInput.current = true;
        return;
      }

      operand.current.push(result);
      operator.current.push(key);
      isNextInput.current = true;
    },
    [result]
  );

  const handleEqua = useCallback(() => {
    let lastOperand = operand.current.at(-1);
    let lastOperator = operator.current.at(-1);

    if (!lastOperand || !lastOperator) {
      return;
    }

    let calcResult = result;

    while (lastOperand && lastOperator) {
      calcResult = calc({
        operator: lastOperator,
        v1: lastOperand,
        v2: calcResult,
      });

      operand.current.pop();
      operator.current.pop();

      lastOperand = operand.current.at(-1);
      lastOperator = operator.current.at(-1);
    }

    setResult(calcResult);
    operand.current.push(calcResult);
    isNextInput.current = true;
  }, [result]);

  const handleClear = useCallback(() => {
    setResult("0");
    isNextInput.current = false;
    operator.current = [];
    operand.current = [];
  }, []);

  const handleKeyup = useCallback<KeyboardEventHandler<HTMLElement>>(
    (e) => {
      switch (e.key) {
        case "Backspace":
          handleBackspace();
          break;

        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
          handleNumber(e.key);
          break;

        case ".":
          handleDec();
          break;

        case "+":
        case "-":
          handlePlusAndMinus(e.key);
          break;

        case "*":
        case "/":
          handleTimesAndDiv(e.key);
          break;

        case "=":
          handleEqua();
          break;

        default:
          break;
      }
    },
    [
      handleBackspace,
      handleDec,
      handleEqua,
      handleNumber,
      handlePlusAndMinus,
      handleTimesAndDiv,
    ]
  );

  return {
    result,
    handleBackspace,
    handleNumber,
    handleDec,
    handleEqua,
    handlePlusAndMinus,
    handleTimesAndDiv,
    handleClear,
    handleKeyup,
  };
}
