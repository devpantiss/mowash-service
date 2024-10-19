import Layout from "@/components/Dash/Layout";
import React, { useEffect, useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaUser,
  FaMapMarkerAlt,
  FaShieldAlt,
  FaEdit,
  FaCamera,
} from "react-icons/fa";
import Modal from "react-modal"; // Import Modal component
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

interface Document {
  name: string;
  uploaded: boolean;
  file?: File;
  previewUrl?: string;
}

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
  const [documents, setDocuments] = useState<Document[]>([
    { name: "Aadhaar Card", uploaded: false },
    { name: "PAN Card", uploaded: false },
    { name: "Training Certificate", uploaded: false },
    { name: "Fitness Report", uploaded: false },
  ]);

  const [selectedImage2, setSelectedImage2] = useState<string | null>(null); // Modal state

  // Handle file upload and generate preview URL
  const handleFileChange2 = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      const updatedDocuments = [...documents];
      updatedDocuments[index] = {
        ...updatedDocuments[index],
        uploaded: true,
        file,
        previewUrl: URL.createObjectURL(file),
      };
      setDocuments(updatedDocuments);
    }
  };

  // Handle toggle between uploaded and not uploaded
  const handleToggle = (index: number) => {
    const updatedDocuments = [...documents];
    if (updatedDocuments[index].uploaded) {
      // If currently uploaded, toggle to not uploaded
      updatedDocuments[index] = {
        ...updatedDocuments[index],
        uploaded: false,
        file: undefined,
        previewUrl: undefined,
      };
    }
    setDocuments(updatedDocuments);
  };

  // Open image in modal
  const openModal2 = (imageUrl: string) => {
    setSelectedImage2(imageUrl);
  };

  // Close modal
  const closeModal2 = () => {
    setSelectedImage2(null);
  };

  // Cleanup object URLs to prevent memory leaks
  useEffect(() => {
    return () => {
      documents.forEach((doc) => {
        if (doc.previewUrl) {
          URL.revokeObjectURL(doc.previewUrl);
        }
      });
    };
  }, [documents]);

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

        <div className="bg-transparent text-white p-6">
          <h1 className="text-2xl font-bold mb-6">Documents</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {documents.map((doc, index) => (
              <div
                key={index}
                className="bg-transparent ring-2 ring-white p-6 rounded-lg shadow-md"
              >
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl text-white font-semibold">
                    {doc.name}
                  </h2>
                  <label className="flex items-center cursor-pointer">
                    {/* Toggle Switch */}
                    <div className="relative">
                      <input
                        type="checkbox"
                        className="sr-only"
                        checked={doc.uploaded}
                        onChange={() => handleToggle(index)}
                      />
                      <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
                      <div
                        className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition ${
                          doc.uploaded
                            ? "transform translate-x-full bg-blue-500"
                            : ""
                        }`}
                      ></div>
                    </div>
                    <div className="ml-3 text-gray-700 font-medium">
                      {doc.uploaded ? "Uploaded" : "Not Uploaded"}
                    </div>
                  </label>
                </div>

                {doc.uploaded ? (
                  <div>
                    {/* Document Preview */}
                    {doc.previewUrl ? (
                      <img
                        src={doc.previewUrl}
                        alt={`${doc.name} Preview`}
                        className="w-full h-64 object-cover rounded-md mb-4 cursor-pointer"
                        onClick={() => {
                          if (doc.previewUrl) {
                            openModal2(doc.previewUrl); // Ensure previewUrl is defined
                          }
                        }}
                      />
                    ) : (
                      <p className="text-yellow-500">No preview available.</p>
                    )}

                    <button className="text-blue-600 underline">
                      Edit Document
                    </button>
                  </div>
                ) : (
                  <div>
                    <p className="text-red-600 mb-4">
                      Document not uploaded. Please upload the document.
                    </p>
                    <label
                      htmlFor={`upload-${index}`}
                      className="labelFile flex rounded-md flex-col justify-center w-full h-[190px] items-center p-5 border-dotted border-2 text-white border-gray-400 bg-gray-800 cursor-pointer"
                    >
                      <span>
                        <svg
                          viewBox="0 0 184.69 184.69"
                          width="60px"
                          height="60px"
                        >
                          <g>
                            <g>
                              <g>
                                <path
                                  d="M149.968,50.186c-8.017-14.308-23.796-22.515-40.717-19.813
                                  C102.609,16.43,88.713,7.576,73.087,7.576c-22.117,0-40.112,17.994-40.112,40.115c0,0.913,0.036,1.854,0.118,2.834
                                  C14.004,54.875,0,72.11,0,91.959c0,23.456,19.082,42.535,42.538,42.535h33.623v-7.025H42.538
                                  c-19.583,0-35.509-15.929-35.509-35.509c0-17.526,13.084-32.621,30.442-35.105c0.931-0.132,1.768-0.633,2.326-1.392
                                  c0.555-0.755,0.795-1.704,0.644-2.63c-0.297-1.904-0.447-3.582-0.447-5.139c0-18.249,14.852-33.094,33.094-33.094
                                  c13.703,0,25.789,8.26,30.803,21.04c0.63,1.621,2.351,2.534,4.058,2.14c15.425-3.568,29.919,3.883,36.604,17.168
                                  c0.508,1.027,1.503,1.736,2.641,1.897c17.368,2.473,30.481,17.569,30.481,35.112c0,19.58-15.937,35.509-35.52,35.509H97.391
                                  v-7.025h44.761c23.459,0,42.538-19.079,42.538-42.535C184.69,71.545,169.884,53.901,149.968,50.186z"
                                  style={{ fill: "white" }}
                                ></path>
                              </g>
                              <g>
                                <path
                                  d="M108.586,90.201c1.406-1.403,1.406-3.672,0-5.075L88.541,65.078
                                  c-0.701-0.698-1.614-1.045-2.534-1.045l-0.064,0.011c-0.018,0-0.036-0.011-0.054-0.011c-0.931,0-1.85,0.361-2.534,1.045
                                  L63.31,85.127c-1.403,1.403-1.403,3.672,0,5.075c1.403,1.406,3.672,1.406,5.075,0L82.296,76.29v97.227
                                  c0,1.99,1.603,3.597,3.593,3.597c1.979,0,3.59-1.607,3.59-3.597V76.165l14.033,14.036
                                  C104.91,91.608,107.183,91.608,108.586,90.201z"
                                  style={{ fill: "white" }}
                                ></path>
                              </g>
                            </g>
                          </g>
                        </svg>
                      </span>
                      <p className="text-center">
                        Drag and drop your file here or click to select a file!
                      </p>
                      <input
                        className="hidden"
                        type="file"
                        id={`upload-${index}`}
                        onChange={(e) => handleFileChange2(e, index)}
                        accept="image/*"
                      />
                    </label>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Modal for Image Preview */}
          {selectedImage2 && (
            <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
              <div className="relative">
                <button
                  className="absolute -top-20 right-0 text-white p-2"
                  onClick={closeModal2}
                >
                  Close
                </button>
                <img
                  src={selectedImage2}
                  alt="Document Preview"
                  className="max-w-full max-h-full cursor-pointer"
                  onClick={closeModal2} // Close modal on image click
                />
              </div>
            </div>
          )}
        </div>

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Upload Profile Picture"
          ariaHideApp={false}
          className="modal-container"
          overlayClassName="modal-overlay"
        >
          <h2 className="text-2xl font-semibold mb-4">
            Upload Profile Picture
          </h2>
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
