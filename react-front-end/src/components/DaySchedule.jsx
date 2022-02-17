import React, {useEffect, useState} from "react";
import DayScheduleItem from "./DayScheduleItem";
import "./DaySchedule.css";
import { buildTimeBlocks } from "../helpers/dayScheduleFuncs";
import { getBookingsForDay } from "../helpers/dataFetching"



export default function DaySchedule(props) {
  const {
    day, 
    selectedAmenity,
    capacity, 
    requestBooking, 
    setRequestBooking, 
    submitBookingTime, 
    setSubmitBookingTime 
  } = props;

  const dayFormatted = day.format("YYYY-MM-DD");
  const [bookings, setBookings] = useState([]);
  const [timeBlocks] = useState(buildTimeBlocks(day));


  useEffect(()=> {
    
    getBookingsForDay(selectedAmenity, dayFormatted)
    .then((res) => {
      setBookings(res)
    })

  }, [dayFormatted] )


  if (bookings && bookings.length > 0) {

    timeBlocks.forEach(time => {
      const bookingsAtTimeBlock = bookings.filter(booking => 
        booking.start_time.slice(11,16).trim() === time.date.toString().slice(16,21).trim()
      )

      bookingsAtTimeBlock && time.bookings.push(bookingsAtTimeBlock)
    })

  }

  return (
    <div className="day-schedule">
      <header>{dayFormatted}</header>

      <div className="schedule-times">

        {timeBlocks.map((timeBlock, i) => <DayScheduleItem
          key={i} 
          moment={timeBlock.moment}
          time={`${timeBlock.date}`} 
          capacity={`${capacity}`}
          bookings={timeBlock.bookings}
          requestBooking={requestBooking}
          setRequestBooking={setRequestBooking}
          submitBookingTime={submitBookingTime}
          setSubmitBookingTime={setSubmitBookingTime}
        />)}

      </div>
    </div>
  )
}