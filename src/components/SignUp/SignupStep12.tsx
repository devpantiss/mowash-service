import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { jsPDF } from "jspdf";
import animationData from "../assets/health.json";
import dynamic from "next/dynamic";


const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

interface SignupStep12Props {
  goToStep: (stepIndex: number) => void; // Pass a function to change the step
}

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
    // {
    //   name: "Alcohol Risk",
    //   image:
    //     "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1727183284/Screenshot_2024-09-24_at_6.28.15_PM_ld5mcs.png",
    //   image2:
    //     "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1727183284/Screenshot_2024-09-24_at_6.35.44_PM_lyruif.png",
    //   description:
    //     "This test evaluates liver function and other parameters to assess the risk of alcohol-related diseases.",
    //   discountedCost: "₹999",
    //   testsIncluded: [
    //     {
    //       name: "Liver Function Test (LFT)",
    //       icon: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1727249189/liver_function_onaw3h.jpg",
    //     },
    //     {
    //       name: "Gamma-Glutamyl Transferase (GGT)",
    //       icon: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1727249184/glycosylATED_HAEMO_klhpdk.jpg",
    //     },
    //     {
    //       name: "Blood Urea Nitrogen (BUN)",
    //       icon: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1727249184/glycosylATED_HAEMO_klhpdk.jpg",
    //     },
    //     {
    //       name: "Complete Blood Count (CBC)",
    //       icon: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1727249184/haemogram_ifibzh.jpg",
    //     },
    //   ],
    // },
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

    // Save the generated PDF
    pdf.save("BookingDetails.pdf");
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <div className="flex flex-col justify-center items-center bg-transparent p-6">
      <h2 className="text-4xl font-semibold text-white mt-6 lg:mb-0 mb-4">Health Checkup</h2>
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
                onClick={() => goToStep(6)}
                className="bg-gray-500 text-white py-2 px-6 rounded-lg hover:bg-gray-600"
              >
                back
              </button>
            </div>
          </div>
          {/* flow chart image */}
          <div className="lg:w-1/2 w-full flex justify-center items-center rounded-md mb-6 lg:mb-0">
          <Lottie
              animationData={animationData}
              loop={true}
              style={{
                width: "100%",
                height: "600px",
              }}
              className="block "
            />
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

          <div className="lg:w-2/3 lg:pl-8 w-full">
            <h2 className="text-3xl text-white font-bold mb-4 capitalize">
              {selectedCheckup}
            </h2>
            <p className="text-lg text-white mb-4">
              {checkups.find((c) => c.name === selectedCheckup)?.description}
            </p>
            <p className="text-2xl text-yellow-400 mb-4">
              Discounted Cost:{" "}
              {checkups.find((c) => c.name === selectedCheckup)?.discountedCost}
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
            <div className="flex justify-end mt-8">
              {!isBookingCreated ? (
                <button
                  onClick={handleCreateBooking}
                  disabled={!selectedDistrict || !selectedHospital}
                  className="bg-yellow-400 text-black py-2 px-6 rounded-lg hover:bg-yellow-500"
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
                className="ml-4 bg-gray-500 text-white py-2 px-6 rounded-lg hover:bg-gray-600"
              >
                Back
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HealthCheckup;
