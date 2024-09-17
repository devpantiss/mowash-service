import React, { useState } from 'react';
import { FaHeart, FaLungs, FaBrain, FaEye, FaTooth, FaStethoscope } from 'react-icons/fa';

const HealthCheckup: React.FC = () => {
  const [selectedDisease, setSelectedDisease] = useState<string | null>(null);
  const [symptoms, setSymptoms] = useState<string>('');
  const [checkupRequested, setCheckupRequested] = useState(false);
  const [fitnessReport, setFitnessReport] = useState<string | null>(null);

  const diseases = [
    { name: 'Heart Disease', icon: <FaHeart className="text-red-500 text-3xl" /> },
    { name: 'Lung Disease', icon: <FaLungs className="text-blue-500 text-3xl" /> },
    { name: 'Brain Disorder', icon: <FaBrain className="text-purple-500 text-3xl" /> },
    { name: 'Eye Issues', icon: <FaEye className="text-yellow-500 text-3xl" /> },
    { name: 'Dental Problems', icon: <FaTooth className="text-gray-500 text-3xl" /> },
    { name: 'None', icon: <FaStethoscope className="text-green-500 text-3xl" /> },
  ];

  const handleSelectDisease = (disease: string) => {
    setSelectedDisease(disease);
    setSymptoms(''); // Reset symptoms input when a new disease is selected
    setCheckupRequested(false); // Reset the checkup request
    setFitnessReport(null); // Reset the fitness report when a new disease is selected
  };

  const handleRequestCheckup = () => {
    if (!selectedDisease) return;
    setCheckupRequested(true);
  };

  const handleFitnessReportUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setFitnessReport(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex h-[70vh] bg-blue-600 p-6">
      {/* Left section: Grid of common diseases */}
      <div className="w-1/2 pr-6">
        <h2 className="text-3xl text-white font-bold mb-6">Health Checkup</h2>
        <div className="grid grid-cols-2 gap-6">
          {diseases.map((disease) => (
            <button
              key={disease.name}
              onClick={() => handleSelectDisease(disease.name)}
              className={`p-6 bg-white rounded-lg shadow-lg flex flex-col items-center justify-center text-center border 
                ${selectedDisease === disease.name ? 'border-black' : 'border-gray-300'}`}
            >
              {disease.icon}
              <h3 className="mt-4 text-lg font-semibold">{disease.name}</h3>
            </button>
          ))}
        </div>
      </div>

      {/* Right section: Input for symptoms or fitness report */}
      <div className="w-1/2 mt-4 pl-6">
        {selectedDisease && selectedDisease !== 'None' && (
          <>
            {/* Symptoms input */}
            <h4 className="text-lg text-white font-semibold mb-2">
              Please describe your symptoms for {selectedDisease}:
            </h4>
            <textarea
              value={symptoms}
              onChange={(e) => setSymptoms(e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
              rows={4}
              placeholder="Enter the details of your symptoms here..."
            />
          </>
        )}

        {/* Request Checkup Button */}
        {!checkupRequested && selectedDisease ? (
          <button
            onClick={handleRequestCheckup}
            className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition-colors"
          >
            Request a Checkup
          </button>
        ) : (
          checkupRequested && (
            <div className="mt-6">
              {/* Success Message */}
              <p className="text-lg text-white font-semibold mb-4">
                Your checkup request has been processed. Please upload your MWC Fitness Report.
              </p>

              {/* Upload Fitness Report */}
              <div className="flex justify-center">
                {fitnessReport ? (
                  <img src={fitnessReport} alt="MWC Fitness Report" className="w-64 h-auto rounded-lg shadow-lg" />
                ) : (
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFitnessReportUpload}
                    className="p-3 border text-white border-gray-300 rounded-lg"
                  />
                )}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default HealthCheckup;
