// import React, { useState, useEffect, useRef } from "react";
// import dynamic from "next/dynamic";
// import "leaflet/dist/leaflet.css";
// import { Marker, useMap } from "react-leaflet";
// import { LatLngExpression, divIcon } from "leaflet";
// import { FiMapPin } from "react-icons/fi"; // Import the icon
// import style from "@/components/common/input/input.module.css"; // Import custom styles

// // Ensure dynamic import of Leaflet and its components
// // const MapContainer = dynamic(
// //   () => import("react-leaflet").then((mod) => mod.MapContainer),
// //   { ssr: false }
// // );
// // const TileLayer = dynamic(
// //   () => import("react-leaflet").then((mod) => mod.TileLayer),
// //   { ssr: false }
// // );

// // Create a custom icon using the raw SVG code of FiMapPin
// const customIcon = divIcon({
//   className: "", // No default leaflet styles
//   html: `<div style="font-size: 24px; color: red;">
//             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2c4.418 0 8 3.582 8 8 0 2.57-1.188 5.08-3.382 7.748A31.503 31.503 0 0112 22.729a31.503 31.503 0 01-4.618-4.98C5.188 15.08 4 12.57 4 10c0-4.418 3.582-8 8-8z" />
//               <circle cx="12" cy="10" r="3" stroke="black" strokeWidth="2" fill="red" />
//             </svg>
//          </div>`, // Icon's SVG code
//   iconSize: [50, 50], // Size of the custom marker
//   iconAnchor: [15, 30], // Anchor point so the icon points correctly
// });

// // DraggableMarker component with a custom icon
// const DraggableMarker = ({
//   latLng,
//   setLatLng,
// }: {
//   latLng: LatLngExpression;
//   setLatLng: (pos: LatLngExpression) => void;
// }) => {
//   const [position, setPosition] = useState(latLng);
//   const [draggable, setDraggable] = useState(true);

//   const map = useMap(); // Get access to map instance

//   useEffect(() => {
//     if (latLng) {
//       setPosition(latLng);
//       map.setView(latLng, 13); // Recenter the map on the selected location
//     }
//   }, [latLng]);

//   return (
//     <Marker
//       position={position}
//       draggable={draggable}
//       icon={customIcon}
//       eventHandlers={{
//         dragend: (e) => {
//           const marker = e.target;
//           const latLng = marker.getLatLng();
//           setPosition([latLng.lat, latLng.lng]);
//           setLatLng([latLng.lat, latLng.lng]);
//         },
//       }}
//     />
//   );
// };

// const SignupStep6: React.FC = () => {
//   const [latLng, setLatLng] = useState<LatLngExpression | null>([
//     20.2961, 85.8245,
//   ]); // Initial map center (Bhubaneswar)
//   const [formData, setFormData] = useState({
//     houseNumber: "",
//     streetAddress: "",
//     landmark: "",
//     city: "",
//     district: "",
//     state: "",
//     pincode: "",
//   });

//   const [isClient, setIsClient] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [searchResults, setSearchResults] = useState<any[]>([]);

//   const mapRef = useRef(null); // Reference to the map instance

//   useEffect(() => {
//     setIsClient(true); // Mark the component as client-side
//   }, []);

//   // Fetch address suggestions from Nominatim API
//   const fetchAddressSuggestions = async (query: string) => {
//     if (!query) {
//       setSearchResults([]);
//       return;
//     }

//     const response = await fetch(
//       `https://nominatim.openstreetmap.org/search?q=${query}&format=json&addressdetails=1`
//     );
//     const data = await response.json();
//     setSearchResults(data);
//   };

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleFormSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Address Data:", formData);
//   };

//   const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchQuery(e.target.value);
//     fetchAddressSuggestions(e.target.value);
//   };

//   const handleResultSelect = (result: any) => {
//     setSearchQuery(result.display_name);
//     const newLatLng: [number, number] = [
//       parseFloat(result.lat),
//       parseFloat(result.lon),
//     ];
//     setLatLng(newLatLng); // Update map center with selected location
//     setFormData({
//       houseNumber: result.address.house_number || "",
//       streetAddress: result.address.road || "",
//       landmark: "", // No landmark in Nominatim data
//       city:
//         result.address.city ||
//         result.address.town ||
//         result.address.village ||
//         "",
//       district: result.address.county || "",
//       state: result.address.state || "",
//       pincode: result.address.postcode || "",
//     });
//     setSearchResults([]); // Clear search results after selection
//   };

//   if (!isClient) {
//     // Render nothing on the server
//     return null;
//   }

//   return (
//     <div className="flex flex-col items-center lg:h-[90vh] justify-center bg-transparent">
//       <h2 className="text-5xl font-bold lg:text-center text-left text-white mb-12my-8">
//         Choose Your Location
//       </h2>

