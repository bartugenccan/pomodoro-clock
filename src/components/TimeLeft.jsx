import React from "react";
import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";

//CSS
import "./TimeLeft.css";

//Material UI
import { Button } from "@material-ui/core";

momentDurationFormatSetup(moment);

const TimeLeft = ({ sessionType, timeLeft, handleStartStop, isStarted }) => {
  const timeLeftInMin = moment
    .duration(timeLeft, "s")
    .format("mm:ss", { trim: false });

  return (
    <div className="time-left">
      <h1 className="timer-label">{sessionType}</h1>
      <h2>{timeLeftInMin}</h2>
      <Button variant="contained" color="primary" onClick={handleStartStop}>
        {isStarted ? "Stop" : "Start"}
      </Button>
    </div>
  );
};

export default TimeLeft;
