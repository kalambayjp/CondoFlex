import { useState, useEffect } from "react";
import axios from "axios";

export function useApplicationData() {
  const [state, setState] = useState({
    buildingId: "1", // HARD CODED DATA
    buildings: [],
    user: "",
    users: [],
    amenities: [],
    bookings: []
  });

  useEffect(() => {
    Promise.all([                                        // Get requests to to assign data to state
      axios.get("http://localhost:8080/api/buildings"),
      axios.get("http://localhost:8080/api/amenities"),
<<<<<<< HEAD
      axios.get("http://localhost:8080/api/users"),      
=======
      axios.get("http://localhost:8080/api/users"),
>>>>>>> aa769475a0125f4666816204af85d2de8f3efcfa
      axios.get("http://localhost:8080/api/bookings")
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


  return [
    state,
    setState
  ]
}
