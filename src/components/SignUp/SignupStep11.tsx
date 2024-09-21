import { useState } from "react";
import { FaHeartbeat, FaShieldAlt, FaConciergeBell, FaMoneyBillWave } from "react-icons/fa";

type Section = "healthCard" | "pension" | "insurance" | "needs";

const SignupStep11: React.FC = () => {
  const [wantsWelfare, setWantsWelfare] = useState<boolean | null>(null);
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
        imageUrl: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726749584/BSKY_Logo_umdrqn.png", // Replace with the actual image path or URL
        link: "https://example.com/view-plan", // Replace with actual URL
      },
      {
        name: "Ayushman Bharat",
        premium: "₹874/month",
        cover: "₹7 Lac",
        hospitals: 187,
        renewalBonus: "₹10.5 Lac Renewal Bonus",
        imageUrl: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726749583/ayushman_bharat_ngycj4.png", // Replace with the actual image path or URL
        link: "https://example.com/view-plan", // Replace with actual URL
      },
      // Add more health insurance plans here if needed
    ],
    pension: [
      {
        name: "NPS",
        premium: "₹1000/month",
        cover: "₹10 Lac",
        hospitals: 0, // Not applicable for pensions
        renewalBonus: "N/A",
        imageUrl: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726749889/logo_uupd0f.png", // Replace with the actual image path or URL
        link: "https://example.com/nps-plan", // Replace with actual URL
      },
      {
        name: "EPF",
        premium: "₹1500/month",
        cover: "₹8 Lac",
        hospitals: 0, // Not applicable for pensions
        renewalBonus: "N/A",
        imageUrl: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726749878/epf_bwvokn.jpg", // Replace with the actual image path or URL
        link: "https://example.com/epf-plan", // Replace with actual URL
      },
    ],
    insurance: [
      {
        name: "PMSBY",
        premium: "₹12/year",
        cover: "₹2 Lac",
        hospitals: 0, // Not applicable
        renewalBonus: "N/A",
        imageUrl: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726750007/site-logo_k7ejwo.jpg", // Replace with the actual image path or URL
        link: "https://example.com/pmsby-plan", // Replace with actual URL
      },
      {
        name: "PMJJBY",
        premium: "₹330/year",
        cover: "₹2 Lac",
        hospitals: 0, // Not applicable
        renewalBonus: "N/A",
        imageUrl: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726750296/a_bsuthv.jpg", // Replace with the actual image path or URL
        link: "https://example.com/pmjjby-plan", // Replace with actual URL
      },
    ],
    needs: [
      {
        name: "1 Nation 1 Ration Card",
        premium: "N/A",
        cover: "Food Security",
        hospitals: 0, // Not applicable
        renewalBonus: "N/A",
        imageUrl: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726750295/1ration_ckvjas.jpg", // Replace with the actual image path or URL
        link: "https://example.com/1nation-1ration-card", // Replace with actual URL
      },
      {
        name: "LPG",
        premium: "₹100/month",
        cover: "Subsidized LPG",
        hospitals: 0, // Not applicable
        renewalBonus: "N/A",
        imageUrl: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726750407/download_ejbyiw.png", // Replace with the actual image path or URL
        link: "https://example.com/lpg-plan", // Replace with actual URL
      },
    ],
  };

  const customerServicePoints = [
    { name: "CSP 1", contact: "John Doe", number: "9876543210", address: "123 Street, City" },
    { name: "CSP 2", contact: "Jane Smith", number: "9123456780", address: "456 Lane, Town" },
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
    <div className="flex flex-col items-center justify-center h-[80vh] bg-transparent">
      {wantsWelfare === null ? (
        <div className="bg-white rounded-lg p-8">
          <h1 className="text-2xl font-bold text-center mb-6">
            Do you want to avail welfare schemes?
          </h1>
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => setWantsWelfare(true)}
              className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600"
            >
              Yes
            </button>
            <button
              onClick={() => setWantsWelfare(false)}
              className="bg-gray-500 text-white py-2 px-6 rounded-lg hover:bg-gray-600"
            >
              No
            </button>
          </div>
        </div>
      ) : wantsWelfare ? (
        <div className="bg-transparent rounded-lg p-8 w-full max-w-3xl">
          {!selectedSection ? (
            <div className="grid grid-cols-2 gap-6">
              <div
                onClick={() => handleSectionClick("healthCard")}
                className="cursor-pointer bg-gray-100 p-4 rounded-lg hover:bg-blue-200"
              >
                {/* <FaHeartbeat className="text-blue-500 text-5xl mx-auto" /> */}
                <h2 className="text-center mt-4 text-xl font-semibold text-blue-600">
                  Health Insurance
                </h2>
              </div>
              <div
                onClick={() => handleSectionClick("pension")}
                className="cursor-pointer bg-gray-100 p-4 rounded-lg hover:bg-blue-200"
              >
                {/* <FaMoneyBillWave className="text-green-500 text-5xl mx-auto" /> */}
                <h2 className="text-center mt-4 text-xl font-semibold text-green-600">
                  Pension
                </h2>
              </div>
              <div
                onClick={() => handleSectionClick("insurance")}
                className="cursor-pointer bg-gray-100 p-4 rounded-lg hover:bg-blue-200"
              >
                {/* <FaShieldAlt className="text-yellow-500 text-5xl mx-auto" /> */}
                <h2 className="text-center mt-4 text-xl font-semibold text-yellow-600">
                  Insurance
                </h2>
              </div>
              <div
                onClick={() => handleSectionClick("needs")}
                className="cursor-pointer bg-gray-100 p-4 rounded-lg hover:bg-blue-200"
              >
                {/* <FaConciergeBell className="text-purple-500 text-5xl mx-auto" /> */}
                <h2 className="text-center mt-4 text-xl font-semibold text-purple-600">
                  Grameen Needs
                </h2>
              </div>
            </div>
          ) : showCSPPage ? (
            <div>
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
                        <p><strong>Person of Contact:</strong> {csp.contact}</p>
                        <p><strong>Contact Number:</strong> {csp.number}</p>
                        <p><strong>Address:</strong> {csp.address}</p>
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
            </div>
          ) : (
            <div>
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
              <div className="grid grid-cols-1 gap-4">
                {organizations[selectedSection].map((organization) => (
                  <div
                    key={organization.name}
                    className="p-4 bg-gray-100 rounded-lg flex items-center space-x-4"
                  >
                    <img
                      src={organization.imageUrl}
                      alt={organization.name}
                      className="h-16 w-16"
                    />
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">
                        {organization.name}
                      </h3>
                      <p className="text-gray-600">No Room Rent Limit</p>
                      <p className="text-gray-600">{organization.renewalBonus}</p>
                      <p className="text-gray-600">Unlimited Restoration of cover</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-semibold">{organization.cover}</p>
                      <p className="text-gray-600">Cashless hospitals: {organization.hospitals}</p>
                      <button
                        onClick={handleCallRequest}
                        className="bg-blue-500 text-white py-2 px-4 rounded-lg w-full hover:bg-blue-600 mt-4"
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
          )}
        </div>
      ) : (
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-600">
            Thank you! You have chosen not to avail welfare schemes.
          </h2>
        </div>
      )}
    </div>
  );
};

export default SignupStep11;
