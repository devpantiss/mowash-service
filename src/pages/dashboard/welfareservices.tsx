// ./src/components/WelfareServices.tsx

import React, { useState } from "react";
import { useRouter } from "next/router";
import Layout from "@/components/Dash/Layout";

// Define the structure for each organization
interface Organization {
  name: string;
  imageUrl: string;
  renewalBonus: string;
  cover: string;
  hospitals: number;
  premium: string;
  text: string;
  link: string;
}

// Define the structure for each service type
interface ServiceType {
  title: string;
  organizations: Organization[];
  totalPremiumPaid: string;
  installmentsPaid: number;
  installmentsRemaining: number;
  redirectRoute: string; // Added redirect route
}

// Main Component
const WelfareServices: React.FC = () => {
  const router = useRouter();

  // Define the data for each service type
  const serviceTypes: ServiceType[] = [
    {
      title: "Health Insurance",
      organizations: [
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
      ],
      totalPremiumPaid: "₹20,868",
      installmentsPaid: 24,
      installmentsRemaining: 6,
      redirectRoute: "/welfare/healthinsurance", // Specific route
    },
    {
      title: "Social Security",
      organizations: [
        {
          name: "NPS",
          premium: "₹1000/month",
          cover: "₹10 Lac",
          hospitals: 0,
          renewalBonus: "N/A",
          text: "Ensure a secure retirement with our NPS plan.",
          imageUrl:
            "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726749889/logo_uupd0f.png",
          link: "https://example.com/nps-plan",
        },
      ],
      totalPremiumPaid: "₹36,000",
      installmentsPaid: 36,
      installmentsRemaining: 0,
      redirectRoute: "/welfare/socialsecurity", // Specific route
    },
    {
      title: "Life Insurance",
      organizations: [
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
      ],
      totalPremiumPaid: "₹342",
      installmentsPaid: 2,
      installmentsRemaining: 1,
      redirectRoute: "/welfare/insurance", // Specific route
    },
  ];

  // Initialize toggle state for each service type
  const initialToggleState = serviceTypes.reduce((acc, service) => {
    acc[service.title] = true; // Default to active
    return acc;
  }, {} as { [key: string]: boolean });

  const [activeStatus, setActiveStatus] = useState<{ [key: string]: boolean }>(
    initialToggleState
  );

  // Handle toggle for each service type
  const handleToggle = (title: string) => {
    setActiveStatus((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  // Handle redirect to specific plans based on service type
  const redirectToPlans = (route: string) => {
    router.push(route); // Navigate to the specific route
  };

  // Handle call request (could be customized per organization)
  const handleCallRequest = (organization: Organization) => {
    // You can customize this function to handle different behaviors
    alert(`Call requested for ${organization.name}!`);
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto py-8 px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-white">
          Welfare Services
        </h1>

        {/* Iterate over each service type */}
        {serviceTypes.map((service) => (
          <div
            key={service.title}
            className="mb-12 bg-transparent ring-2 ring-white p-6 rounded-lg shadow-lg"
          >
            {/* Header with service title and toggle */}
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

            {/* Content based on toggle status */}
            {activeStatus[service.title] ? (
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                {/* 3/5 width for organization cards */}
                <div className="lg:col-span-3 space-y-6">
                  {service.organizations.map((org) => (
                    <div
                      key={org.name}
                      className="lg:px-8 px-4 py-6 relative bg-gray-100 rounded-lg flex flex-col lg:flex-row lg:items-center items-stretch space-x-4 shadow-md"
                    >
                      <div className="absolute lg:-left-14 left-[75%] px-2 py-4 rounded-bl-md rounded-tl-md top-0 bg-gray-100">
                        <img
                          src={org.imageUrl}
                          alt={org.name}
                          className="h-20 w-20 object-contain"
                        />
                      </div>

                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2 text-gray-800">
                          {org.name}
                        </h3>
                        <p className="text-gray-600 mb-1">{org.text}</p>
                        <p className="text-gray-600 mb-1">
                          <strong>Renewal Bonus:</strong> {org.renewalBonus}
                        </p>
                        <p className="text-gray-600">
                          Unlimited Restoration of Cover
                        </p>
                      </div>

                      <div className="text-right mt-4 lg:mt-0">
                        <div className="flex justify-between gap-x-8 items-center mb-4">
                          <div className="flex flex-col">
                            <strong className="text-xl text-gray-800">
                              {org.cover}
                            </strong>
                            <span className="text-sm text-gray-600">
                              Cover Amount
                            </span>
                          </div>
                          <div className="flex flex-col">
                            <strong className="text-xl text-gray-800">
                              {org.hospitals}
                            </strong>
                            <span className="text-sm text-gray-600">
                              Cashless Hospitals
                            </span>
                          </div>
                        </div>
                        <button
                          onClick={() => handleCallRequest(org)}
                          className="text-blue-500 shadow-lg ring-2 ring-blue-500 py-2 px-4 rounded-lg w-full hover:bg-blue-100 transition-colors duration-300"
                        >
                          {org.premium}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* 2/5 width for premium information */}
                <div className="lg:col-span-2 bg-gray-700 p-6 rounded-lg text-center text-white shadow-md">
                  <h3 className="text-xl font-semibold mb-4">
                    Premium Information
                  </h3>
                  <p className="text-lg mb-2">
                    <strong>Total Premium Paid:</strong>{" "}
                    {service.totalPremiumPaid}
                  </p>
                  <p className="text-lg mb-2">
                    <strong>Installments Paid:</strong>{" "}
                    {service.installmentsPaid}
                  </p>
                  <p className="text-lg">
                    <strong>Installments Remaining:</strong>{" "}
                    {service.installmentsRemaining}
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-8 bg-gray-700 rounded-lg">
                <p className="text-white mb-4">
                  You have not registered for any {service.title.toLowerCase()}{" "}
                  plan.
                </p>
                <button
                  onClick={() => redirectToPlans(service.redirectRoute)}
                  className="text-blue-500 shadow-lg ring-2 ring-blue-500 py-2 px-4 rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-300"
                >
                  View {service.title} Plans
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default WelfareServices;
