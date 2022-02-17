import React from "react";

export default function CalendarHeader(props) {
  const {selectedDay, setSelectedDay} = props;

  function currentMonth() {
    return selectedDay.format("MMMM")
  }

  function currentYear() {
    return selectedDay.format("YYYY")
  }
  function prevMonth() {
    return selectedDay.clone().subtract(1, "month")
  }
  function nextMonth() {
    return selectedDay.clone().add(1, "month")
  }
  function thisMonth() {
    return selectedDay.isSame(new Date(), "month")
  }

  return (
    <div className="calendar-header">
      <div className="previous" onClick={() => !thisMonth() && setSelectedDay(prevMonth())}>
        {!thisMonth() ? String.fromCharCode(171) : null}
      </div>

      <div className="current">
        {currentMonth()} {currentYear()}
      </div>

      <div className="next" onClick={() => setSelectedDay(nextMonth())}>
        {String.fromCharCode(187)}
      </div>
   </div>

  )
}