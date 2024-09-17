import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai'; // Close icon from react-icons

interface FormData {
  name: string;
  age: string;
  gender: string;
  socialStatus: string;
  economicStatus: string;
  aadharCard: File | null;
  profilePicture: File | null;
}

const SignupStep7: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    age: '',
    gender: '',
    socialStatus: '',
    economicStatus: '',
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
    <div className="flex flex-col items-center justify-center h-[70vh]">
      <h2 className="text-3xl text-white font-bold text-left mb-6">Basic Information Form</h2>

      <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md space-y-4">
        {/* Profile Picture Upload */}
        <div>
          <label className="block text-sm text-blue-600 font-medium mb-2">Profile Picture</label>
          {!profilePreview ? (
            <input
              type="file"
              name="profilePicture"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full p-2 border rounded-lg"
              required
            />
          ) : (
            <div className="relative">
              <img src={profilePreview} alt="Profile Preview" className="mt-4 w-32 h-32 rounded-full object-cover" />
              <button
                type="button"
                onClick={() => handleRemoveFile('profilePicture')}
                className="absolute top-0 right-0 bg-gray-800 text-blue-600 p-1 rounded-full"
              >
                <AiOutlineClose size={18} />
              </button>
            </div>
          )}
        </div>

        {/* Name Field */}
        <div>
          <label className="block text-sm text-blue-600 font-medium mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>
        <div className='flex gap-x-6 justify-between'>
          {/* Gender Selection */}
          <div>
            <label className="block text-sm text-blue-600 font-medium mb-2">Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-lg"
              required
            >
              <option value="" disabled>Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Age Field */}
          <div>
            <label className="block text-sm text-blue-600 font-medium mb-2">Age</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-lg"
              required
            />
          </div>
        </div>

        <div className='flex gap-x-6 justify-between'>
          {/* Social Status Selection */}
          <div>
            <label className="block text-sm text-blue-600 font-medium mb-2">Social Status</label>
            <select
              name="socialStatus"
              value={formData.socialStatus}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-lg"
              required
            >
              <option value="" disabled>Select social status</option>
              <option value="SC">SC</option>
              <option value="ST">ST</option>
              <option value="OBC">OBC</option>
              <option value="Open">Open</option>
            </select>
          </div>

          {/* Economic Status Selection */}
          <div>
            <label className="block text-sm text-blue-600 font-medium mb-2">Economic Status</label>
            <select
              name="economicStatus"
              value={formData.economicStatus}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-lg"
              required
            >
              <option value="" disabled>Select economic status</option>
              <option value="Ultra Poor">Ultra Poor</option>
              <option value="BPL">BPL</option>
              <option value="APL">APL</option>
            </select>
          </div>
        </div>

        {/* Aadhar Card Upload */}
        <div>
          <label className="block text-sm text-blue-600 font-medium mb-2">Aadhar Card</label>
          {!aadharPreview ? (
            <input
              type="file"
              name="aadharCard"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full p-2 border rounded-lg"
              required
            />
          ) : (
            <div className="relative">
              <img src={aadharPreview} alt="Aadhar Preview" className="mt-4 w-full h-full object-cover" />
              <button
                type="button"
                onClick={() => handleRemoveFile('aadharCard')}
                className="absolute top-0 right-0 bg-gray-800 text-blue-600 p-1 rounded-full"
              >
                <AiOutlineClose size={18} />
              </button>
            </div>
          )}
        </div>

        

        {/* Submit Button
        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
          Submit
        </button> */}
      </form>

      {/* Progress Bar */}
      <div className="fixed bottom-0 w-full h-2 bg-gray-200">
        <div className="h-2 bg-blue-600" style={{ width: '48%' }}></div>
      </div>
    </div>
  );
};

export default SignupStep7;
