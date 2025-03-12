import React, { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("0");
  const [evaluated, setEvaluated] = useState(false);

  const calculate = (expression) => {
    try {
      let sanitizedExpression = expression.replace(/\u2212/g, "-");
      sanitizedExpression = sanitizedExpression.replace(/(\D)\1+/g, "$1");
      sanitizedExpression = sanitizedExpression.replace(/([+\-*/])$/, "");
      
      const result = eval(sanitizedExpression);
      return parseFloat(result.toFixed(4)).toString();
    } catch {
      return "Error";
    }
  };

  const handleClick = (value) => {
    if (value === "AC") {
      setInput("0");
      setEvaluated(false);
    } else if (value === "=") {
      setInput(calculate(input));
      setEvaluated(true);
    } else {
      if (evaluated) {
        if (/\d/.test(value)) {
          setInput(value);
        } else {
          setInput(input + value);
        }
        setEvaluated(false);
      } else {
        if (value === "." && input.split(/[-+*/]/).pop().includes(".")) return;
        if (value === "0" && input === "0") return;
        if (/[-+*/]/.test(value) && /[-+*/]$/.test(input)) {
          setInput(input.slice(0, -1) + value);
        } else {
          setInput(input === "0" ? value : input + value);
        }
      }
    }
  };

  return (
    <div id="calculator">
      <div id="btn-container">
        <input type="text" name="display" id="display" value={input} disabled />
        <div id="grid-container">
          <button id="clear" onClick={() => handleClick("AC")}>AC</button>
          <button id="divide" onClick={() => handleClick("/")}>/</button>
          <button id="multiply" onClick={() => handleClick("*")}>*</button>
          <button id="seven" onClick={() => handleClick("7")}>7</button>
          <button id="eight" onClick={() => handleClick("8")}>8</button>
          <button id="nine" onClick={() => handleClick("9")}>9</button>
          <button id="subtract" onClick={() => handleClick("-")}>-</button>
          <button id="four" onClick={() => handleClick("4")}>4</button>
          <button id="five" onClick={() => handleClick("5")}>5</button>
          <button id="six" onClick={() => handleClick("6")}>6</button>
          <button id="add" onClick={() => handleClick("+")}>+</button>
          <button id="one" onClick={() => handleClick("1")}>1</button>
          <button id="two" onClick={() => handleClick("2")}>2</button>
          <button id="three" onClick={() => handleClick("3")}>3</button>
          <button id="equals" onClick={() => handleClick("=")}>=</button>
          <button id="zero" onClick={() => handleClick("0")}>0</button>
          <button id="decimal" onClick={() => handleClick(".")}>.</button>
        </div>
      </div>
      <p>Designed by Nishar</p>
    </div>
  );
};

export default Calculator;
