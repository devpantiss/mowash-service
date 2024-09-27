import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai'; // Close icon from react-icons
import { FaMale, FaFemale, FaGenderless, FaHandHoldingUsd, FaRegIdCard } from 'react-icons/fa'; // Icons
import styles from '@/components/common/input/input.module.css'; // Import the styles from module.css

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
    console.log('Form submitted', formData);
  };

  return (
    <div className="flex flex-col py-36 items-center md:h-full lg:h-[100vh] justify-center">
      <h2 className="text-3xl text-white font-bold text-left mt-6 mb-2">Basic Information Form</h2>

      <form onSubmit={handleSubmit} className="w-full bg-transparent p-8 rounded-lg space-y-6">
        
        {/* Profile Picture */}
        <div className="grid grid-cols-2 gap-8">
          <div>
            <label className="block text-sm text-white font-medium mb-2">Profile Picture</label>
            {!profilePreview ? (
              <div className={styles.brutalist_container}>
                <input
                  type="file"
                  name="profilePicture"
                  accept="image/*"
                  onChange={handleFileChange}
                  className={`${styles.brutalist_input} ${styles.smooth_type}`}
                  required
                />
                <label className={styles.brutalist_label}>Upload Profile Picture</label>
              </div>
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
          </div>

          {/* Gender Selection */}
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
        </div>

        {/* Name and Age */}
        <div className="grid grid-cols-2 gap-8">
          <div className=''>
            <div className={styles.brutalist_container}>
              <input
                placeholder="Enter Your Name"
                className={`${styles.brutalist_input} ${styles.smooth_type}`}
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <label className={styles.brutalist_label}>Name</label>
            </div>
          </div>
          <div className='mt-4'>
            <div className={styles.brutalist_container}>
              <input
                placeholder="Enter Your Age"
                className={`${styles.brutalist_input} ${styles.smooth_type}`}
                type="range"
                name="age"
                min="1"
                max="100"
                value={formData.age}
                onChange={(e) => setFormData({ ...formData, age: Number(e.target.value) })}
              />
              <label className={styles.brutalist_label}>Age: {formData.age}</label>
            </div>
          </div>
        </div>

        {/* Social and Economic Status */}
        <div className="grid grid-cols-2 gap-8">
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
            </div>
          </div>
        </div>

        {/* Aadhar Number and Aadhar Card */}
        <div className="grid grid-cols-2 mt-12 gap-8">
          <div className={`${styles.brutalist_container} mt-6`}>
            <input
              placeholder="Enter Your Aadhar Number"
              className={`${styles.brutalist_input} ${styles.smooth_type}`}
              type="text"
              name="aadharNumber"
              value={formData.aadharNumber}
              onChange={handleInputChange}
              required
            />
            <label className={styles.brutalist_label}>Aadhar Number</label>
          </div>

          <div className={`${styles.brutalist_container} mt-6`}>
            {!aadharPreview ? (
              <input
                placeholder="Upload Aadhar Card"
                className={`${styles.brutalist_input} ${styles.smooth_type}`}
                type="file"
                name="aadharCard"
                accept="image/*"
                onChange={handleFileChange}
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
            <label className={styles.brutalist_label}>Aadhar Card</label>
          </div>
        </div>
      </form>

      {/* Progress Bar */}
      <div className="fixed bottom-0 w-full h-2 bg-gray-200">
        <div className="h-2 bg-blue-600" style={{ width: '48%' }}></div>
      </div>
    </div>
  );
};

export default SignupStep7;
