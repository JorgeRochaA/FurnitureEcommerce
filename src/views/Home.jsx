import React from "react";
import CategoriesContainer from "../components/CategoriesContainer";
import "../styles/Home.scss";
function Home() {
  return (
    <div className="home">
      <div className="home_banner">
        <div className="home_information">
          <p className="home_information_title">
            Exclusive Deals of Furniture Collection
          </p>
          <p className="home_information_description">
            Explore different categories. Find the best deals.
          </p>
          <button className="home_information_button">Shop Now</button>
        </div>
      </div>
      <CategoriesContainer />
    </div>
  );
}

export default Home;
