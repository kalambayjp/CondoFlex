import React from "react";


function Home(props) {
  const { state } = props;

  return (
    <div className="Home-page">
      Home {state}
    </div>
  )
}

export default Home
