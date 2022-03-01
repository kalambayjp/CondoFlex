import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import { useNavigate } from "react-router-dom";
import { getMyBookings } from "../../helpers/dataFetching";


function Nav(props) {
  const { state, setState } = props;
  const user_id=localStorage.getItem("id");
  const building_id=localStorage.getItem("building_id")
  const amenitiesLink=`/${building_id}/amenities`
  let navigate = useNavigate();
  

  const Logout = async () => {
    const user = undefined;
    setState({ ...state, user });
    localStorage.clear();
    navigate(`/`);
  };

  return (

    <nav className="navbar">
      <div className="container-fluid">
        <div id="logo">
          <img src={logo} href="/" alt="Condo Flex" />
        </div>
        <section>
          <div>
            {!localStorage.getItem("name") ? (
              <>
              
                <Link to="/login">
                  <button id="btn_nav">Login</button>
                </Link>
                
                <Link to="/register">
                  <button id="btn_nav">Register</button>
                </Link>

              </>
            ) : (
              <>

                <h3>Welcome, {localStorage.getItem("name")}</h3>

                <Link to={amenitiesLink}>
                  <button id="btn_navA" >Amenities</button>
                </Link>

                <Link to="/my_bookings">
                  <button id="btn_navB" onClick={()=>getMyBookings(user_id)}>Bookings</button>
                </Link>
                <button type="submit" id="btn_navL" onClick={Logout}>
                  Logout
                </button>

              </>
            )}
          </div>
        </section>
      </div>
    </nav>
  );
}

export default Nav;
