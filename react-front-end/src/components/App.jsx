import React, {useEffect, useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./nav";
import Footer from "./footer";
import Header from "./header";
import Register from "./register";
import Login from "./Login";
import { useApplicationData } from "../hooks/useApplicationData";
import AmenitiesList from "./AmenitiesList";
import AmenityCalendar from "./AmenityCalendar";
import { CookiesProvider } from "react-cookie";
import moment from "moment";


function App() {
   const {state, setState, getDataFromBackend} = useApplicationData();
  const [selectedDay, setSelectedDay] = useState(moment());
  const [selectedAmenity, setSelectedAmenity] = useState()


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
          <div className="background"></div>

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
              <Route
                path="/:id/amenities"
                exact
                element={<AmenitiesList 
                  state={state} 
                  selectedAmenity={selectedAmenity} 
                  setSelectedAmenity={setSelectedAmenity} 
                />}
              />

              <Route path="/:id/:id/calendar" 
                element={<AmenityCalendar 
                selectedDay={selectedDay} 
                setSelectedDay={setSelectedDay} 
                selectedAmenity={selectedAmenity}
              />} />

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
