import axios from "axios";



export const getBookingsForDay = async (selectedAmenity, dayFormatted) => {
  try {

    const result = await axios.get(
      `http://localhost:8080/api/bookings?amenityId=${selectedAmenity}&date=${dayFormatted}`
    )
    return result.data

  } catch(err) {
    console.log(err)
  }
}

export const getMyBookings = async (user_id) => {
  try {
    console.log("USERRRR",user_id);
    const result = await axios.get(
      `http://localhost:8080/api/bookings/my_bookings?userId=${user_id}`
    )
    console.log("SSSDDDDD",result)
    return result.data

  } catch(err) {
    console.log(err)
  }
}



export function getbuildingAmenities(state, buildingId) {
  console.log(state, buildingId)
  const buildingAmenities = state.amenities.filter(amenity => amenity.building_id === parseInt(buildingId));
  console.log(buildingAmenities, state, buildingId);
  return buildingAmenities;
}