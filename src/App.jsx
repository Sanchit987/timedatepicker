import './App.scss';
import React, { useState } from 'react';
import CalendarIndex from './components/calendar/calendarindex';
import moment from 'moment';

const App = () => {
	const [value, setValue] = useState(moment());
	return (
		<CalendarIndex value={value} onChange={setValue} />
	);
};

export default App;
