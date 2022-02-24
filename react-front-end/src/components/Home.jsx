import React from "react";
import "./home.css"
import imgone from "../images/home1.jpg";
import imgtwo from "../images/home2.jpg";
import imgthree from "../images/home3.jpg";
const Home = (props) => {
  return (
    
    <div className="homeContainer">
      <div className="ContainerOne">
        <section>
          <article>
            <h1 className="home1">Book your amenities on the go.</h1>
            <p className="homep">
              Welcome to Condoflex, with this application you can easily register, and 
              start booking your condominium amenities on the go. Its fast and easy to navigate.
              Join the flex zone now!
            </p>

          </article>
          <div className="ImgOne">
            
            <img src={imgone} href="/" alt="Condo Flex" />
      </div>
        </section>
      </div>
      

      


      <div className="ContainerTwo">
        <section>
          <article>
            <h1 className="home1" >Record Keeping</h1>
            <p className="homep">
            Get rid of manual processess of keeping records and papers. 
            Enjoy better organization and consistency using digital forms and documents.
            </p>
   
          </article>
          <div className="ImgTwo">
      <article>
      <img  src={imgtwo} href="/" alt="Condo Flex" />
      {/* <img src={imgthree} href="/" alt="Condo Flex" /> */}
            
          </article>
      </div>
        </section>
      </div>

    </div>
   
  );
};

export default Home;
