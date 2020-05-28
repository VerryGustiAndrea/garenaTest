import React, { Component } from "react";
import "../scss/Home.scss";
const Home = () => {
  return (
    <>
      <div className="bg1">
        <img className="bg1" src="./assets/BG-Head.jpg" />
      </div>
      <div class="grid-container">
        <div className="TextContent1">
          <h1>Congratulations Sea Scholarship 2019 Awardees!</h1>
          <p>
            The Sea Scholarship Committe is proud to annouce the 2019 Academic
            Year Sea Scholarship recipients. Final award email notifications
            were sent on October 17, 2019.
          </p>
        </div>

        <div className="content1">
          <img className="content1" src="./assets/icon-graduate.png" />
        </div>
      </div>
    </>
  );
};

export default Home;
