import { useState, useEffect } from "react";
import axios from "axios";

export function getData() {
  const [state, setState] = useState({
    displayElement: ["register"],
    building: "",
    buildings: [],
    user: "",
    users: [],
    amenities: [],
    bookings: []
  });

  useEffect(() => {
    Promise.all([                                        // Get requests to to assign data to state
      axios.get("/api/buildings"),
      axios.get("/api/amenities"),
      axios.get("/api/users"),
      axios.get("/api/bookings")
    ])
      .then((all) => {
        setState(prev => ({...prev, 
          buildings: all[0].data,
          amenities: all[1].data,
          users: all[2].data,
          bookings: all[3].data
        }))
      })
      .catch(err => console.log(err))
  }, [])


  return {
    state
  }
}