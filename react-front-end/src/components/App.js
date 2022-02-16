import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./nav.js";
import Footer from "./footer";
import Header from "./header";
import Register from "./register";
import Login from "./Login";
import { useApplicationData } from "../hooks/useApplicationData";
import AmenitiesList from "./AmenitiesList";
import { CookiesProvider } from "react-cookie";


function App() {
  const [state, setState] = useApplicationData();
  console.log("state users A",state.users)

  return (
    <CookiesProvider>
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

          <body></body>
          <content>
            <Routes>
              <Route path="/register" exact element={<Register />} />
              <Route
                path="/login"
                exact
                element={
                  <Login
                    users={state.users}
                    setState={setState}
                  />
                }
              />
              <Route
                path="/:id/amenities"
                exact
                element={<AmenitiesList state={state} />}
              />
            </Routes>
          </content>

          <div></div>
        </div>
        <br />

        <Footer />
      </Router>
    
    </main>
    </CookiesProvider>
  );
}

export default App;
