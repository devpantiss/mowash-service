import Layout from "@/components/Dash/Layout";
import React from "react";

interface ProfileProps {
  user: {
    name: string;
    mowashID: string;
    email: string;
    phoneNumber: string;
    category: string;
    serviceSelected: string;
    image: string;
    gender: string;
    dobOrAge: string;
    socialStatus: string;
    economicStatus: string;
    aadhaarNumber: string;
    panNumber: string;
    familyMembers: number;
    address: {
      flatNumber: string;
      street: string;
      landmark: string;
      city: string;
      district: string;
      state: string;
      pincode: string;
    };
    kitDetails: string[];
  };
}

const user = {
  name: "John Doe",
  mowashID: "MOW123456",
  email: "john.doe@example.com",
  phoneNumber: "+91 9876543210",
  category: "Plumber",
  serviceSelected: "Water Maintenance",
  image: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726535095/Pranab_kumar_Misra_expert_1_udboll.jpg", // Profile Image URL
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

const Profile: React.FC<ProfileProps> = () => {
  return (
    <Layout>
      <div className="p-8 bg-transparent ring-2 ring-white text-white rounded-xl shadow-xl max-w-7xl mx-5 my-5 lg:mx-auto">
        {/* Profile Image and Name */}
        <div className="flex flex-col items-center mb-8">
          <img
            src={user.image}
            alt={user.name}
            className="w-40 h-40 rounded-full object-cover border-4 border-blue-500 shadow-md"
          />
          <h1 className="text-3xl font-bold mt-4">{user.name}</h1>
          <p className="text-xl text-gray-500">{user.mowashID}</p>
        </div>

        {/* Account Details */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 border-b-2 border-blue-400 pb-2">Account Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col">
              <strong className="text-2xl font-bold">Email ID:</strong>
              <p className="text-xl font-medium">{user.email}</p>
            </div>
            <div className="flex flex-col">
              <strong className="text-2xl font-bold">Category:</strong>
              <p className="text-xl font-medium">{user.category}</p>
            </div>
            <div className="flex flex-col">
              <strong className="text-2xl font-bold">Service Selected:</strong>
              <p className="text-xl font-medium">{user.serviceSelected}</p>
            </div>
          </div>
        </section>

        {/* Personal Details */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 border-b-2 border-blue-400 pb-2">Personal Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col">
              <strong className="text-2xl font-bold">DOB/Age:</strong>
              <p className="text-xl font-medium">{user.dobOrAge}</p>
            </div>
            <div className="flex flex-col">
              <strong className="text-2xl font-bold">Gender:</strong>
              <p className="text-xl font-medium">{user.gender}</p>
            </div>
            <div className="flex flex-col">
              <strong className="text-2xl font-bold">Social Status:</strong>
              <p className="text-xl font-medium">{user.socialStatus}</p>
            </div>
            <div className="flex flex-col">
              <strong className="text-2xl font-bold">Economic Status:</strong>
              <p className="text-xl font-medium">{user.economicStatus}</p>
            </div>
            <div className="flex flex-col">
              <strong className="text-2xl font-bold">AADhaar Number:</strong>
              <p className="text-xl font-medium">{user.aadhaarNumber}</p>
            </div>
            <div className="flex flex-col">
              <strong className="text-2xl font-bold">PAN Number:</strong>
              <p className="text-xl font-medium">{user.panNumber}</p>
            </div>
            <div className="flex flex-col">
              <strong className="text-2xl font-bold">Number of Family Members:</strong>
              <p className="text-xl font-medium">{user.familyMembers}</p>
            </div>
          </div>
        </section>

        {/* Address Details */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 border-b-2 border-blue-400 pb-2">Address Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col">
              <strong className="text-2xl font-bold">Flat/House Number:</strong>
              <p className="text-xl font-medium">{user.address.flatNumber}</p>
            </div>
            <div className="flex flex-col">
              <strong className="text-2xl font-bold">Street Address:</strong>
              <p className="text-xl font-medium">{user.address.street}</p>
            </div>
            <div className="flex flex-col">
              <strong className="text-2xl font-bold">Nearest Landmark:</strong>
              <p className="text-xl font-medium">{user.address.landmark}</p>
            </div>
            <div className="flex flex-col">
              <strong className="text-2xl font-bold">City/Town:</strong>
              <p className="text-xl font-medium">{user.address.city}</p>
            </div>
            <div className="flex flex-col">
              <strong className="text-2xl font-bold">District:</strong>
              <p className="text-xl font-medium">{user.address.district}</p>
            </div>
            <div className="flex flex-col">
              <strong className="text-2xl font-bold">State:</strong>
              <p className="text-xl font-medium">{user.address.state}</p>
            </div>
            <div className="flex flex-col">
              <strong className="text-2xl font-bold">Pincode:</strong>
              <p className="text-xl font-medium">{user.address.pincode}</p>
            </div>
          </div>
        </section>

        {/* Kit Details */}
        <section>
          <h2 className="text-2xl font-bold mb-4 border-b-2 border-blue-400 pb-2">Kit Details</h2>
          <ul className="list-disc list-inside text-xl font-semibold">
            {user.kitDetails.map((gear, index) => (
              <li key={index} className="mb-2">
                {gear}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </Layout>
  );
};

export default Profile;
