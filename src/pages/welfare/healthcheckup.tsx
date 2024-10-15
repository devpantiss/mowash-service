// components/Earnings.tsx
import React, { useState, ChangeEvent } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { jsPDF } from "jspdf";
import animationData from "../../components/assets/health.json";
import dynamic from "next/dynamic";
import Layout from "@/components/Dash/Layout";
import {
  FaUser,
  FaBirthdayCake,
  FaAllergies,
  FaHeartbeat,
  FaPills,
  FaSyringe,
  FaCheckCircle,
} from "react-icons/fa"; // Importing icons
import HeartRateChart from "@/components/Dash/HeartRateChart";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

interface SignupStep12Props {
  goToStep: (stepIndex: number) => void; // Pass a function to change the step
}

interface UserInfo {
  name: string;
  age: number;
  knownAllergies: string[];
  preExistingConditions: string[];
  currentMedications: string[];
  recentSurgery: string;
  vaccinationStatus: string;
  physicalLimitation: string;
  visionHearingIssues: string;
  smokingStatus: string;
  alcoholConsumption: string;
  exerciseFrequency: string;
}

const CLOUDINARY_UPLOAD_PRESET = "mowash_service";
const CLOUDINARY_CLOUD_NAME = "dgtc2fvgu";
const CLOUDINARY_API_URL = `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`;

