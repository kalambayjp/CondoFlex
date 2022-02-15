import React, { useState } from "react";
import axios from "axios";
import "../styles/nav.css";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import { useNavigate } from "react-router-dom";


function Nav(props) {
  const { state, setState } = props;
  let navigate = useNavigate();
  let user=props.user;

  // const [btnState, setBtnState]=useState()
  console.log("Props:", props);

  const Logout = async () => {
    // props.state.user=""
    // state.user=("")
    console.log("state ",state)
    const user=undefined
    setState({...state, user})
    navigate(`/`);

  };

  return (
    <nav class="navbar">
      <div className="container-fluid">
        <div className="logo">
          <img src={logo} href="#" alt="Condo Flex" />
        </div>
        <section>
          <div>
            {!props.state.user ? (
              <>
                <Link to="/login">
                  <button id="btn_nav" >
                    Login
                  </button>
                </Link>
                <Link to="/register">
                  <button id="btn_nav" >
                    Register
                  </button>
                </Link>
              </>
            ) : (
              <button type="submit" id="btn_nav" onClick={Logout}>
                Logout
              </button>
            )}
          </div>
        </section>
      </div>
    </nav>
  );
}

export default Nav;
