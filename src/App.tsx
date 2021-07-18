import "./App.css";
import React, { useState, useEffect } from "react";

//Component Imports
import Break from "./components/Break";
import Session from "./components/Session";
import TimeLeft from "./components/TimeLeft";

import "./App.css";

function App() {
  const [sessionLength, setSessionLength] = useState(1500);
  const [breakLength, setBreakLength] = useState(300);
  const [sessionType, setSessionType] = useState("Session");
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
  const [timeLeft, setTimeLeft] = useState(sessionLength);

  useEffect(() => {
    setTimeLeft(sessionLength);
  }, [sessionLength]);

  useEffect(() => {
    if (timeLeft === 0) {
      if (sessionType === "Session") {
        setSessionType("Break");
        setTimeLeft(breakLength);
      } else if (sessionType === "Break") {
        setSessionType("Session");

        setTimeLeft(sessionLength);
      }
    }
  }, [breakLength, timeLeft, sessionType, sessionLength]);

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

  const handleStartStop = () => {
    if (isStarted) {
      if (intervalId !== null) {
        clearInterval(intervalId);
      }

      setIntervalId(null);
    } else {
      const newIntervalId = setInterval(() => {
        setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
      }, 1000);
      setIntervalId(newIntervalId);
    }
  };

  const handleReset = () => {
    if (intervalId) {
      clearInterval(intervalId);
    }

    setIntervalId(null);
    setSessionType("Session");
    setSessionLength(1500);
    setBreakLength(300);
    setTimeLeft(1500);
  };

  return (
    <div className="flex flex-col h-screen items-center justify-center bg-indigo-300">
      <TimeLeft
        handleReset={handleReset}
        sessionType={sessionType}
        timeLeft={timeLeft}
        handleStartStop={handleStartStop}
        isStarted={isStarted}
      />
      <div className="flex w-full justify-around">
        <Break
          breakLength={breakLength}
          incrementBreakOneMin={incrementBreakOneMin}
          decrementBreakOneMin={decrementBreakOneMin}
        />

        <Session
          sessionLength={sessionLength}
          decrementSessionOneMin={decrementSessionOneMin}
          incrementSessionOneMin={incrementSessionOneMin}
        />
      </div>
    </div>
  );
}

export default App;
