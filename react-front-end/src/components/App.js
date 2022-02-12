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
        <Nav state={state} setState= {setState} />
      </nav>
      <header>
        <Header />
      </header>
      <div className="page-content">
        <body>
        </body>
          <content>
            

            {state === "register" && <Register />}
          
            
          </content>
      </div>
      <footer className="bottom">
        <Footer />
      </footer>
    </main>
  );
}

export default App;
