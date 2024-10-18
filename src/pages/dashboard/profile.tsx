import Layout from "@/components/Dash/Layout";
import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaUser,
  FaMapMarkerAlt,
  FaShieldAlt,
  FaEdit,
  FaCamera,
} from "react-icons/fa";
import Modal from "react-modal";  // Import Modal component
import style from "@/components/common/input/input.module.css";

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

type EditModeKeys =
  | "personalDetails"
  | "addressDetails"
  | "kitDetails"
  | "profileImage";

const Profile: React.FC = () => {
  const [editMode, setEditMode] = useState({
    personalDetails: false,
    addressDetails: false,
    kitDetails: false,
    profileImage: false,
  });

  const [editedData, setEditedData] = useState(user);
  const [modalIsOpen, setModalIsOpen] = useState(false); // Modal state
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleToggleEdit = (section: EditModeKeys) => {
    setEditMode((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  // Handle image upload
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImage(e.target.files[0]);
    }
  };

  // Handle image save (when the user clicks "Save Image" in the modal)
  const handleSaveImage = () => {
    if (selectedImage) {
      const newImageUrl = URL.createObjectURL(selectedImage);
      setEditedData((prev) => ({ ...prev, image: newImageUrl }));
      closeModal();
    }
  };

  return (
    <Layout>
      <div className="p-8 bg-transparent ring-2 ring-white text-white rounded-xl shadow-2xl max-w-7xl mx-5 my-5 lg:mx-auto">
        {/* Profile Header */}
        <div className="flex flex-col relative items-center mb-10">
          <img
            src={editedData.image}
            alt={user.name}
            className="w-40 h-40 rounded-full object-cover border-4 border-blue-400 shadow-lg mb-4"
          />
          <button
            onClick={() => setModalIsOpen(true)}
            className="absolute bottom-[40%] right-[35%] lg:right-[44%] bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition"
          >
            <FaCamera className="text-2xl" />
          </button>
          {editMode.profileImage && (
            <div className="absolute bottom-[-80px]">
              <input
                type="text"
                name="image"
                value={editedData.image}
                onChange={handleInputChange}
                className="w-80 p-2 text-black rounded-lg"
                placeholder="Enter new image URL"
              />
            </div>
          )}
          <h1 className="text-4xl font-bold text-blue-300 mb-2">
            {editedData.name}
          </h1>
          <p className="text-xl text-gray-300">{user.mowashID}</p>
        </div>

        {/* Profile Section - Wrapper */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {/* Account Details */}
          <div className="bg-transparent ring-2 ring-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-blue-300 mb-4 flex items-center">
              <FaUser className="mr-2" /> Account Details
            </h2>
            <div className="space-y-3">
              <p className="text-lg">
                <span className="font-bold">Email ID:</span> {editedData.email}
              </p>
              <p className="text-lg">
                <span className="font-bold">Category:</span>{" "}
                {editedData.category}
              </p>
              <p className="text-lg">
                <span className="font-bold">Service Selected:</span>{" "}
                {editedData.serviceSelected}
              </p>
            </div>
          </div>

          {/* Personal Details */}
          <div className="bg-transparent ring-2 ring-white p-6 lg:col-span-2 rounded-lg shadow-lg relative">
            <h2 className="text-xl font-semibold text-blue-300 mb-4 flex items-center">
              <FaShieldAlt className="mr-2" /> Personal Details
            </h2>
            <button
              onClick={() => handleToggleEdit("personalDetails")}
              className="absolute top-4 right-4 text-blue-500 hover:text-blue-600"
            >
              <FaEdit />
            </button>
            {editMode.personalDetails ? (
              <div className="grid grid-cols-2 gap-4">
                <div className={style.inputContainer}>
                  <input
                    type="text"
                    name="dobOrAge"
                    value={editedData.dobOrAge}
                    onChange={handleInputChange}
                    className={style.inputField}
                    placeholder="DOB/Age"
                  />
                  <label className={style.inputLabel}>DOB/Age</label>
                  <span className={style.inputHighlight}></span>
                </div>
                <div className={style.inputContainer}>
                  <input
                    type="text"
                    name="gender"
                    value={editedData.gender}
                    onChange={handleInputChange}
                    className={style.inputField}
                    placeholder="Gender"
                  />
                  <label className={style.inputLabel}>Gender</label>
                  <span className={style.inputHighlight}></span>
                </div>
                <div className={style.inputContainer}>
                  <input
                    type="text"
                    name="socialStatus"
                    value={editedData.socialStatus}
                    onChange={handleInputChange}
                    className={style.inputField}
                    placeholder="Social Status"
                  />
                  <label className={style.inputLabel}>Social Status</label>
                  <span className={style.inputHighlight}></span>
                </div>
                <div className={style.inputContainer}>
                  <input
                    type="text"
                    name="economicStatus"
                    value={editedData.economicStatus}
                    onChange={handleInputChange}
                    className={style.inputField}
                    placeholder="Economic Status"
                  />
                  <label className={style.inputLabel}>Economic Status</label>
                  <span className={style.inputHighlight}></span>
                </div>
                <div className={style.inputContainer}>
                  <input
                    type="text"
                    name="aadhaarNumber"
                    value={editedData.aadhaarNumber}
                    onChange={handleInputChange}
                    className={style.inputField}
                    placeholder="AADhaar Number"
                  />
                  <label className={style.inputLabel}>AADhaar Number</label>
                  <span className={style.inputHighlight}></span>
                </div>
                <div className={style.inputContainer}>
                  <input
                    type="text"
                    name="panNumber"
                    value={editedData.panNumber}
                    onChange={handleInputChange}
                    className={style.inputField}
                    placeholder="PAN Number"
                  />
                  <label className={style.inputLabel}>PAN Number</label>
                  <span className={style.inputHighlight}></span>
                </div>
                <div className={style.inputContainer}>
                  <input
                    type="number"
                    name="familyMembers"
                    value={editedData.familyMembers}
                    onChange={handleInputChange}
                    className={style.inputField}
                    placeholder="Number of Family Members"
                  />
                  <label className={style.inputLabel}>Family Members</label>
                  <span className={style.inputHighlight}></span>
                </div>
              </div>
            ) : (
              <div>
                <div className="flex flex-col lg:gap-x-8 lg:flex-row lg:justify-between">
                  <div>
                    <p className="text-lg">
                      <span className="font-bold">DOB/Age:</span>{" "}
                      {editedData.dobOrAge}
                    </p>
                    <p className="text-lg">
                      <span className="font-bold">Gender:</span>{" "}
                      {editedData.gender}
                    </p>
                    <p className="text-lg">
                      <span className="font-bold">Social Status:</span>{" "}
                      {editedData.socialStatus}
                    </p>
                    <p className="text-lg">
                      <span className="font-bold">Economic Status:</span>{" "}
                      {editedData.economicStatus}
                    </p>
                  </div>
                  <div>
                    <p className="text-lg">
                      <span className="font-bold">AADhaar Number:</span>{" "}
                      {editedData.aadhaarNumber}
                    </p>
                    <p className="text-lg">
                      <span className="font-bold">PAN Number:</span>{" "}
                      {editedData.panNumber}
                    </p>
                    <p className="text-lg">
                      <span className="font-bold">Family Members:</span>{" "}
                      {editedData.familyMembers}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Address Details */}
          <div className="bg-transparent ring-2 ring-white lg:col-span-2 p-6 rounded-lg shadow-lg relative">
            <h2 className="text-xl font-semibold text-blue-300 mb-4 flex items-center">
              <FaMapMarkerAlt className="mr-2" /> Address Details
            </h2>
            <button
              onClick={() => handleToggleEdit("addressDetails")}
              className="absolute top-4 right-4 text-blue-500 hover:text-blue-600"
            >
              <FaEdit />
            </button>
            {editMode.addressDetails ? (
              <div>
                {/* Address details edit form */}
                <div className="grid grid-cols-2 gap-4">
                  <div className={style.inputContainer}>
                    <input
                      type="text"
                      name="flatNumber"
                      value={editedData.address.flatNumber}
                      onChange={handleInputChange}
                      className={style.inputField}
                      placeholder="Flat/House Number"
                    />
                    <label className={style.inputLabel}>
                      Flat/House Number
                    </label>
                    <span className={style.inputHighlight}></span>
                  </div>
                  <div className={style.inputContainer}>
                    <input
                      type="text"
                      name="street"
                      value={editedData.address.street}
                      onChange={handleInputChange}
                      className={style.inputField}
                      placeholder="Street Address"
                    />
                    <label className={style.inputLabel}>Street Address</label>
                    <span className={style.inputHighlight}></span>
                  </div>
                  <div className={style.inputContainer}>
                    <input
                      type="text"
                      name="landmark"
                      value={editedData.address.landmark}
                      onChange={handleInputChange}
                      className={style.inputField}
                      placeholder="Landmark"
                    />
                    <label className={style.inputLabel}>Landmark</label>
                    <span className={style.inputHighlight}></span>
                  </div>
                  <div className={style.inputContainer}>
                    <input
                      type="text"
                      name="city"
                      value={editedData.address.city}
                      onChange={handleInputChange}
                      className={style.inputField}
                      placeholder="City"
                    />
                    <label className={style.inputLabel}>City</label>
                    <span className={style.inputHighlight}></span>
                  </div>
                  <div className={style.inputContainer}>
                    <input
                      type="text"
                      name="district"
                      value={editedData.address.district}
                      onChange={handleInputChange}
                      className={style.inputField}
                      placeholder="District"
                    />
                    <label className={style.inputLabel}>District</label>
                    <span className={style.inputHighlight}></span>
                  </div>
                  <div className={style.inputContainer}>
                    <input
                      type="text"
                      name="state"
                      value={editedData.address.state}
                      onChange={handleInputChange}
                      className={style.inputField}
                      placeholder="State"
                    />
                    <label className={style.inputLabel}>State</label>
                    <span className={style.inputHighlight}></span>
                  </div>
                  <div className={style.inputContainer}>
                    <input
                      type="text"
                      name="pincode"
                      value={editedData.address.pincode}
                      onChange={handleInputChange}
                      className={style.inputField}
                      placeholder="Pincode"
                    />
                    <label className={style.inputLabel}>Pincode</label>
                    <span className={style.inputHighlight}></span>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <div className="flex flex-col lg:gap-x-8 lg:flex-row lg:justify-between">
                  <div>
                    <p className="text-lg">
                      <span className="font-bold">Flat/House Number:</span>{" "}
                      {editedData.address.flatNumber}
                    </p>
                    <p className="text-lg">
                      <span className="font-bold">Street Address:</span>{" "}
                      {editedData.address.street}
                    </p>
                    <p className="text-lg">
                      <span className="font-bold">Landmark:</span>{" "}
                      {editedData.address.landmark}
                    </p>
                    <p className="text-lg">
                      <span className="font-bold">City:</span>{" "}
                      {editedData.address.city}
                    </p>
                  </div>
                  <div>
                    <p className="text-lg">
                      <span className="font-bold">District:</span>{" "}
                      {editedData.address.district}
                    </p>
                    <p className="text-lg">
                      <span className="font-bold">State:</span>{" "}
                      {editedData.address.state}
                    </p>
                    <p className="text-lg">
                      <span className="font-bold">Pincode:</span>{" "}
                      {editedData.address.pincode}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Kit Details */}
          <div className="bg-transparent ring-2 ring-white p-6 rounded-lg shadow-lg transition transform hover:scale-105 col-span-1 relative">
            <h2 className="text-xl font-semibold text-blue-300 mb-4 flex items-center">
              <FaShieldAlt className="mr-2" /> Kit Details
            </h2>
            <button
              onClick={() => handleToggleEdit("kitDetails")}
              className="absolute top-4 right-4 text-blue-500 hover:text-blue-600"
            >
              <FaEdit />
            </button>
            {editMode.kitDetails ? (
              <div>
                {/* Kit details edit form */}
                <div className="grid grid-cols-1 gap-4">
                  {editedData.kitDetails.map((gear, index) => (
                    <div key={index} className={style.inputContainer}>
                      <input
                        type="text"
                        value={gear}
                        onChange={(e) =>
                          setEditedData((prev) => {
                            const newKitDetails = [...prev.kitDetails];
                            newKitDetails[index] = e.target.value;
                            return { ...prev, kitDetails: newKitDetails };
                          })
                        }
                        className={style.inputField}
                        placeholder="Kit Item"
                      />
                      <label className={style.inputLabel}>
                        Kit Item {index + 1}
                      </label>
                      <span className={style.inputHighlight}></span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <ul className="list-disc list-inside text-lg font-medium">
                {editedData.kitDetails.map((gear, index) => (
                  <li key={index} className="mb-2">
                    {gear}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Upload Profile Picture"
          ariaHideApp={false}
          className="modal-container"
          overlayClassName="modal-overlay"
        >
          <h2 className="text-2xl font-semibold mb-4">Upload Profile Picture</h2>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="file-input"
          />
          <div className="mt-4 flex justify-end">
            <button
              onClick={handleSaveImage}
              className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
            >
              Save Image
            </button>
            <button
              onClick={closeModal}
              className="ml-2 bg-red-600 py-2 px-4 rounded-lg hover:bg-gray-400"
            >
              Cancel
            </button>
          </div>
        </Modal>
      </div>
    </Layout>
  );
};

export default Profile;
