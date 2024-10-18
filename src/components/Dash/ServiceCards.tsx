import React from "react";

interface Organization {
  name: string;
  premium: string;
  cover: string;
  hospitals: number;
  renewalBonus: string;
  text: string;
  imageUrl: string;
  link: string;
  policyType: string;
  policyHolderName: string; // New field for policyholder name
  policyNumber: string; // New field for policy number
  coverage: string; // New field for coverage amount
  monthlyEMI: string; // New field for monthly EMI
}

interface ServiceType {
  title: string;
  organizations: Organization[];
  totalPremiumPaid?: string;
  installmentsPaid?: number;
  installmentsRemaining?: number;
  redirectRoute: string;
}

const serviceTypes: ServiceType[] = [
  {
    title: "Health Insurance",
    organizations: [
      {
        name: "Biju Swasthya Kalyan Yojana",
        premium: "₹874/month",
        cover: "₹7 Lac",
        hospitals: 187,
        renewalBonus: "₹10.5 Lac Renewal Bonus",
        text: "Get the best health insurance plan with extensive coverage.",
        imageUrl:
          "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726749584/BSKY_Logo_umdrqn.png",
        link: "https://example.com/view-plan",
        policyType: "Health Insurance",
        policyHolderName: "John Doe", // Example policyholder name
        policyNumber: "HS123456", // Example policy number
        coverage: "₹7 Lac", // Example coverage
        monthlyEMI: "₹874", // Example monthly EMI
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
        name: "National Pension System",
        premium: "₹1000/month",
        cover: "₹10 Lac",
        hospitals: 0,
        renewalBonus: "N/A",
        text: "Ensure a secure retirement with our NPS plan.",
        imageUrl:
          "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726749889/logo_uupd0f.png",
        link: "https://example.com/nps-plan",
        policyType: "Social Security",
        policyHolderName: "Jane Smith", // Example policyholder name
        policyNumber: "SS987654", // Example policy number
        coverage: "₹10 Lac", // Example coverage
        monthlyEMI: "₹1000", // Example monthly EMI
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
        name: "Mantri Suraksha Bima Yojana",
        premium: "₹12/year",
        cover: "₹2 Lac",
        hospitals: 0,
        renewalBonus: "N/A",
        text: "Secure Tomorrow: Protect Your Loved Ones Today.",
        imageUrl:
          "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726750007/site-logo_k7ejwo.jpg",
        link: "https://example.com/pmsby-plan",
        policyType: "Term Life",
        policyHolderName: "Alice Johnson", // Example policyholder name
        policyNumber: "LI123456", // Example policy number
        coverage: "₹2 Lac", // Example coverage
        monthlyEMI: "₹1", // Example monthly EMI
      },
    ],
    totalPremiumPaid: "₹342",
    installmentsPaid: 2,
    installmentsRemaining: 1,
    redirectRoute: "/welfare/insurance", // Specific route
  },
];

// Convert the data structure to a simple array of objects
const simplifiedServices = serviceTypes.flatMap((service) =>
  service.organizations.map((org) => ({
    title: service.title,
    renewalBonus: org.renewalBonus,
    text: org.text,
    imageUrl: org.imageUrl,
    premium: org.premium,
    name: org.name,
    link: org.link,
    policyType: org.policyType,
    policyHolderName: org.policyHolderName,
    policyNumber: org.policyNumber,
    coverage: org.coverage,
    monthlyEMI: org.monthlyEMI,
  }))
);

const ServicesCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-y-5 lg:gap-x-6 lg:grid-cols-3">
      {simplifiedServices.map((org) => (
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
                src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726535095/Pranab_kumar_Misra_expert_1_udboll.jpg"
                alt="user"
                className="h-32 w-32 rounded-full"
              />
              <div className="flex flex-col justify-center items-center">
                <p className="text-left w-full mb-1">
                  <strong>Policy Holder:</strong> {org.policyHolderName}
                </p>

                <p className="text-left w-full mb-1">
                  <strong>Policy Number:</strong> {org.policyNumber}
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
                <strong>Monthly EMI:</strong> {org.monthlyEMI}
              </p>
              <p className="">Unlimited Restoration of Cover</p>
            </div>

            <div className="lg:text-right text-center mt-4">
              <a href={org.link}>
                <button className="text-blue-500 shadow-lg ring-2 ring-blue-500 py-2 px-4 rounded-lg w-full hover:bg-blue-100 transition-colors duration-300">
                  {org.premium}
                </button>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesCards;
