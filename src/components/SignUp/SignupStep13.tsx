import React, { useState } from 'react';

const SignupStep13: React.FC = () => {
  const [selectedBank, setSelectedBank] = useState<string>('');
  const [accountNumber, setAccountNumber] = useState<string>('');
  const [ifscCode, setIfscCode] = useState<string>('');
  const [branch, setBranch] = useState<string>('');
  const [passbookImage, setPassbookImage] = useState<string | null>(null);

  const banks = ['Select a bank', 'HDFC Bank', 'ICICI Bank', 'State Bank of India', 'Axis Bank', 'Punjab National Bank'];

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setPassbookImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex justify-center items-center lg:h-[100vh] bg-transparent">
      <div className="bg-transparent p-8 rounded-lg w-full px-20 grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Left Section - Static Image */}
        <div className="flex justify-center items-center p-4 rounded-lg">
          <img 
            src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1727262465/7990322-removebg-preview_xs70dx.png" 
            alt="Static Placeholder" 
            className="max-w-full h-auto rounded-lg bounce"
          />
        </div>

        {/* Right Section - Form */}
        <div className="bg-transparent p-8 rounded-lg">
          {/* Heading */}
          <h2 className="text-3xl text-white font-bold text-left mb-6">Bank Details</h2>

          {/* Form Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            {/* Bank Dropdown */}
            <div>
              <label className="block text-white mb-2">Select Bank</label>
              <select
                value={selectedBank}
                onChange={(e) => setSelectedBank(e.target.value)}
                className="w-full p-3 border bg-black text-white border-gray-300 rounded-lg"
              >
                {banks.map((bank) => (
                  <option key={bank} value={bank}>
                    {bank}
                  </option>
                ))}
              </select>
            </div>

            {/* Account Number */}
            <div>
              <label className="block text-white mb-2">Account Number</label>
              <input
                type="text"
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
                className="w-full p-3 border bg-black text-white border-gray-300 rounded-lg"
                placeholder="Enter account number"
              />
            </div>
          </div>

          {/* IFSC and Branch */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            {/* IFSC Code */}
            <div>
              <label className="block text-white mb-2">IFSC Code</label>
              <input
                type="text"
                value={ifscCode}
                onChange={(e) => setIfscCode(e.target.value)}
                className="w-full p-3 border bg-black text-white border-gray-300 rounded-lg"
                placeholder="Enter IFSC code"
              />
            </div>

            {/* Branch */}
            <div>
              <label className="block text-white mb-2">Branch Name</label>
              <input
                type="text"
                value={branch}
                onChange={(e) => setBranch(e.target.value)}
                className="w-full p-3 border bg-black text-white border-gray-300 rounded-lg"
                placeholder="Enter branch name"
              />
            </div>
          </div>

          {/* Passbook Image Upload */}
          <div className="mb-4">
            <label className="block text-white mb-2">Upload Passbook Image</label>
            {passbookImage ? (
              <div className="flex justify-center">
                <img src={passbookImage} alt="Passbook Preview" className="max-w-full h-auto rounded-lg" />
              </div>
            ) : (
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="w-full p-3 border bg-black text-white border-gray-300 rounded-lg"
              />
            )}
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <button className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupStep13;
