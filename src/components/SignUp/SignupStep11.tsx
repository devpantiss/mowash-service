import { useState } from "react";
import {
  FaHeartbeat,
  FaShieldAlt,
  FaConciergeBell,
  FaMoneyBillWave,
} from "react-icons/fa";
import InsuranceSlider from "./slider/InsuranceSlider";
import Step11Banner from "./banner/Step11Banner";
import Card from "./card/Card";

type Section = "healthCard" | "pension" | "insurance" | "needs";

const SignupStep11: React.FC = () => {
  const [wantsWelfare, setWantsWelfare] = useState<boolean | null>(true);
  const [selectedSection, setSelectedSection] = useState<Section | null>(null);
  const [showConfirmation, setShowConfirmation] = useState<boolean>(false);
  const [showCSPPage, setShowCSPPage] = useState<boolean>(false);
  const [selectedCSP, setSelectedCSP] = useState<string>("");

  const organizations = {
    healthCard: [
      {
        name: "BSKY",
        premium: "₹874/month",
        cover: "₹7 Lac",
        hospitals: 187,
        renewalBonus: "₹10.5 Lac Renewal Bonus",
        imageUrl:
          "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726749584/BSKY_Logo_umdrqn.png",
        link: "https://example.com/view-plan",
      },
      {
        name: "Ayushman Bharat",
        premium: "₹874/month",
        cover: "₹7 Lac",
        hospitals: 187,
        renewalBonus: "₹10.5 Lac Renewal Bonus",
        imageUrl:
          "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726749583/ayushman_bharat_ngycj4.png",
        link: "https://example.com/view-plan",
      },
    ],
    pension: [
      {
        name: "NPS",
        premium: "₹1000/month",
        cover: "₹10 Lac",
        hospitals: 0,
        renewalBonus: "N/A",
        imageUrl:
          "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726749889/logo_uupd0f.png",
        link: "https://example.com/nps-plan",
      },
      {
        name: "EPF",
        premium: "₹1500/month",
        cover: "₹8 Lac",
        hospitals: 0,
        renewalBonus: "N/A",
        imageUrl:
          "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726749878/epf_bwvokn.jpg",
        link: "https://example.com/epf-plan",
      },
    ],
    insurance: [
      {
        name: "PMSBY",
        premium: "₹12/year",
        cover: "₹2 Lac",
        hospitals: 0,
        renewalBonus: "N/A",
        imageUrl:
          "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726750007/site-logo_k7ejwo.jpg",
        link: "https://example.com/pmsby-plan",
      },
      {
        name: "PMJJBY",
        premium: "₹330/year",
        cover: "₹2 Lac",
        hospitals: 0,
        renewalBonus: "N/A",
        imageUrl:
          "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726750296/a_bsuthv.jpg",
        link: "https://example.com/pmjjby-plan",
      },
    ],
    needs: [
      {
        name: "1 Nation 1 Ration Card",
        premium: "N/A",
        cover: "Food Security",
        hospitals: 0,
        renewalBonus: "N/A",
        imageUrl:
          "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726750295/1ration_ckvjas.jpg",
        link: "https://example.com/1nation-1ration-card",
      },
      {
        name: "LPG",
        premium: "₹100/month",
        cover: "Subsidized LPG",
        hospitals: 0,
        renewalBonus: "N/A",
        imageUrl:
          "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726750407/download_ejbyiw.png",
        link: "https://example.com/lpg-plan",
      },
    ],
  };

  const cardsData = [
    {
      title: "Health Insurance",
      tagline: "View details",
      text: "Get the best health insurance plan with extensive coverage.",
      bgImageSrc:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1727161748/Screenshot_2024-09-24_at_12.38.38_PM_kybqfh.png",
      icon: FaHeartbeat,
      onClick: () => handleSectionClick("healthCard"),
    },
    {
      title: "Pension",
      tagline: "Learn more",
      text: "Secure your retirement with our pension plans.",
      bgImageSrc:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1727161475/Screenshot_2024-09-24_at_12.33.55_PM_nbmxej.png",
      icon: FaMoneyBillWave,
      onClick: () => handleSectionClick("pension"),
    },
    {
      title: "Life Insurance",
      tagline: "Know more",
      text: "Protect your family with our life insurance plans.",
      bgImageSrc:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1727161985/Screenshot_2024-09-24_at_12.42.04_PM_ctxtld.png",
      icon: FaShieldAlt,
      onClick: () => handleSectionClick("insurance"),
    },
  ];

  const customerServicePoints = [
    {
      name: "CSP 1",
      contact: "John Doe",
      number: "9876543210",
      address: "123 Street, City",
    },
    {
      name: "CSP 2",
      contact: "Jane Smith",
      number: "9123456780",
      address: "456 Lane, Town",
    },
  ];

  const handleSectionClick = (section: Section) => {
    setSelectedSection(section);
    setShowConfirmation(false);
  };

  const handleCallRequest = () => {
    setShowCSPPage(true);
  };

  const handleProceed = () => {
    setShowConfirmation(true);
  };

  return (
    <div className="flex flex-col items-center justify-center bg-transparent">
      {wantsWelfare ? (
        <div className="bg-transparent rounded-lg p-8 w-full px-[100px]">
          {!selectedSection ? (
            <div className="h-full py-16">
              <h1 className="px-3 py-4 text-4xl mb-6 text-center font-bold text-white">
                Welfare Schemes
              </h1>

              <div className="grid grid-cols-3 gap-12">
                {cardsData.map((card, index) => (
                  <Card
                    key={index}
                    title={card.title}
                    tagline={card.tagline}
                    text={card.text}
                    bgImageSrc={card.bgImageSrc}
                    icon={card.icon}
                    onClick={card.onClick} // Pass the onClick prop
                  />
                ))}
              </div>

              <div>
                <Step11Banner />
              </div>
            </div>
          ) : showCSPPage ? (
            <div className="flex h-[100vh] py-16 gap-x-6">
              <div className="w-2/5 pt-8">
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Choose Your Nearest Customer Service Point
                </h2>
                <div className="mb-4">
                  <select
                    className="w-full p-2 rounded-lg border border-gray-300"
                    onChange={(e) => setSelectedCSP(e.target.value)}
                  >
                    <option value="">Select a CSP</option>
                    {customerServicePoints.map((csp) => (
                      <option key={csp.name} value={csp.name}>
                        {csp.name}
                      </option>
                    ))}
                  </select>
                </div>
                {selectedCSP && (
                  <div className="p-4 bg-gray-100 rounded-lg">
                    {customerServicePoints
                      .filter((csp) => csp.name === selectedCSP)
                      .map((csp) => (
                        <div key={csp.name}>
                          <p>
                            <strong>Person of Contact:</strong> {csp.contact}
                          </p>
                          <p>
                            <strong>Contact Number:</strong> {csp.number}
                          </p>
                          <p>
                            <strong>Address:</strong> {csp.address}
                          </p>
                        </div>
                      ))}
                    <button
                      onClick={handleProceed}
                      className="bg-green-500 text-white py-2 px-4 rounded-lg w-full hover:bg-green-600 mt-4"
                    >
                      Proceed to Generate Proposal
                    </button>
                  </div>
                )}
                <button
                  onClick={() => {
                    setShowCSPPage(false);
                    setSelectedSection(null);
                  }}
                  className="bg-gray-500 text-white py-2 px-4 rounded-lg mt-4 hover:bg-gray-600"
                >
                  Back
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col h-[100vh] justify-between items-center gap-x-8">
              <div className="w-full max-w-2xl pt-20">
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Available Options for{" "}
                  {selectedSection === "healthCard"
                    ? "Health Insurance"
                    : selectedSection === "pension"
                    ? "Pension"
                    : selectedSection === "insurance"
                    ? "Insurance"
                    : "Grameen Needs"}
                </h2>
                <div className="grid grid-cols-1 gap-y-12">
                  {organizations[selectedSection].map((organization) => (
                    <div
                      key={organization.name}
                      className="px-8 py-6 relative bg-gray-100 rounded-lg flex items-center space-x-4"
                    >
                      <div className="absolute -left-14 px-2 py-4 rounded-bl-md rounded-tl-md top-0 bg-gray-100">
                        <img
                          src={organization.imageUrl}
                          alt={organization.name}
                          className="h-16 w-16"
                        />
                      </div>

                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2">
                          {organization.name}
                        </h3>
                        <p className="text-gray-600">No Room Rent Limit</p>
                        <p className="text-gray-600">
                          {organization.renewalBonus}
                        </p>
                        <p className="text-gray-600">
                          Unlimited Restoration of cover
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="flex justify-between gap-x-4 items-center">
                          <p className="flex flex-col">
                            <strong className="text-xl">
                              {organization.cover}
                            </strong>{" "}
                            <p className="text-[12px]">Cover Amount</p>
                          </p>
                          <p className="flex flex-col">
                            <strong className="text-xl">
                              {organization.hospitals}
                            </strong>
                            <p className="text-[12px]">Cashless hospitals</p>
                          </p>
                        </div>
                        <button
                          onClick={handleCallRequest}
                          className="text-blue-500 shadow-lg shadow-blue-500 ring-2 ring-blue-500 py-2 px-4 rounded-lg w-full hover:bg-blue-100 mt-4"
                        >
                          {organization.premium}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <button
                    className="bg-gray-500 text-white py-2 px-6 rounded-lg hover:bg-gray-600"
                    onClick={() => setSelectedSection(null)}
                  >
                    Back
                  </button>
                </div>
              </div>
              <div className="w-full">
                <InsuranceSlider />
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-600">
            Thank you! You have chosen not to avail welfare schemes.
          </h2>
          <button
            onClick={() => setWantsWelfare(null)}
            className="bg-gray-500 text-white py-2 px-6 rounded-lg hover:bg-gray-600 mt-4"
          >
            Back
          </button>
        </div>
      )}
    </div>
  );
};

export default SignupStep11;
