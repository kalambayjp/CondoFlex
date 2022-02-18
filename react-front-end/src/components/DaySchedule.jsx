import React, {useEffect, useState} from "react";
import moment from "moment";
import axios from "axios"

import DayScheduleItem from "./DayScheduleItem";
import "./DaySchedule.css";
import { getBookingsForDay } from "./helpers";


export default function DaySchedule(props) {
  const {day, selectedAmenity, capacity } = props;
  const [bookings, setBookings] = useState();
  

   // console.log("selectedAmenity",selectedAmenity)
   const dayFormatted = day.format("YYYY-MM-DD")
   const start = moment(`${dayFormatted} 04:30`);
   const remainder = 30 - (start.minute() % 30);
   const end = moment(`${dayFormatted} 22:30`);
 

  useEffect(()=> {
    setBookings(getBookingsForDay(selectedAmenity, dayFormatted))
  }, [dayFormatted] )

  
  // console.log(bookings);

  function buildTimeBlocks() {
    let dateTime = start.clone()
    let timeBlock = []

    while(dateTime._d < end._d) {
      dateTime = dateTime.clone().add(remainder, "minutes")
      timeBlock.push(dateTime._d)
      
    }
  
    return timeBlock
  }

  const timeBlocks = buildTimeBlocks();

  return(
    <div>
      <header>{dayFormatted}</header>

      <div className="schedule-times">
        {timeBlocks.map(timeBlock => <DayScheduleItem
          key={`${timeBlock}`} 
          time={`${timeBlock}`} 
          capacity={`${capacity}`}
          bookings={`${bookings}`}
      
        /> )}
      </div>
    </div>
  )
}