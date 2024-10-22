import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { jsPDF } from "jspdf";
import animationData from "../assets/health.json";
import dynamic from "next/dynamic";
import style from "@/components/common/input/input.module.css";
import animation from "@/components/assets/doc2.json";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

interface SignupStep12Props {
  goToStep: (stepIndex: number) => void; // Function to change the step
}

interface HealthInfo {
  fullName: string;
  employeeId: string;
  department: string;
  jobTitle: string;
  phoneNumber: string;
  email: string;
  emergencyContactName: string;
  emergencyContactPhone: string;
  emergencyContactRelationship: string;
  dateOfBirth: string;
  gender: string;
  bloodType: string;
  weight: string;
  height: string;
  preExistingConditions: string;
  currentMedications: string;
  recentSurgeries: string;
  vaccinationStatus: string;
  physicalLimitations: string;
  visionHearingIssues: string;
  lastMedicalCheckup: string;
  lastOccupationalHealthScreening: string;
  smokingStatus: string;
  alcoholConsumption: string;
  exerciseFrequency: string;
  consent: boolean;
}

const HealthCheckup: React.FC<SignupStep12Props> = ({ goToStep }) => {
  // Step management
  const [isBooking, setIsBooking] = useState(false);

  // Health Information Form State
  const [healthInfo, setHealthInfo] = useState<HealthInfo>({
    fullName: "",
    employeeId: "",
    department: "",
    jobTitle: "",
    phoneNumber: "",
    email: "",
    emergencyContactName: "",
    emergencyContactPhone: "",
    emergencyContactRelationship: "",
    dateOfBirth: "",
    gender: "",
    bloodType: "",
    weight: "",
    height: "",
    preExistingConditions: "",
    currentMedications: "",
    recentSurgeries: "",
    vaccinationStatus: "",
    physicalLimitations: "",
    visionHearingIssues: "",
    lastMedicalCheckup: "",
    lastOccupationalHealthScreening: "",
    smokingStatus: "",
    alcoholConsumption: "",
    exerciseFrequency: "",
    consent: false,
  });

  // Handle form input changes
  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const target = e.target;
    const name = target.name;

    let value: string | boolean = target.value;

    if (target instanceof HTMLInputElement && target.type === "checkbox") {
      value = target.checked;
    }

    setHealthInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Booking State and Handlers (Existing functionality)
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
  const [hoveredTest, setHoveredTest] = useState<number | null>(null);

  const NextArrow = ({ onClick }: { onClick: () => void }) => (
    <button
      className="absolute z-10 -right-5 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white rounded-full px-4 py-3"
      onClick={onClick}
    >
      &gt;
    </button>
  );

  const PrevArrow = ({ onClick }: { onClick: () => void }) => (
    <button
      className="absolute z-10 -left-5 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white rounded-full px-4 py-3"
      onClick={onClick}
    >
      &lt;
    </button>
  );

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
          description:
            "Evaluates the levels of different blood components like RBC, WBC, platelets to diagnose infections, anemia, etc.",
        },
        {
          name: "Glucose - Fasting Blood (FBS)",
          icon: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1727249184/glucose_fasting_rqksfn.jpg",
          description:
            "Measures blood glucose levels after fasting to detect diabetes and monitor glucose control.",
        },
        {
          name: "Glycosylated Haemoglobin",
          icon: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1727249184/glycosylATED_HAEMO_klhpdk.jpg",
          description:
            "Determines average blood sugar levels over the past 2-3 months to assess diabetes control.",
        },
        {
          name: "Kidney Function Test (KFT)",
          icon: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1727249185/kidney._function_agimxa.jpg",
          description:
            "Evaluates kidney health by checking levels of urea, creatinine, and other indicators.",
        },
        {
          name: "Lipid Profile",
          icon: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1727249186/lipid_profile_zeeehj.jpg",
          description:
            "Measures cholesterol levels, including LDL, HDL, and triglycerides, to assess cardiovascular risk.",
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
          description:
            "Measures various components of blood, including red blood cells, white blood cells, and platelets, to help diagnose anemia, infection, and other diseases.",
        },
        {
          name: "Serum Iron",
          icon: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1727249186/lipid_profile_zeeehj.jpg",
          description:
            "Assesses the amount of iron in the blood to evaluate iron deficiency anemia or excess iron levels.",
        },
        {
          name: "Total Iron Binding Capacity (TIBC)",
          icon: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1727249592/vit_fyxpto.jpg",
          description:
            "Measures the blood's capacity to bind iron with transferrin and helps in diagnosing iron deficiency anemia.",
        },
        {
          name: "Ferritin",
          icon: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1727249491/ferritin_zd3fhk.jpg",
          description:
            "Indicates the level of stored iron in the body, helping to diagnose iron deficiency or overload.",
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
          description:
            "Measures the overall health of blood components to check for anemia, infection, and other disorders.",
        },
        {
          name: "Thyroid Stimulating Hormone (TSH)",
          icon: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1727249189/thyroid_j0pxgp.jpg",
          description:
            "Assesses the function of the thyroid gland by measuring the level of TSH in the blood, helping to diagnose thyroid disorders.",
        },
        {
          name: "Follicle Stimulating Hormone (FSH)",
          icon: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1727249189/thyroid_j0pxgp.jpg",
          description:
            "Measures the level of FSH to evaluate reproductive health and menstrual irregularities in women.",
        },
        {
          name: "Estradiol (E2)",
          icon: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1727249186/lipid_profile_zeeehj.jpg",
          description:
            "Evaluates the levels of estradiol, a form of estrogen, important for assessing ovarian function and menstrual cycle.",
        },
        {
          name: "Prolactin",
          icon: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1727249184/glycosylATED_HAEMO_klhpdk.jpg",
          description:
            "Measures prolactin levels in the blood, which can help in diagnosing conditions related to menstrual disorders or fertility issues.",
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
    if (selectedDistrict && selectedHospital) {
      setIsBookingCreated(true);
    }
  };

  const resetSelection = () => {
    setSelectedCheckup(null);
  };

  const handleSkip = () => {
    goToStep(8);
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
    pdf.text("MoWash Representative contact: +91 9876543210", 20, 80);
    pdf.text("Doctor: Dr. Mohanty", 20, 90);

    // Optionally include Health Information
    if (isFormSubmitted) {
      pdf.addPage();
      pdf.setFontSize(16);
      pdf.text("Employee Health Information", 20, 20);
      pdf.setFontSize(12);
      const info = [
        `Full Name: ${healthInfo.fullName}`,
        `Employee ID: ${healthInfo.employeeId}`,
        `Department: ${healthInfo.department}`,
        `Job Title: ${healthInfo.jobTitle}`,
        `Phone Number: ${healthInfo.phoneNumber}`,
        `Email: ${healthInfo.email}`,
        `Emergency Contact Name: ${healthInfo.emergencyContactName}`,
        `Emergency Contact Phone: ${healthInfo.emergencyContactPhone}`,
        `Relationship: ${healthInfo.emergencyContactRelationship}`,
        `Date of Birth: ${healthInfo.dateOfBirth}`,
        `Gender: ${healthInfo.gender}`,
        `Blood Type: ${healthInfo.bloodType}`,
        `Weight: ${healthInfo.weight}`,
        `Height: ${healthInfo.height}`,
        `Pre-existing Conditions: ${healthInfo.preExistingConditions}`,
        `Current Medications: ${healthInfo.currentMedications}`,
        `Recent Surgeries: ${healthInfo.recentSurgeries}`,
        `Vaccination Status: ${healthInfo.vaccinationStatus}`,
        `Physical Limitations: ${healthInfo.physicalLimitations}`,
        `Vision/Hearing Issues: ${healthInfo.visionHearingIssues}`,
        `Last Medical Checkup: ${healthInfo.lastMedicalCheckup}`,
        `Last Occupational Health Screening: ${healthInfo.lastOccupationalHealthScreening}`,
        `Smoking Status: ${healthInfo.smokingStatus}`,
        `Alcohol Consumption: ${healthInfo.alcoholConsumption}`,
        `Exercise Frequency: ${healthInfo.exerciseFrequency}`,
      ];

      info.forEach((line, index) => {
        pdf.text(line, 20, 30 + index * 10);
      });
    }

    // Save the generated PDF
    pdf.save("BookingDetails.pdf");
  };

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow onClick={() => {}} />,
    prevArrow: <PrevArrow onClick={() => {}} />,
  };

  // Form Submission Handler
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // You can add form validation here
    setIsBooking(true);
    setIsFormSubmitted(true); // Set the flag to true upon form submission
  };

  // Flag to indicate if form has been submitted
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  return (
    <div className="flex flex-col justify-center items-center bg-transparent p-6">
      <h2 className="text-5xl font-bold lg:text-center text-left text-white my-8">
        Health & Wellness
      </h2>

      {!isBooking ? (
        // Health Information Form
        <div className="flex justify-center w-full items-center">
          <div className="flex lg:w-2/3 flex-col w-full items-center ring-2 py-4 ring-white space-y-7 max-w-6xl md:h-full mb-10 rounded-lg mt-12 justify-center">
            <h3 className="text-3xl text-white mb-6">
              Employee Health Information
            </h3>
            <form onSubmit={handleFormSubmit} className="space-y-6">
              {/* Health Information */}
              <div>
                <h4 className="text-xl text-white mb-2">Health Information</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Gender Input */}
                  <div className={style.inputContainer}>
                    <select
                      name="gender"
                      value={healthInfo.gender}
                      onChange={handleInputChange}
                      required
                      className={style.inputField}
                    >
                      <option value="">Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                    <label className={style.inputLabel}>Gender</label>
                    <span className={style.inputHighlight}></span>
                  </div>

                  {/* Blood Type Input */}
                  <div className={style.inputContainer}>
                    <select
                      name="bloodType"
                      value={healthInfo.bloodType}
                      onChange={handleInputChange}
                      required
                      className={style.inputField}
                    >
                      <option value="">Blood Type</option>
                      <option value="A+">A+</option>
                      <option value="A-">A-</option>
                      <option value="B+">B+</option>
                      <option value="B-">B-</option>
                      <option value="AB+">AB+</option>
                      <option value="AB-">AB-</option>
                      <option value="O+">O+</option>
                      <option value="O-">O-</option>
                    </select>
                    <label className={style.inputLabel}>Blood Type</label>
                    <span className={style.inputHighlight}></span>
                  </div>

                  {/* Weight Input */}
                  <div className={style.inputContainer}>
                    <input
                      type="text"
                      name="weight"
                      value={healthInfo.weight}
                      onChange={handleInputChange}
                      placeholder="Weight"
                      className={style.inputField}
                    />
                    <label className={style.inputLabel}>Weight</label>
                    <span className={style.inputHighlight}></span>
                  </div>

                  {/* Weight Input */}
                  <div className={style.inputContainer}>
                    <input
                      type="text"
                      name="height"
                      value={healthInfo.height}
                      onChange={handleInputChange}
                      placeholder="Height"
                      className={style.inputField}
                    />
                    <label className={style.inputLabel}>Height</label>
                    <span className={style.inputHighlight}></span>
                  </div>

                  {/* Pre-existing Conditions Input */}
                  <div className={style.inputContainer}>
                    <textarea
                      name="preExistingConditions"
                      value={healthInfo.preExistingConditions}
                      onChange={handleInputChange}
                      placeholder="Pre-existing Medical Conditions"
                      className={style.inputField}
                    />
                    <label className={style.inputLabel}>
                      Pre-existing Medical Conditions
                    </label>
                    <span className={style.inputHighlight}></span>
                  </div>

                  {/* Current Medications Input */}
                  <div className={style.inputContainer}>
                    <textarea
                      name="currentMedications"
                      value={healthInfo.currentMedications}
                      onChange={handleInputChange}
                      placeholder="Current Medications"
                      className={style.inputField}
                    />
                    <label className={style.inputLabel}>
                      Current Medications
                    </label>
                    <span className={style.inputHighlight}></span>
                  </div>

                  {/* Recent Surgeries Input */}
                  <div className={style.inputContainer}>
                    <textarea
                      name="recentSurgeries"
                      value={healthInfo.recentSurgeries}
                      onChange={handleInputChange}
                      placeholder="Recent Surgeries or Hospitalizations"
                      className={style.inputField}
                    />
                    <label className={style.inputLabel}>
                      Recent Surgeries or Hospitalizations
                    </label>
                    <span className={style.inputHighlight}></span>
                  </div>

                  {/* Vaccination Status Input */}
                  <div className={style.inputContainer}>
                    <input
                      type="text"
                      name="vaccinationStatus"
                      value={healthInfo.vaccinationStatus}
                      onChange={handleInputChange}
                      placeholder="Vaccination Status (e.g., COVID-19, Flu)"
                      className={style.inputField}
                    />
                    <label className={style.inputLabel}>
                      Vaccination Status
                    </label>
                    <span className={style.inputHighlight}></span>
                  </div>
                </div>
              </div>

              {/* Occupational Health & Safety */}
              <div>
                <h4 className="text-xl text-white mb-2">
                  Occupational Health & Safety
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Physical Limitations Input */}
                  <div className={style.inputContainer}>
                    <textarea
                      name="physicalLimitations"
                      value={healthInfo.physicalLimitations}
                      onChange={handleInputChange}
                      placeholder="Physical Limitations (e.g., restricted mobility)"
                      className={style.inputField}
                    />
                    <label className={style.inputLabel}>
                      Physical Limitations
                    </label>
                    <span className={style.inputHighlight}></span>
                  </div>

                  {/* Vision/Hearing Issues Input */}
                  <div className={style.inputContainer}>
                    <textarea
                      name="visionHearingIssues"
                      value={healthInfo.visionHearingIssues}
                      onChange={handleInputChange}
                      placeholder="Vision/Hearing Issues"
                      className={style.inputField}
                    />
                    <label className={style.inputLabel}>
                      Vision/Hearing Issues
                    </label>
                    <span className={style.inputHighlight}></span>
                  </div>

                  {/* Last Medical Checkup Date Input */}
                  <div className={style.inputContainer}>
                    <input
                      type="date"
                      name="lastMedicalCheckup"
                      value={healthInfo.lastMedicalCheckup}
                      onChange={handleInputChange}
                      placeholder="Last Medical Checkup Date"
                      className={style.inputField}
                    />
                    <label className="text-white">Last Medical Checkup Date</label>
                    <span className={style.inputHighlight}></span>
                  </div>

                  {/* Last Occupational Health Screening Date Input */}
                  <div className={style.inputContainer}>
                    <input
                      type="date"
                      name="lastOccupationalHealthScreening"
                      value={healthInfo.lastOccupationalHealthScreening}
                      onChange={handleInputChange}
                      placeholder="Last Occupational Health Screening Date"
                      className={style.inputField}
                    />
                    <label className="text-white">
                      Last Occupational Health Screening Date
                    </label>
                    <span className={style.inputHighlight}></span>
                  </div>
                </div>
              </div>

              {/* Lifestyle Habits */}
              <div>
                <h4 className="text-xl text-white mb-2">
                  Lifestyle Habits (Optional)
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Smoking Status Select */}
                  <div className={style.inputContainer}>
                    <select
                      name="smokingStatus"
                      value={healthInfo.smokingStatus}
                      onChange={handleInputChange}
                      className={style.inputField}
                    >
                      <option value="">Smoking Status</option>
                      <option value="Smoker">Smoker</option>
                      <option value="Non-Smoker">Non-Smoker</option>
                      <option value="Former Smoker">Former Smoker</option>
                    </select>
                    <label className={style.inputLabel}>Smoking Status</label>
                    <span className={style.inputHighlight}></span>
                  </div>

                  {/* Alcohol Consumption Select */}
                  <div className={style.inputContainer}>
                    <select
                      name="alcoholConsumption"
                      value={healthInfo.alcoholConsumption}
                      onChange={handleInputChange}
                      className={style.inputField}
                    >
                      <option value="">Alcohol Consumption</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                      <option value="Occasionally">Occasionally</option>
                    </select>
                    <label className={style.inputLabel}>
                      Alcohol Consumption
                    </label>
                    <span className={style.inputHighlight}></span>
                  </div>
                </div>
              </div>

              {/* Consent and Declaration */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="consent"
                  checked={healthInfo.consent}
                  onChange={handleInputChange}
                  required
                  className="mr-2"
                />
                <label className="text-white">
                  I consent to the sharing of my medical information.
                </label>
              </div>

              {/* Form Actions */}
              <div className="flex justify-between">
                <button
                  type="submit"
                  className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={() => setIsBooking(true)}
                  className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                  Book Health Checkup
                </button>
              </div>
            </form>
          </div>
          <div className="w-full relative hidden lg:block lg:w-1/3">
            <Lottie
              animationData={animation}
              loop={true}
              style={{
                width: "100%",
                height: "600px",
              }}
              className="lg:fixed top-[30%] -right-[35%]"
            />
          </div>
        </div>
      ) : (
        // Booking Interface
        <div className="flex flex-col justify-center items-center w-full">
          {!selectedCheckup ? (
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
                    </button>
                  ))}
                </div>
                <div className="text-center mt-8">
                  <button
                    onClick={() => goToStep(8)}
                    className="px-6 py-2 bg-white text-blue-600 ring ring-blue-600 rounded-lg hover:bg-gray-100 transition"
                  >
                    Back
                  </button>
                </div>
              </div>
              {/* Flow chart image */}
              <div className="lg:w-1/2 w-full flex justify-center items-center rounded-md mb-6 lg:mb-0">
                <Lottie
                  animationData={animationData}
                  loop={true}
                  style={{
                    width: "100%",
                    height: "600px",
                  }}
                  className="block"
                />
              </div>
            </div>
          ) : (
            <div className="flex lg:h-[100vh] w-full flex-col lg:flex-row">
              <div className="lg:w-1/3 w-full mb-6">
                <img
                  src={
                    checkups.find((c) => c.name === selectedCheckup)?.image2 ||
                    ""
                  }
                  alt={selectedCheckup}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>

              <div className="lg:w-2/3 lg:pl-8 w-full">
                <h2 className="text-3xl text-white font-bold mb-4 capitalize">
                  {selectedCheckup}
                </h2>
                <p className="text-lg text-white mb-4">
                  {
                    checkups.find((c) => c.name === selectedCheckup)
                      ?.description
                  }
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
                  <h3 className="font-bold text-white text-lg">
                    Tests Included:
                  </h3>
                  <Slider {...sliderSettings} className="w-full">
                    {checkups
                      .find((c) => c.name === selectedCheckup)
                      ?.testsIncluded.map((test, index) => (
                        <div
                          key={index}
                          className="relative text-center bg-white h-44 rounded-md px-2 py-4 transition-transform duration-300 hover:scale-10 hover:bg-blue-100"
                          onMouseEnter={() => setHoveredTest(index)}
                          onMouseLeave={() => setHoveredTest(null)}
                        >
                          <img
                            src={test.icon}
                            alt={test.name}
                            className="w-20 h-20 mx-auto mb-2"
                          />
                          <p className="text-black">{test.name}</p>

                          {hoveredTest === index && (
                            <div className="absolute inset-0 bg-blue-600 bg-opacity-90 rounded-md p-4 flex items-center justify-center">
                              <p className="text-white text-sm">
                                {test.description}
                              </p>
                            </div>
                          )}
                        </div>
                      ))}
                  </Slider>
                </div>

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
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default HealthCheckup;
