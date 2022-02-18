import React, {useEffect, useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./constants/nav";
import Footer from "./constants/footer";
import Header from "./constants/header";
import Register from "./login-register/register";
import Login from "./login-register/Login";
import { useApplicationData } from "../hooks/useApplicationData";
import AmenitiesList from "./amenity-list/AmenitiesList";
import AmenityCalendar from "./calendar/AmenityCalendar";
import { CookiesProvider } from "react-cookie";
import moment from "moment";


function App() {
  const {state, setState, getDataFromBackend} = useApplicationData();
  const [selectedDay, setSelectedDay] = useState(moment());
  const [selectedAmenity, setSelectedAmenity] = useState();
  let userInfo = {};
  if (state.user) {
    userInfo = state.user
    console.log("user info has been set", userInfo);
  }



  useEffect(() => {
    getDataFromBackend()
  }, []);
 
  return (
    <CookiesProvider>
      <main className="background">
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
               {userInfo &&
                  <Route
                    path="/:building_id/amenities"
                    exact
                    element={<AmenitiesList 
                      state={state} 
                      selectedAmenity={selectedAmenity} 
                      setSelectedAmenity={setSelectedAmenity}
                      buildingId={userInfo.buildingId} 
                    />}
                  />
                }

                {userInfo && 
                  <Route path="/:building_id/:amenity_id/calendar" 
                    element={<AmenityCalendar 
                      selectedDay={selectedDay} 
                      setSelectedDay={setSelectedDay} 
                      userId={userInfo.id}
                    />} 
                  />
                } 
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

export default App;
