import React, {useState} from "react";
import "./App.css";
import Nav from "./nav.js";
import Footer from "./footer";
import Header from "./header";
import Register from "./register";


function App() {
  const [state, setState] = useState([])

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
