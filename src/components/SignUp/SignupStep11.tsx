import { useState } from "react";
import { FaHeartbeat, FaShieldAlt, FaConciergeBell } from "react-icons/fa";

type Section = "healthCard" | "pension" | "insurance" | "needs";

const SignupStep11: React.FC = () => {
  const [wantsWelfare, setWantsWelfare] = useState<boolean | null>(null);
  const [selectedSection, setSelectedSection] = useState<Section | null>(null);
  const [selectedOrganization, setSelectedOrganization] = useState<string | null>(null);
  const [showConfirmation, setShowConfirmation] = useState<boolean>(false);

  const organizations = {
    healthCard: [
      { name: "BSKY", premium: "₹500/month", payout: "₹5 Lac", logo: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726749584/BSKY_Logo_umdrqn.png" },
      { name: "Ayushman Bharat", premium: "₹300/month", payout: "₹3 Lac", logo: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726749583/ayushman_bharat_ngycj4.png" },
      { name: "ESIC", premium: "₹200/month", payout: "₹2 Lac", logo: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726749584/ESIC_ae49xe.png" },
      // { name: "Not Available", premium: "N/A", payout: "N/A", logo: "/path/to/not-available-logo.png" },
    ],
    pension: [
      { name: "NPS", premium: "₹1000/month", payout: "₹10 Lac", logo: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726749889/logo_uupd0f.png" },
      { name: "EPF", premium: "₹1500/month", payout: "₹8 Lac", logo: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726749878/epf_bwvokn.jpg" },
    ],
    insurance: [
      { name: "PMSBY", premium: "₹12/year", payout: "₹2 Lac", logo: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726750007/site-logo_k7ejwo.jpg" },
      { name: "PMJJBY", premium: "₹330/year", payout: "₹2 Lac", logo: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726750296/a_bsuthv.jpg" },
    ],
    needs: [
      { name: "1 Nation 1 Ration Card", premium: "N/A", payout: "Food Security", logo: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726750295/1ration_ckvjas.jpg" },
      { name: "LPG", premium: "₹100/month", payout: "Subsidized LPG", logo: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726750407/download_ejbyiw.png" },
      // { name: "Not Available", premium: "N/A", payout: "N/A", logo: "/path/to/not-available-logo.png" },
    ],
  };

  const handleSectionClick = (section: Section) => {
    setSelectedSection(section);
    setSelectedOrganization(null);
    setShowConfirmation(false); // Reset confirmation state
  };

  const handleCallRequest = () => {
    setShowConfirmation(true); // Show confirmation on button click
  };

  return (
    <div className="flex flex-col items-center justify-center h-[80vh] bg-gradient-to-b from-black to-blue-800">
      {wantsWelfare === null ? (
        <div className="bg-white shadow-lg rounded-lg p-8">
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
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-3xl">
          {!selectedSection ? (
            <div className="grid grid-cols-2 gap-6">
              <div
                onClick={() => handleSectionClick("healthCard")}
                className="cursor-pointer bg-gray-100 p-4 rounded-lg hover:bg-blue-200"
              >
                <FaHeartbeat className="text-blue-500 text-5xl mx-auto" />
                <h2 className="text-center mt-4 text-xl font-semibold text-blue-600">Health Insurance</h2>
              </div>
              <div
                onClick={() => handleSectionClick("pension")}
                className="cursor-pointer bg-gray-100 p-4 rounded-lg hover:bg-blue-200"
              >
              <FaShieldAlt className="text-blue-500 text-5xl mx-auto" />
                <h2 className="text-center mt-4 text-xl font-semibold text-blue-600">Pension</h2>
              </div>
              <div
                onClick={() => handleSectionClick("insurance")}
                className="cursor-pointer bg-gray-100 p-4 rounded-lg hover:bg-blue-200"
              >
                <FaShieldAlt className="text-blue-500 text-5xl mx-auto" />
                <h2 className="text-center mt-4 text-xl font-semibold text-blue-600">Accidental Insurance</h2>
              </div>
              <div
                onClick={() => handleSectionClick("needs")}
                className="cursor-pointer bg-gray-100 p-4 rounded-lg hover:bg-blue-200"
              >
                <FaConciergeBell className="text-blue-500 text-5xl mx-auto" />
                <h2 className="text-center mt-4 text-xl font-semibold text-blue-600">Food Security</h2>
              </div>
            </div>
          ) : (
            <div>
              <h2 className="text-2xl font-semibold text-blue-600 mb-4">
                Available Options for {selectedSection === "healthCard"
                  ? "Health Insurance"
                  : selectedSection === "pension"
                  ? "Pension"
                  : selectedSection === "insurance"
                  ? "Accidental Insurance"
                  : "Food Security"}
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {organizations[selectedSection].map((organization) => (
                  <div key={organization.name} className="p-4 bg-gray-100 rounded-lg shadow-md">
                    <img src={organization.logo} alt={organization.name} className="h-16 mx-auto mb-4" />
                    <h3 className="text-center text-xl font-semibold mb-2">{organization.name}</h3>
                    <p className="text-center mb-2">Premium: {organization.premium}</p>
                    <p className="text-center mb-4">Payout: {organization.payout}</p>
                    <button
                      onClick={handleCallRequest}
                      className="bg-blue-500 text-white py-2 px-4 rounded-lg w-full hover:bg-blue-600"
                    >
                      Book a Call
                    </button>
                  </div>
                ))}
              </div>

              {showConfirmation && (
                <div className="text-center mt-4 text-green-500">
                  Your request has been sent successfully. Our team will help you with further process.
                </div>
              )}

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
        <div className="text-center text-white text-lg">
          You have opted not to avail any welfare schemes.
        </div>
      )}

      <div className="fixed bottom-0 w-full h-2 bg-gray-200">
        <div className="h-2 bg-blue-600" style={{ width: '80%' }}></div>
      </div>
    </div>
  );
};

export default SignupStep11;
