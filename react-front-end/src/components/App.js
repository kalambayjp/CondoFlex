import React from "react";
import "./App.css";
import Nav from "./nav.js";
import Footer from "./footer";
import Header from "./header";
import Register from "./register";
import Login from "./Login";
import {getData} from "../hooks/getData"


function App() {
  const {state, setState} = getData()
  console.log(state)

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

        <body>
        </body>
        <content>
          {state === "register" && <Register />}
          {state === "login" && <Login />}
        </content>

        <div>

        </div>

      </div>
      <br />

      <Footer />
    </main>
  );
}

export default App;
