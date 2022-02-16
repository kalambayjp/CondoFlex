import React, {useState} from "react";
// import axios from "axios"

import classNames from "classnames"
import "./DayScheduleItem.css";




export default function DayScheduleItem(props) {
  const {time, bookings, capacity } = props;
 
  const displayTime = time.slice(16,21)
  const [selectedTime, setSelectedTime] = useState([]);



  const handleClick = async (time) => {
    console.log(time)
    // console.log()
    // const result = await getAvailableSpots()
    // console.log("result", result);
    setSelectedTime([...selectedTime, time])
  }

  // axios.get("http://localhost:8080/api/bookings"),
  
  const timeClass = classNames(
    "display-time",
    {"selected": selectedTime.includes(time)},
  );

  

  
  return (
    <div className={timeClass} onClick={() => handleClick(time) }>
      {displayTime} /{capacity}
    </div>
  )
}