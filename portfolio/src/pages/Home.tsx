import React from "react";
import Banner from "../components/Banner";
import Sobre from "../components/Sobre";
import Social from "../components/Social";
import Skills from "../components/Skills";
import Projetos from "../components/Projetos";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="hero min-h-screen relative">
      <div className="hero-content">
        <div className="max-w-screen">
          <Banner />
          <Sobre />
          <Social />
          <Skills />
          <Projetos />
        </div>
      </div>
    </div>
  );
};

export default Home;
