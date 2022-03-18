function isSelected(day, value) {
  return value.isSame(day, "day");
}

function beforeMonth(day, value) {
  return day.isBefore(value.clone().startOf("month"), "day");
}

function isToday(day, value) {
  return value.isSame(day, "day");
}

function afterMonth(day, value) {
  return day.isAfter(value.clone().endOf("month"), "day");
}

function isWeekend(day) {
  let dayOfWeek = day.day();
  return (dayOfWeek === 0) || (dayOfWeek === 6) ? true : false;
}


export default function dayStyles(day, value) {
  if (beforeMonth(day, value)) return 'before';
  if (afterMonth(day, value)) return 'after';
  if (isSelected(day, value)) return 'selected';
  if (isWeekend(day)) return 'weekend';
  if (isToday(day, value)) return 'today';
  return "";
}