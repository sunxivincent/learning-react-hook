import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  const [isOn, setIsOn] = useState(false);

  const incrementCounter = () => {
    setCount(prevCount => prevCount + 1)
  };

  const toggleLight = () => {
    setIsOn(prevIsOn => !prevIsOn)
  };

  return (
    <>
    <h2>Counter</h2>
    <button onClick={incrementCounter}>click {count} times</button>
    <h2>Toggle Light</h2>
    <img
      style={{
        height: '50px',
        width: '50px',
        background: isOn ? 'red' : 'green'
      }}
      onClick={toggleLight}
    >
    </img>
    </>
  )
};

export default App;