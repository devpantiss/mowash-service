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

// Define interfaces for address results
interface AddressResult {
  display_name: string;
  lat: string;
  lon: string;
  address: {
    house_number?: string;
    road?: string;
    city?: string;
    town?: string;
    village?: string;
    county?: string;
    state?: string;
    postcode?: string;
  };
}

const SignupStep6: React.FC = () => {
  const [latLng, setLatLng] = useState<{ lat: number; lng: number } | null>(null);
  const [formData, setFormData] = useState({
    houseNumber: "",
    streetAddress: "",
    landmark: "",
    city: "",
    district: "",
    state: "",
    pincode: "",
  });

  const [isClient, setIsClient] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<AddressResult[]>([]); // Specify the type here

  // Set `isClient` to true when the component is rendered in the browser
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Fetch address suggestions from Nominatim API
  const fetchAddressSuggestions = async (query: string) => {
    if (!query) {
      setSearchResults([]);
      return;
    }

    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?q=${query}&format=json&addressdetails=1`
    );
    const data: AddressResult[] = await response.json(); // Specify the type for the response
    setSearchResults(data);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Address Data:", formData);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    fetchAddressSuggestions(e.target.value);
  };

  const handleResultSelect = (result: AddressResult) => { // Specify the type here
    setSearchQuery(result.display_name);
    setLatLng({ lat: parseFloat(result.lat), lng: parseFloat(result.lon) }); // Convert lat/lon to numbers
    setFormData({
      houseNumber: result.address.house_number || "",
      streetAddress: result.address.road || "",
      landmark: "", // No landmark in Nominatim data
      city: result.address.city || result.address.town || result.address.village || "",
      district: result.address.county || "",
      state: result.address.state || "",
      pincode: result.address.postcode || "",
    });
    setSearchResults([]); // Clear search results after selection
  };

  if (!isClient) {
    // Render nothing on the server
    return null;
  }

  return (
    <div className="flex flex-col items-center lg:h-[90vh] justify-center bg-transparent p-4">
      <h2 className="text-5xl font-bold lg:text-center text-left text-white my-10">
        Choose Your Location{" "}
      </h2>

      <div className="flex flex-col lg:flex-row justify-between lg:items-center w-full max-w-7xl">
        {/* Map Container */}
        <div className="lg:w-1/2 w-full h-[600px] ring-2 ring-white rounded-tl-md relative rounded-bl-md">
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
            {/* {latLng && <Marker position={latLng} />} */}
          </MapContainer>

          {/* Search Box */}
          <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-[1000] w-3/4 lg:w-1/2">
            <div className="relative flex items-center bg-white shadow-lg rounded-full ring-blue-600 ring-2 h-12 w-full px-4">
              <input
                placeholder="Search Your Location"
                className="bg-transparent flex-grow focus:outline-none text-gray-600 px-2"
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </div>

            {/* Display search results */}
            {searchResults.length > 0 && (
              <ul className="absolute bg-white z-[1000] w-full max-h-60 overflow-auto shadow-lg mt-1">
                {searchResults.map((result, index) => (
                  <li
                    key={index}
                    className="p-2 cursor-pointer hover:bg-gray-100"
                    onClick={() => handleResultSelect(result)}
                  >
                    {result.display_name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Address Form */}
        <form
          onSubmit={handleFormSubmit}
          className="lg:w-1/2 w-full ring-2 h-[600px] ring-white space-y-6 px-4 pb-2 bg-transparent rounded-tr-md rounded-br-md"
        >
          <div className={style.inputContainer}>
            <input
              name="houseNumber"
              placeholder="Flat/House Number"
              className={style.inputField}
              type="text"
              value={formData.houseNumber}
              onChange={handleInputChange}
            />
            <label className={style.inputLabel}>Flat/House Number</label>
            <span className={style.inputHighlight}></span>
          </div>
          <div className={style.inputContainer}>
            <input
              name="streetAddress"
              placeholder="Street Address"
              className={style.inputField}
              type="text"
              value={formData.streetAddress}
              onChange={handleInputChange}
            />
            <label className={style.inputLabel}>Street Address</label>
            <span className={style.inputHighlight}></span>
          </div>
          <div className={style.inputContainer}>
            <input
              name="landmark"
              placeholder="Nearest Landmark"
              className={style.inputField}
              type="text"
              value={formData.landmark}
              onChange={handleInputChange}
            />
            <label className={style.inputLabel}>Nearest Landmark</label>
            <span className={style.inputHighlight}></span>
          </div>
          <div className={style.inputContainer}>
            <input
              name="city"
              placeholder="City/Town"
              className={style.inputField}
              type="text"
              value={formData.city}
              onChange={handleInputChange}
            />
            <label className={style.inputLabel}>City/Town</label>
            <span className={style.inputHighlight}></span>
          </div>
          <div className={style.inputContainer}>
            <input
              name="district"
              placeholder="District"
              className={style.inputField}
              type="text"
              value={formData.district}
              onChange={handleInputChange}
            />
            <label className={style.inputLabel}>District</label>
            <span className={style.inputHighlight}></span>
          </div>
          <div className={style.inputContainer}>
            <input
              name="state"
              placeholder="State"
              className={style.inputField}
              type="text"
              value={formData.state}
              onChange={handleInputChange}
            />
            <label className={style.inputLabel}>State</label>
            <span className={style.inputHighlight}></span>
          </div>
          <div className={style.inputContainer}>
            <input
              name="pincode"
              placeholder="Pincode"
              className={style.inputField}
              type="number"
              value={formData.pincode}
              onChange={handleInputChange}
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
    </div>
  );
};

export default SignupStep6;
