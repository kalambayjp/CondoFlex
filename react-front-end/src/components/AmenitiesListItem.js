/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./amenitiesListItem.css";

function AmenityItem(props) {

  const {name, description, image, capacity, setSelectedAmenity, id} = props;

  return(
    <div className="container" onClick={() => setSelectedAmenity(id)}>

      <article className="single-amenitiy">
        <div id="image">
        <img src={image} />
        </div>
        <div className="amenity-info">
          <h6>{name}</h6>
          <p>{`${description} Capacity per timeslot: ${capacity}`}</p>
        </div>
      </article>
    </div>
  );
}
export default AmenityItem;
