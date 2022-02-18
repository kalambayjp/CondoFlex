import React from "react";
import "./footer.css"
import logo from "../../images/logo.png";

function Footer() {
  return (
    <footer>
      <div className="foot-One">
    <ul className="list-inline">
        <li class="list-inline-item"><a href="/">Home</a></li>
        <li class="list-inline-item"><a href="#">Services</a></li>
        <li class="list-inline-item"><a href="#">About</a></li>
    </ul>
    </div>
    <div className="foot-One">
    <ul className="list-inline">
    <li class="list-inline-item"><a href="#">Created By : </a></li>
        <li class="list-inline-item"><a href="">JP Kalambay</a></li>
        <li class="list-inline-item"><a href="#">Sanjoy Kumar</a></li>
        <li class="list-inline-item"><a href="#">Clinton Omamohwo</a></li>
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
