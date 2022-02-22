import React from "react";
import axios from "axios"
import "./ConfirmPopUp.css"
import { useNavigate } from "react-router-dom"

 
export const ConfirmPopUp = (props) => {
  const {selectedAmenity, numOfPpl, submitBookingTime, setLastRequestTime, toggleConfirm, setToggleConfirm} = props
  const userId = localStorage.getItem("id");
  let navigate = useNavigate()

  const createBooking = async (submitBookingTime, selectedAmenity, numOfPpl, userId) => {

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
        navigate(`/my_bookings`)
      })
      .catch(err => console.log(err))
  
  }

  return (
    <div className="popup">
      <div className="popup">
        <span className="close-icon" onClick={() => setToggleConfirm(!toggleConfirm)}>x</span>
        <div className="popuptext">
        <button onClick={(e) => onClick(e, submitBookingTime, selectedAmenity, numOfPpl, userId)}>Confirm</button>
        </div>
      </div>
    </div>
  );
};
 
