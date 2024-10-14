import React, { useState } from 'react';
import './styles.css'; 

const App = () => {
  const [input, setInput] = useState('0');
  const [prevValue, setPrevValue] = useState('');
  const [operator, setOperator] = useState('');
  const [isEvaluated, setIsEvaluated] = useState(false);

  const handleClear = () => {
    setInput('0');
    setPrevValue('');
    setOperator('');
    setIsEvaluated(false);
  };

  const handleNumber = (e) => {
    const value = e.target.value;

    if (isEvaluated) {
      setInput(value);
      setIsEvaluated(false);
    } else {
      setInput((prev) => (prev === '0' ? value : prev + value));
    }
  };

  const handleOperator = (e) => {
    const value = e.target.value;
  
    if (operator && !isEvaluated) {
      const result = eval(`${prevValue} ${operator} ${input}`);
      setPrevValue(result.toString());
      setInput('0');
    } else {
      setPrevValue(input);
      setInput('0');
    }
  
    setOperator(value);
    setIsEvaluated(false);
  };
  

  const handleEqual = () => {
    if (operator) {
      const result = eval(`${prevValue} ${operator} ${input}`);
      setInput(result.toString());
      setPrevValue('');
      setOperator('');
      setIsEvaluated(true);
    }
  };

  const handleDecimal = () => {
    if (!input.includes('.')) {
      setInput((prev) => prev + '.');
    }
  };

  return (
    <div className="calculator">
      <div id="display" className="display">{input}</div>
      <button id="clear" onClick={handleClear}>AC</button>
      <button id="divide" value="/" onClick={handleOperator}>/</button>
      <button id="multiply" value="*" onClick={handleOperator}>*</button>
      <button id="subtract" value="-" onClick={handleOperator}>-</button>
      <button id="add" value="+" onClick={handleOperator}>+</button>
      <button id="equals" onClick={handleEqual}>=</button>
      <button id="decimal" onClick={handleDecimal}>.</button>
      <button id="zero" value="0" onClick={handleNumber}>0</button>
      <button id="one" value="1" onClick={handleNumber}>1</button>
      <button id="two" value="2" onClick={handleNumber}>2</button>
      <button id="three" value="3" onClick={handleNumber}>3</button>
      <button id="four" value="4" onClick={handleNumber}>4</button>
      <button id="five" value="5" onClick={handleNumber}>5</button>
      <button id="six" value="6" onClick={handleNumber}>6</button>
      <button id="seven" value="7" onClick={handleNumber}>7</button>
      <button id="eight" value="8" onClick={handleNumber}>8</button>
      <button id="nine" value="9" onClick={handleNumber}>9</button>
    </div>
  );
};

export default App;
