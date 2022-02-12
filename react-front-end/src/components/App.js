import React from "react";
import "./App.css";
import Nav from "./nav.js";
import Footer from "./footer";
import Header from "./header";
import Register from "./register";
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
          <p >
            {!data ? "Loading..." : data.map(value => <div>Name: {value.fname} {value.lname}</div>)}
          </p>
        </div>

      </div>
      <br />

      <Footer />
    </main>
  );
}

export default App;
