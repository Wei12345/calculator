import useCalculator from "@/hooks/useCalculator";

export default function Home() {
  const {
    result,
    handleBackspace,
    handleClear,
    handleNumber,
    handlePlusAndMinus,
    handleTimesAndDiv,
    handleDec,
    handleKeyup,
    handleEqua,
  } = useCalculator();

  return (
    <main className="grid grid-cols-4 gap-4" onKeyUp={handleKeyup}>
      <div className="col-span-4 text-right text-white bg-indigo-500">
        {result}
      </div>
      <button
        className="text-right text-white bg-indigo-500"
        onClick={() => {
          handleClear();
        }}
      >
        C
      </button>
      <button
        className="text-right text-white bg-indigo-500"
        onClick={() => {
          handleBackspace();
        }}
      >
        DEL
      </button>
      <button
        className="text-right text-white bg-indigo-500"
        onClick={() => {
          handleTimesAndDiv("/");
        }}
      >
        ÷
      </button>
      <button
        className="text-right text-white bg-indigo-500"
        onClick={() => {
          handleTimesAndDiv("*");
        }}
      >
        ×
      </button>

      <button
        className="text-right text-white bg-indigo-500"
        onClick={() => {
          handleNumber("7");
        }}
      >
        7
      </button>
      <button
        className="text-right text-white bg-indigo-500"
        onClick={() => {
          handleNumber("8");
        }}
      >
        8
      </button>
      <button
        className="text-right text-white bg-indigo-500"
        onClick={() => {
          handleNumber("9");
        }}
      >
        9
      </button>
      <button
        className="text-right text-white bg-indigo-500"
        onClick={() => {
          handlePlusAndMinus("-");
        }}
      >
        －
      </button>

      <button
        className="text-right text-white bg-indigo-500"
        onClick={() => {
          handleNumber("4");
        }}
      >
        4
      </button>
      <button
        className="text-right text-white bg-indigo-500"
        onClick={() => {
          handleNumber("5");
        }}
      >
        5
      </button>
      <button
        className="text-right text-white bg-indigo-500"
        onClick={() => {
          handleNumber("6");
        }}
      >
        6
      </button>
      <button
        className="text-right text-white bg-indigo-500"
        onClick={() => {
          handlePlusAndMinus("+");
        }}
      >
        ＋
      </button>

      <button
        className="text-right text-white bg-indigo-500"
        onClick={() => {
          handleNumber("1");
        }}
      >
        1
      </button>
      <button
        className="text-right text-white bg-indigo-500"
        onClick={() => {
          handleNumber("2");
        }}
      >
        2
      </button>
      <button
        className="text-right text-white bg-indigo-500"
        onClick={() => {
          handleNumber("3");
        }}
      >
        3
      </button>
      <button
        className="row-span-2 text-right text-white bg-indigo-500"
        onClick={() => {
          handleEqua();
        }}
      >
        =
      </button>

      <button
        className="col-span-2 text-right text-white bg-indigo-500"
        onClick={() => {
          handleNumber("0");
        }}
      >
        0
      </button>
      <button
        className="text-right text-white bg-indigo-500"
        onClick={() => {
          handleDec();
        }}
      >
        .
      </button>
    </main>
  );
}
