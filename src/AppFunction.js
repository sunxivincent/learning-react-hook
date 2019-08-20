import React, { useState, useEffect } from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  const [isOn, setIsOn] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });
  const [status, setStatus] = useState(navigator.onLine);

  useEffect(() => {
    document.title = `you have clicked ${count} times`;
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    }
  }, [count]);

  const incrementCounter = () => {
    setCount(prevCount => prevCount + 1)
  };

  const toggleLight = () => {
    setIsOn(prevIsOn => !prevIsOn)
  };

  const handleMouseMove = event => {
    setMousePosition({
      x: event.pageX,
      y: event.pageY,
    })
  };

  const handleOnline = () => {
    setStatus(true)
  };

  const handleOffline = () => {
    setStatus(false)
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
      <h2>Mouse Position</h2>
      {JSON.stringify(mousePosition, null, 2)}
      <br/>

      <h2>Network status</h2>
      <p>You are currently <strong>{status ? "online" : "offline"}</strong></p>
    </>
  );
};

export default App;