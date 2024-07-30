import React from "react";
import Hero from "components/containers/Home/Hero";
import HowToWorks from "components/containers/Home/HowToWorks";

const Home = () => {
  return (
    <div>
      <div className="lg:-mt-[100px]">
        <Hero />
        <HowToWorks />
      </div>
    </div>
  );
};

export default Home;
