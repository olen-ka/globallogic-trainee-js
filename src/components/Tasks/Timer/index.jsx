import './index.scss';
import React, { useState, useEffect } from 'react';


function Timer() {

  const [count, setCount] = useState(0);
  const [start, setStart] = useState(false);

  useEffect(() => {
    let timer = null;
    if (start) {
      timer = setInterval(() => {
        setCount(count => count + 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [count, start]);

  const reset = () => {
    setCount(0);
    setStart(false);
  }

  return (
    <div className="Timer">
      <button onClick={() => setStart(true)}>Start</button>
      <button onClick={reset}>Stop and Reset</button>

      <div className="seconds">{count}</div>
    </div>
  );
}

export default Timer;
