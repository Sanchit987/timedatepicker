import React, { useState, useEffect, useRef } from 'react';
import CalendarIndex from '../calendar/calendarindex';
import moment from 'moment';
import TimeIndex from '../time-component/timeindex';
import CalendarMonths from '../calendar/calendarmonths';
import SelectMonth from '../calendar/selectmonth';

let useClickOutside = (handler) => {

  let domNode = useRef();

  useEffect(() => {

    let mayBehandler = (event) => {
      if (!domNode.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", mayBehandler);

    return () => document.removeEventListener("mousedown", mayBehandler);
  });

  return domNode;
};


const DateTimePicker = () => {
  const [value, setValue] = useState(moment());
  const [showMonth, setShowYear] = useState(true);
  const [showMo, setShowMo] = useState(true);
  const [open, setOpen] = useState(false);

  function clicked() {
    if (showMonth === false) {
      setShowYear(true);
    }
    else {
      setShowYear(false);
    }
  }
  function onMonthClick() {
    if (showMo === false) {
      setShowMo(true);
    }
    else {
      setShowMo(false);
    }
  }
  function toggleOpen() {
    if (open === true) {
      setOpen(false);
    }
    else {
      setOpen(true);
    }
  }
  let domNode = useClickOutside(() => {
    setOpen(false);
  });

  return (
    <div ref={domNode} className="calendar">
      <div className="text-box" onClick={toggleOpen}>
        <div className="date">{value.format("DD/MM/YYYY")}</div>
        <div className="time">{value.format("HH:mm")}</div>
      </div>
      {open
        ? showMonth === showMo ? <div><CalendarIndex value={value} onChange={setValue} clicked={clicked} moClick={onMonthClick} /><TimeIndex value={value} onChange={setValue} /></div> : showMo ? <CalendarMonths value={value} onChange={setValue} close={setShowYear} /> : <SelectMonth value={value} onChange={setValue} close={setShowMo} /> : ""
      }
    </div>
  );
};

export default DateTimePicker;