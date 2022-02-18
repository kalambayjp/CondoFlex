import { useState } from "react";
import axios from "axios";

export function useApplicationData() {
  const [state, setState] = useState({ 
    buildingId: null, 
    buildings: [],
    user: null,
    users: [],
    amenities: [],
    bookings: [],
  });

  const getDataFromBackend = async () => {
    return Promise.all([
      // Get requests to to assign data to state
      axios.get("http://localhost:8080/api/buildings"),
      axios.get("http://localhost:8080/api/users"),
      axios.get("http://localhost:8080/api/amenities"),
      // axios.get("http://localhost:8080/api/bookings"),

    ])
      .then((all) => {
        
        setState((prevState) => ({
          ...prevState,
          buildings: all[0].data,
          users: all[1].data,
          amenities: all[2].data,
          // bookings: all[3].data,
        }));
      })
      .catch((err) => console.log(err));
  };

  
  return {state, setState, getDataFromBackend}; 

}
