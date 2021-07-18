import "./App.css";
import React, { useState, useEffect } from "react";

//Component Imports
import Break from "./components/Break";
import Session from "./components/Session";
import TimeLeft from "./components/TimeLeft";

//Material UI
import { Button } from "@material-ui/core";

function App() {
  const [sessionLength, setSessionLength] = useState(1500);
  const [breakLength, setBreakLength] = useState(300);
  const [sessionType, setSessionType] = useState("Session");
  const [intervalId, setIntervalId] = useState(null);
  const [timeLeft, setTimeLeft] = useState(sessionLength);

  const isStarted = intervalId !== null;

  const decrementBreakOneMin = () => {
    const newBreakLength = breakLength - 60;

    if (newBreakLength < 0) {
      setBreakLength(0);
    } else {
      setBreakLength(newBreakLength);
    }
  };

  const incrementBreakOneMin = () => {
    setBreakLength(breakLength + 60);
  };

  const decrementSessionOneMin = () => {
    const newSessionLength = sessionLength - 60;

    if (newSessionLength < 0) {
      setSessionLength(0);
    } else {
      setSessionLength(newSessionLength);
    }
  };

  const incrementSessionOneMin = () => {
    setSessionLength(sessionLength + 60);
  };

  useEffect(() => {
    setTimeLeft(sessionLength);
  }, [sessionLength]);

  const handleStartStop = () => {
    if (isStarted) {
      clearInterval(intervalId);
      setIntervalId(null);
    } else {
      const newIntervalId = setInterval(() => {
        setTimeLeft((prevTimeLeft) => {
          const newTimeLeft = prevTimeLeft - 1;

          if (newTimeLeft >= 0) {
            return prevTimeLeft - 1;
          }
          if (sessionType === "Session") {
            setSessionType("Break");
            setTimeLeft(breakLength);
          } else if (sessionType === "Break") {
            setSessionType("Session");
            setTimeLeft(sessionLength);
          }
        });
      }, 1000);
      setIntervalId(newIntervalId);
    }
  };

  const handleReset = () => {
    clearInterval(intervalId);
    setIntervalId(null);
    setSessionType("Session");
    setSessionLength(1500);
    setBreakLength(300);
    setTimeLeft(1500);
  };

  return (
    <div className="App">
      <div className="break">
        <Break
          breakLength={breakLength}
          incrementBreakOneMin={incrementBreakOneMin}
          decrementBreakOneMin={decrementBreakOneMin}
        />
      </div>
      <div className="time-left">
        <TimeLeft
          sessionType={sessionType}
          timeLeft={timeLeft}
          handleStartStop={handleStartStop}
          isStarted={isStarted}
        />
      </div>

      <div className="session">
        <Session
          sessionLength={sessionLength}
          decrementSessionOneMin={decrementSessionOneMin}
          incrementSessionOneMin={incrementSessionOneMin}
        />
      </div>
      <Button
        variant="contained"
        color="primary"
        className="reset"
        onClick={handleReset}
      >
        Reset
      </Button>
      <audio id="alarm" src="">
        <source src />
      </audio>
    </div>
  );
}

export default App;
