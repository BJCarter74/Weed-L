import React from "react";
import InfoSection from "../components/InfoSection";
import LegalityMap from "../components/LegalityMap";
import MaryJBanner from "../components/MaryJBanner";
// import "../App.css";
const HomePage = () => {
  return (
    <div className="home-view">
      <MaryJBanner />
      <InfoSection />
    </div>
  );
};

export default HomePage;
