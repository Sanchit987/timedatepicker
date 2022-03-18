import React, { useState } from 'react';
import CalendarIndex from '../calendar/calendarindex';
import moment from 'moment';
import TimeIndex from '../time-component/timeindex';

const DateTimePicker = () => {
  const [value, setValue] = useState(moment());
  console.log(value);
  return (
    <div>
      <CalendarIndex value={value} onChange={setValue} />
      <TimeIndex value={value} onChange={setValue} />
    </div>
  );
};

export default DateTimePicker;