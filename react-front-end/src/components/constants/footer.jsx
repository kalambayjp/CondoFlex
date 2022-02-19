import React from "react";
import "./footer.css"
import logo from "../../images/logo.png";

function Footer() {
  return (
    <footer>
      <div className="foot-One">
    <ul className="list-inline">
        <li className="list-inline-item"><a href="/">Home</a></li>
        <li className="list-inline-item"><a href="/">Services</a></li>
        <li className="list-inline-item"><a href="/">About</a></li>
    </ul>
    </div>
    <div className="foot-One">
    <ul className="list-inline">
    <li className="list-inline-item">Created By : </li>
        <li className="list-inline-item">JP Kalambay</li>
        <li className="list-inline-item">Sanjoy Kumar</li>
        <li className="list-inline-item">Clinton Omamohwo</li>
    </ul>
    </div>
   
    <p className="copyright">CondoFlex © 2022</p>

    <div id="logo2">
          <img src={logo} href="/" alt="Condo Flex" />
    </div>
</footer>

  );
}

export default Footer;
