import React, { useState } from "react";
import "./styles.css";

function App() {
  const [miliSecondsCounter, setMiliSecondsCounter] = useState(0);
  const [intervalTimer, setintervalTimer] = useState(null);
  const [pauseFlag, setPauseFlag] = useState(false);
  const [startLabel, setStartlabel] = useState("Start");

  const startTimer = () => {
    let miliCounter = miliSecondsCounter;
    if (miliCounter === 0) {
      let interval = setInterval(() => {
        setMiliSecondsCounter(miliCounter++);
      }, 100);
      setintervalTimer(interval);
      setStartlabel("Pause");
    } else if (pauseFlag) {
      let interval = setInterval(() => {
        setMiliSecondsCounter(miliCounter++);
      }, 10);
      setintervalTimer(interval);
      setPauseFlag(false);
      setStartlabel("pause");
    } else {
      clearInterval(intervalTimer);
      setPauseFlag(true);
      setStartlabel("start");
    }
  };

  const resetTimer = () => {
    clearInterval(intervalTimer);
    setintervalTimer(0);
    setMiliSecondsCounter(0);
    setPauseFlag(false);
    setStartlabel("start");
  };
  return (
    <div className="App">
      <div>
        {`${Math.floor(miliSecondsCounter / 100)}s ${miliSecondsCounter % 100}`}
      </div>
      <div className="stopwatch-footer">
        <button onClick={startTimer}> {startLabel} </button>
        <button onClick={resetTimer}> Reset </button>
      </div>
    </div>
  );
}

export default App;
