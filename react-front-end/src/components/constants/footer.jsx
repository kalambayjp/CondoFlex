import React from "react";
import "./footer.css";
import logo from "../../images/logo.png";

function Footer() {
  return (
    <footer>
      <div className="foot-One">
        <ul className="list-inline">
          <li className="list-inline-item">
            <a href="/">Home Page</a>
          </li>
          <li className="list-inline-item">
            <a href="/">Services</a>
          </li>
          <li className="list-inline-item">
            <a href="/">About</a>
          </li>
        </ul>
      </div>
      <div className="foot-One">
        <ul className="list-inline">
          <li>Created By : </li>
          <li className="list-inline-item">
            JP Kalambay, Sanjoy Kumar, Clinton Omamohwo
          </li>
        </ul>
      </div>

      <div id="logo2">
        <img src={logo} href="/" alt="Condo Flex" />
      </div>
      <p className="copyright">CondoFlex © 2022</p>
    </footer>
  );
}

export default Footer;
