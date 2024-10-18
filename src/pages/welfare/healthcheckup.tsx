// components/Earnings.tsx
import React, { useState, ChangeEvent } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { jsPDF } from "jspdf";
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
import Link from "next/link";

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
              <Link
                href="/welfare/book-healthcheckup"
                className="text-white pointer px-3 py-2 ring-2 ring-white hover:bg-blue-600 rounded-md"
              >
                Book Health Checkup
              </Link>

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
        </div>
      </div>
    </Layout>
  );
};

export default HealthCheckup;
