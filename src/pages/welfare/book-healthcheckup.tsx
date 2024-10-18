import { useState, useRef } from "react";
import Lottie from "lottie-react";
import Slider from "react-slick";
import animationData from "../../components/assets/health.json";
import Layout from "@/components/Dash/Layout";


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

const HealthCheckupBooking = () => {
  const [hoveredTest, setHoveredTest] = useState<number | null>(null);
  const sliderRef = useRef<Slider>(null);

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

  const [selectedCheckup, setSelectedCheckup] = useState<string | null>(null);
  const [selectedDistrict, setSelectedDistrict] = useState<string>("");
  const [selectedHospital, setSelectedHospital] = useState<string>("");
  const [isBookingCreated, setIsBookingCreated] = useState(false);

  const hospitals: { [key: string]: string[] } = {
    Bhubaneswar: ["AIIMS Bhubaneswar", "Capital Hospital", "KIMS Hospital"],
    Cuttack: ["SCB Medical College", "Acharya Harihar Hospital"],
    Puri: ["District Headquarters Hospital", "Puri Government Hospital"],
  };

  const handleCheckupSelection = (checkupName: string) => {
    setSelectedCheckup(checkupName);
  };

  const handleDistrictChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDistrict(e.target.value);
    setSelectedHospital("");
  };

  const handleHospitalChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedHospital(e.target.value);
  };

  const handleCreateBooking = () => {
    setIsBookingCreated(true);
  };

  const resetSelection = () => {
    setSelectedCheckup(null);
    setSelectedDistrict("");
    setSelectedHospital("");
    setIsBookingCreated(false);
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

  return (
    <Layout>
      <div className="flex flex-col justify-center items-center p-6 mx-auto w-full">
        <h2 className="text-5xl font-bold text-white my-8">
          Book Health Checkup
        </h2>
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
            </div>

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
          <div className="flex p-6 lg:h-[100vh] w-full flex-col lg:gap-x-12 lg:flex-row">
            <div className="lg:w-1/3 w-full mb-6">
              <img
                src={
                  checkups.find((c) => c.name === selectedCheckup)?.image2 || ""
                }
                alt={selectedCheckup || ""}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            <div className="lg:w-2/3 w-full space-y-4">
              <h1 className="font-bold text-white text-2xl">
                {selectedCheckup || ""}
              </h1>
              <p className="text-white">
                {checkups.find((c) => c.name === selectedCheckup)
                  ?.description || ""}
              </p>
              <p className="font-semibold text-white text-lg">
                Discounted Cost:{" "}
                {checkups.find((c) => c.name === selectedCheckup)
                  ?.discountedCost || ""}
              </p>

              {/* Add Slider for testsIncluded */}
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

              <div className="flex flex-col mt-4">
                <label
                  htmlFor="district"
                  className="text-white font-semibold mb-2"
                >
                  Select District:
                </label>
                <select
                  id="district"
                  value={selectedDistrict}
                  onChange={handleDistrictChange}
                  className="border border-gray-400 rounded-lg p-3 bg-white text-black focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all shadow-md hover:shadow-lg"
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
                <div className="flex flex-col mt-4">
                  <label
                    htmlFor="hospital"
                    className="text-white font-semibold mb-2"
                  >
                    Select Hospital:
                  </label>
                  <select
                    id="hospital"
                    value={selectedHospital}
                    onChange={handleHospitalChange}
                    className="border border-gray-400 rounded-lg p-3 bg-white text-black focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all shadow-md hover:shadow-lg"
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

              {selectedHospital && !isBookingCreated && (
                <div className="flex flex-col mt-4">
                  <button
                    onClick={handleCreateBooking}
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                  >
                    Create Booking
                  </button>
                </div>
              )}

              {isBookingCreated && (
                <div className="mt-8">
                  <h2 className="font-bold text-white text-xl">
                    Booking Created!
                  </h2>
                  <p className="text-white">
                    Your booking for {selectedCheckup} at {selectedHospital} in{" "}
                    {selectedDistrict} has been created.
                  </p>
                  <button className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
                    Download PDF
                  </button>
                </div>
              )}
              <button
                onClick={resetSelection}
                className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition mt-4"
              >
                Back
              </button>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default HealthCheckupBooking;
