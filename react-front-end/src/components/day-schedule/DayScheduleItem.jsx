import React from "react";
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
    setSubmitBookingTime,
    setSum
  } = props;

  const displayTime = time.slice(16,21)
  // const [selectedTime, setSelectedTime] = useState([]);
  let sum = 0;

  if (bookings && bookings.length > 0) {
    
    bookings.map((ele, i) => { 	

      if (ele.length > 0) {
        if (ele[i] && ele[i].number_of_ppl){
          sum += ele[i].number_of_ppl 
        }
        return setSum(sum)
      }

      return setSum(0)
      
    });

  }

  const requestTime = moment.format("YYYY-MM-DD-HH:mm")

  const handleClick = async (time) => {

    if (submitBookingTime.includes(requestTime)) {
      console.log(time)
      const newTimes = submitBookingTime.filter(time => time !== requestTime)
      setSubmitBookingTime(newTimes)
      setRequestBooking(true)
      console.log(submitBookingTime)
      return  
    }

    console.log(time)
    setSubmitBookingTime([...submitBookingTime, requestTime])
    // setSelectedTime([...selectedTime, time])
    setRequestBooking(true)


  }
  // console.log("after func",submitBookingTime)

  const timeClass = classNames(
    "display-time",
    // {"selected": selectedTime.includes(time)},
    {"selected": submitBookingTime.includes(requestTime)},

  );

  
  return (

    <div className={timeClass} onClick={() => handleClick(time) }>
      {displayTime}: {sum}/{capacity}
    </div>

  )
}