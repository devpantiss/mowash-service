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
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        {/* Heading */}
        <h2 className="text-2xl font-semibold text-center mb-6">Bank Details</h2>

        {/* Bank Dropdown */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Select name of bank</label>
          <select
            value={selectedBank}
            onChange={(e) => setSelectedBank(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg"
          >
            {banks.map((bank) => (
              <option key={bank} value={bank}>
                {bank}
              </option>
            ))}
          </select>
        </div>

        {/* Account Number */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Account Number</label>
          <input
            type="text"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg"
            placeholder="Enter your account number"
          />
        </div>

        {/* IFSC Code */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">IFSC Code</label>
          <input
            type="text"
            value={ifscCode}
            onChange={(e) => setIfscCode(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg"
            placeholder="Enter your IFSC code"
          />
        </div>

        {/* Branch */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Branch</label>
          <input
            type="text"
            value={branch}
            onChange={(e) => setBranch(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg"
            placeholder="Enter your branch name"
          />
        </div>

        {/* Passbook Image Upload */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Upload Passbook Image</label>
          {passbookImage ? (
            <div className="w-full flex justify-center">
              <img src={passbookImage} alt="Passbook Preview" className="max-w-full h-auto rounded-lg" />
            </div>
          ) : (
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="w-full p-3 border border-gray-300 rounded-lg"
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
  );
};

export default SignupStep13;
