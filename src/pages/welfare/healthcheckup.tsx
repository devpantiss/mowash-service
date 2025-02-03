import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Layout from "@/components/Dash/Layout";
import { FaHeartbeat, FaPills, FaSyringe, FaCheckCircle } from "react-icons/fa";
import HeartRateChart from "@/components/Dash/HeartRateChart";
import Link from "next/link";

interface SignupStep12Props {
  goToStep: (stepIndex: number) => void;
}

const HealthCheckup: React.FC<SignupStep12Props> = ({ goToStep }) => {
  const userInfo = {
    preExistingConditions: ["Hypertension", "Diabetes", "Asthma"],
    currentMedications: ["Lisinopril", "Metformin", "Albuterol"],
    recentSurgery: "None",
    vaccinationStatus: "Fully Vaccinated",
    physicalLimitation: "None",
    visionHearingIssues: "No issues",
    smokingStatus: "Non-Smoker",
    alcoholConsumption: "Occasional",
  };

  const iconMap: { [key in keyof typeof userInfo]?: JSX.Element } = {
    preExistingConditions: <FaHeartbeat className="text-blue-600"/>,
    currentMedications: <FaPills className="text-blue-600"/>,
    recentSurgery: <FaSyringe className="text-blue-600"/>,
    vaccinationStatus: <FaCheckCircle className="text-blue-600"/>,
    physicalLimitation: <FaCheckCircle className="text-blue-600"/>,
    visionHearingIssues: <FaCheckCircle className="text-blue-600"/>,
    smokingStatus: <FaCheckCircle className="text-blue-600"/>,
    alcoholConsumption: <FaCheckCircle className="text-blue-600"/>,
  };

  return (
    <Layout>
      <div className="flex flex-col justify-center items-center bg-transparent p-6 min-h-screen">
        {/* Main Dashboard Container */}
        <div className="w-full lg:w-3/4 bg-transparent ring-2 ring-white rounded-2xl shadow-lg p-8">
          {/* Top Section - Profile Information */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Profile Section */}
            <div className="flex flex-col items-center justify-center text-center lg:text-left lg:border-r lg:border-gray-200 lg:pr-6">
              <img
                src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1738615222/WhatsApp_Image_2025-02-04_at_2.08.31_AM_dadcvi.jpg"
                alt="Profile"
                className="w-28 h-28 rounded-full object-cover mb-4 border-4 border-blue-600"
              />
              <h3 className="text-2xl font-semibold text-white">
                Gautam Samanta
              </h3>
              <p className="text-white">MoWash ID: MWC120</p>
              <p className="text-white">Age: 26</p>
            </div>

            {/* Middle Section - Vital Signs */}
            <div className="col-span-2">
              <h4 className="text-xl font-semibold text-white mb-4">
                Vital Signs
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-transparent ring-2 ring-white p-6 rounded-lg text-center shadow-sm">
                  <p className="text-blue-600">Heart Rate</p>
                  <p className="text-2xl font-semibold text-white">84 bpm</p>
                </div>
                <div className="bg-transparent ring-2 ring-white p-6 rounded-lg text-center shadow-sm">
                  <p className="text-blue-600">Blood Type</p>
                  <p className="text-2xl font-semibold text-white">O+</p>
                </div>
                <div className="bg-transparent ring-2 ring-white p-6 rounded-lg text-center shadow-sm">
                  <p className="text-blue-600">Weight</p>
                  <p className="text-2xl font-semibold text-white">70 kg</p>
                </div>
                <div className="bg-transparent ring-2 ring-white p-6 rounded-lg text-center shadow-sm">
                  <p className="text-blue-600">Height</p>
                  <p className="text-2xl font-semibold text-white">5&apos;9&quot;</p>
                </div>
              </div>

              <div className="mt-8 flex items-center justify-center">
                <Link
                  href="/welfare/book-healthcheckup"
                  className="text-white text-[18px] px-6 py-3 ring-2 ring-white rounded-md hover:bg-blue-600"
                >
                  Book Health Checkup
                </Link>
              </div>
            </div>
          </div>

          {/* Health Information Section */}
          <div className="mt-10">
            <h4 className="text-xl font-semibold text-white mb-4">
              Health Information
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.keys(userInfo).map((key) => (
                <div
                  key={key}
                  className="bg-transparent border border-gray-200 rounded-xl p-6 shadow-sm"
                >
                  <div className="flex items-center space-x-3">
                    {iconMap[key as keyof typeof userInfo]}
                    <h5 className="text-blue-600 font-medium capitalize">
                      {key.replace(/([A-Z])/g, " $1")}
                    </h5>
                  </div>
                  <div className="mt-2">
                    {Array.isArray(userInfo[key as keyof typeof userInfo]) ? (
                      (userInfo[key as keyof typeof userInfo] as string[]).map(
                        (item, index) => (
                          <p
                            key={index}
                            className="text-white text-sm ml-8 list-disc list-inside"
                          >
                            {item}
                          </p>
                        )
                      )
                    ) : (
                      <p className="text-white text-sm ml-8">
                        {userInfo[key as keyof typeof userInfo]}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Test Reports Section */}
          <div className="mt-10">
            <h4 className="text-xl font-semibold text-white mb-4">
              Test Reports
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-transparent border border-white rounded-xl p-6 shadow-sm">
                <p className="text-blue-600 font-medium">CT Scan - Abdomen</p>
                <p className="text-white text-sm">21st December 2020</p>
              </div>
              <div className="bg-transparent border border-white rounded-xl p-6 shadow-sm">
                <p className="text-blue-600 font-medium">Blood Test</p>
                <p className="text-white text-sm">25th December 2020</p>
              </div>
              <div className="bg-transparent border border-white rounded-xl p-6 shadow-sm">
                <p className="text-blue-600 font-medium">Pathology Test</p>
                <p className="text-white text-sm">26th December 2020</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HealthCheckup;
