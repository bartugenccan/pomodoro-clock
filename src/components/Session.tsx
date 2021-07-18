import React from "react";
import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";

//Material UI
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import IndeterminateCheckBoxIcon from "@material-ui/icons/IndeterminateCheckBox";

//@ts-ignore
momentDurationFormatSetup(moment);

type Props = {
  sessionLength: number;
  incrementSessionOneMin: () => void;
  decrementSessionOneMin: () => void;
};

const Session: React.FC<Props> = ({
  sessionLength,
  decrementSessionOneMin,
  incrementSessionOneMin,
}) => {
  const sessionLengthMinutes = moment
    .duration(sessionLength, "s")
    .format("mm:ss");

  return (
    <div className="flex flex-col items-center justify-center ">
      <h1 className="text-3xl text-pink-900 font-bold">Session</h1>
      <h2 className="text-3xl font-bold text-white ">{sessionLengthMinutes}</h2>
      <div className="grid grid-flow-col gap-2 rounded">
        <button
          className="mt-4 text-lg text-gray-800 px-7 py-3 bg-purple-100 rounded "
          onClick={decrementSessionOneMin}
        >
          <IndeterminateCheckBoxIcon color="primary" />
        </button>

        <button
          className="mt-4 text-lg px-7 py-3 bg-purple-100 rounded "
          onClick={incrementSessionOneMin}
        >
          <AddCircleOutlineIcon color="primary" />
        </button>
      </div>
    </div>
  );
};

export default Session;
