import React from "react";
import Counter from "./counter";


const TimeIndex = ({ value, onChange }) => {
  // const [x, setx] = useState(0);
  let currMoment = value.clone();

  // function settingX() {
  //   if (x === 0) {
  //     setx(1);
  //   } else {
  //     setx(0);
  //   }
  //   if (x === 0) {
  //     onChange(value.clone());
  //   } else {
  //     onChange(value.clone());
  //   }
  // }


  return (<div className="time-selector">
    <div className="header">{currMoment.format("HH:mm").toString()}</div>

    <div className="time_updater">
      <div className="time-ch">
        <Counter value={value} onChange={onChange} what='H' />
        <div>:</div>
        <Counter value={value} onChange={onChange} what='m' />
      </div>
      {/* <div className="day-time">
        <div onClick={settingX} className={`morning ${x ? "day-col" : ""}`}>AM</div>
        <div onClick={settingX} className={`noon ${x ? "" : "day-col"}`} >PM</div>
      </div> */}
    </div>
  </div>);
};

export default TimeIndex;