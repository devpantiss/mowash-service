import { useState } from "react";
import Lottie from "lottie-react";
import Slider from "react-slick";
import animationData from "../../components/assets/health.json";
import Layout from "@/components/Dash/Layout";

const HealthCheckupBooking = () => {
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
    setSelectedHospital(""); // Reset hospital when district changes
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
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
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
                <Slider {...sliderSettings}>
                  {checkups
                    .find((c) => c.name === selectedCheckup)
                    ?.testsIncluded.map((test, index) => (
                      <div
                        key={index}
                        className="text-center bg-white h-44 rounded-md px-2 py-4"
                      >
                        <img
                          src={test.icon}
                          alt={test.name}
                          className="w-20 h-20 mx-auto mb-2"
                        />
                        <p className="text-black">{test.name}</p>
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
