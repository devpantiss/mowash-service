import React, { useState } from "react";
import {
  FaHeartbeat,
  FaShieldAlt,
  FaConciergeBell,
  FaMoneyBillWave,
} from "react-icons/fa";
import InsuranceSlider from "./slider/InsuranceSlider";
import Step11Banner from "./banner/Step11Banner";
import Card from "./card/Card";
import {jsPDF} from "jspdf";

type Section = "healthCard" | "pension" | "insurance";

interface SignupStep11Props {
  goToStep: (stepIndex: number) => void; // Pass a function to change the step
}
const SignupStep11: React.FC<SignupStep11Props> = ({ goToStep }) => {
  const [wantsWelfare, setWantsWelfare] = useState(true);
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
        text: "Get the best health insurance plan with extensive coverage.",
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
        text: "Get the best health insurance plan with extensive coverage.",
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
        text: "Get the best health insurance plan with extensive coverage.",
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
        text: "Get the best health insurance plan with extensive coverage.",
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
        text: "Secure Tomorrow: Protect Your Loved Ones Today.",
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
        text: "Peace of Mind: Life Insurance for a Brighter Future.",
        imageUrl:
          "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726750296/a_bsuthv.jpg",
        link: "https://example.com/pmjjby-plan",
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
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1727258506/Screenshot_2024-09-25_at_3.27.27_PM_aozx74.png",
      icon: FaShieldAlt,
      onClick: () => handleSectionClick("insurance"),
    },
  ];

  const customerServicePoints = [
    {
      name: "Customer Service Point 1",
      contact: "John Doe",
      number: "9876543210",
      address: "123 Street, City",
    },
    {
      name: "Customer Service Point 2",
      contact: "Jane Smith",
      number: "9123456780",
      address: "456 Lane, Town",
    },
  ];

  const downloadCSPAsPDF = (selectedCSP: string) => {
    const csp = customerServicePoints.find((csp) => csp.name === selectedCSP);

    if (csp) {
      const doc = new jsPDF();

      // Set title font
      doc.setFont("helvetica", "bold");
      doc.setFontSize(18);
      doc.text("Customer Service Point Details", 105, 20, { align: "center" });

      // Add some spacing
      doc.setFontSize(12);
      doc.setFont("helvetica", "normal");

      // Add details with formatting and spacing
      const leftMargin = 20;
      const lineSpacing = 10;
      let yOffset = 40;

      // Add CSP Name
      doc.setFont("helvetica", "bold");
      doc.text("Customer Service Point:", leftMargin, yOffset);
      doc.setFont("helvetica", "normal");
      doc.text(csp.name, leftMargin + 60, yOffset);

      // Add Person of Contact
      yOffset += lineSpacing;
      doc.setFont("helvetica", "bold");
      doc.text("Person of Contact:", leftMargin, yOffset);
      doc.setFont("helvetica", "normal");
      doc.text(csp.contact, leftMargin + 60, yOffset);

      // Add Contact Number
      yOffset += lineSpacing;
      doc.setFont("helvetica", "bold");
      doc.text("Contact Number:", leftMargin, yOffset);
      doc.setFont("helvetica", "normal");
      doc.text(csp.number, leftMargin + 60, yOffset);

      // Add Address
      yOffset += lineSpacing;
      doc.setFont("helvetica", "bold");
      doc.text("Address:", leftMargin, yOffset);
      doc.setFont("helvetica", "normal");
      doc.text(csp.address, leftMargin + 60, yOffset, { maxWidth: 160 });

      // Add footer (optional)
      doc.setFont("helvetica", "italic");
      doc.setFontSize(10);
      doc.text("Generated on " + new Date().toLocaleDateString(), 105, 280, {
        align: "center",
      });

      // Save the PDF with a formatted name
      doc.save(`${csp.name}_CSP_Details.pdf`);
    }
  };

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

  const handleSkip = () => {
    goToStep(11);
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

              <div className="text-center mt-8">
                <button
                  onClick={handleSkip}
                  className="bg-gray-500 text-white py-2 px-6 rounded-lg hover:bg-gray-600"
                >
                  Skip
                </button>
              </div>

              <div>
                <Step11Banner />
              </div>
            </div>
          ) : showCSPPage ? (
            <div className="flex items-center h-[100vh] py-16 gap-x-8">
              <div className="w-1/2 p-4">
                <div className="flex gap-4">
                  <div className="flex flex-col mt-10 gap-y-8">
                    {/* Card 1: Show organization from one of the remaining sections */}
                    <div className="bg-green-100 w-[250px] h-[300px] p-4 rounded-lg shadow-md">
                      <h3 className="text-green-600 capitalize font-bold">
                        Govt. of Odisha
                      </h3>
                      <img
                        src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1727174742/biodiversity-removebg-preview_c36mo1.png"
                        alt="alt"
                        className="h-16 w-16 mb-2"
                      />
                      <p className="text-green-700 mt-2 font-bold text-xl">
                        Empowering lives with comprehensive welfare schemes for
                        a secure future.
                      </p>
                    </div>

                    {/* Card 2: Show organization from another remaining section */}
                    <div className="bg-blue-100 w-[250px] h-[300px] p-4 rounded-lg shadow-md">
                      <h3 className="text-blue-600 capitalize font-bold">
                        Govt. of Odisha
                      </h3>
                      <img
                        src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1727174743/welfare-removebg-preview_rxlqwp.png"
                        alt="alt"
                        className="h-16 w-16 mb-2"
                      />
                      <p className="text-blue-700 mt-2 font-bold text-xl">
                        Welfare schemes are essential for providing safety,
                        security, and support during challenging times.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col mt-30 gap-y-8">
                    {/* Card 3 */}
                    <div className="bg-yellow-100 w-[250px] h-[300px] p-4 rounded-lg shadow-md">
                      {selectedSection &&
                        organizations[selectedSection].length > 0 && (
                          <div className="flex flex-col mt-4">
                            <h3 className="text-yellow-600 capitalize font-bold">
                              {selectedSection}
                            </h3>
                            <img
                              src={organizations[selectedSection][1].imageUrl}
                              alt={organizations[selectedSection][1].name}
                              className="h-16 w-16 mb-2"
                            />
                            <p className="text-yellow-700 font-semibold text-xl">
                              {organizations[selectedSection][1].name}
                            </p>
                            <p className="text-yellow-700 font-bold text-xl">
                              {organizations[selectedSection][1].text}
                            </p>
                          </div>
                        )}
                    </div>

                    {/* Card 4 */}
                    <div className="bg-purple-100 w-[250px] h-[300px] p-4 rounded-lg shadow-md">
                      {selectedSection &&
                        organizations[selectedSection].length > 0 && (
                          <div className="flex flex-col mt-4">
                            <h3 className="text-purple-600 capitalize font-bold">
                              {selectedSection}
                            </h3>
                            <img
                              src={organizations[selectedSection][0].imageUrl}
                              alt={organizations[selectedSection][0].name}
                              className="h-16 w-16 mb-2"
                            />
                            <p className="text-purple-700 font-bold text-xl">
                              {organizations[selectedSection][0].name}
                            </p>
                            <p className="text-purple-700 font-bold text-xl">
                              {organizations[selectedSection][0].text}
                            </p>
                          </div>
                        )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-1/2 pt-8">
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
                          <p className="font-bold text-blue-600">{csp.name}</p>
                          <p>
                            <strong className="font-bold text-blue-600">
                              Person of Contact:
                            </strong>{" "}
                            {csp.contact}
                          </p>
                          <p>
                            <strong className="font-bold text-blue-600">
                              Contact Number:
                            </strong>{" "}
                            {csp.number}
                          </p>
                          <p>
                            <strong className="font-bold text-blue-600">
                              Address:
                            </strong>{" "}
                            {csp.address}
                          </p>
                        </div>
                      ))}
                    <button
                      onClick={() => {
                        downloadCSPAsPDF(selectedCSP); // Download PDF
                        handleProceed(); // Proceed with whatever function is next
                      }}
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
            <div className="flex flex-col h-[100vh] justify-center items-center gap-x-8">
              <div className="flex gap-x-16 w-full">
                {/* Left Section */}
                <div className="w-3/5 pt-20">
                  <h2 className="text-4xl text-left font-semibold text-white mb-6">
                    Available Options for{" "}
                    {selectedSection === "healthCard"
                      ? "Health Insurance"
                      : selectedSection === "pension"
                      ? "Pension"
                      : selectedSection === "insurance"
                      ? "Insurance"
                      : ""}
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

                {/* Right Section with YouTube Embed */}
                <div className="w-2/5 pt-32 flex justify-center items-center">
                  <iframe
                    width="100%"
                    height="315"
                    src="https://www.youtube.com/embed/RsQWsFXbMLA?si=z28WAn5NoAt2asUx"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-64 rounded-lg border"
                  />
                </div>
              </div>

              <div className="w-full">
                <InsuranceSlider />
              </div>

              <div>
                <Step11Banner />
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
            onClick={() => setWantsWelfare(false)}
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
