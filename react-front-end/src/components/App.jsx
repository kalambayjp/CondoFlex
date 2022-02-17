import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Redirect,
  Switch,
  Route,
} from "react-router-dom";
import "./App.css";
import Nav from "./nav.js";
import Footer from "./footer";
import Header from "./header";
import Register from "./register";
import Home from "./Home";
import Login from "./Login";
import { useApplicationData } from "../hooks/useApplicationData";
import AmenitiesList from "./AmenitiesList";
import AmenityCalendar from "./AmenityCalendar";
import { CookiesProvider } from "react-cookie";
import moment from "moment";
import { lazy } from "react";

 //Authenticated routes
import PrivateRoute from "../privateroute/PrivateRoute";

function App() {
  const { state, setState, getDataFromBackend } = useApplicationData();
  const [selectedDay, setSelectedDay] = useState(moment());
  const [selectedAmenity, setSelectedAmenity] = useState();
  const [LoggedIn, setLoggedIn] = useState(true);

  useEffect(() => {
    getDataFromBackend();
    const isAuthenticated = !!localStorage.getItem("name");
    setLoggedIn(isAuthenticated);
  }, []);

  return (
    <body>
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
              <content>

                <Routes>

                <Route path="/" exact element={<Home />} />
                  <Route path="/register" exact element={<Register />} />

                  <Route
                    path="/login"
                    exact
                    element={
                      // <Login handleClick={this.handleClick.bind(this)}
                      <Login users={state.users} setState={setState} />
                    }
                  />
                

                  <Route
                    path="/:id/amenities"
                    exact
                    element={<PrivateRoute/> }
                    
                  >
                    <Route
                    path="/:id/amenities"
                    exact
    
                    element={
                      
                      <AmenitiesList
                        state={state}
                        selectedAmenity={selectedAmenity}
                        setSelectedAmenity={setSelectedAmenity}
                      />
                    }
                  >

                  </Route>
                  </Route>

                  <Route
                    path="/:id/:id/calendar"
                    element={
                      <AmenityCalendar
                        selectedDay={selectedDay}
                        setSelectedDay={setSelectedDay}
                        selectedAmenity={selectedAmenity}
                      />
                    }
                  />
                </Routes>
              </content>

              <div></div>
            </div>
            <br />
          </Router>

          <footer>
            <Footer />
          </footer>
        </main>
      </CookiesProvider>
    </body>
  );
}

export default App;
