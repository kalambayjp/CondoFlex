import React, {useState, useEffect} from "react";
import "./AmenityCalendar.css";
import { buildCalendar, dayStyles, beforeToday } from "../../helpers/calendarFuncs";
import CalendarHeader from "./CalendarHeader";
import DaySchedule from "../day-schedule/DaySchedule";
import axios from "axios";
import { SubmitBooking } from "../day-schedule/SubmitBooking";
import { useParams } from "react-router-dom";



export default function AmenityCalendar(props) {
  const {selectedDay, setSelectedDay} = props;
  const [calendar, setCalendar] = useState([]);
  const [daySchedule, setDaySchedule] = useState(false);
  const [dayScheduleProp, setDayScheduleProp] = useState();
  const [capacity, setCapacity] = useState(0);
  const [requestBooking, setRequestBooking] = useState(false);
  const [submitBookingTime, setSubmitBookingTime] = useState([]);
  const [lastRequestTime, setLastRequestTime] = useState();
  const [sum, setSum] = useState(0)
  const params = useParams();
  const selectedAmenity = params.amenity_id;

  const getCapacity = async (selectedAmenity) => {
    try {
      const result = await axios.get(`http://localhost:8080/api/amenities/capacity?amenityId=${selectedAmenity}`);
      return result;

    } catch(err) {
      console.log(err)
    }
  }

  useEffect( () => {  
    console.log("rerendering")
    setCalendar(buildCalendar(selectedDay))

    getCapacity(selectedAmenity)
    .then((res) => {
      setCapacity(res.data.capacity)
    })
  }, [selectedDay])

  function handleDay(day)  {
  
    if(!beforeToday(day)) {
      setDaySchedule(true) 
      setDayScheduleProp(day)
    } 

  }

  return (
    <section>
      <div className="calendar" >

        {daySchedule && 
          <DaySchedule 
            day={dayScheduleProp} 
            selectedAmenity={selectedAmenity} 
            capacity={capacity} 
            requestBooking={requestBooking}
            setRequestBooking={setRequestBooking}
            submitBookingTime={submitBookingTime}
            setSubmitBookingTime={setSubmitBookingTime}
            lastRequestTime={lastRequestTime}
            setSum={setSum}
          />}

        {requestBooking && 
          <SubmitBooking 
            submitBookingTime={submitBookingTime} 
            selectedAmenity={selectedAmenity}
            setLastRequestTime={setLastRequestTime}
            sum={sum}
            capacity={capacity}

          />
        }

        <CalendarHeader 
          selectedDay={selectedDay} 
          setSelectedDay={setSelectedDay} 
          setCalendar={setCalendar}
        />

        <div className="calendar-body" tabIndex="1">

          <div className="day-names">
            {
              ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d, i) => (
                <div key={i} className="Week"> {d} </div>
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

                    <div className="hm">
                      <div className={dayStyles(day)}>
                        { day.format("D")}
                      </div>
                    </div>

                  </div>)
                )
              }
            </div>)
          }
        </div>
      </div>
   </section>
  )
}