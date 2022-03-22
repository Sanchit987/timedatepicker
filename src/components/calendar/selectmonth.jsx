import React from 'react';
import { ControlBackward } from '../../assets/imagesFinal';
import { ControlForward } from '../../assets/imagesFinal';
import { AngleLeft } from '../../assets/imagesFinal';
import { AngleRight } from '../../assets/imagesFinal';

const SelectMonth = ({ value, onChange, close }) => {
  const month = value.clone().month();
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  function setMonth(e) {
    onChange(value.clone().set("month", monthNames.indexOf(e.target.innerHTML)));
    close(true);
  }
  return (<div>
    <div className="calendar">
      <div className="header">
        <div className="arrowgrp">
          <div className="icons"  ><ControlBackward /></div>
          <div className="icons"  ><AngleLeft /></div>
        </div>
        <div>{monthNames[month]}</div>
        <div className="arrowgrp">
          <div className="icons"><AngleRight /></div>
          <div className="icons"><ControlForward /></div>
        </div>
      </div>
      <div className="grid-3x4">
        {monthNames.map(m => <div onClick={setMonth} className={`item ${m === monthNames[month] ? "selected" : ""}`} key={m}>{m}</div>)}
      </div>
    </div>
  </div >);
};

export default SelectMonth;