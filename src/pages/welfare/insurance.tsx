import React, { useState } from "react";
import { jsPDF } from "jspdf";
import Layout from "@/components/Dash/Layout";
import InsuranceSlider from "../../components/SignUp/slider/InsuranceSlider";

const Insurance: React.FC = () => {
  const [wantsWelfare, setWantsWelfare] = useState(true);
  const [showCSPPage, setShowCSPPage] = useState(false);
  const [selectedCSP, setSelectedCSP] = useState<string>("");

  // Reorganize organizations by sections
  const organizations = [
    {
      name: "Pradhan Mantri Suraksha Bima Yojana (PMSBY)",
      premium: "₹12/year",
      cover: "₹2 Lac",
      hospitals: "N/A",
      renewalBonus: "N/A",
      text: "Accidental insurance scheme providing financial protection against death or disability due to an accident.",
      imageUrl: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726750007/site-logo_k7ejwo.jpg",
      link: "https://jansuraksha.gov.in/Files/PMSBY/English/FAQ.pdf"
    },
    {
      name: "Pradhan Mantri Jeevan Jyoti Bima Yojana (PMJJBY)",
      premium: "₹330/year",
      cover: "₹2 Lac",
      hospitals: "N/A",
      renewalBonus: "N/A",
      text: "Life insurance scheme providing financial support to the family in case of the policyholder's death.",
      imageUrl: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726750296/a_bsuthv.jpg",
      link: "https://jansuraksha.gov.in/Files/PMJJBY/English/FAQ.pdf"
    },
    {
      name: "Aam Aadmi Bima Yojana (AABY)",
      premium: "₹200/year (₹100 subsidized by Govt.)",
      cover: "₹30,000 - ₹75,000",
      hospitals: "N/A",
      renewalBonus: "N/A",
      text: "Insurance scheme for rural landless households providing coverage for natural and accidental deaths.",
      imageUrl: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1729351466/emblem-black_btobue.svg",
      link: "https://financialservices.gov.in/insurance-divisions/aam-admi-bima-yojana-aaby"
    }
  ];
  
  

  // Handle CSP PDF download (same as before)
  const customerServicePoints = [
    {
      name: "Maa Durga Service Point",
      contact: "Montu Raulo",
      number: "9439522812",
      address: "Badambadi, Cuttack",
    },
    {
      name: "CSP - Buxi Bazaar",
      contact: "Amit Kumar",
      number: "9876123450",
      address: "Buxi Bazaar, Cuttack",
    },
    {
      name: "CSP - College Square",
      contact: "Priya Das",
      number: "9437826954",
      address: "College Square, Cuttack",
    },
    {
      name: "Maa Tarini Center",
      contact: "Preety Sethy",
      number: "9958243619",
      address: "Pahala, Cuttack",
    },
    {
      name: "CSP - Choudhury Bazar",
      contact: "Ravi Mishra",
      number: "9123987654",
      address: "Choudhury Bazar, Cuttack",
    },
];

  const downloadCSPAsPDF = (selectedCSP: string) => {
    const csp = customerServicePoints.find((csp) => csp.name === selectedCSP);
    if (csp) {
      const doc = new jsPDF();
      doc.setFont("helvetica", "bold");
      doc.setFontSize(18);
      doc.text("Customer Service Point Details", 105, 20, { align: "center" });
      doc.setFontSize(12);
      doc.setFont("helvetica", "normal");

      // Add CSP details
      const leftMargin = 20;
      const lineSpacing = 10;
      let yOffset = 40;
      doc
        .setFont("helvetica", "bold")
        .text("Customer Service Point:", leftMargin, yOffset);
      doc
        .setFont("helvetica", "normal")
        .text(csp.name, leftMargin + 60, yOffset);
      yOffset += lineSpacing;
      doc
        .setFont("helvetica", "bold")
        .text("Person of Contact:", leftMargin, yOffset);
      doc
        .setFont("helvetica", "normal")
        .text(csp.contact, leftMargin + 60, yOffset);
      yOffset += lineSpacing;
      doc
        .setFont("helvetica", "bold")
        .text("Contact Number:", leftMargin, yOffset);
      doc
        .setFont("helvetica", "normal")
        .text(csp.number, leftMargin + 60, yOffset);
      yOffset += lineSpacing;
      doc.setFont("helvetica", "bold").text("Address:", leftMargin, yOffset);
      doc
        .setFont("helvetica", "normal")
        .text(csp.address, leftMargin + 60, yOffset, { maxWidth: 160 });

      doc
        .setFont("helvetica", "italic")
        .setFontSize(10)
        .text("Generated on " + new Date().toLocaleDateString(), 105, 280, {
          align: "center",
        });
      doc.save(`${csp.name}_CSP_Details.pdf`);
    }
  };

  const handleCallRequest = () => setShowCSPPage(true);

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center bg-transparent">
        {wantsWelfare ? (
          <div className="bg-transparent rounded-lg p-8 w-full px-6 lg:px-[100px]">
            {showCSPPage ? (
              <div>
                <h2 className="text-5xl font-bold lg:text-center text-left text-white my-8">
                  Life Insurance
                </h2>
                <div className="flex flex-col lg:flex-row  items-center pb-8 lg:gap-x-8">
                  <div className="lg:w-1/2 w-full p-4">
                    <div className="flex justify-center gap-4">
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
                            Empowering lives with comprehensive welfare schemes
                            for a secure future.
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
                          {organizations.length > 0 && (
                            <div className="flex flex-col mt-4">
                              <h3 className="text-yellow-600 capitalize font-bold">
                                Life Insurance
                              </h3>
                              <img
                                src={organizations[0].imageUrl}
                                alt={organizations[0].name}
                                className="h-16 w-16 mb-2"
                              />
                              <p className="text-yellow-700 font-semibold text-xl">
                                {organizations[0].name}
                              </p>
                              <p className="text-yellow-700 font-bold text-xl">
                                {organizations[0].text}
                              </p>
                            </div>
                          )}
                        </div>

                        {/* Card 4 */}
                        <div className="bg-purple-100 w-[250px] h-[300px] p-4 rounded-lg shadow-md">
                          {organizations.length > 0 && (
                            <div className="flex flex-col mt-4">
                              <h3 className="text-purple-600 capitalize font-bold">
                                Life Insurance
                              </h3>
                              <img
                                src={organizations[0].imageUrl}
                                alt={organizations[0].name}
                                className="h-16 w-16 mb-2"
                              />
                              <p className="text-purple-700 font-bold text-xl">
                                {organizations[0].name}
                              </p>
                              <p className="text-purple-700 font-bold text-xl">
                                {organizations[0].text}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-1/2 w-full pt-8">
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
                              <p className="font-bold text-blue-600">
                                {csp.name}
                              </p>
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
                      }}
                      className="bg-gray-500 text-white py-2 px-4 rounded-lg mt-4 hover:bg-gray-600"
                    >
                      Back
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col lg:h-[85vh] items-center gap-x-8">
                <h2 className="text-4xl text-left font-semibold text-white mb-6">
                  Available Options for Life Insurance{" "}
                </h2>
                <div className="flex flex-col-reverse lg:flex-row gap-x-16 w-full">
                  {/* Left Section */}
                  <div className="lg:w-3/5 w-full pt-4 lg:pt-20">
                    <div className="">
                      <div className="max-h-[500px] overflow-y-auto overflow-x-visible gap-y-12">
                        {organizations.map((organization) => (
                          <div
                            key={organization.name}
                            className="lg:px-8 px-4 py-6 my-4 relative bg-gray-100 rounded-lg flex flex-col lg:flex-row lg:items-center items-stretch space-x-4"
                          >
                            <div className="px-2 py-4 lg:static absolute right-2 rounded-bl-md rounded-tl-md top-0 bg-gray-100">
                              <img
                                src={organization.imageUrl}
                                alt={organization.name}
                                className="h-20 w-20"
                              />
                            </div>

                            <div className="flex-1">
                              <h3 className="text-xl font-semibold mb-2">
                                {organization.name}
                              </h3>
                              <p className="text-gray-600">
                                No Room Rent Limit
                              </p>
                              <p className="text-gray-600">
                                {organization.renewalBonus}
                              </p>
                              <p className="text-gray-600">
                                Unlimited Restoration of cover
                              </p>
                            </div>
                            <div className="text-right mt-4">
                              <div className="flex justify-between gap-x-8 items-center">
                                <span className="flex flex-col">
                                  <strong className="text-xl">
                                    {organization.cover}
                                  </strong>{" "}
                                  <p className="text-[12px]">Cover Amount</p>
                                </span>
                                <span className="flex flex-col">
                                  <strong className="text-xl">
                                    {organization.hospitals}
                                  </strong>
                                  <p className="text-[12px]">
                                    Cashless hospitals
                                  </p>
                                </span>
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
                    </div>
                  </div>

                  {/* Right Section with YouTube Embed */}
                  <div className="lg:w-2/5 w-full flex justify-center items-center">
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/RsQWsFXbMLA?si=z28WAn5NoAt2asUx"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="w-full h-[400px] rounded-lg border"
                    />
                  </div>
                </div>

                <div className="w-full mt-8">
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
              onClick={() => setWantsWelfare(false)}
              className="bg-gray-500 text-white py-2 px-6 rounded-lg hover:bg-gray-600 mt-4"
            >
              Back
            </button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Insurance;
