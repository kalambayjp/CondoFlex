import React, {useState, useEffect} from "react";
import "./AmenityCalendar.css";
import { buildCalendar, dayStyles, beforeToday } from "./helpers";
import CalendarHeader from "./CalendarHeader";
import DaySchedule from "./DaySchedule";
import axios from "axios";


export default function AmenityCalendar(props) {
  const {selectedDay, setSelectedDay, selectedAmenity} = props;
  const [calendar, setCalendar] = useState([]);
  const [daySchedule, setDaySchedule] = useState(false)
  const [dayScheduleProp, setDayScheduleProp] = useState()
  // const [capacity, setCapacity] = useState(getCapacity(selectedAmenity));

  // console.log(capacity);
  
  const getCapacity = async (selectedAmenity) => {
    try {
      const result = await axios.get(`http://localhost:8080/api/amenities/capacity?amenityId=${selectedAmenity}`)
      console.log("capacity", result.data)
      
      
    } catch(err) {
      console.log(err)
    }
  }

  const capacity = getCapacity(selectedAmenity);

  
  useEffect(() => {  
    setCalendar(buildCalendar(selectedDay))
  }, [selectedDay])

  function handleDay(day)  {
  
    if(!beforeToday(day)) {
      setDaySchedule(true) 
      setDayScheduleProp(day)

  } 
  }


  return (
   <container className="calendar">

     {daySchedule && <DaySchedule day={dayScheduleProp} selectedAmenity={selectedAmenity} capacity={capacity} />}

     <CalendarHeader selectedDay={selectedDay} setSelectedDay={setSelectedDay} setCalendar={setCalendar}/>
     <div className="calendar-body">
       <div className="day-names">
          {
            ["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
              <div key={i} className="week"> {d} </div>
            ))
          }
       </div>
      {
        calendar.map((week, i) => <div key={i}>
          {
            week.map((day, i) => (
                <div 
                  className="day" 
                  key={i}
                  id={day.format("DD/MM/YYYY")}
                  onClick={() => handleDay(day)}
                >
                  <div className={dayStyles(day)}>
                    { day.format("D")}
                  </div>
                </div>)
              )
          }
        </div>)
      }
     </div>
   </container>
  )
}