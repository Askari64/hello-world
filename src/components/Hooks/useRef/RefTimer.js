import React, { useState, useEffect, useRef } from "react";

function RefTimer() {
  const [timer, setTimer] = useState(0);
  const [start, setStart] = useState(true);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
    return () => {
      clearInterval(intervalRef.current);
    };
  }, [start]);

  const startClick = () => {
    setStart(!start);
  };

  const resetClick = () => {
    clearInterval(intervalRef.current);
    setTimer(0);
  };
  return (
    <>
      <h2>{timer}</h2>
      <div>
        <button onClick={startClick}>Start</button>
        <button onClick={() => clearInterval(intervalRef.current)}>
          Pause
        </button>
      </div>
      <button onClick={resetClick}>Reset</button>
    </>
  );
}

export default RefTimer;
