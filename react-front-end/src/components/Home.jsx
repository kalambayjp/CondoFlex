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
            <h1>Book your amenities on the go.</h1>
            <p>
              Welcome to Condoflex, with this application you can easily register and 
              start booking your condominium amenities on the go. Its fast and easy to navigate.
              Join the flex zone now!
            </p>
            <p>
              Standing on the River Thames, London has been a major settlement
              for two millennia, its history going back to its founding by the
              Romans, who named it Londinium.
            </p>
          </article>
        </section>
      </div>
      <div className="ImgOne">
            
            <img src={imgone} href="/" alt="Condo Flex" />
      </div>

      <div className="ImgTwo">
      <article>
      <img  src={imgtwo} href="/" alt="Condo Flex" />
      <img src={imgthree} href="/" alt="Condo Flex" />
            
          </article>
      </div>


      <div className="ContainerTwo">
        <section>
          <article>
            <h1>Record Keeping</h1>
            <p>
            Get rid of manual processess of keeping records and paper pileups. 
            Enjoy better organization and consistency using digital forms and documents.
            U
            </p>
            <p>
            Get rid of manual processess of keeping records and paper pileups. 
            Enjoy better organization and consistency using digital forms and documents.
            U 
            Get rid of manual processess of keeping records and paper pileups. 
            Enjoy better organization and consistency using digital forms and documents.
            U
            </p>
   
          </article>
        </section>
      </div>

    </div>
   
  );
};

export default Home;
