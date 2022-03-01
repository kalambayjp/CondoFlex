import React, { useEffect, useState } from "react";
import { getMyBookings } from "../../helpers/dataFetching";
import "../my-bookings/MyBookings.css"

export default function MyBookings(props) {
  const user_id = localStorage.getItem("id");
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    getMyBookings(user_id).then((res) => {
      setBookings(res);
    });
  }, []);

  return (
    <>
      <h1>My Bookings</h1>

      <div>

        <div className="table-bookings">
          <table>
            <tr>
              <th>Number Of People</th>
              <th>Year-Month-Day-Time</th>
              <th>Booked Amenity</th>
              <th>Action</th>
            </tr>
            {bookings.map((item) => {console.log("ITEMMMM",item);
            return(
              <tr  key={item.id}>
                <td>{item.number_of_ppl}</td>
                <td>{item.start_time}</td>
                <td>{item.amenity.name}</td>
                <td> <button id="edit-btn">Edit</button>
                 <button id="delete-btn">Delete</button></td>
              </tr>
            )
          })}
            </table>
        </div>
      </div>
    </>
  );
}
