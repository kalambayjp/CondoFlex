import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";

function Nav(props) {
  const { state, setState } = props;
  return (
    <nav class="navbar fixed-top navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Logo
        </a>
        <section>
          <Link to="/login">
            <button class="navbar-brand" href="#">
              Login
            </button>
          </Link>
          <Link to="/register">
          <button class="navbar-brand" onClick={() => setState("register")}>
            Register
          </button>
          </Link>
          
        </section>
      </div>
    </nav>
  );
}

export default Nav;
