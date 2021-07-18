import React from "react";
import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";

//CSS
import "./Session.css";

//Material UI
import { Button } from "@material-ui/core";

momentDurationFormatSetup(moment);

const Session = ({
  sessionLength,
  decrementSessionOneMin,
  incrementSessionOneMin,
}) => {
  const sessionLengthMinutes = moment
    .duration(sessionLength, "s")
    .format("mm:ss");

  return (
    <div className="session">
      <h1 id="session-label">Session</h1>
      <h2 id="session-length">{sessionLengthMinutes}</h2>

      <div className="session-buttons">
        <div className="dec-btn">
          <Button
            variant="contained"
            color="primary"
            onClick={decrementSessionOneMin}
          >
            -
          </Button>
        </div>
        <div className="inc-btn">
          <Button
            variant="contained"
            color="primary"
            onClick={incrementSessionOneMin}
          >
            +
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Session;