const HealthCheckup: React.FC<SignupStep12Props> = ({ goToStep }) => {
  const hospitals: { [key: string]: string[] } = {
    Bhubaneswar: ["AIIMS Bhubaneswar", "Capital Hospital", "KIMS Hospital"],
    Cuttack: ["SCB Medical College", "Acharya Harihar Hospital"],
    Puri: ["District Headquarters Hospital", "Puri Government Hospital"],
  };

  const [selectedDistrict, setSelectedDistrict] = useState<
    keyof typeof hospitals | ""
  >("");
  const [selectedHospital, setSelectedHospital] = useState("");
  const [selectedCheckup, setSelectedCheckup] = useState<string | null>(null);
  const [isBookingCreated, setIsBookingCreated] = useState(false);
  const [isDashboardVisible, setIsDashboardVisible] = useState(true);

  // New State Variables for Medical Details
  const [knownAllergies, setKnownAllergies] = useState("");
  const [preExistingConditions, setPreExistingConditions] = useState("");
  const [currentMedications, setCurrentMedications] = useState("");
  const [recentSurgery, setRecentSurgery] = useState("");
  const [vaccinationStatus, setVaccinationStatus] = useState("");
  const [visionHearingIssues, setVisionHearingIssues] = useState("");
  const [physicalLimitations, setPhysicalLimitations] = useState("");
  const [smokingStatus, setSmokingStatus] = useState("");
  const [alcoholConsumption, setAlcoholConsumption] = useState("");
  const [exerciseFrequency, setExerciseFrequency] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const checkups = [
    {
      name: "Full Body Checkup",
      image:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1727183284/Screenshot_2024-09-24_at_6.27.17_PM_lyi01a.png",
      image2:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1727183290/Screenshot_2024-09-24_at_6.36.21_PM_l4mefs.png",
      description:
        "A comprehensive health checkup that includes blood tests, imaging, and physical examination to assess overall health.",
      discountedCost: "₹1999",
      testsIncluded: [
        {
          name: "Complete Haemogram",
          icon: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1727249184/haemogram_ifibzh.jpg",
        },
        {
          name: "Glucose - Fasting Blood (FBS)",
          icon: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1727249184/glucose_fasting_rqksfn.jpg",
        },
        {
          name: "Glycosylated Haemoglobin",
          icon: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1727249184/glycosylATED_HAEMO_klhpdk.jpg",
        },
        {
          name: "Kidney Function Test (KFT)",
          icon: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1727249185/kidney._function_agimxa.jpg",
        },
        {
          name: "Lipid Profile",
          icon: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1727249186/lipid_profile_zeeehj.jpg",
        },
      ],
    },
    {
      name: "Anemia Profile",
      image:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1727183284/Screenshot_2024-09-24_at_6.27.56_PM_nz1u7n.png",
      image2:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1727183284/Screenshot_2024-09-24_at_6.35.58_PM_vm3cw2.png",
      description:
        "This profile includes a complete blood count and iron studies to detect and evaluate anemia.",
      discountedCost: "₹799",
      testsIncluded: [
        {
          name: "Complete Blood Count (CBC)",
          icon: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1727249184/glycosylATED_HAEMO_klhpdk.jpg",
        },
        {
          name: "Serum Iron",
          icon: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1727249186/lipid_profile_zeeehj.jpg",
        },
        {
          name: "Total Iron Binding Capacity (TIBC)",
          icon: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1727249592/vit_fyxpto.jpg",
        },
        {
          name: "Ferritin",
          icon: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1727249491/ferritin_zd3fhk.jpg",
        },
      ],
    },
    {
      name: "Womens Health",
      image:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1727183284/Screenshot_2024-09-24_at_6.27.33_PM_n7ljmk.png",
      image2:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1727183285/Screenshot_2024-09-24_at_6.36.10_PM_to3nlq.png",
      description:
        "A set of tests focused on reproductive and overall health for women, including hormone evaluation.",
      discountedCost: "₹1499",
      testsIncluded: [
        {
          name: "Complete Blood Count (CBC)",
          icon: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1727249184/haemogram_ifibzh.jpg",
        },
        {
          name: "Thyroid Stimulating Hormone (TSH)",
          icon: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1727249189/thyroid_j0pxgp.jpg",
        },
        {
          name: "Follicle Stimulating Hormone (FSH)",
          icon: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1727249189/thyroid_j0pxgp.jpg",
        },
        {
          name: "Estradiol (E2)",
          icon: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1727249186/lipid_profile_zeeehj.jpg",
        },
        {
          name: "Prolactin",
          icon: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1727249184/glycosylATED_HAEMO_klhpdk.jpg",
        },
      ],
    },
  ];

  const handleCheckupSelection = (checkup: string) => {
    setSelectedCheckup(checkup);
    setSelectedDistrict("");
    setSelectedHospital("");
    setIsBookingCreated(false);
  };

  const handleDistrictChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedDistrict(event.target.value as keyof typeof hospitals);
    setSelectedHospital("");
  };

  const handleHospitalChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedHospital(event.target.value);
  };

  const handleCreateBooking = () => {
    if (
      selectedDistrict &&
      selectedHospital &&
      knownAllergies &&
      preExistingConditions &&
      currentMedications &&
      recentSurgery &&
      vaccinationStatus &&
      visionHearingIssues &&
      physicalLimitations &&
      smokingStatus &&
      alcoholConsumption &&
      exerciseFrequency
    ) {
      setIsBookingCreated(true);
      setIsDashboardVisible(false);
    }
  };

  const resetSelection = () => {
    setSelectedCheckup(null);
    setIsBookingCreated(false);
    // Optionally reset medical details
    setKnownAllergies("");
    setPreExistingConditions("");
    setCurrentMedications("");
    setRecentSurgery("");
    setVaccinationStatus("");
    setVisionHearingIssues("");
    setPhysicalLimitations("");
    setSmokingStatus("");
    setAlcoholConsumption("");
    setExerciseFrequency("");
    setIsDashboardVisible(true);
  };
  // Generate and Download PDF
  const handleDownloadPdf = () => {
    const pdf = new jsPDF();
    const checkup = selectedCheckup || "";
    const hospital = selectedHospital || "";
    const date = new Date().toLocaleDateString();
    const time = new Date().toLocaleTimeString();

    // Add content to the PDF
    pdf.setFontSize(16);
    pdf.text("Booking Details", 20, 20);
    pdf.setFontSize(12);
    pdf.text(`Checkup: ${checkup}`, 20, 40);
    pdf.text(`Hospital: ${hospital}`, 20, 50);
    pdf.text(`Date: ${date}`, 20, 60);
    pdf.text(`Time: ${time}`, 20, 70);
    pdf.text("MoWash Representative Contact: +91 9876543210", 20, 80);
    pdf.text("Doctor: Dr. Mohanty", 20, 90);

    // Add Medical Information
    pdf.setFontSize(14);
    pdf.text("Medical Information", 20, 110);
    pdf.setFontSize(12);
    pdf.text(`Known Allergies: ${knownAllergies || "N/A"}`, 20, 120);
    pdf.text(
      `Pre-existing Medical Conditions: ${preExistingConditions || "N/A"}`,
      20,
      130
    );
    pdf.text(`Current Medications: ${currentMedications || "N/A"}`, 20, 140);
    pdf.text(
      `Recent Surgery/Hospitalization: ${recentSurgery || "N/A"}`,
      20,
      150
    );
    pdf.text(`Vaccination Status: ${vaccinationStatus || "N/A"}`, 20, 160);

    // Add Occupational Health & Safety
    pdf.setFontSize(14);
    pdf.text("Occupational Health & Safety", 20, 180);
    pdf.setFontSize(12);
    pdf.text(`Vision/Hearing Issues: ${visionHearingIssues || "N/A"}`, 20, 190);
    pdf.text(`Physical Limitations: ${physicalLimitations || "N/A"}`, 20, 200);

    // Add Lifestyle Habits
    pdf.setFontSize(14);
    pdf.text("Lifestyle Habits", 20, 220);
    pdf.setFontSize(12);
    pdf.text(`Smoking Status: ${smokingStatus || "N/A"}`, 20, 230);
    pdf.text(`Alcohol Consumption: ${alcoholConsumption || "N/A"}`, 20, 240);
    pdf.text(`Exercise Frequency: ${exerciseFrequency || "N/A"}`, 20, 250);

    // Save the generated PDF
    pdf.save("BookingDetails.pdf");
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // for screen sizes 1024px and below
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768, // for screen sizes 768px and below
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480, // for screen sizes 480px and below
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const userInfo = {
    knownAllergies: ["Peanuts", "Shellfish", "Pollen"],
    preExistingConditions: ["Hypertension", "Diabetes", "Asthma"],
    currentMedications: ["Lisinopril", "Metformin", "Albuterol"],
    recentSurgery: "None",
    vaccinationStatus: "Fully Vaccinated",
    physicalLimitation: "None",
    visionHearingIssues: "No issues",
    smokingStatus: "Non-Smoker",
    alcoholConsumption: "Occasional",
    exerciseFrequency: "3 times a week",
  };

  /// Icon mapping
  const iconMap: { [key in keyof typeof userInfo]?: JSX.Element } = {
    knownAllergies: <FaAllergies />,
    preExistingConditions: <FaHeartbeat />,
    currentMedications: <FaPills />,
    recentSurgery: <FaSyringe />,
    vaccinationStatus: <FaCheckCircle />,
    physicalLimitation: <FaCheckCircle />,
    visionHearingIssues: <FaCheckCircle />,
    smokingStatus: <FaCheckCircle />,
    alcoholConsumption: <FaCheckCircle />,
    exerciseFrequency: <FaCheckCircle />,
  };

  return (
    <Layout>
      <div className="flex flex-col justify-center items-center bg-transparent p-6">
        {!selectedCheckup ? (
          <div className="w-full gap-x-8 lg:h-[90vh] flex flex-col lg:justify-start items-center">
            <div className="w-full bg-transparent p-6">
              <div className="w-full flex flex-col items-center text-center">
                <h2 className="text-5xl font-bold text-white my-4">
                  Health Dashboard
                </h2>
                <p className="text-lg text-gray-300 mb-6">
                  Welcome to the health dashboard. Here you can view your health
                  summary and book a health checkup.
                </p>
                <div className="flex flex-col lg:flex-row gap-y-6 lg:gap-x-6">
                  <div className="w-full col-span-3 flex flex-col items-center text-left">
                    {/* Patient Information Card */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8 bg-transparent ring-2 ring-white rounded-lg shadow-lg p-8">
                      {/* Left Section - Patient Details */}
                      <div className="col-span-2 text-white flex flex-col items-start space-y-4">
                        <div className="flex justify-between w-full">
                          <h3 className="text-2xl font-semibold">
                            Cameron Williamson
                          </h3>
                          <span className="text-gray-400">
                            Registered on: 12.05.2019
                          </span>
                        </div>
                        <div className="space-y-1">
                          <p className="text-white">
                            <span className="font-bold">Birth date:</span>{" "}
                            01.02.1985
                          </p>
                          <p className="text-white">
                            <span className="font-bold">Gender:</span> Female
                          </p>
                          <p className="text-white">
                            <span className="font-bold">Age:</span> 37
                          </p>
                          <p className="text-white">
                            <span className="font-bold">Contact:</span> +44 1632
                            960097
                          </p>
                          <p className="text-white">
                            <span className="font-bold">Email:</span>{" "}
                            cameron_williamson85@gmail.com
                          </p>
                          <p className="text-white">
                            <span className="font-bold">Address:</span> 4517
                            Washington Ave., Manchester, Kentucky 39495
                          </p>
                        </div>
                      </div>

                      {/* Right Section - Last Measurements */}
                      <div className="col-span-1 bg-transparent ring-2 ring-white rounded-lg p-6">
                        <h4 className="text-xl font-bold mb-4 text-white">
                          Last Measurements
                        </h4>
                        <div className="flex flex-col space-y-2">
                          <div className="flex justify-between">
                            <span className="font-semibold text-gray-200">
                              Heart Rate:
                            </span>
                            <span className="text-gray-300">87 b.p.m</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-semibold text-gray-200">
                              Blood Pressure:
                            </span>
                            <span className="text-gray-300">120/80 mmHg</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-semibold text-gray-200">
                              Weight:
                            </span>
                            <span className="text-gray-300">64 kg</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-semibold text-gray-200">
                              Height:
                            </span>
                            <span className="text-gray-300">165 cm</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <HeartRateChart />
                </div>
                <div className="w-full flex flex-col items-center mt-8">
                  {/* User Info Display */}
                  <div className="grid grid-cols-1 mt-6 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                    {/* Additional Patient Info Cards */}
                    {Object.entries(userInfo).map(([key, value]) => (
                      <div
                        key={key}
                        className="bg-transparent ring-2 ring-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 flex flex-col items-center text-center"
                      >
                        <div className="text-3xl text-white mb-2">
                        {iconMap[key as keyof typeof iconMap]}
                        </div>
                        <h3 className="text-xl font-semibold text-white capitalize">
                          {key.replace(/([A-Z])/g, " ")}
                        </h3>
                        {/* Display values */}
                        {Array.isArray(value) ? (
                          <ul className="text-lg text-white list-none pl-5 mt-2">
                            {value.map((item: string, index: number) => (
                              <li key={index}>{item}</li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-lg text-white mt-2">{value}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-5xl font-bold text-white my-4">
              Book Health Checkup
            </h2>
            {/* health checkup booking */}
            <div className="w-full gap-x-8 lg:h-[90vh] max-w-8xl flex flex-col-reverse lg:flex-row lg:justify-start items-center">
              <div className="lg:w-1/2 w-full">
                <div className="grid lg:grid-cols-3 grid-cols-2 gap-y-4 gap-x-4">
                  {checkups.map((checkup) => (
                    <button
                      key={checkup.name}
                      onClick={() => handleCheckupSelection(checkup.name)}
                      className="bg-transparent rounded-lg flex flex-col items-center justify-center transform transition-transform duration-300 hover:scale-105 text-center"
                    >
                      <img
                        src={checkup.image}
                        alt={checkup.name}
                        className="lg:w-[300px] w-full object-cover rounded-md"
                      />
                      <span className="mt-2 text-white font-semibold">
                        {checkup.name}
                      </span>
                    </button>
                  ))}
                </div>
                <div className="text-center mt-8"></div>
              </div>
              {/* Flow chart animation */}
              <div className="lg:w-1/2 w-full flex justify-center items-center rounded-md mb-6 lg:mb-0">
                <Lottie
                  animationData={animationData}
                  loop={true}
                  style={{
                    width: "100%",
                    height: "600px",
                  }}
                  className="block z-0"
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="flex lg:h-[100vh] w-full flex-col lg:flex-row">
            <div className="lg:w-1/3 w-full mb-6">
              <img
                src={
                  checkups.find((c) => c.name === selectedCheckup)?.image2 || ""
                }
                alt={selectedCheckup}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="lg:w-2/3 w-full">
              <h2 className="text-3xl text-white font-bold mb-6 capitalize">
                {selectedCheckup}
              </h2>
              <p className="text-lg text-white mb-4">
                {checkups.find((c) => c.name === selectedCheckup)?.description}
              </p>
              <p className="text-2xl text-yellow-400 mb-4">
                Discounted Cost:{" "}
                {
                  checkups.find((c) => c.name === selectedCheckup)
                    ?.discountedCost
                }
              </p>

              {/* Slider for Tests Included */}
              <div className="mt-6">
                <h3 className="text-white text-2xl font-bold mb-4">
                  Tests Included
                </h3>
                <Slider {...sliderSettings}>
                  {checkups
                    .find((c) => c.name === selectedCheckup)
                    ?.testsIncluded.map((test) => (
                      <div key={test.name} className="p-4">
                        <div className="bg-white h-[150px] rounded-lg p-4 flex flex-col items-center">
                          <img
                            src={test.icon}
                            alt={test.name}
                            className="w-16 h-16 mb-2"
                          />
                          <p className="text-center text-black text-sm">
                            {test.name}
                          </p>
                        </div>
                      </div>
                    ))}
                </Slider>
                <div className="mb-4">
                  <label className="block text-white mb-2">
                    Select your district:
                  </label>
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
                      {hospitals[selectedDistrict].map((hospital) => (
                        <option key={hospital} value={hospital}>
                          {hospital}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
                {isBookingCreated && (
                  <div className="mt-6 bg-white p-4 rounded-lg shadow-lg">
                    <h3 className="text-lg font-bold mb-2">Booking Details</h3>
                    <div className="flex justify-between">
                      <p>
                        <strong>Checkup:</strong> {selectedCheckup}
                      </p>
                      <p>
                        <strong>Hospital:</strong> {selectedHospital}
                      </p>
                    </div>

                    <div className="flex justify-between">
                      <p>
                        <strong>Date:</strong> {new Date().toLocaleDateString()}
                      </p>
                      <p>
                        <strong>Time:</strong> {new Date().toLocaleTimeString()}
                      </p>
                    </div>
                    <div className="flex justify-between">
                      <p>
                        <strong>MoWash Representative contact:</strong> <br />
                        +91 9876543210
                      </p>
                      <p>
                        <strong>Doctor:</strong> Dr. Mohanty
                      </p>
                    </div>
                  </div>
                )}
                <div className="flex justify-end mt-8 space-x-4">
                  {!isBookingCreated ? (
                    <button
                      onClick={handleCreateBooking}
                      disabled={!selectedDistrict || !selectedHospital}
                      className={`${
                        !selectedDistrict || !selectedHospital
                          ? "bg-yellow-300 cursor-not-allowed"
                          : "bg-yellow-400 hover:bg-yellow-500"
                      } text-black py-2 px-6 rounded-lg transition`}
                    >
                      Create Booking
                    </button>
                  ) : (
                    <button
                      onClick={handleDownloadPdf}
                      className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600"
                    >
                      Download PDF
                    </button>
                  )}

                  <button
                    onClick={resetSelection}
                    className="px-6 py-2 bg-white text-blue-600 ring ring-blue-600 rounded-lg hover:bg-gray-100 transition"
                  >
                    Back
                  </button>
                </div>
              </div>

              {/* Booking Form */}
              {/* <div className="mt-8">
                <h3 className="text-white text-2xl font-bold mb-4">
                  Book Your Health Checkup
                </h3>

                Medical Information
                <div className="mb-6">
                  <h4 className="text-xl text-white font-semibold mb-2">
                    Medical Information
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-white text-sm font-semibold mb-1">
                        Known Allergies
                      </label>
                      <input
                        type="text"
                        value={knownAllergies}
                        onChange={(e) => setKnownAllergies(e.target.value)}
                        className="w-full p-2 rounded-lg bg-white text-white"
                        placeholder="Enter any known allergies"
                      />
                    </div>
                    <div>
                      <label className="block text-white text-sm font-semibold mb-1">
                        Pre-existing Medical Conditions
                      </label>
                      <textarea
                        value={preExistingConditions}
                        onChange={(e) =>
                          setPreExistingConditions(e.target.value)
                        }
                        className="w-full p-2 rounded-lg bg-white text-white"
                        placeholder="Describe any pre-existing conditions"
                      />
                    </div>
                    <div>
                      <label className="block text-white text-sm font-semibold mb-1">
                        Current Medications
                      </label>
                      <textarea
                        value={currentMedications}
                        onChange={(e) => setCurrentMedications(e.target.value)}
                        className="w-full p-2 rounded-lg bg-white text-white"
                        placeholder="List your current medications"
                      />
                    </div>
                    <div>
                      <label className="block text-white text-sm font-semibold mb-1">
                        Recent Surgery/Hospitalization
                      </label>
                      <textarea
                        value={recentSurgery}
                        onChange={(e) => setRecentSurgery(e.target.value)}
                        className="w-full p-2 rounded-lg bg-white text-white"
                        placeholder="Details about recent surgeries or hospitalizations"
                      />
                    </div>
                    <div>
                      <label className="block text-white text-sm font-semibold mb-1">
                        Vaccination Status
                      </label>
                      <input
                        type="text"
                        value={vaccinationStatus}
                        onChange={(e) => setVaccinationStatus(e.target.value)}
                        className="w-full p-2 rounded-lg bg-white text-white"
                        placeholder="Enter your vaccination status"
                      />
                    </div>
                  </div>
                </div>

                Occupational Health & Safety
                <div className="mb-6">
                  <h4 className="text-xl text-white font-semibold mb-2">
                    Occupational Health & Safety
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-white text-sm font-semibold mb-1">
                        Vision/Hearing Issues
                      </label>
                      <textarea
                        value={visionHearingIssues}
                        onChange={(e) => setVisionHearingIssues(e.target.value)}
                        className="w-full p-2 rounded-lg bg-white text-white"
                        placeholder="Describe any vision or hearing issues"
                      />
                    </div>
                    <div>
                      <label className="block text-white text-sm font-semibold mb-1">
                        Physical Limitations
                      </label>
                      <textarea
                        value={physicalLimitations}
                        onChange={(e) => setPhysicalLimitations(e.target.value)}
                        className="w-full p-2 rounded-lg bg-white text-white"
                        placeholder="Describe any physical limitations"
                      />
                    </div>
                  </div>
                </div>

                Lifestyle Habits
                <div className="mb-6">
                  <h4 className="text-xl text-white font-semibold mb-2">
                    Lifestyle Habits
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-white text-sm font-semibold mb-1">
                        Smoking Status
                      </label>
                      <select
                        value={smokingStatus}
                        onChange={(e) => setSmokingStatus(e.target.value)}
                        className="w-full p-2 rounded-lg bg-white text-white"
                      >
                        <option value="">Select Status</option>
                        <option value="Non-Smoker">Non-Smoker</option>
                        <option value="Former Smoker">Former Smoker</option>
                        <option value="Current Smoker">Current Smoker</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-white text-sm font-semibold mb-1">
                        Alcohol Consumption
                      </label>
                      <select
                        value={alcoholConsumption}
                        onChange={(e) => setAlcoholConsumption(e.target.value)}
                        className="w-full p-2 rounded-lg bg-white text-white"
                      >
                        <option value="">Select Consumption Level</option>
                        <option value="None">None</option>
                        <option value="Occasional">Occasional</option>
                        <option value="Regular">Regular</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-white text-sm font-semibold mb-1">
                        Exercise Frequency
                      </label>
                      <select
                        value={exerciseFrequency}
                        onChange={(e) => setExerciseFrequency(e.target.value)}
                        className="w-full p-2 rounded-lg bg-white text-white"
                      >
                        <option value="">Select Frequency</option>
                        <option value="Never">Never</option>
                        <option value="Rarely">Rarely</option>
                        <option value="Sometimes">Sometimes</option>
                        <option value="Often">Often</option>
                        <option value="Very Often">Very Often</option>
                      </select>
                    </div>
                  </div>
                </div>

                Hospital Selection
                <div className="flex flex-col mb-4">
                  <label htmlFor="district" className="block text-white mb-2">
                    Select District:
                  </label>
                  <select
                    id="district"
                    value={selectedDistrict}
                    onChange={handleDistrictChange}
                    className="bg-gray-800 text-white p-2 rounded-lg"
                  >
                    <option value="">Select a District</option>
                    {Object.keys(hospitals).map((district) => (
                      <option key={district} value={district}>
                        {district}
                      </option>
                    ))}
                  </select>
                </div>

                {selectedDistrict && (
                  <div className="flex flex-col mb-4">
                    <label htmlFor="hospital" className="block text-white mb-2">
                      Select a Hospital in {selectedDistrict}:
                    </label>
                    <select
                      id="hospital"
                      value={selectedHospital}
                      onChange={handleHospitalChange}
                      className="bg-gray-800 text-white p-2 rounded-lg"
                    >
                      <option value="">Select Hospital</option>
                      {hospitals[selectedDistrict].map((hospital) => (
                        <option key={hospital} value={hospital}>
                          {hospital}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                {isBookingCreated ? (
                  <div className="mt-6 bg-white p-4 rounded-lg shadow-lg text-black">
                    <h3 className="text-lg font-bold mb-2">Booking Details</h3>
                    <div className="flex justify-between">
                      <p>
                        <strong>Checkup:</strong> {selectedCheckup}
                      </p>
                      <p>
                        <strong>Hospital:</strong> {selectedHospital}
                      </p>
                    </div>
                    <div className="flex justify-between mt-2">
                      <p>
                        <strong>Date:</strong> {new Date().toLocaleDateString()}
                      </p>
                      <p>
                        <strong>Time:</strong> {new Date().toLocaleTimeString()}
                      </p>
                    </div>
                    <div className="flex justify-between mt-2">
                      <p>
                        <strong>MoWash Representative Contact:</strong>
                        <br />
                        +91 9876543210
                      </p>
                      <p>
                        <strong>Doctor:</strong> Dr. Mohanty
                      </p>
                    </div>

                    Display Medical Information
                    <div className="mt-4">
                      <h4 className="text-lg font-semibold">
                        Medical Information
                      </h4>
                      <p>
                        <strong>Known Allergies:</strong>{" "}
                        {knownAllergies || "N/A"}
                      </p>
                      <p>
                        <strong>Pre-existing Medical Conditions:</strong>{" "}
                        {preExistingConditions || "N/A"}
                      </p>
                      <p>
                        <strong>Current Medications:</strong>{" "}
                        {currentMedications || "N/A"}
                      </p>
                      <p>
                        <strong>Recent Surgery/Hospitalization:</strong>{" "}
                        {recentSurgery || "N/A"}
                      </p>
                      <p>
                        <strong>Vaccination Status:</strong>{" "}
                        {vaccinationStatus || "N/A"}
                      </p>
                    </div>

                    Occupational Health & Safety
                    <div className="mt-4">
                      <h4 className="text-lg font-semibold">
                        Occupational Health & Safety
                      </h4>
                      <p>
                        <strong>Vision/Hearing Issues:</strong>{" "}
                        {visionHearingIssues || "N/A"}
                      </p>
                      <p>
                        <strong>Physical Limitations:</strong>{" "}
                        {physicalLimitations || "N/A"}
                      </p>
                    </div>

                    Lifestyle Habits
                    <div className="mt-4">
                      <h4 className="text-lg font-semibold">
                        Lifestyle Habits
                      </h4>
                      <p>
                        <strong>Smoking Status:</strong>{" "}
                        {smokingStatus || "N/A"}
                      </p>
                      <p>
                        <strong>Alcohol Consumption:</strong>{" "}
                        {alcoholConsumption || "N/A"}
                      </p>
                      <p>
                        <strong>Exercise Frequency:</strong>{" "}
                        {exerciseFrequency || "N/A"}
                      </p>
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={handleCreateBooking}
                    className="bg-yellow-500 text-black py-2 px-6 rounded-lg hover:bg-yellow-600 mt-4"
                    disabled={
                      !selectedDistrict ||
                      !selectedHospital ||
                      !knownAllergies ||
                      !preExistingConditions ||
                      !currentMedications ||
                      !recentSurgery ||
                      !vaccinationStatus ||
                      !visionHearingIssues ||
                      !physicalLimitations ||
                      !smokingStatus ||
                      !alcoholConsumption ||
                      !exerciseFrequency
                    }
                  >
                    Create Booking
                  </button>
                )}

                Buttons
                <div className="flex justify-end mt-4">
                  {isBookingCreated ? (
                    <button
                      onClick={handleDownloadPdf}
                      className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 mr-4"
                    >
                      Download PDF
                    </button>
                  ) : null}

                  <button
                    onClick={resetSelection}
                    className="bg-white text-white py-2 px-6 rounded-lg hover:bg-gray-600"
                  >
                    Back
                  </button>
                </div>
              </div> */}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default HealthCheckup;
