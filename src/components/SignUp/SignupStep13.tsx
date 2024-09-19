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
    <div className="flex justify-center items-center h-[70vh] bg-gradient-to-b from-black to-blue-800">
      <div className="bg-transparent p-8 rounded-lg w-full max-w-5xl">
        {/* Heading */}
        <h2 className="text-3xl text-white font-bold text-left mb-6">Bank Details</h2>

        {/* Form Grid Layout - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
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
        </div>

        {/* Second Row of the Form */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
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

          {/* Passbook Image Upload */}
          <div className="col-span-1 md:col-span-2">
            <label className="block text-white mb-2">Upload Passbook Image</label>
            {passbookImage ? (
              <div className="w-full flex justify-center">
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
