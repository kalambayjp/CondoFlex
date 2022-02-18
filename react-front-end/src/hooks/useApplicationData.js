import { useState, useEffect } from "react";
import axios from "axios";

export function useApplicationData() {
  const [state, setState] = useState({
    buildingId: "1", // HARD CODED DATA
    buildings: [],
    user: undefined,
    users: [],
    amenities: [],
    bookings: [],
  });

  const getDataFromBackend = async () => {
  console.log("AAAAAAAAAABBBBBCCCC")
    return Promise.all([
      // Get requests to to assign data to state
      axios.get("http://localhost:8080/api/buildings"),
      axios.get("http://localhost:8080/api/users"),
      axios.get("http://localhost:8080/api/amenities"),
<<<<<<< HEAD
      // axios.get("http://localhost:8080/api/bookings"),

    ])
      .then((all) => {
        console.log("USEAPPPPPPP",all)
=======
      //axios.get("http://localhost:8080/api/bookings"),

    ])
      .then((all) => {
        console.log("All Data:",all)

>>>>>>> 6e55416fa258182ba25521e73e2016db6d627193
        setState((prev) => ({
          ...prev,
          buildings: all[0].data,
          users: all[1].data,
          amenities: all[2].data,
          // bookings: all[3].data,
        }));
      })
      .catch((err) => console.log("ERRORRRR",err));

      
  };

<<<<<<< HEAD
  console.log("STATEEEEE",state)
  return {state, setState, getDataFromBackend}; 
=======
  return { state, setState, getDataFromBackend };
>>>>>>> 6e55416fa258182ba25521e73e2016db6d627193

}
