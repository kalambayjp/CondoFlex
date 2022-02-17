import React from "react";
import "./popup.css"
 
const Popup = props => {
  return (
    <div className="popup">
      <div className="popup">
        <span className="close-icon" onClick={props.handleClose}>x</span>
        <div className="popuptext">
        {props.content}
        </div>
      </div>
    </div>
  );
};
 
export default Popup;