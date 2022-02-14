import React from "react";
import AmenityItem from "./AmenitiesListItem";
import { getbuildingAmenities } from "./helpers";
import "../styles/amenitiesList.css";

function AmenitiesList(props) {
  const {state} = props;
  const buildingAmenities = getbuildingAmenities(state, state.buildingId);
  const amenities = buildingAmenities.map(amenity => <AmenityItem {...amenity} />);


  return(
    <div className="building-amenities">
      {amenities}
    </div>
  )
}

export default AmenitiesList
