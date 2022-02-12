import React, { useState } from "react";
import "./App.css";
import Nav from "./nav.js";
import Footer from "./footer";
import Header from "./header";
import Register from "./register";
import Login from "./Login";

function App() {
  const [state, setState] = useState([]);

  return (
    <main>
      <nav>
        <Nav state={state} setState={setState} />
      </nav>
      <header>
        <Header />
      </header>
      <div className="page-content">
        <body></body>
        <content>
          {state === "register" && <Register />}
          {state === "login" && <Login />}
        </content>
      </div>
      <br />
    
      <Footer />
    </main>
  );
}

export default App;
