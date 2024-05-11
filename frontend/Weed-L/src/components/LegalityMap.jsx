import React, { useEffect, useRef } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "600px",
};

const center = {
  lat: 39.5,
  lng: -98.35,
};

const LegalityMap = ({ geoJson }) => {
  const mapRef = useRef(null);
  const onLoad = (map) => (mapRef.current = map);

  useEffect(() => {
    if (mapRef.current) {
      const dataLayer = mapRef.current.data;
      dataLayer.addGeoJson(geoJson);
      dataLayer.setStyle((feature) => {
        const status = feature.getProperty("status");
        return {
          fillColor: getColor(status),
          strokeWeight: 1,
          fillOpacity: 0.6,
        };
      });
    }
  }, [geoJson]);

  const getColor = (status) => {
    switch (status) {
      case "Recreational":
        return "#28a745";
      case "Medical":
        return "#ffc107";
      case "Illegal":
        return "#dc3545";
      default:
        return "#808080";
    }
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyB24hf4IcPFbMC1cSqJHyzzyKQXuc7SwN123">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={5}
        onLoad={onLoad}
      />
    </LoadScript>
  );
};

export default LegalityMap;
