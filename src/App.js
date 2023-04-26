import "./App.css";
import React, { useState, useRef } from "react";
import btnSound from "../src/buttonClicked.wav";

function App() {
  const audioRef = useRef(null);
  const [calculatorScreenValue, setCalculatorScreenValue] = useState(0);
  function checkOperator(operatorValue) {
    if (
      operatorValue === "+" ||
      operatorValue === "-" ||
      operatorValue === "/" ||
      operatorValue === "*" ||
      operatorValue === "%" ||
      operatorValue === "."
    )
      return true;
    return false;
  }
  function clearScreen() {
    audioRef.current.play();
    setCalculatorScreenValue(0);
  }
  function changeSign() {
    audioRef.current.play();
    const changedSign = calculatorScreenValue * -1;
    if (isNaN(changedSign)) {
      setCalculatorScreenValue(calculatorScreenValue);
    } else {
      setCalculatorScreenValue(changedSign);
    }
  }
  function insertToCalculatorScreen(x) {
    audioRef.current.play();
    if (calculatorScreenValue === 0) {
      if (!checkOperator(x)) {
        setCalculatorScreenValue(0 * 10 + parseInt(x));
      } else {
        if (x !== "*" && x !== "/" && x !== "%" && x != ".")
          setCalculatorScreenValue(x);
      }
    } else {
      if (checkOperator(x)) {
        if (
          !checkOperator(
            calculatorScreenValue[calculatorScreenValue.length - 1]
          )
        ) {
          setCalculatorScreenValue(calculatorScreenValue + x);
        }
      } else {
        setCalculatorScreenValue(calculatorScreenValue + x);
      }
    }
  }
  function calculate() {
    audioRef.current.play();
    if (
      !checkOperator(calculatorScreenValue[calculatorScreenValue.length - 1])
    ) {
      setCalculatorScreenValue(eval(calculatorScreenValue));
    } else {
      setCalculatorScreenValue("Invalid Syntax!!");
    }
  }
  return (
    <div className="calculator-body">
      <form>
        <input className="calculator-screen" value={calculatorScreenValue} />
      </form>
      <div className="calculator-buttons">
        <button className="calculator-btn" onClick={() => clearScreen()}>
          AC
        </button>
        <button className="calculator-btn" onClick={() => changeSign()}>
          +/-
        </button>
        <button
          className="calculator-btn"
          onClick={() => insertToCalculatorScreen("%")}
        >
          %
        </button>
        <button
          className="calculator-btn operator"
          onClick={() => insertToCalculatorScreen("/")}
        >
          /
        </button>
        <button
          className="calculator-btn"
          onClick={() => insertToCalculatorScreen("7")}
        >
          7
        </button>
        <button
          className="calculator-btn"
          onClick={() => insertToCalculatorScreen("8")}
        >
          8
        </button>
        <button
          className="calculator-btn"
          onClick={() => insertToCalculatorScreen("9")}
        >
          9
        </button>
        <button
          className="calculator-btn operator"
          onClick={() => insertToCalculatorScreen("*")}
        >
          x
        </button>
        <button
          className="calculator-btn"
          onClick={() => insertToCalculatorScreen("4")}
        >
          4
        </button>
        <button
          className="calculator-btn"
          onClick={() => insertToCalculatorScreen("5")}
        >
          5
        </button>
        <button
          className="calculator-btn"
          onClick={() => insertToCalculatorScreen("6")}
        >
          6
        </button>
        <button
          className="calculator-btn operator"
          onClick={() => insertToCalculatorScreen("-")}
        >
          -
        </button>
        <button
          className="calculator-btn"
          onClick={() => insertToCalculatorScreen("1")}
        >
          1
        </button>
        <button
          className="calculator-btn"
          onClick={() => insertToCalculatorScreen("2")}
        >
          2
        </button>
        <button
          className="calculator-btn"
          onClick={() => insertToCalculatorScreen("3")}
        >
          3
        </button>
        <button
          className="calculator-btn operator"
          onClick={() => insertToCalculatorScreen("+")}
        >
          +
        </button>
        <button
          className="calculator-btn extra-width"
          onClick={() => insertToCalculatorScreen("0")}
        >
          0
        </button>
        <button
          className="calculator-btn"
          onClick={() => insertToCalculatorScreen(".")}
        >
          .
        </button>
        <button className="calculator-btn operator" onClick={() => calculate()}>
          =
        </button>
        <audio ref={audioRef} src={btnSound} />
      </div>
    </div>
  );
}

export default App;
