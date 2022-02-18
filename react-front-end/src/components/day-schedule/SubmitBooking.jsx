import React, {useState} from "react";
import axios from "axios"



export function SubmitBooking(props) {
  const { submitBookingTime, selectedAmenity,  userId, setLastRequestTime } = props;
  const [numOfPpl, setNumOfPpl] = useState(0)
  
  // axios.get(
  //   `http://localhost:8080/api/bookings?amenityId=${selectedAmenity}&date=${dayFormatted}`
  // )
  const createBooking = async (submitBookingTime, selectedAmenity, numOfPpl, userId) => {
    console.log("booking time at submit", submitBookingTime );
    try {
      const myBooking = await axios.post(
      `http://localhost:8080/api/bookings?userId=${userId}&amenityId=${selectedAmenity}&numOfPpl=${numOfPpl}&startTime=${submitBookingTime}`)

      console.log("myBooking", myBooking)

    } catch(err) {
      console.log(err)
    }
  }

  
  const onClick = function (e, submitBookingTime, selectedAmenity, numOfPpl, userId) {
    e.preventDefault()
    const promises = [];

    submitBookingTime.forEach(time => {
      promises.push(createBooking(time, selectedAmenity, numOfPpl, userId))
    })

    Promise.all(promises)
      .then(() => {
        setLastRequestTime(Date.now())
      })
      .catch(err => console.log(err))
  
  }

  return (
    <div className="submit-booking">
      <form>

        <input 
          placeholder="number of People"
          type="number" name="number_of_ppl" 
          value={numOfPpl} 
          onChange={(e) => setNumOfPpl(e.target.value)}
          required
        >
        </input>

        <button onClick={(e) => onClick(e, submitBookingTime, selectedAmenity, numOfPpl, userId)}>Book!</button>

      </form>
    </div>
  )
}