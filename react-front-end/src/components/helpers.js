export function getbuildingAmenities(state, buildingId) {
  console.log(state);
  const buildingAmenities = state.amenities.filter(amenity => amenity.building_id === parseInt(buildingId));

  return buildingAmenities;
}

// export function updateDisplayElement(state )
