import React from "react";
import "./nav.css";

function Nav(props) {
  const {state, setState} = props;
  return (
    <nav class="navbar fixed-top navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Logo
        </a>
        <section>
          <span class="navbar-brand" href="#">
            Login
          </span>
          <button class="navbar-brand" onClick={() => setState("register")}>
            Register
          </button>
        </section>
      </div>
    </nav>
  );
}

export default Nav;
