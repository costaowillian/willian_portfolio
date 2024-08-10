import React from "react";
import Banner from "../components/Banner";
import Sobre from "../components/Sobre";

const Home = () => {
  return (
    <div className="hero min-h-screen relative h-screen">
      <div className="hero-content">
        <div className="max-w-screen">
          <Banner />
          <Sobre />
        </div>
      </div>
    </div>
  );
};

export default Home;
