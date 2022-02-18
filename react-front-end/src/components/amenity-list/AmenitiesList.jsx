import React from "react";
import AmenityItem from "./AmenitiesListItem";
import { getbuildingAmenities } from "../../helpers/dataFetching";
import "./amenitiesList.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function AmenitiesList(props) {
  const {state, selectedAmenity, setSelectedAmenity, } = props;
  const params = useParams();
  const buildingId = params.building_id;
  const buildingAmenities = getbuildingAmenities(state, buildingId);

  const amenities = buildingAmenities.map(amenity => {

    const link = `/${amenity.building_id}/${amenity.id}/calendar`;

    return (
      <Link to={link} key={amenity.id}>
        <AmenityItem 
          {...amenity} 
          selectedAmenity={selectedAmenity}
          setSelectedAmenity={setSelectedAmenity} 
        />
      </Link>
    )
  });


  return(
    <div className="building-amenities">
      {amenities}
    </div>
  )
}