import React, { useState, useEffect } from "react";
import buildCalendar from "./builcal";
import dayStyles from "./daystyles";
import { AngleLeft, AngleRight, ControlBackward, ControlForward } from "../../assets/imagesFinal";
export default function CalendarIndex({ value, onChange }) {

	const [calendar, setCalendar] = useState([]);

	useEffect(() => {
		setCalendar(buildCalendar(value));
	}, [value]);


	function currMonthName() {
		return value.format("MMMM");
	}

	function currYear() {
		return value.format("YYYY");
	}

	function prevMonth() {
		return value.clone().subtract(1, "month");
	}

	function nextMonth() {
		return value.clone().add(1, "month");
	}

	function prevYear() {
		return value.clone().subtract(1, "year");
	}

	function nextYear() {
		return value.clone().add(1, "year");
	}

	return (<div>
		<div className="calendar">
			<div className="header">
				<div className="arrowgrp">
					<div className="icons" onClick={() => onChange(prevYear())}><ControlBackward /></div>
					<div className="icons" onClick={() => onChange(prevMonth())}><AngleLeft /></div>
				</div>
				<div>{currMonthName()} {currYear()}</div>
				<div className="arrowgrp">
					<div className="icons" onClick={() => onChange(nextMonth())}><AngleRight /></div>
					<div className="icons" onClick={() => onChange(nextYear())}><ControlForward /></div>
				</div>		</div>
			<div className="body">
				<div className="day-names">
					{['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map(d => (
						<div key={d} className="week">{d}</div>
					))}
				</div>
				{calendar.map((week) => (
					<div key={week}>
						{
							week.map((day) => (
								<div className="day" onClick={() => onChange(day)} key={day} >
									<div className={dayStyles(day, value)}>{day.format("D")}</div>
								</div>
							))
						}
					</div>
				))}
			</div>
		</div>
	</div >);
}
