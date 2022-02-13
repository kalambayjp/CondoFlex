import React from "react";
import "./App.css";
import Nav from "./nav.js";
import Footer from "./footer";
import Header from "./header";
import Register from "./register";
import { useApplicationData } from "../hooks/useApplicationData";
import AmenitiesList from "./AmenitiesList";



function App() {
  const [state, setState] = useApplicationData();
  

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
            

            {state.displayElement[state.displayElement.length - 1] === "register" && <Register />}
            {state.displayElement[state.displayElement.length - 1] === "loggedIn" && <AmenitiesList state={state} />}
            
            
          </content>
      </div>
      <footer className="bottom">
        <Footer />
      </footer>
    </main>
  );
}

export default App;
