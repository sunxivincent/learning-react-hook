import React, { useState, useEffect } from 'react';

const initialLocationState = {
  latitude: null,
  longitude: null,
  speed: null,
};

const App = () => {
  const [count, setCount] = useState(0);
  const [isOn, setIsOn] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });
  const [status, setStatus] = useState(navigator.onLine);
  const [location, setLocation] = useState(initialLocationState);
  let mounted = true;

  useEffect(() => {
    document.title = `you have clicked ${count} times`;
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    navigator.geolocation.getCurrentPosition(handleGeoLocation);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      mounted = false;
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

  const handleGeoLocation = (event) => {
    if (mounted) {
      setLocation({
        latitude: event.coords.latitude,
        longitude: event.coords.longitude,
        speed: event.coords.speed,
      });
    }
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

      <h2>Geo Location</h2>
      <p>Latitude: {location.latitude}</p>
      <p>Longitude: {location.longitude}</p>
      <p>Speed: {location.speed ? location.speed:0}</p>
    </>
  );
};

export default App;