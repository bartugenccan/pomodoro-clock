import React from "react";
import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";

import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import IndeterminateCheckBoxIcon from "@material-ui/icons/IndeterminateCheckBox";

//@ts-ignore
momentDurationFormatSetup(moment);

type Props = {
  breakLength: number;
  incrementBreakOneMin: () => void;
  decrementBreakOneMin: () => void;
};

const Break: React.FC<Props> = ({
  breakLength,
  incrementBreakOneMin,
  decrementBreakOneMin,
}) => {
  const breakLengthMinutes = moment.duration(breakLength, "s").format("mm:ss");

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl text-pink-900 font-bold ">Break</h1>
      <h2 className="text-3xl font-bold text-white ">{breakLengthMinutes}</h2>
      <div className="grid grid-flow-col gap-2 rounded">
        <button
          className="mt-4 text-lg text-gray-800 px-7 py-3 bg-purple-100 rounded "
          onClick={decrementBreakOneMin}
        >
          <IndeterminateCheckBoxIcon color="primary" />
        </button>

        <button
          className="mt-4 text-lg text-gray-800 px-7 py-3 bg-purple-100 rounded "
          onClick={incrementBreakOneMin}
        >
          <AddCircleOutlineIcon color="primary" />
        </button>
      </div>
    </div>
  );
};

export default Break;
