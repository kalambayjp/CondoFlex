import React, { useState } from "react";
import "./DaySchedule.css";
import { ConfirmPopUp } from "./ConfirmPopUp";


export function SubmitBooking(props) {
  const {
    submitBookingTime,
    selectedAmenity,
    setLastRequestTime,
  } = props;

  const [numOfPpl, setNumOfPpl] = useState(0);
  const [toggleConfirm, setToggleConfirm] = useState(false);

  const togglePopUp = (e) => {
    e.preventDefault();
    setToggleConfirm(true);
  };

  return (
    <div className="submit-booking">
      <form>
        <input
          placeholder="number of People"
          type="number"
          name="number_of_ppl"
          value={numOfPpl}
          onChange={(e) => setNumOfPpl(e.target.value)}
          required
        ></input>
        <button onClick={(e) => togglePopUp(e)}>Book!</button>
      </form>

      <div>
        {toggleConfirm && (
          <ConfirmPopUp
            setLastRequestTime={setLastRequestTime}
            submitBookingTime={submitBookingTime}
            selectedAmenity={selectedAmenity}
            numOfPpl={numOfPpl}
            toggleConfirm={toggleConfirm}
            setToggleConfirm={setToggleConfirm}
          />
        )}
      </div>
    </div>
  );
}
