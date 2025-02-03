// ./src/components/WelfareServices.tsx

import React, { useState } from "react";
import { useRouter } from "next/router";
import Layout from "@/components/Dash/Layout";

interface Organization {
  name: string;
  premium: string;
  annualPremium: string; // New field for annual premium
  cover: string;
  hospitals: number;
  renewalBonus: string;
  text: string;
  imageUrl: string;
  link: string;
  policyType: string;
  policyHolderName: string;
  policyNumber: string;
  coverage: string;
  nextDueDate: string;
}

interface ServiceType {
  title: string;
  organizations: Organization[];
  totalPremiumPaid?: string;
  installmentsPaid?: number;
  installmentsRemaining?: number;
  redirectRoute: string;
}

// Main Component
const WelfareServices: React.FC = () => {
  const router = useRouter();

  const serviceTypes: ServiceType[] = [
    {
      title: "Health Insurance",
      organizations: [
        {
          name: "Biju Swasthya Kalyan Yojana",
          premium: "₹874/month",
          annualPremium: "₹10,488/year",
          cover: "Up to ₹5 lakh per annum per family",
          hospitals: 187,
          renewalBonus: "N/A",
          text: "Get the best health insurance plan with extensive coverage.",
          imageUrl:
            "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726749584/BSKY_Logo_umdrqn.png",
          link: "https://bskydashboard.odisha.gov.in/",
          policyType: "Health Insurance",
          policyHolderName: "John Doe",
          policyNumber: "HS123456",
          coverage: "Up to ₹5 lakh per annum per family",
          nextDueDate: "2024-11-15",
        },
      ],
      totalPremiumPaid: "₹20,868",
      installmentsPaid: 24,
      installmentsRemaining: 6,
      redirectRoute: "/welfare/healthinsurance",
    },
    {
      title: "Social Security",
      organizations: [
        {
          name: "National Pension System",
          premium: "₹1,000/month",
          annualPremium: "₹12,000/year",
          cover: "Market-linked retirement corpus",
          hospitals: 0,
          renewalBonus: "N/A",
          text: "Ensure a secure retirement with our NPS plan.",
          imageUrl:
            "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726749889/logo_uupd0f.png",
          link: "https://www.india.gov.in/spotlight/national-pension-system-retirement-plan-all",
          policyType: "Social Security",
          policyHolderName: "Jane Smith",
          policyNumber: "SS987654",
          coverage: "Market-linked retirement corpus",
          nextDueDate: "2024-12-01",
        },
      ],
      totalPremiumPaid: "₹36,000",
      installmentsPaid: 36,
      installmentsRemaining: 0,
      redirectRoute: "/welfare/socialsecurity",
    },
    {
      title: "Life Insurance",
      organizations: [
        {
          name: "Pradhan Mantri Suraksha Bima Yojana",
          premium: "₹20/year",
          annualPremium: "₹20/year",
          cover: "₹2 lakh for accidental death and full disability; ₹1 lakh for partial disability",
          hospitals: 0,
          renewalBonus: "N/A",
          text: "Secure Tomorrow: Protect Your Loved Ones Today.",
          imageUrl:
            "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726750007/site-logo_k7ejwo.jpg",
          link: "https://financialservices.gov.in/beta/en/pmsby",
          policyType: "Accident Insurance",
          policyHolderName: "Alice Johnson",
          policyNumber: "LI123456",
          coverage: "₹2 lakh for accidental death and full disability; ₹1 lakh for partial disability",
          nextDueDate: "2024-12-10",
        },
      ],
      totalPremiumPaid: "₹40",
      installmentsPaid: 2,
      installmentsRemaining: 1,
      redirectRoute: "/welfare/insurance",
    },
  ];
  

  const initialToggleState = serviceTypes.reduce((acc, service) => {
    acc[service.title] = false;
    return acc;
  }, {} as { [key: string]: boolean });

  const [activeStatus, setActiveStatus] = useState<{ [key: string]: boolean }>(
    initialToggleState
  );

  const handleToggle = (title: string) => {
    setActiveStatus((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const redirectToPlans = (route: string) => {
    router.push(route);
  };

  const handleCallRequest = (organization: Organization) => {
    alert(`Call requested for ${organization.name}!`);
  };

  return (
    <Layout>
      <div className="mx-auto py-8 px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-white">
          Welfare Services
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-5">
          {serviceTypes.map((service) => (
            <div
              key={service.title}
              className="mb-12 bg-transparent ring-2 ring-white p-6 rounded-lg shadow-lg"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold text-white">
                  {service.title}
                </h2>
                <div className="flex items-center">
                  <span className="mr-2 text-white font-medium">
                    Active Plan:
                  </span>
                  <button
                    className={`px-4 py-2 rounded-md ${
                      activeStatus[service.title]
                        ? "bg-green-500 hover:bg-green-600"
                        : "bg-red-500 hover:bg-red-600"
                    } text-white transition-colors duration-300`}
                    onClick={() => handleToggle(service.title)}
                    aria-pressed={activeStatus[service.title]}
                    aria-label={`Toggle active status for ${service.title}`}
                  >
                    {activeStatus[service.title] ? "Yes" : "No"}
                  </button>
                </div>
              </div>

              {activeStatus[service.title] ? (
                <div className="flex flex-col gap-6">
                  <div className="lg:col-span-3 space-y-6">
                    {service.organizations.map((org) => (
                      <div
                        key={org.name}
                        className="lg:px-8 px-4 py-6 relative bg-transparent ring-2 ring-white rounded-lg flex flex-col space-x-4 shadow-md"
                      >
                        <div className="flex items-center mb-4 gap-x-5 lg:mb-0">
                          <img
                            src={org.imageUrl}
                            alt={org.name}
                            className="h-20 w-20 object-contain"
                          />
                          <h3 className="text-xl font-semibold mb-2 text-white">
                            {org.name}
                          </h3>
                        </div>

                        <div className="flex text-white flex-col lg:justify-between lg:w-full">
                          <div className="flex flex-row-reverse items-center justify-between">
                            <img
                              src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1738615222/WhatsApp_Image_2025-02-04_at_2.08.31_AM_dadcvi.jpg"
                              alt="user"
                              className="h-32 w-32 rounded-full"
                            />
                            <div className="flex flex-col justify-center items-center">
                              <p className="text-left w-full mb-1">
                                <strong>Policy Holder:</strong>{" "}
                                {org.policyHolderName}
                              </p>

                              <p className="text-left w-full mb-1">
                                <strong>Policy Number:</strong>{" "}
                                {org.policyNumber}
                              </p>

                              <p className="text-left w-full mb-1">
                                <strong>Policy Type:</strong> {org.policyType}
                              </p>
                            </div>
                          </div>
                          <div className="border-t border-gray-400 my-6"></div>

                          <div className="flex-1 mt-3">
                            <p className=" mb-1">{org.text}</p>
                            <p className=" mb-1">
                              <strong>Renewal Bonus:</strong> {org.renewalBonus}
                            </p>

                            <p className=" mb-1">
                              <strong>Coverage:</strong> {org.coverage}
                            </p>
                            <p className=" mb-1">
                              <strong>Next Due Date:</strong> {org.nextDueDate}
                            </p>
                            <p className=" mb-1">
                              <strong>Annual Premium:</strong>{" "}
                              {org.annualPremium}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="lg:col-span-2 bg-transparent ring-white ring-2 p-6 rounded-lg text-center text-white shadow-md">
                    <h3 className="text-xl font-bold mb-6">
                      Policy Information
                    </h3>
                    <p className="mb-2">
                      <strong>Total Premium Paid:</strong>{" "}
                      {service.totalPremiumPaid}
                    </p>
                    <p className="mb-2">
                      <strong>Installments Paid:</strong>{" "}
                      {service.installmentsPaid}
                    </p>
                    <p className="mb-2">
                      <strong>Installments Remaining:</strong>{" "}
                      {service.installmentsRemaining}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="text-center py-6 text-white">
                  <p>No active plans at the moment for {service.title}.</p>
                  <button
                    className="text-blue-500 shadow-lg ring-2 ring-blue-500 py-2 px-4 rounded-lg mt-4 w-full hover:bg-blue-100 transition-colors duration-300"
                    onClick={() => redirectToPlans(service.redirectRoute)}
                  >
                    View Plans
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default WelfareServices;
