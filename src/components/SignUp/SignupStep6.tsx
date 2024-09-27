import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import style from "@/components/common/input/input.module.css";

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
    <div className="flex flex-col py-28 items-center h-[100vh] justify-start bg-transparent">
      <h2 className="text-3xl text-white font-bold text-left mb-6">
        Choose your location
      </h2>

      <div className="flex justify-between gap-x-4 items-center w-full max-w-6xl">
        {/* Map Container */}
        <div className="w-1/2 h-[600px] rounded-md">
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
          className="w-1/2 space-y-6 px-4 pb-2 bg-transparent rounded-md"
        >
          {/* <div className="mt-2">
            <label className="block text-white text-sm font-medium">
              Flat/House Number
            </label>
            <input
              type="text"
              name="houseNumber"
              value={formData.houseNumber}
              onChange={handleInputChange}
              className="p-2 border-2 border-white bg-black text-white rounded-lg w-full"
              placeholder="Enter Your House Number or Relevant details"
              required
            />
          </div>

          <div className="mt-2">
            <label className="block text-white text-sm font-medium">
              Street Address
            </label>
            <input
              type="text"
              name="streetAddress"
              value={formData.streetAddress}
              onChange={handleInputChange}
              className="p-2 border-2 border-white bg-black text-white rounded-lg w-full"
              placeholder="Enter Your Locality Details"
              required
            />
          </div>

          <div className="mt-2">
            <label className="block text-white text-sm font-medium">
              Nearby Landmark
            </label>
            <input
              type="text"
              name="landmark"
              value={formData.landmark}
              onChange={handleInputChange}
              className="p-2 border-2 border-white bg-black text-white rounded-lg w-full"
              placeholder="Enter Your NEarest Landmark Feature"
            />
          </div>

          <div className="mt-2">
            <label className="block text-white text-sm font-medium">
              District/Locality
            </label>
            <input
              type="text"
              name="locality"
              value={formData.locality}
              onChange={handleInputChange}
              className="p-2 border-2 border-white bg-black text-white rounded-lg w-full"
              placeholder="Enter Your District"
            />
          </div>

          <div className="mt-2">
            <label className="block text-white text-sm font-medium">
              City/Town
            </label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              className="p-2 border-2 border-white bg-black text-white rounded-lg w-full"
              placeholder="Enter Your House City/Town Name"
              required
            />
          </div>

          <div className="mt-2">
            <label className="block text-white text-sm font-medium">
              State
            </label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleInputChange}
              className="p-2 border-2 border-white bg-black text-white rounded-lg w-full"
              placeholder="Enter Your State"
              required
            />
          </div>

          <div className="mt-2">
            <label className="block text-white text-sm font-medium">
              Pincode
            </label>
            <input
              type="text"
              name="pincode"
              value={formData.pincode}
              onChange={handleInputChange}
              className="p-2 border-2 border-white bg-black text-white rounded-lg w-full"
              placeholder="Enter Your Pincode"
              required
            />
          </div> */}

          <div className={`${style.brutalist_container} mt-4`}>
            <input
              placeholder="Enter Your House Number or Relevant details"
              className={`${style.brutalist_input} ${style.smooth_type}`}
              type="text"
            />
            <label className={`${style.brutalist_label}`}>
              {" "}
              Flat/House Number
            </label>
          </div>
          <div className={`${style.brutalist_container} mt-4`}>
            <input
              placeholder="Enter Your Locality Details"
              className={`${style.brutalist_input} ${style.smooth_type}`}
              type="text"
            />
            <label className={`${style.brutalist_label}`}>
              {" "}
              Street Address
            </label>
          </div>
          <div className={`${style.brutalist_container} mt-4`}>
            <input
              placeholder="Enter Your Nearest Landmark Feature"
              className={`${style.brutalist_input} ${style.smooth_type}`}
              type="text"
            />
            <label className={`${style.brutalist_label}`}>
              {" "}
              Nearby Landmark
            </label>
          </div>
          <div className={`${style.brutalist_container} mt-4`}>
            <input
              placeholder="Enter Your District"
              className={`${style.brutalist_input} ${style.smooth_type}`}
              type="text"
            />
            <label className={`${style.brutalist_label}`}> District</label>
          </div>
          <div className={`${style.brutalist_container} mt-4`}>
            <input
              placeholder="Enter Your House City/Town Name"
              className={`${style.brutalist_input} ${style.smooth_type}`}
              type="text"
            />
            <label className={`${style.brutalist_label}`}> City/Town</label>
          </div>
          <div className={`${style.brutalist_container} mt-4`}>
            <input
              placeholder="Enter Your State"
              className={`${style.brutalist_input} ${style.smooth_type}`}
              type="text"
            />
            <label className={`${style.brutalist_label}`}> State</label>
          </div>
          <div className={`${style.brutalist_container} mt-4`}>
            <input
              placeholder="Enter Your Pincode"
              className={`${style.brutalist_input} ${style.smooth_type}`}
              type="text"
            />
            <label className={`${style.brutalist_label}`}> Pincode</label>
          </div>

          {/* <button type="submit" className="px-4 py-2 mt-4 bg-blue-500 text-white rounded-lg w-full">
                        Confirm Address
                    </button> */}
        </form>
      </div>

      {/* Progress Bar */}
      <div className="fixed bottom-0 w-full h-2 bg-gray-200">
        <div className="h-2 bg-blue-600" style={{ width: "40%" }}></div>
      </div>
    </div>
  );
};

export default SignupStep6;
