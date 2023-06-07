import plus from "./plus";
import minus from "./minus";
import times from "./times";
import div from "./div";

import bigIntPlus from "./bigIntPlus";
import bigIntMinus from "./bigIntMinus";
import bigIntTimes from "./bigIntTimes";
import bigIntDiv from "./bigIntDiv";

test("plus", () => {
  expect(plus("1", "2")).toBe("3");
  expect(plus("0.1", "0.2")).toBe("0.3");
  expect(plus("0.001", "0.00")).toBe("0.001");
  expect(plus("1", "2")).toBe("3");
  expect(plus("2", "1")).toBe("3");
  expect(plus("20", "1")).toBe("21");
  expect(plus("1", "2000")).toBe("2001");
  expect(plus("20", "19.1")).toBe("39.1");
  expect(plus("20", "21.1")).toBe("41.1");
  expect(plus("19.1", "20")).toBe("39.1");
  expect(plus("19.1", "18")).toBe("37.1");
  expect(plus("2.2", "0.2")).toBe("2.4");
  expect(plus("2.2", "0.3")).toBe("2.5");
  expect(plus("2.2", "0.1")).toBe("2.3");
  expect(plus("0.1", "2.2")).toBe("2.3");
  expect(plus("0.5", "2.2")).toBe("2.7");
  expect(plus("0.5", "2.2023")).toBe("2.7023");
  expect(plus("-0.1", "-0.2")).toBe("-0.3");
  expect(plus("-0.1", "0.2")).toBe("0.1");
  expect(plus("0.1", "-0.2")).toBe("-0.1");
  expect(plus("-9992323.5000000000001", "-0.2023")).toBe(
    "-9992323.7023000000001"
  );
  expect(plus("9992323.5000000000001", "0")).toBe("9992323.5000000000001");
});

test("minus", () => {
  expect(minus("1", "2")).toBe("-1");
  expect(minus("2", "1")).toBe("1");
  expect(minus("20", "1")).toBe("19");
  expect(minus("1", "2000")).toBe("-1999");
  expect(minus("20", "19.1")).toBe("0.9");
  expect(minus("20", "21.1")).toBe("-1.1");
  expect(minus("19.1", "20")).toBe("-0.9");
  expect(minus("19.1", "18")).toBe("1.1");
  expect(minus("2.2", "0.2")).toBe("2");
  expect(minus("2.2", "0.3")).toBe("1.9");
  expect(minus("2.2", "0.1")).toBe("2.1");
  expect(minus("0.1", "2.2")).toBe("-2.1");
  expect(minus("0.5", "2.2")).toBe("-1.7");
  expect(minus("0.5", "2.2023")).toBe("-1.7023");
  expect(minus("-0.1", "-0.2")).toBe("0.1");
  expect(minus("-0.1", "0.2")).toBe("-0.3");
  expect(minus("0.1", "-0.2")).toBe("0.3");
  expect(minus("-9992323.5000000000001", "-0.2023")).toBe(
    "-9992323.2977000000001"
  );
  expect(minus("9992323.5000000000001", "0")).toBe("9992323.5000000000001");
  expect(minus("100.001", "100")).toBe("0.001");
});

test("times", () => {
  expect(times("0.1", "0.2")).toBe("0.02");
  expect(times("20", "20")).toBe("400");
  expect(times("20", "10.1")).toBe("202");
  expect(times("10.2", "20.3")).toBe("207.06");
  expect(times("0.0000005", "0.003")).toBe("0.0000000015");
  expect(times("0.000001", "0.001")).toBe("0.000000001");
  expect(times("3.3", "2.2")).toBe("7.26");
  expect(times("3", "2")).toBe("6");
  expect(times("-3", "-2")).toBe("6");
  expect(times("-3.2", "-2")).toBe("6.4");
  expect(times("-3", "-2.2")).toBe("6.6");
  expect(times("-3.3", "-2.2")).toBe("7.26");
  expect(times("3", "-2")).toBe("-6");
  expect(times("3.2", "-2")).toBe("-6.4");
  expect(times("3", "-2.2")).toBe("-6.6");
  expect(times("3.3", "-2.2")).toBe("-7.26");
  expect(times("-3", "2")).toBe("-6");
  expect(times("-3.2", "2")).toBe("-6.4");
  expect(times("-3", "2.2")).toBe("-6.6");
  expect(times("-3.3", "2.2")).toBe("-7.26");
});

test("div", () => {
  expect(div("2", "1")).toBe("2");
  expect(div("5", "2")).toBe("2.5");
  expect(div("2.5", "2")).toBe("1.25");
  expect(div("50", "2.5")).toBe("20");
  expect(div("-50", "2")).toBe("-25");
  expect(div("100", "3")).toBe("33.33333333333333333333");
  expect(div("10", "3")).toBe("3.33333333333333333333");
  expect(div("1", "3")).toBe("0.33333333333333333333");
  expect(div("3", "1")).toBe("3");
  expect(div("1", "30")).toBe("0.03333333333333333333");
  expect(div("1", "3000")).toBe("0.00033333333333333333");
});

