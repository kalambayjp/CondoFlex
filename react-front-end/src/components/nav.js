import React, { useState } from "react";
import axios from "axios";
import "./nav.css";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import { useNavigate } from "react-router-dom";


function Nav(props) {
  const { state, setState } = props;
  let navigate = useNavigate();
  let user=props.user;

  // const [btnState, setBtnState]=useState()
  console.log("PPPPProp", props);

  const Logout = async () => {
    // props.state.user=""
    // state.user=("")
    console.log("state user",state.user)
    const user=""
    setState({...state, user})

    console.log("state user 2222",state.user)
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
                  <button id="btn_nav" onClick={() => setState("login")}>
                    Login
                  </button>
                </Link>
                <Link to="/register">
                  <button id="btn_nav" onClick={() => setState("register")}>
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
