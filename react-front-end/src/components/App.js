import React, {useEffect, useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./nav.js";
import Footer from "./footer";
import Header from "./header";
import Register from "./register";
import { useApplicationData } from "../hooks/useApplicationData";
import AmenitiesList from "./AmenitiesList";
import AmenityCalendar from "./AmenityCalendar";
import moment from "moment";


function App() {
  const {state, setState, getDataFromBackend} = useApplicationData();
  const [selectedDay, setSelectedDay] = useState(moment());
  const [selectedAmenity, setSelectedAmenity] = useState()

  useEffect(() => {
    getDataFromBackend()
  }, []);
 
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
              <Route path="/register" exact element={<Register />} />

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
