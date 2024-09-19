import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai'; // Close icon from react-icons
import { FaMale, FaFemale, FaGenderless, FaUser, FaHandHoldingUsd, FaRegIdCard } from 'react-icons/fa'; // Gender and status icons

interface FormData {
  name: string;
  age: number;
  gender: string;
  socialStatus: string;
  economicStatus: string;
  aadharNumber: string;
  aadharCard: File | null;
  profilePicture: File | null;
}

const SignupStep7: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    age: 18,
    gender: '',
    socialStatus: '',
    economicStatus: '',
    aadharNumber: '',
    aadharCard: null,
    profilePicture: null,
  });

  const [aadharPreview, setAadharPreview] = useState<string | null>(null);
  const [profilePreview, setProfilePreview] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files.length > 0) {
      const file = files[0];
      const previewUrl = URL.createObjectURL(file);

      if (name === 'aadharCard') {
        setAadharPreview(previewUrl);
      } else if (name === 'profilePicture') {
        setProfilePreview(previewUrl);
      }

      setFormData({
        ...formData,
        [name]: file,
      });
    }
  };

  const handleRemoveFile = (type: 'aadharCard' | 'profilePicture') => {
    if (type === 'aadharCard') {
      setAadharPreview(null);
      setFormData({
        ...formData,
        aadharCard: null,
      });
    } else if (type === 'profilePicture') {
      setProfilePreview(null);
      setFormData({
        ...formData,
        profilePicture: null,
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted', formData);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-3xl text-white font-bold text-left mb-6">Basic Information Form</h2>

      <form onSubmit={handleSubmit} className="w-full bg-transparent p-8 rounded-lg space-y-6">
        
        {/* First Row: Profile Picture and Name, Gender Selection */}
        <div className="grid grid-cols-2 gap-8">
          
          {/* Left Section: Profile Picture and Name */}
          <div>
            <label className="block text-sm text-white font-medium mb-2">Profile Picture</label>
            {!profilePreview ? (
              <input
                type="file"
                name="profilePicture"
                accept="image/*"
                onChange={handleFileChange}
                className="w-full bg-black text-white p-2 border rounded-lg"
                required
              />
            ) : (
              <div className="relative">
                <img src={profilePreview} alt="Profile Preview" className="mt-4 w-44 h-44 rounded-full object-cover" />
                <button
                  type="button"
                  onClick={() => handleRemoveFile('profilePicture')}
                  className="absolute top-0 right-0 bg-gray-800 text-white p-1 rounded-full"
                >
                  <AiOutlineClose size={18} />
                </button>
              </div>
            )}

            {/* Name Field */}
            <div className="mt-6">
              <label className="block text-sm text-white font-medium mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full text-white p-2 border bg-black rounded-lg"
                placeholder='Enter Your Name'
                required
              />
            </div>
          </div>

          {/* Right Section: Gender Selection */}
          <div>
            <div>
            <label className="block text-sm text-white font-medium mb-2">Gender</label>
            <div className="flex gap-4 mt-2">
              <div
                onClick={() => setFormData({ ...formData, gender: 'male' })}
                className={`cursor-pointer p-4 border rounded-lg flex flex-col items-center justify-center ${
                  formData.gender === 'male' ? 'bg-blue-100 text-blue-500 border-blue-600' : 'text-white'
                }`}
              >
                <FaMale size={52} />
                <p className="mt-2">Male</p>
              </div>
              <div
                onClick={() => setFormData({ ...formData, gender: 'female' })}
                className={`cursor-pointer p-4 border rounded-lg flex flex-col items-center justify-center ${
                  formData.gender === 'female' ? 'bg-blue-100 text-blue-500 border-blue-600' : 'text-white'
                }`}
              >
                <FaFemale size={52} />
                <p className="mt-2">Female</p>
              </div>
              <div
                onClick={() => setFormData({ ...formData, gender: 'other' })}
                className={`cursor-pointer p-4 border rounded-lg flex flex-col items-center justify-center ${
                  formData.gender === 'other' ? 'bg-blue-100 text-blue-500 border-blue-600' : 'text-white'
                }`}
              >
                <FaGenderless size={52} />
                <p className="mt-2">Other</p>
              </div>
            </div>
            </div>
             {/* Second Row: Age */}
        <div className="mt-12">
          <label className="block text-sm text-white font-medium mb-2">Age</label>
          <input
            type="range"
            name="age"
            value={formData.age}
            onChange={(e) => setFormData({ ...formData, age: Number(e.target.value) })}
            min="1"
            max="100"
            className="w-full"
          />
          <p className="text-white">Age: {formData.age}</p>
        </div>
          </div>
        </div>

       

        {/* Third Row: Social Status and Economic Status */}
        <div className="grid grid-cols-2 gap-8">
          {/* Left Section: Social Status */}
          <div>
            <label className="block text-sm text-white font-medium mb-2">Social Status</label>
            <div className="flex gap-4 mt-2">
              <div
                onClick={() => setFormData({ ...formData, socialStatus: 'Ultra Poor' })}
                className={`cursor-pointer p-4 border rounded-lg flex flex-col items-center justify-center ${
                  formData.socialStatus === 'Ultra Poor' ? 'bg-blue-100 text-blue-500 border-blue-600' : 'text-white'
                }`}
              >
                <FaHandHoldingUsd size={52} />
                <p className="mt-2">Ultra Poor</p>
              </div>
              <div
                onClick={() => setFormData({ ...formData, socialStatus: 'BPL' })}
                className={`cursor-pointer p-4 border rounded-lg flex flex-col items-center justify-center ${
                  formData.socialStatus === 'BPL' ? 'bg-blue-100 text-blue-500 border-blue-600' : 'text-white'
                }`}
              >
                <FaHandHoldingUsd size={52} />
                <p className="mt-2">BPL</p>
              </div>
              <div
                onClick={() => setFormData({ ...formData, socialStatus: 'APL' })}
                className={`cursor-pointer p-4 border rounded-lg flex flex-col items-center justify-center ${
                  formData.socialStatus === 'APL' ? 'bg-blue-100 text-blue-500 border-blue-600' : 'text-white'
                }`}
              >
                <FaHandHoldingUsd size={52} />
                <p className="mt-2">APL</p>
              </div>
            </div>
          </div>

          {/* Right Section: Economic Status */}
          <div>
            <label className="block text-sm text-white font-medium mb-2">Economic Status</label>
            <div className="flex gap-4 mt-2">
              <div
                onClick={() => setFormData({ ...formData, economicStatus: 'SC' })}
                className={`cursor-pointer p-4 border rounded-lg flex flex-col items-center justify-center ${
                  formData.economicStatus === 'SC' ? 'bg-blue-100 text-blue-500 border-blue-600' : 'text-white'
                }`}
              >
                <FaRegIdCard size={52} />
                <p className="mt-2">SC</p>
              </div>
              <div
                onClick={() => setFormData({ ...formData, economicStatus: 'ST' })}
                className={`cursor-pointer p-4 border rounded-lg flex flex-col items-center justify-center ${
                  formData.economicStatus === 'ST' ? 'bg-blue-100 text-blue-500 border-blue-600' : 'text-white'
                }`}
              >
                <FaRegIdCard size={52} />
                <p className="mt-2">ST</p>
              </div>
              <div
                onClick={() => setFormData({ ...formData, economicStatus: 'OBC' })}
                className={`cursor-pointer p-4 border rounded-lg flex flex-col items-center justify-center ${
                  formData.economicStatus === 'OBC' ? 'bg-blue-100 text-blue-500 border-blue-600' : 'text-white'
                }`}
              >
                <FaRegIdCard size={52} />
                <p className="mt-2">OBC</p>
              </div>
              <div
                onClick={() => setFormData({ ...formData, economicStatus: 'Open' })}
                className={`cursor-pointer p-4 border rounded-lg flex flex-col items-center justify-center ${
                  formData.economicStatus === 'Open' ? 'bg-blue-100 text-blue-500 border-blue-600' : 'text-white'
                }`}
              >
                <FaRegIdCard size={52} />
                <p className="mt-2">Open</p>
              </div>
            </div>
          </div>
        </div>

        {/* Fourth Row: Aadhar Number and Aadhar Card Upload */}
        <div className="grid grid-cols-2 gap-8">
          {/* Left Section: Aadhar Number */}
          <div>
            <label className="block text-sm text-white font-medium mb-2">Aadhar Number</label>
            <input
              type="text"
              name="aadharNumber"
              value={formData.aadharNumber}
              onChange={handleInputChange}
              className="w-full p-2 bg-black text-white border rounded-lg"
              required
              placeholder='Enter Your Aadhar Number'
            />
          </div>

          {/* Right Section: Aadhar Card Upload */}
          <div>
            <label className="block text-sm text-white font-medium mb-2">Aadhar Card</label>
            {!aadharPreview ? (
              <input
                type="file"
                name="aadharCard"
                accept="image/*"
                onChange={handleFileChange}
                className="w-full p-2 border bg-black text-white rounded-lg"
                required
              />
            ) : (
              <div className="relative">
                <img src={aadharPreview} alt="Aadhar Preview" className="mt-4 w-full h-full object-cover" />
                <button
                  type="button"
                  onClick={() => handleRemoveFile('aadharCard')}
                  className="absolute top-0 right-0 bg-gray-800 text-white p-1 rounded-full"
                >
                  <AiOutlineClose size={18} />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Submit Button */}
        {/* <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">Submit</button> */}
      </form>

      {/* Progress Bar */}
      <div className="fixed bottom-0 w-full h-2 bg-gray-200">
        <div className="h-2 bg-blue-600" style={{ width: '48%' }}></div>
      </div>
    </div>
  );
};

export default SignupStep7;
