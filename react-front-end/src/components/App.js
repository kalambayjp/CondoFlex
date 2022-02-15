import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../styles/App.css";
import Nav from "./nav.js";
import Footer from "./footer";
import Header from "./header";
import Register from "./register";
import Login from "./Login"
import { useApplicationData } from "../hooks/useApplicationData";
import AmenitiesList from "./AmenitiesList";

function App() {
  const [state, setState] = useApplicationData();


  return (
    <main>
      <Router>
        <nav>
          <Nav state={state} setState={setState} />
        </nav>
        <header>
          <Header />
        </header>
        <div className="page-content">
          <body></body>

          <content>
            <Routes>
              <Route path="/login" exact element={<Login state={state}/>} />
              <Route path="/register" exact element={<Register />} />
              <Route
                path="/:id/amenities"
                exact
                element={<AmenitiesList state={state} />}
              />
            </Routes>
          </content>
        </div>
        <footer className="bottom">
          <Footer />
        </footer>
      </Router>
    </main>
  );
}

export default App;
