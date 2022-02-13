export function getbuildingAmenities(state, buildingId) {
  
  const buildingAmenities = state.amenities.filter(amenity => amenity.building_id === parseInt(buildingId));

  return buildingAmenities;
}
