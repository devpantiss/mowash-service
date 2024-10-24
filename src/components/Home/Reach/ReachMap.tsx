import React, { useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Tooltip,
  GeoJSON,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L, { LatLngTuple } from "leaflet";
import { FeatureCollection } from "geojson"; // Import GeoJSON types

// Fix for server-side rendering with Leaflet
const customMarker =
  typeof L !== "undefined"
    ? new L.DivIcon({
        className: "custom-icon",
        html: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32">
              <path fill="red" d="M12 2C8.1 2 5 5.1 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.9-3.1-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
            </svg>`,
        iconSize: [32, 32],
        iconAnchor: [16, 32],
      })
    : null;

const locations: { name: string; coords: LatLngTuple; details: string }[] = [
  {
    name: "Bhubaneswar, Odisha",
    coords: [20.2961, 85.8245],
    details: "The capital city of Odisha, known for its ancient temples.",
  },
  {
    name: "Khordha, Odisha",
    coords: [20.1821, 85.6161],
    details: "Khordha is an administrative district near Bhubaneswar.",
  },
  {
    name: "Cuttack, Odisha",
    coords: [20.4625, 85.8828],
    details: "Cuttack is one of the oldest cities in Odisha.",
  },
  {
    name: "Rourkela, Odisha",
    coords: [22.2604, 84.8536],
    details: "Rourkela is a major industrial hub known for its steel plant.",
  },
  {
    name: "Berhampur, Odisha",
    coords: [19.3149, 84.7941],
    details: "Berhampur is known for its silk sarees and temples.",
  },
  {
    name: "Angul, Odisha",
    coords: [20.8372, 85.0972],
    details: "Angul is known for its coal mining and industrial activities.",
  },
];

const MapComponent = () => {
  const [geoJsonData, setGeoJsonData] = useState<FeatureCollection | null>(
    null
  ); // Correct type for GeoJSON data

  useEffect(() => {
    // Fetch GeoJSON data for Odisha from the public folder
    fetch("/geojson/Orissa.geojson")
      .then((response) => response.json())
      .then((data: FeatureCollection) => {
        setGeoJsonData(data);
      })
      .catch((error) => {
        console.error("Error fetching GeoJSON:", error);
      });
  }, []);

  const geoJsonStyle = {
    fillColor: "transparent",
    color: "blue", // Border color for Odisha
    weight: 3, // Thickness of the border
  };

  if (typeof window === "undefined") {
    return null;
  }

  return (
    <MapContainer
      center={[20.9517, 85.0985]} // Centered on Odisha
      zoom={7} // Adjust zoom level as needed
      style={{ height: "600px", width: "100%" }}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* <TileLayer
        attribution='&copy; <a href="https://carto.com/attributions">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
      /> */}
      {geoJsonData && <GeoJSON data={geoJsonData} style={geoJsonStyle} />}

      {locations.map((location, index) =>
        customMarker ? (
          <Marker key={index} position={location.coords} icon={customMarker}>
            <Tooltip direction="top" offset={[0, -10]} opacity={1}>
              <div>
                <strong>{location.name}</strong>
                <br />
                {location.details}
              </div>
            </Tooltip>
          </Marker>
        ) : null
      )}
    </MapContainer>
  );
};

export default MapComponent;
