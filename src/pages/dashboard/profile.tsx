import Layout from "@/components/Dash/Layout";
import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaUser,
  FaMapMarkerAlt,
  FaShieldAlt,
} from "react-icons/fa";

const user = {
  name: "John Doe",
  mowashID: "MOW123456",
  email: "john.doe@example.com",
  phoneNumber: "+91 9876543210",
  category: "Plumber",
  serviceSelected: "Water Maintenance",
  image:
    "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726535095/Pranab_kumar_Misra_expert_1_udboll.jpg",
  gender: "Male",
  dobOrAge: "01/01/1985 (39 years)",
  socialStatus: "General",
  economicStatus: "Middle Class",
  aadhaarNumber: "1234 5678 9101",
  panNumber: "ABCDE1234F",
  familyMembers: 4,
  address: {
    flatNumber: "123",
    street: "Main Street",
    landmark: "Near City Mall",
    city: "Cityname",
    district: "Districtname",
    state: "Statename",
    pincode: "123456",
  },
  kitDetails: [
    "Safety Helmet",
    "Reflective Vest",
    "Safety Shoes",
    "Gloves",
    "Protective Eyewear",
  ],
};

const Profile: React.FC = () => {
  return (
    <Layout>
      <div className="p-8 bg-transparent ring-2 ring-white text-white rounded-xl shadow-2xl max-w-7xl mx-5 my-5 lg:mx-auto">
        {/* Profile Header */}
        <div className="flex flex-col items-center mb-10">
          <img
            src={user.image}
            alt={user.name}
            className="w-40 h-40 rounded-full object-cover border-4 border-blue-400 shadow-lg mb-4"
          />
          <h1 className="text-4xl font-bold text-blue-300 mb-2">{user.name}</h1>
          <p className="text-xl text-gray-300">{user.mowashID}</p>
        </div>

        {/* Profile Section - Wrapper */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {/* Account Details */}
          <div className="bg-transparent ring-2 ring-white p-6 rounded-lg shadow-lg transition transform hover:scale-105">
            <h2 className="text-xl font-semibold text-blue-300 mb-4 flex items-center">
              <FaUser className="mr-2" /> Account Details
            </h2>
            <div className="space-y-3">
              <p className="text-lg">
                <span className="font-bold">Email ID:</span> {user.email}
              </p>
              <p className="text-lg">
                <span className="font-bold">Category:</span> {user.category}
              </p>
              <p className="text-lg">
                <span className="font-bold">Service Selected:</span>{" "}
                {user.serviceSelected}
              </p>
            </div>
          </div>

          {/* Personal Details */}
          <div className="bg-transparent ring-2 ring-white p-6 lg:col-span-2 rounded-lg shadow-lg transition transform hover:scale-105">
            <h2 className="text-xl font-semibold text-blue-300 mb-4 flex items-center">
              <FaShieldAlt className="mr-2" /> Personal Details
            </h2>
            <div className="">
              <div className="flex flex-col lg:gap-x-8 lg:flex-row lg:justify-between">
                <div>
                  <p className="text-lg">
                    <span className="font-bold">DOB/Age:</span> {user.dobOrAge}
                  </p>
                  <p className="text-lg">
                    <span className="font-bold">Gender:</span> {user.gender}
                  </p>
                  <p className="text-lg">
                    <span className="font-bold">Social Status:</span>{" "}
                    {user.socialStatus}
                  </p>
                  <p className="text-lg">
                    <span className="font-bold">Economic Status:</span>{" "}
                    {user.economicStatus}
                  </p>
                </div>
                <div>
                  <p className="text-lg">
                    <span className="font-bold">AADhaar Number:</span>{" "}
                    {user.aadhaarNumber}
                  </p>
                  <p className="text-lg">
                    <span className="font-bold">PAN Number:</span>{" "}
                    {user.panNumber}
                  </p>
                  <p className="text-lg">
                    <span className="font-bold">Family Members:</span>{" "}
                    {user.familyMembers}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Address Details */}
          <div className="bg-transparent ring-2 ring-white lg:col-span-2 p-6 rounded-lg shadow-lg transition transform hover:scale-105">
            <h2 className="text-xl font-semibold text-blue-300 mb-4 flex items-center">
              <FaMapMarkerAlt className="mr-2" /> Address Details
            </h2>
            <div className="space-y-3">
              <div className="flex flex-col lg:gap-x-8 lg:flex-row lg:justify-between">
                <div>
                  <p className="text-lg">
                    <span className="font-bold">Flat/House Number:</span>{" "}
                    {user.address.flatNumber}
                  </p>
                  <p className="text-lg">
                    <span className="font-bold">Street Address:</span>{" "}
                    {user.address.street}
                  </p>
                  <p className="text-lg">
                    <span className="font-bold">Landmark:</span>{" "}
                    {user.address.landmark}
                  </p>
                  <p className="text-lg">
                    <span className="font-bold">City:</span> {user.address.city}
                  </p>
                </div>
                <div>
                  <p className="text-lg">
                    <span className="font-bold">District:</span>{" "}
                    {user.address.district}
                  </p>
                  <p className="text-lg">
                    <span className="font-bold">State:</span>{" "}
                    {user.address.state}
                  </p>
                  <p className="text-lg">
                    <span className="font-bold">Pincode:</span>{" "}
                    {user.address.pincode}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Kit Details */}
          <div className="bg-transparent ring-2 ring-white p-6 rounded-lg shadow-lg transition transform hover:scale-105 col-span-1 ">
            <h2 className="text-xl font-semibold text-blue-300 mb-4 flex items-center">
              <FaShieldAlt className="mr-2" /> Kit Details
            </h2>
            <ul className="list-disc list-inside text-lg font-medium">
              {user.kitDetails.map((gear, index) => (
                <li key={index} className="mb-2">
                  {gear}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
