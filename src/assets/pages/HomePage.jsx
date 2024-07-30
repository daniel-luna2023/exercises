import React from 'react'
import { useState, useEffect } from 'react';
import '../../assets/../..'

const HomePage = () => {
  const [count, setCount] = useState(0);
  const [inputvalue, setInputValue] = useState('');
  const [result, setResult] =useState(0);
  const [totalSum, setTotalSum] = useState(0);


  const Increment = () => {
    setCount(count + 1);
  };

  const Decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    const number = Number(inputvalue); 
    if (!isNaN(number)) {
      setResult(number * 2);
    } else {
      setResult(0);
    }
  }, [inputvalue]);

  useEffect(() => {
    setTotalSum(count + result);
  }, [count, result]);


  return (
    <><div>HomePage</div><div>home</div><h1>Counter</h1><div>
      <button onClick={Increment}>Add 1</button>
      <button onClick={Decrement}>Subtract 1</button>
    </div>
    <p>Current Value: {count}</p><div>
      <input
        type="text"
        value={inputvalue}
        onChange={handleInputChange} />
      <label>result: {result}</label>
    </div><div>
        <label>Result total: {totalSum}</label>
      </div></>

  )
}

export default HomePage