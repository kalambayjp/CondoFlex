import React from "react";
import "./nav.css";

function Nav() {
  return (
    <nav class="navbar fixed-top navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Logo
        </a>
        <section>
          <a class="navbar-brand" href="#">
            Login
          </a>
          <a class="navbar-brand" href="#">
            Register
          </a>
        </section>
      </div>
    </nav>
  );
}

export default Nav;
