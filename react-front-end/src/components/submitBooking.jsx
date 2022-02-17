import React, {useState} from "react";



export function SubmitBooking(props) {
  const { submitBookingTime, selectedAmenity } = props;
  const [numOfPpl, setNumOfPpl] = useState(0)

  
  const onClick = function (e, submitBookingTime) {
    e.preventDefault()
    console.log(
      "bookingTimes =", submitBookingTime, 
      "amenityId =", selectedAmenity, 
      "numOfPpl=", numOfPpl, 
      "userId = TBD"
    );
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

        <button onClick={(e) => onClick(e, submitBookingTime, numOfPpl)}>Book!</button>

      </form>
    </div>
  )
}