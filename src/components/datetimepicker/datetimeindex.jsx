import React, { useState } from 'react';
import CalendarIndex from '../calendar/calendarindex';
import moment from 'moment';
import TimeIndex from '../time-component/timeindex';
import CalendarMonths from '../calendar/calendarmonths';

const DateTimePicker = () => {
  const [value, setValue] = useState(moment());
  const [showMonth, setShowMonth] = useState(true);
  console.log(value);
  function clicked() {
    if (showMonth === false) {
      setShowMonth(true);
    }
    else {
      setShowMonth(false);
    }
  }
  console.log(showMonth);
  return (
    <div>
      {showMonth ? <CalendarIndex value={value} onChange={setValue} clicked={clicked} /> : <CalendarMonths value={value} onChange={setValue} />}
      <TimeIndex value={value} onChange={setValue} />
    </div>
  );
};

export default DateTimePicker;