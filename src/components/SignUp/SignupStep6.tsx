import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import style from "@/components/common/input/input.module.css";
import DistrictMarquee from "./DistrictMarquee";

// Ensure dynamic import of Leaflet and its components
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
// const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false });
// const useMapEvents = dynamic(() => import('react-leaflet').then(mod => mod.useMapEvents), { ssr: false });

// const LocationMarker = ({ setLatLng }: { setLatLng: (latLng: { lat: number; lng: number }) => void }) => {
//     const [position, setPosition] = useState<{ lat: number; lng: number } | null>(null);

//     // const map = useMapEvents({
//     //     click(e) {
//     //         setPosition(e.latlng);
//     //         setLatLng(e.latlng);
//     //     },
//     // });

//     return position === null ? null : <Marker position={position} />;
// };

const SignupStep6: React.FC = () => {
  const [_, setLatLng] = useState<{ lat: number; lng: number } | null>(null);
  const [formData, setFormData] = useState({
    houseNumber: "",
    streetAddress: "",
    landmark: "",
    locality: "",
    city: "",
    state: "",
    pincode: "",
  });

  const [isClient, setIsClient] = useState(false);

  // Set `isClient` to true when the component is rendered in the browser
  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Address Data:", formData);
  };

  if (!isClient) {
    // Render nothing on the server
    return null;
  }

  return (
    <div className="flex flex-col items-center lg:h-[90vh] justify-center bg-transparent">
      <h2 className="text-5xl font-bold lg:text-center text-left text-white my-8">
        Choose Your Location{" "}
      </h2>

      <div className="flex flex-col lg:flex-row justify-between lg: items-center w-full max-w-7xl">
        {/* Map Container */}
        <div className="lg:w-1/2 w-full h-[600px] ring-2 ring-white rounded-tl-md rounded-bl-md">
          <MapContainer
            center={[20.2961, 85.8245]} // Default center of the map
            zoom={9}
            scrollWheelZoom={true}
            className="w-full h-full rounded-md"
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
            />
            {/* <LocationMarker setLatLng={setLatLng} /> */}
          </MapContainer>
        </div>

        {/* Address Form */}
        <form
          onSubmit={handleFormSubmit}
          className="lg:w-1/2 w-full ring-2 h-[600px] ring-white space-y-6 px-4 pb-2 bg-transparent rounded-tr-md rounded-br-md"
        >
          <div className={style.inputContainer}>
            <input
              placeholder="Flat/House Number"
              className={style.inputField}
              type="text"
            />
            <label className={style.inputLabel}>Flat/House Number</label>
            <span className={style.inputHighlight}></span>
          </div>
          <div className={style.inputContainer}>
            <input
              placeholder="Street Address"
              className={style.inputField}
              type="text"
            />
            <label className={style.inputLabel}>Street Address</label>
            <span className={style.inputHighlight}></span>
          </div>
          <div className={style.inputContainer}>
            <input
              placeholder="Nearest Landmark"
              className={style.inputField}
              type="text"
            />
            <label className={style.inputLabel}>Nearest Landmark</label>
            <span className={style.inputHighlight}></span>
          </div>
          <div className={style.inputContainer}>
            <input
              placeholder="City/Town"
              className={style.inputField}
              type="text"
            />
            <label className={style.inputLabel}>City/Town</label>
            <span className={style.inputHighlight}></span>
          </div>
          <div className={style.inputContainer}>
            <input
              placeholder="District"
              className={style.inputField}
              type="text"
            />
            <label className={style.inputLabel}>District</label>
            <span className={style.inputHighlight}></span>
          </div>
          <div className={style.inputContainer}>
            <input
              placeholder="State"
              className={style.inputField}
              type="text"
            />
            <label className={style.inputLabel}>State</label>
            <span className={style.inputHighlight}></span>
          </div>
          <div className={style.inputContainer}>
            <input
              placeholder="Pincode"
              className={style.inputField}
              type="number"
            />
            <label className={style.inputLabel}>Pincode</label>
            <span className={style.inputHighlight}></span>
          </div>

          <button
            type="submit"
            className="px-6 py-2 w-full bg-white text-blue-600 ring ring-blue-600 rounded-lg hover:bg-gray-100 transition"
            >
            Confirm Address
          </button>
        </form>
      </div>
      {/* <DistrictMarquee /> */}

      {/* Progress Bar */}
      {/* <div className="fixed bottom-0 w-full h-2 bg-gray-200">
        <div className="h-2 bg-blue-600" style={{ width: "40%" }}></div>
      </div> */}
    </div>
  );
};

export default SignupStep6;
