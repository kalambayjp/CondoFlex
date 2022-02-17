import React, { useState } from "react";
import classNames from "classnames"
import "./DayScheduleItem.css";



export default function DayScheduleItem(props) {
  const {
    moment,
    time, 
    bookings, 
    capacity, 
    setRequestBooking,
    submitBookingTime, 
    setSubmitBookingTime 
  } = props;

  const displayTime = time.slice(16,21)
  const [selectedTime, setSelectedTime] = useState([]);
  let sum = 0;

  if (bookings && bookings.length > 0) {
    
    bookings.map((ele, i) => { 	

      if (ele.length > 0) {
        if (ele[i] && ele[i].number_of_ppl){
          sum += ele[i].number_of_ppl 
        }
      }
      
    });

  }


  const handleClick = async (time) => {

    console.log(time)
    const requestTime = moment.format("YYYY-MM-DD-HH:mm")
    setSubmitBookingTime([...submitBookingTime, requestTime])
    setSelectedTime([...selectedTime, time])
    setRequestBooking(true)

  }

  const timeClass = classNames(
    "display-time",
    {"selected": selectedTime.includes(time)},
  );

  
  return (

    <div className={timeClass} onClick={() => handleClick(time) }>
      {displayTime}: {sum}/{capacity}
    </div>

  )
}