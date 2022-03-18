import React from "react";
import Counter from "./counter";


const TimeIndex = ({ value, onChange }) => {
  let currMoment = value.clone();
  return (<div className="time-selector">
    <div className="header">{currMoment.format("hh:mm A").toString()}</div>

    <div className="time_updater">
      <div className="time-ch">
        <Counter value={value} onChange={onChange} what='h' />
        <div>:</div>
        <Counter value={value} onChange={onChange} what='m' />
      </div>
      <div className="day-time">
        <div className="morning">AM</div>
        <div className="noon">PM</div>
      </div>
    </div>
  </div>);
};

export default TimeIndex;