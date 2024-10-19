import React from "react";

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

const serviceTypes: ServiceType[] = [
  {
    title: "Health Insurance",
    organizations: [
      {
        name: "Biju Swasthya Kalyan Yojana",
        premium: "₹874/month",
        annualPremium: "₹10,488/year", // Added annual premium
        cover: "₹7 Lac",
        hospitals: 187,
        renewalBonus: "₹10.5 Lac Renewal Bonus",
        text: "Get the best health insurance plan with extensive coverage.",
        imageUrl:
          "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726749584/BSKY_Logo_umdrqn.png",
        link: "https://example.com/view-plan",
        policyType: "Health Insurance",
        policyHolderName: "John Doe",
        policyNumber: "HS123456",
        coverage: "₹7 Lac",
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
        premium: "₹1000/month",
        annualPremium: "₹12,000/year", // Added annual premium
        cover: "₹10 Lac",
        hospitals: 0,
        renewalBonus: "N/A",
        text: "Ensure a secure retirement with our NPS plan.",
        imageUrl:
          "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726749889/logo_uupd0f.png",
        link: "https://example.com/nps-plan",
        policyType: "Social Security",
        policyHolderName: "Jane Smith",
        policyNumber: "SS987654",
        coverage: "₹10 Lac",
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
        name: "Mantri Suraksha Bima Yojana",
        premium: "₹12/year",
        annualPremium: "₹12/year", // Added annual premium
        cover: "₹2 Lac",
        hospitals: 0,
        renewalBonus: "N/A",
        text: "Secure Tomorrow: Protect Your Loved Ones Today.",
        imageUrl:
          "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726750007/site-logo_k7ejwo.jpg",
        link: "https://example.com/pmsby-plan",
        policyType: "Term Life",
        policyHolderName: "Alice Johnson",
        policyNumber: "LI123456",
        coverage: "₹2 Lac",
        nextDueDate: "2024-12-10",
      },
    ],
    totalPremiumPaid: "₹342",
    installmentsPaid: 2,
    installmentsRemaining: 1,
    redirectRoute: "/welfare/insurance",
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
    nextDueDate: org.nextDueDate,
    annualPremium: org.annualPremium,
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
                <strong>Next Due Date:</strong> {org.nextDueDate}
              </p>
              <p className=" mb-1">
                <strong>Annual Premium:</strong> {org.annualPremium}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesCards;
