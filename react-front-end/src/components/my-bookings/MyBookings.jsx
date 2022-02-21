import React, { useEffect, useState } from "react";
import { getMyBookings } from "../../helpers/dataFetching";
import "../my-bookings/MyBookings.css";
import axios from "axios";
import moment from "moment";

export default function MyBookings(props) {
  const user_id = localStorage.getItem("id");
  const [bookings, setBookings] = useState([]);
  const [count, setCount] = React.useState(0);

  const deleteBooking = (booking_id) => {
 
    axios
    .delete(`http://localhost:8080/api/bookings/delete?booking_id=${booking_id}`)
    .then((res)=>{
      
      const updatedBookings=bookings.filter((booking)=>booking.id !== res.data.id)
      console.log("UPDATTTEDDDDBOOK", updatedBookings)
      setBookings(updatedBookings)
    })
    .catch(err =>console.log(err))

    
  };

  // const currentDate=moment().format("YYYY-MM-DD-HH:mm")
  // console.log("CCCCCCCCC",currentDate);
  const fetchBooking = (bookings) => {
    getMyBookings(user_id).then((res) => {
      return setBookings(res);
    });
  };

  useEffect(() => {
    fetchBooking(bookings);
  }, []);
  console.log("BOOOOOOKINgS", bookings);

  return (
    <>
      

      <div>
      <h4>My Bookings</h4>
        <div className="table-bookings">
          <table>
            <tr>
              <th>Number Of People</th>
              <th>Year-Month-Day-Time</th>
              <th>Booked Amenity</th>
              <th>Action</th>
            </tr>
            {bookings.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.number_of_ppl}</td>
                  <td>{item.start_time}</td>
                  <td>{item.amenity.name}</td>
                  <td>
                    <button
                      id="delete-btn"
                      onClick={() => deleteBooking(item.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </>
  );
}
