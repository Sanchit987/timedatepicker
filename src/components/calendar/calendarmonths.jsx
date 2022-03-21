import React from 'react';
import { AngleLeft } from '../../assets/imagesFinal';
import { ControlBackward } from '../../assets/imagesFinal';
import { ControlForward } from '../../assets/imagesFinal';
import { AngleRight } from '../../assets/imagesFinal';
const CalendarMonths = ({ value, onChange }) => {
  let year = value.clone().year();
  let arr = [];

  function selectYear(e) {
    let selectedYear = parseInt(e.target.innerHTML);
    onChange(value.clone().set('year', selectedYear));
  }

  function selectedYearDecade() {
    let currYear = year;
    let lowerBound = 0, upperBound;
    while (currYear % 10 !== 0) {
      lowerBound = currYear;
      upperBound = lowerBound + 9;
      currYear--;
    }
    while (currYear !== upperBound) {
      arr.push(currYear + 1);
      currYear++;
    }
    return `${lowerBound} - ${upperBound}`;
  }

  function decrementYear() {
    year = year - 10;
    console.log(year);
  }

  return (
    <div>
      <div className="calendar">
        <div className="header">
          <div className="arrowgrp">
            <div className="icons" ><ControlBackward /></div>
            <div className="icons" onClick={decrementYear} ><AngleLeft /></div>
          </div>
          <div>{selectedYearDecade()}</div>
          <div className="arrowgrp">
            <div className="icons"><AngleRight /></div>
            <div className="icons" ><ControlForward /></div>
          </div>
        </div>
        <div className="grid-3x4">
          {arr.map(y => <div onClick={selectYear} className={`item ${y === year ? "selected" : ""}`} key={y}>{y}</div>)}
        </div>
      </div>
    </div >
  );
};

export default CalendarMonths;