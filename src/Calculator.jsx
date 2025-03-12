import React, { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("");

  const calculate = (expression) => {
    try {
   
      const tokens = expression.match(/(\d+\.?\d*|\+|\-|\*|\/)/g);
      if (!tokens) return "Error";

      let result = parseFloat(tokens[0]);

      for (let i = 1; i < tokens.length; i += 2) {
        const operator = tokens[i];
        const nextNumber = parseFloat(tokens[i + 1]);

        if (isNaN(nextNumber)) return "Error"; 

        switch (operator) {
          case "+":
            result += nextNumber;
            break;
          case "-":
            result -= nextNumber;
            break;
          case "*":
            result *= nextNumber;
            break;
          case "/":
            if (nextNumber === 0) return "Error"; 
            result /= nextNumber;
            break;
          default:
            return "Error";
        }
      }

      return result.toString();
    } catch {
      return "Error";
    }
  };

  const handleClick = (value) => {
    if (value === "AC") {
      setInput("");
    } else if (value === "=") {
      setInput(calculate(input));
    } else {
      setInput((prev) => prev + value);
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
