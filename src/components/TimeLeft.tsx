import React from "react";
import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";

//@ts-ignore
momentDurationFormatSetup(moment);

type Props = {
  handleReset: () => void;
  sessionType: string;
  timeLeft: number;
  handleStartStop: () => void;
  isStarted: boolean;
};

const TimeLeft: React.FC<Props> = ({
  handleReset,
  sessionType,
  timeLeft,
  handleStartStop,
  isStarted,
}) => {
  const timeLeftInMin = moment
    .duration(timeLeft, "s")
    .format("mm:ss", { trim: false });

  return (
    <div className="flex flex-col justify-evenly items-center w-72 h-64 bg-pink-900 rounded-3xl border-2 mb-16">
      <h1 className="text-blue-100 text-4xl font-bebas">{sessionType}</h1>
      <h2 className="text-4xl font-bold font-clock">{timeLeftInMin}</h2>
      <div className="grid-flow-row">
        <button
          className="text-blue-400 font-semibold bg-purple-100 px-4 py-2 rounded-lg mr-3"
          onClick={handleStartStop}
        >
          {isStarted ? "Stop" : "Start"}
        </button>
        <button
          className="text-blue-400 font-semibold bg-purple-100 px-4 py-2 rounded-lg"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default TimeLeft;
