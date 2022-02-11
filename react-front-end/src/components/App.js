import React from "react";
import "./App.css";
import Nav from "./nav.js";
import Footer from "./footer";
import Header from "./header";

function App() {
  return (
    <main>
      <nav>
        <Nav />
      </nav>

      <body>
      <Header />
        

        
      </body>

      <footer className="bottom">
        <Footer />
      </footer>
    </main>
  );
}

export default App;
