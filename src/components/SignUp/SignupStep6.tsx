import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';

// Ensure dynamic import of Leaflet and its components
const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
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
        houseNumber: '',
        streetAddress: '',
        landmark: '',
        locality: '',
        city: '',
        state: '',
        pincode: '',
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
        console.log('Address Data:', formData);
    };

    if (!isClient) {
        // Render nothing on the server
        return null;
    }

    return (
        <div className="flex flex-col items-center justify-start h-[80vh] bg-gray-100">
            <h2 className="text-2xl font-semibold mb-4">Choose your location</h2>

            <div className='flex justify-between items-center w-full max-w-5xl'>
                {/* Map Container */}
                <div className="w-1/2 h-[600px] mb-4">
                    <MapContainer
                        center={[51.505, -0.09]} // Default center of the map
                        zoom={13}
                        scrollWheelZoom={true}
                        className="w-full h-full"
                    >
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
                        />
                        {/* <LocationMarker setLatLng={setLatLng} /> */}
                    </MapContainer>
                </div>

                {/* Address Form */}
                <form onSubmit={handleFormSubmit} className="w-1/2 p-8">
                    <div className="space-y-2">
                        <label className="block text-sm font-medium">Flat/House Number</label>
                        <input
                            type="text"
                            name="houseNumber"
                            value={formData.houseNumber}
                            onChange={handleInputChange}
                            className="p-2 border rounded-lg w-full"
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-medium">Street Address</label>
                        <input
                            type="text"
                            name="streetAddress"
                            value={formData.streetAddress}
                            onChange={handleInputChange}
                            className="p-2 border rounded-lg w-full"
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-medium">Nearby Landmark</label>
                        <input
                            type="text"
                            name="landmark"
                            value={formData.landmark}
                            onChange={handleInputChange}
                            className="p-2 border rounded-lg w-full"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-medium">District/Locality</label>
                        <input
                            type="text"
                            name="locality"
                            value={formData.locality}
                            onChange={handleInputChange}
                            className="p-2 border rounded-lg w-full"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-medium">City/Town</label>
                        <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                            className="p-2 border rounded-lg w-full"
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-medium">State</label>
                        <input
                            type="text"
                            name="state"
                            value={formData.state}
                            onChange={handleInputChange}
                            className="p-2 border rounded-lg w-full"
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-medium">Pincode</label>
                        <input
                            type="text"
                            name="pincode"
                            value={formData.pincode}
                            onChange={handleInputChange}
                            className="p-2 border rounded-lg w-full"
                            required
                        />
                    </div>

                    <button type="submit" className="px-4 py-2 mt-4 bg-blue-500 text-white rounded-lg w-full">
                        Confirm Address
                    </button>
                </form>
            </div>


            {/* Progress Bar */}
            <div className="fixed bottom-0 w-full h-2 bg-gray-200">
                <div className="h-2 bg-black" style={{ width: '40%' }}></div>
            </div>
        </div>
    );
};

export default SignupStep6;
