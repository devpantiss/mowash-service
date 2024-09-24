import React, { useState } from 'react';

const HealthCheckup: React.FC = () => {
  // Define the type of hospitals object
  const hospitals: { [key: string]: string[] } = {
    Bhubaneswar: ['AIIMS Bhubaneswar', 'Capital Hospital', 'KIMS Hospital'],
    Cuttack: ['SCB Medical College', 'Acharya Harihar Hospital'],
    Puri: ['District Headquarters Hospital', 'Puri Government Hospital'],
    // Add more districts and hospitals as needed
  };

  // Set selectedDistrict to be one of the keys of the hospitals object
  const [selectedDistrict, setSelectedDistrict] = useState<keyof typeof hospitals | ''>('');
  const [selectedHospital, setSelectedHospital] = useState('');
  const [selectedCheckup, setSelectedCheckup] = useState<string | null>(null);
  const [isBookingCreated, setIsBookingCreated] = useState(false);

  const checkups = [
    {
      name: 'Full Body Checkup',
      image: 'https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726751404/fullbody_Magazine-02_dl7cqu.webp',
      image2:'https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726751403/FitCheckHero012020.2_t63ptt.webp',
      description:
        'A comprehensive health checkup that includes blood tests, imaging, and physical examination to assess overall health.',
      discountedCost: '₹1999',
    },
    {
      name: 'Alcohol Risk',
      image: 'https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726751308/Alcohol_magazine_bnluqd.webp',
      image2:'https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726751182/Alcohol_Hero_zgq3jp.webp',
      description:
        'This test evaluates liver function and other parameters to assess the risk of alcohol-related diseases.',
      discountedCost: '₹999',
    },
    {
      name: 'Anemia Profile',
      image: 'https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726751403/Anemia_Magazine_Web_new_xehmlm.webp',
      image2:'https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726751404/AnemiaHero_zrfac0.webp',
      description:
        'This profile includes a complete blood count and iron studies to detect and evaluate anemia.',
      discountedCost: '₹799',
    },
    {
      name: 'Womens Health',
      image: 'https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726751405/women_health_kj1mwd.webp',
      image2:'https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726751407/WomensHealthScreening_Hero_iyofao.webp',
      description:
        'A set of tests focused on reproductive and overall health for women, including hormone evaluation.',
      discountedCost: '₹1499',
    },
  ];

  const handleCheckupSelection = (checkup: string) => {
    setSelectedCheckup(checkup);
    setSelectedDistrict('');
    setSelectedHospital('');
    setIsBookingCreated(false); // Reset booking when a new checkup is selected
  };

  const handleDistrictChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDistrict(event.target.value as keyof typeof hospitals);
    setSelectedHospital(''); // Reset hospital selection when district changes
  };

  const handleHospitalChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedHospital(event.target.value);
  };

  const handleCreateBooking = () => {
    if (selectedDistrict && selectedHospital) {
      setIsBookingCreated(true);
    }
  };

  const resetSelection = () => {
    setSelectedCheckup(null); // Reset the selected checkup to show the cards again
  };

  return (
    <div className="flex h-[100vh] bg-transparent p-6">
      {!selectedCheckup ? (
        <div className="w-full grid grid-cols-4">
          {checkups.map((checkup) => (
            <button
              key={checkup.name}
              onClick={() => handleCheckupSelection(checkup.name)}
              className=" bg-transparent rounded-lg flex flex-col items-center justify-center text-center"
            >
              <img
                src={checkup.image}
                alt={checkup.name}
                className="w-[200px] object-cover rounded-md"
              />
            </button>
          ))}
        </div>
      ) : (
        <div className="flex w-full h-full">
          <div className="w-1/3">
            <img
              src={
                checkups.find((c) => c.name === selectedCheckup)?.image2 || ''
              }
              alt={selectedCheckup}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          <div className="w-2/3 pl-8">
            <h2 className="text-3xl text-white font-bold mb-4 capitalize">
              {selectedCheckup}
            </h2>
            <p className="text-lg text-white mb-4">
              {checkups.find((c) => c.name === selectedCheckup)?.description}
            </p>
            <p className="text-2xl text-yellow-400 mb-4">
              Discounted Cost: {checkups.find((c) => c.name === selectedCheckup)?.discountedCost}
            </p>

            <div className="mb-4">
              <label className="block text-white mb-2">Select your district:</label>
              <select
                value={selectedDistrict}
                onChange={handleDistrictChange}
                className="w-full p-3 rounded-lg bg-white"
              >
                <option value="">Select District</option>
                {Object.keys(hospitals).map((district) => (
                  <option key={district} value={district}>
                    {district}
                  </option>
                ))}
              </select>
            </div>

            {selectedDistrict && (
              <div className="mb-4">
                <label className="block text-white mb-2">
                  Select a hospital in {selectedDistrict}:
                </label>
                <select
                  value={selectedHospital}
                  onChange={handleHospitalChange}
                  className="w-full p-3 rounded-lg bg-white"
                >
                  <option value="">Select Hospital</option>
                  {hospitals[selectedDistrict]?.map((hospital) => (
                    <option key={hospital} value={hospital}>
                      {hospital}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {selectedDistrict && selectedHospital && (
              <button
                onClick={handleCreateBooking}
                className="px-6 py-3 mx-2 bg-green-500 text-white rounded-lg shadow-lg hover:bg-green-600 transition-colors"
              >
                Book Now
              </button>
            )}

            {isBookingCreated && (
              <div className="mt-6 bg-white p-4 rounded-lg shadow-lg">
                <h3 className="text-lg font-bold mb-2">Booking Details</h3>
                <p>Checkup: {selectedCheckup}</p>
                <p>Hospital: {selectedHospital}</p>
                <p>Date: {new Date().toLocaleDateString()}</p>
                <p>Time: {new Date().toLocaleTimeString()}</p>
                <p>Doctor: Dr. Mohanty</p>
                <p>MoWash Representative: +91 9876543210</p>
              </div>
            )}

            <button
              onClick={resetSelection}
              className="mt-4 px-6 py-3 bg-red-500 text-white rounded-lg shadow-lg hover:bg-red-600 transition-colors"
            >
              Back to Checkups
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HealthCheckup;
