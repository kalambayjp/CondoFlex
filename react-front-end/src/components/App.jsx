import React, {useEffect, useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./constants/nav";
import Footer from "./constants/footer";
import Header from "./constants/header";
import Register from "./login-register/register";
import Login from "./login-register/Login";
import MyBookings from "./my-bookings/MyBookings.jsx"
import { useApplicationData } from "../hooks/useApplicationData";
import AmenitiesList from "./amenity-list/AmenitiesList";
import AmenityCalendar from "./calendar/AmenityCalendar";
import { CookiesProvider } from "react-cookie";
import moment from "moment";
// import { lazy } from "react";
import PrivateRoute from "../privateroute/PrivateRoute";
import Home from "./Home.jsx";


export default function App() {
  const {state, setState, getDataFromBackend} = useApplicationData();
  const [selectedDay, setSelectedDay] = useState(moment());
  const [selectedAmenity, setSelectedAmenity] = useState();
  const [LoggedIn, setLoggedIn] = useState(true);


  useEffect(() => {
    getDataFromBackend();
    const isAuthenticated = !!localStorage.getItem("name");
    setLoggedIn(isAuthenticated);
  }, []);
 
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

              <div>
                <Routes>
                  <Route path="/" exact element={<Home />} /> 
                  <Route path="/register" exact element={<Register />} />

                  <Route
                    path={(localStorage.getItem("name")) ? ("/") : ("/login")}
                    exact
                    element={
                      <Login
                        users={state.users}
                        setState={setState}
                      />
                    }
                  />



                    <Route
                      path="/:building_id/amenities"
                      exact
                      element={<PrivateRoute/> }
                      
                    >
                      <Route
                        path="/:building_id/amenities"
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
                      path="/:building_id/:amenity_id/calendar"
                      exact
                      element={<PrivateRoute/> }
                      
                    >
                      <Route  
                        path="/:building_id/:amenity_id/calendar" 
                        element={<AmenityCalendar 
                          selectedDay={selectedDay} 
                          setSelectedDay={setSelectedDay} 
                        />} 
                      >

                      </Route>
                    </Route>




                    <Route
                      path="/my_bookings"
                      exact
                      element={<PrivateRoute/> }
                      
                    >
                      <Route
                        path="/my_bookings"
                        exact
      
                        element={
                          <MyBookings
                            state={state}
                            selectedAmenity={selectedAmenity}
                            setSelectedAmenity={setSelectedAmenity}
                            //buildingId={userInfo.buildingId} 
                          />
                        }
                      >

                    </Route>
                    </Route>

                </Routes>
              </div>
            </div>
            <br />

            <Footer />
            
          </Router>
        
        </main>
      </CookiesProvider>
  
  );
}


