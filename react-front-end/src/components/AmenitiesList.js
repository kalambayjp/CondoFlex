import React from "react";
import AmenityItem from "./AmenitiesListItem";
import { getbuildingAmenities } from "./helpers";
import "./amenitiesList.css";
import { Link } from "react-router-dom";

function AmenitiesList(props) {
  const { state, selectedAmenity, setSelectedAmenity } = props;
  const buildingAmenities = getbuildingAmenities(state, state.buildingId);
  // console.log("building amenites", buildingAmenities);

  const amenities = buildingAmenities.map((amenity) => {
    const link = `/${amenity.building_id}/${amenity.id}/calendar`;
    return (
      <>
        <Link to={link}>
          <AmenityItem
            key={amenity.id}
            {...amenity}
            selectedAmenity={selectedAmenity}
            setSelectedAmenity={setSelectedAmenity}
          />
        </Link>
      </>
    );
  });
  console.log("SSSSSSSSS", state);
  console.log("AAAAAAA", amenities);
  return <div className="building-amenities">{amenities}</div>;
}

export default AmenitiesList;
