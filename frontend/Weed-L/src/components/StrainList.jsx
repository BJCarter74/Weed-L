import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/StrainList.css";

const StrainsList = () => {
  const [strains, setStrains] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://localhost:3000/api/strains");
        setStrains(response.data);
        if (response.data.length === 0) {
          setError("No strains found.");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to fetch strains. Please try again later.");
      }
    };

    fetchData();
  }, []);

  return (
    <div className="strain-grid">
      <h1>Strains</h1>

      {strains.length > 0 ? (
        <div className="grid-container">
          {strains.map((strain) => (
            <div className="grid-item" key={strain.id}>
              <img
                src={strain.imgThumb}
                alt={`${strain.strain} thumbnail`}
                className="strain-image"
              />
              <h3>{strain.strain}</h3>
              <p>
                THC: {strain.thc}% | CBD: {strain.cbd}%
              </p>
              <p>Type: {strain.strainType}</p>
              <p>Good Effects: {strain.goodEffects}</p>
              <p>Side Effects: {strain.sideEffects}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>{error || "No strains found."}</p>
      )}
    </div>
  );
};

export default StrainsList;
