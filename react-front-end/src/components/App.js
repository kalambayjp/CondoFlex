import React, { useState } from "react";
import "./App.css";
import Nav from "./nav.js";
import Footer from "./footer";
import Header from "./header";
import Register from "./register";


function App() {
  const [state, setState] = useState([]);
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api/data")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);



  return (
    <main>

      <nav>
        <Nav state={state} setState={setState} />
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

        <div>
          <p >{!data ? "Loading..." : data}</p>
        </div>

      </div>

      <footer className="bottom">
        <Footer />
      </footer>

    </main>
  );
}

export default App;
