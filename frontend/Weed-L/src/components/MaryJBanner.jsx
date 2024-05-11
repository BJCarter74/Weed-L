import React from "react";
import bannerImage from "../assets/MaryJBanner2.png";

function MaryJBanner() {
  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
      <img
        src={bannerImage}
        alt="Banner"
        style={{ width: "100%", height: "500px" }}
      />
      <p style={{ margin: "0px" }}>Photo by CRYSTALWEED cannabis on Unsplash</p>
    </div>
  );
}

export default MaryJBanner;
