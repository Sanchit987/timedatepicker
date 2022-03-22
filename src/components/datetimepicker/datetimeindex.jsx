import React, { useState } from 'react';
import CalendarIndex from '../calendar/calendarindex';
import moment from 'moment';
import TimeIndex from '../time-component/timeindex';
import CalendarMonths from '../calendar/calendarmonths';
import SelectMonth from '../calendar/selectmonth';

const DateTimePicker = () => {
  const [value, setValue] = useState(moment());
  const [showMonth, setShowYear] = useState(true);
  const [showMo, setShowMo] = useState(true);
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
  return (
    <div>
      {showMonth === showMo ? <CalendarIndex value={value} onChange={setValue} clicked={clicked} moClick={onMonthClick} /> : showMo ? <CalendarMonths value={value} onChange={setValue} close={setShowYear} /> : <SelectMonth value={value} onChange={setValue} close={setShowMo} />}
      <TimeIndex value={value} onChange={setValue} />
    </div>
  );
};

export default DateTimePicker;