test("bigInt plus", () => {
  expect(bigIntPlus("1", "2")).toBe("3");
  expect(bigIntPlus("0.1", "0.2")).toBe("0.3");
  expect(bigIntPlus("0.001", "0.00")).toBe("0.001");
  expect(bigIntPlus("1", "2")).toBe("3");
  expect(bigIntPlus("2", "1")).toBe("3");
  expect(bigIntPlus("20", "1")).toBe("21");
  expect(bigIntPlus("1", "2000")).toBe("2001");
  expect(bigIntPlus("20", "19.1")).toBe("39.1");
  expect(bigIntPlus("20", "21.1")).toBe("41.1");
  expect(bigIntPlus("19.1", "20")).toBe("39.1");
  expect(bigIntPlus("19.1", "18")).toBe("37.1");
  expect(bigIntPlus("2.2", "0.2")).toBe("2.4");
  expect(bigIntPlus("2.2", "0.3")).toBe("2.5");
  expect(bigIntPlus("2.2", "0.1")).toBe("2.3");
  expect(bigIntPlus("0.1", "2.2")).toBe("2.3");
  expect(bigIntPlus("0.5", "2.2")).toBe("2.7");
  expect(bigIntPlus("0.5", "2.2023")).toBe("2.7023");
  expect(bigIntPlus("-0.1", "-0.2")).toBe("-0.3");
  expect(bigIntPlus("-0.1", "0.2")).toBe("0.1");
  expect(bigIntPlus("0.1", "-0.2")).toBe("-0.1");
  expect(bigIntPlus("-9992323.5000000000001", "-0.2023")).toBe(
    "-9992323.7023000000001"
  );
  expect(bigIntPlus("9992323.5000000000001", "0")).toBe(
    "9992323.5000000000001"
  );
});

test("bigInt minus", () => {
  expect(bigIntMinus("1", "2")).toBe("-1");
  expect(bigIntMinus("2", "1")).toBe("1");
  expect(bigIntMinus("20", "1")).toBe("19");
  expect(bigIntMinus("1", "2000")).toBe("-1999");
  expect(bigIntMinus("20", "19.1")).toBe("0.9");
  expect(bigIntMinus("20", "21.1")).toBe("-1.1");
  expect(bigIntMinus("19.1", "20")).toBe("-0.9");
  expect(bigIntMinus("19.1", "18")).toBe("1.1");
  expect(bigIntMinus("2.2", "0.2")).toBe("2");
  expect(bigIntMinus("2.2", "0.3")).toBe("1.9");
  expect(bigIntMinus("2.2", "0.1")).toBe("2.1");
  expect(bigIntMinus("0.1", "2.2")).toBe("-2.1");
  expect(bigIntMinus("0.5", "2.2")).toBe("-1.7");
  expect(bigIntMinus("0.5", "2.2023")).toBe("-1.7023");
  expect(bigIntMinus("-0.1", "-0.2")).toBe("0.1");
  expect(bigIntMinus("-0.1", "0.2")).toBe("-0.3");
  expect(bigIntMinus("0.1", "-0.2")).toBe("0.3");
  expect(bigIntMinus("-9992323.5000000000001", "-0.2023")).toBe(
    "-9992323.2977000000001"
  );
  expect(bigIntMinus("9992323.5000000000001", "0")).toBe(
    "9992323.5000000000001"
  );
  expect(bigIntMinus("100.001", "100")).toBe("0.001");
});

test("bigInt times", () => {
  expect(bigIntTimes("0.1", "0.2")).toBe("0.02");
  expect(bigIntTimes("20", "20")).toBe("400");
  expect(bigIntTimes("20", "10.1")).toBe("202");
  expect(bigIntTimes("10.2", "20.3")).toBe("207.06");
  expect(bigIntTimes("0.0000005", "0.003")).toBe("0.0000000015");
  expect(bigIntTimes("0.000001", "0.001")).toBe("0.000000001");
  expect(bigIntTimes("3.3", "2.2")).toBe("7.26");
  expect(bigIntTimes("3", "2")).toBe("6");
  expect(bigIntTimes("-3", "-2")).toBe("6");
  expect(bigIntTimes("-3.2", "-2")).toBe("6.4");
  expect(bigIntTimes("-3", "-2.2")).toBe("6.6");
  expect(bigIntTimes("-3.3", "-2.2")).toBe("7.26");
  expect(bigIntTimes("3", "-2")).toBe("-6");
  expect(bigIntTimes("3.2", "-2")).toBe("-6.4");
  expect(bigIntTimes("3", "-2.2")).toBe("-6.6");
  expect(bigIntTimes("3.3", "-2.2")).toBe("-7.26");
  expect(bigIntTimes("-3", "2")).toBe("-6");
  expect(bigIntTimes("-3.2", "2")).toBe("-6.4");
  expect(bigIntTimes("-3", "2.2")).toBe("-6.6");
  expect(bigIntTimes("-3.3", "2.2")).toBe("-7.26");
});

test("bigInt div", () => {
  expect(bigIntDiv("2", "1")).toBe("2");
  expect(bigIntDiv("5", "2")).toBe("2.5");
  expect(bigIntDiv("2.5", "2")).toBe("1.25");
  expect(bigIntDiv("50", "2.5")).toBe("20");
  expect(bigIntDiv("-50", "2")).toBe("-25");
  expect(bigIntDiv("100", "3")).toBe("33.33333333333333333333");
  expect(bigIntDiv("10", "3")).toBe("3.33333333333333333333");
  expect(bigIntDiv("1", "3")).toBe("0.33333333333333333333");
  expect(bigIntDiv("3", "1")).toBe("3");
  expect(bigIntDiv("1", "30")).toBe("0.03333333333333333333");
  expect(bigIntDiv("1", "3000")).toBe("0.00033333333333333333");
});
