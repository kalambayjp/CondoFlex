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

export function getbuildingAmenities(state, buildingId) {
  
  const buildingAmenities = state.amenities.filter(amenity => amenity.building_id === parseInt(buildingId));
  return buildingAmenities;
}