//       <div className="flex flex-col lg:flex-row justify-between w-full max-w-7xl">
//         {/* Map Container */}
//         <div className="lg:w-1/2 w-full h-[600px] ring-2 ring-white relative rounded-tl-md lg:rounded-bl-md rounded-tr-md lg:rounded-tr-none z-[500]">
//           {/* <MapContainer
//             center={latLng as LatLngExpression}
//             zoom={13}
//             scrollWheelZoom={true}
//             className="w-full h-full rounded-md"
//             ref={mapRef}
//           >
//             <TileLayer
//               url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//               attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
//             />
//             {latLng && (
//               <DraggableMarker latLng={latLng} setLatLng={setLatLng} />
//             )}
//           </MapContainer> */}
          
//           {/* Search Box */}
//           <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-[1000] w-3/4 lg:w-1/2">
//             <div className="relative flex items-center bg-white shadow-lg rounded-full ring-blue-600 ring-2 h-12 w-full px-4">
//               <input
//                 placeholder="Search Your Location"
//                 className="bg-transparent flex-grow focus:outline-none text-gray-600 px-2"
//                 type="text"
//                 value={searchQuery}
//                 onChange={handleSearchChange}
//               />
//             </div>

//             {/* Display search results */}
//             {searchResults.length > 0 && (
//               <ul className="absolute bg-white z-[1000] w-full max-h-60 overflow-auto shadow-lg mt-1">
//                 {searchResults.map((result, index) => (
//                   <li
//                     key={index}
//                     className="p-2 cursor-pointer hover:bg-gray-100"
//                     onClick={() => handleResultSelect(result)}
//                   >
//                     {result.display_name}
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </div>
//         </div>

//         {/* Address Form */}
//         <form
//           onSubmit={handleFormSubmit}
//           className="lg:w-1/2 w-full py-6 ring-2 lg:rounded-tr-md lg:rounded-br-md ring-white px-8 space-y-6"
//         >
//           {/* Replace with styled inputs */}
//           <div className={style.inputContainer}>
//             <input
//               name="houseNumber"
//               placeholder="House Number"
//               className={style.inputField}
//               type="text"
//               value={formData.houseNumber}
//               onChange={handleInputChange}
//             />
//             <label className={style.inputLabel}>House Number</label>
//             <span className={style.inputHighlight}></span>
//           </div>

//           <div className={style.inputContainer}>
//             <input
//               name="streetAddress"
//               placeholder="Street Address"
//               className={style.inputField}
//               type="text"
//               value={formData.streetAddress}
//               onChange={handleInputChange}
//             />
//             <label className={style.inputLabel}>Street Address</label>
//             <span className={style.inputHighlight}></span>
//           </div>

//           <div className={style.inputContainer}>
//             <input
//               name="landmark"
//               placeholder="Landmark"
//               className={style.inputField}
//               type="text"
//               value={formData.landmark}
//               onChange={handleInputChange}
//             />
//             <label className={style.inputLabel}>Landmark</label>
//             <span className={style.inputHighlight}></span>
//           </div>

//           <div className={style.inputContainer}>
//             <input
//               name="city"
//               placeholder="City"
//               className={style.inputField}
//               type="text"
//               value={formData.city}
//               onChange={handleInputChange}
//             />
//             <label className={style.inputLabel}>City</label>
//             <span className={style.inputHighlight}></span>
//           </div>

//           <div className={style.inputContainer}>
//             <input
//               name="district"
//               placeholder="District"
//               className={style.inputField}
//               type="text"
//               value={formData.district}
//               onChange={handleInputChange}
//             />
//             <label className={style.inputLabel}>District</label>
//             <span className={style.inputHighlight}></span>
//           </div>

//           <div className={style.inputContainer}>
//             <input
//               name="state"
//               placeholder="State"
//               className={style.inputField}
//               type="text"
//               value={formData.state}
//               onChange={handleInputChange}
//             />
//             <label className={style.inputLabel}>State</label>
//             <span className={style.inputHighlight}></span>
//           </div>

//           <div className={style.inputContainer}>
//             <input
//               name="pincode"
//               placeholder="Pincode"
//               className={style.inputField}
//               type="number"
//               value={formData.pincode}
//               onChange={handleInputChange}
//             />
//             <label className={style.inputLabel}>Pincode</label>
//             <span className={style.inputHighlight}></span>
//           </div>

//           <button
//             type="submit"
//             className="px-6 py-2 w-full bg-white text-blue-600 ring ring-blue-600 rounded-lg hover:bg-gray-100 transition"
//           >
//             Confirm Address
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignupStep6;
