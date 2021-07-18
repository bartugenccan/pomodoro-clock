import React from "react";
import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";
import { Button } from "@material-ui/core";

//CSS
import "./Break.css";

momentDurationFormatSetup(moment);

const Break = ({ breakLength, incrementBreakOneMin, decrementBreakOneMin }) => {
  const breakLengthMinutes = moment.duration(breakLength, "s").format("mm:ss");

  return (
    <div className="break">
      <h1 className="break-label">Break</h1>
      <h2 className="break-length">{breakLengthMinutes}</h2>
      <div className="break-buttons">
        <div className="dec-btn">
          <Button
            variant="contained"
            color="primary"
            id="break-decrement"
            onClick={decrementBreakOneMin}
          >
            -
          </Button>
        </div>
        <div className="inc-button">
          <Button
            variant="contained"
            color="primary"
            id="break-increment"
            onClick={incrementBreakOneMin}
          >
            +
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Break;
