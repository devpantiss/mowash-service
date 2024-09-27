import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";

// Dynamic imports for react-leaflet components to avoid SSR issues
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);

// Dynamic import for AnimatedNumbers to avoid SSR issues
const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false,
});

// District interface for managing data
interface District {
  name: string;
  lat: number;
  lng: number;
}

// Predefined districts in Odisha
const districts: District[] = [
  { name: "Bhubaneswar", lat: 20.2961, lng: 85.8245 },
  { name: "Cuttack", lat: 20.4625, lng: 85.8828 },
  { name: "Puri", lat: 19.8135, lng: 85.8312 },
  { name: "Rourkela", lat: 22.2604, lng: 84.8536 },
  { name: "Berhampur", lat: 19.3149, lng: 84.7941 },
  // Add more districts here
];

const EarningsEstimator = () => {
  const [hoursWorked, setHoursWorked] = useState(8); // Default to 8 hours
  const ratePerHour = 300;
  const [animatedEarnings, setAnimatedEarnings] = useState<number>(
    hoursWorked * ratePerHour
  );
  const [selectedDistrict, setSelectedDistrict] = useState<District>(
    districts[0]
  );
  const [center, setCenter] = useState<LatLngExpression>([
    selectedDistrict.lat,
    selectedDistrict.lng,
  ]);

  useEffect(() => {
    const targetEarnings = hoursWorked * ratePerHour;
    setAnimatedEarnings(targetEarnings);
  }, [hoursWorked]);

  useEffect(() => {
    setCenter([selectedDistrict.lat, selectedDistrict.lng]);
  }, [selectedDistrict]);

  return (
    <div
      style={{
        backgroundImage:
          'url("https://res.cloudinary.com/dgtc2fvgu/image/upload/v1727333126/vecteezy_water-drops-on-transparent-background-droplets_13717349-removebg_nbcggt.png")',
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col py-12 lg:flex-row justify-between items-center lg:items-start max-w-6xl mx-auto p-8 lg:py-12 space-y-8 lg:space-y-0 lg:space-x-12 pt-20">
        {/* Left Section: Earnings Display */}
        <div className="flex-1 bg-white/90 p-4 space-y-4">
          <h1 className="text-blue-600 text-3xl lg:text-5xl font-bold">
            Being a MoWash Engineer,
          </h1>
          <p className="text-2xl lg:text-3xl text-black font-semibold">You could earn</p>
          <div className="text-5xl flex gap-x-3 lg:text-7xl text-black font-bold">
            ₹
            <AnimatedNumbers
              includeComma
              animateToNumber={animatedEarnings}
              fontStyle={{ fontSize: 70 }}
            />
          </div>
          <p className="text-lg text-black">
            1 day working at an estimated ₹{animatedEarnings.toLocaleString()} a
            day
          </p>
          {/* Hours Worked Slider */}
          <div className="space-y-2">
            <div className="relative">
              <input
                type="range"
                min="1"
                max="24"
                value={hoursWorked}
                onChange={(e) => setHoursWorked(Number(e.target.value))}
                className="w-full h-2 bg-blue-500 rounded-lg appearance-none text-white cursor-pointer range-slider"
                style={{
                  WebkitAppearance: "none",
                  appearance: "none",
                  position: "relative",
                }}
              />
            </div>
            <p className="text-sm text-black">
              Adjust hours worked per day: {hoursWorked} hours
            </p>
          </div>
          {/* District Selection */}
          <div className="space-y-2">
            <label className="text-sm text-black">
              Select a District in Odisha:
            </label>
            <select
              className="w-full p-2 border border-blue-500 rounded-lg"
              value={selectedDistrict.name}
              onChange={(e) => {
                const district = districts.find(
                  (d) => d.name === e.target.value
                );
                if (district) setSelectedDistrict(district);
              }}
            >
              {districts.map((district) => (
                <option key={district.name} value={district.name}>
                  {district.name}
                </option>
              ))}
            </select>
          </div>
          <p className="text-sm text-black underline cursor-pointer">
            Learn how we estimate your earnings
          </p>
        </div>
        {/* Right Section: Map Display */}
        <div className="relative flex-1 w-full z-10 lg:w-1/2 h-[500px] bg-gray-200 rounded-lg">
          {typeof window !== "undefined" && (
            <MapContainer
              center={center}
              zoom={10}
              scrollWheelZoom={false}
              className="h-full z-10 w-full rounded-lg"
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={center} />
            </MapContainer>
          )}
        </div>
      </div>
    </div>
  );
};

export default EarningsEstimator;
