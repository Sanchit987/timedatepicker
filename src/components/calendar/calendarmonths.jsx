import React, { useState } from 'react';
import { AngleLeft } from '../../assets/imagesFinal';
import { ControlBackward } from '../../assets/imagesFinal';
import { ControlForward } from '../../assets/imagesFinal';
import { AngleRight } from '../../assets/imagesFinal';

const CalendarMonths = ({ value, onChange, close }) => {
  let year = value.clone().year();
  let arr = [];
  const [displayStr, setDisplayStr] = useState(selectedYearDecade());

  function selectYear(e) {
    let selectedYear = parseInt(e.target.innerHTML);
    onChange(value.clone().set('year', selectedYear));
    close(true);
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
    onChange(value.clone().set("year", year));
    setDisplayStr(selectedYearDecade());
  }
  function incrementYear() {
    year = year + 10;
    onChange(value.clone().set("year", year));
    setDisplayStr(selectedYearDecade());
  }
  function decrement50Years() {
    year = year - 50;
    onChange(value.clone().set("year", year));
    setDisplayStr(selectedYearDecade());
  }
  function increment50Years() {
    year = year + 50;
    onChange(value.clone().set("year", year));
    setDisplayStr(selectedYearDecade());
  }

  return (
    <div>
      <div className="calendar">
        <div className="header">
          <div className="arrowgrp">
            <div className="icons" onClick={decrement50Years} ><ControlBackward /></div>
            <div className="icons" onClick={decrementYear} ><AngleLeft /></div>
          </div>
          <div>{displayStr}</div>
          <div className="arrowgrp">
            <div className="icons" onClick={incrementYear}><AngleRight /></div>
            <div className="icons" onClick={increment50Years}><ControlForward /></div>
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