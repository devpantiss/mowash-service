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

const serviceTypes = [
  {
    title: "Health Insurance",
    organizations: [
      {
        name: "Biju Swasthya Kalyan Yojana",
        premium: "N/A",
        annualPremium: "N/A",
        cover: "₹5 Lac per family; additional ₹5 Lac for women members",
        hospitals: 187,
        renewalBonus: "N/A",
        text: "Provides cashless healthcare coverage to economically vulnerable families in Odisha.",
        imageUrl:
          "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726749584/BSKY_Logo_umdrqn.png",
        link: "https://bsky.odisha.gov.in/",
        policyType: "Health Insurance",
        policyHolderName: "Gautam Samanta",
        policyNumber: "BSKY123456",
        coverage: "₹5 Lac per family; additional ₹5 Lac for women members",
        nextDueDate: "N/A",
      },
    ],
    totalPremiumPaid: "N/A",
    installmentsPaid: "N/A",
    installmentsRemaining: "N/A",
    redirectRoute: "/welfare/healthinsurance",
  },
  {
    title: "Social Security",
    organizations: [
      {
        name: "National Pension System",
        premium: "Varies",
        annualPremium: "Varies",
        cover: "Market-linked retirement corpus",
        hospitals: 0,
        renewalBonus: "N/A",
        text: "A voluntary, defined contribution retirement savings scheme to ensure financial security after retirement.",
        imageUrl:
          "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726749889/logo_uupd0f.png",
        link: "https://npstrust.org.in/",
        policyType: "Pension Scheme",
        policyHolderName: "Gautam Samanta",
        policyNumber: "NPS987654",
        coverage: "Depends on contributions and market performance",
        nextDueDate: "2025-02-28",
      },
    ],
    totalPremiumPaid: "Varies",
    installmentsPaid: "Varies",
    installmentsRemaining: "Varies",
    redirectRoute: "/welfare/socialsecurity",
  },
  {
    title: "Life Insurance",
    organizations: [
      {
        name: "Pradhan Mantri Suraksha Bima Yojana",
        premium: "₹12/year",
        annualPremium: "₹12/year",
        cover: "₹2 Lac",
        hospitals: 0,
        renewalBonus: "N/A",
        text: "Accidental death and disability insurance scheme offering coverage at an affordable premium.",
        imageUrl:
          "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726750007/site-logo_k7ejwo.jpg",
        link: "https://www.jansuraksha.gov.in/Forms-PMSBY.aspx",
        policyType: "Accidental Insurance",
        policyHolderName: "Gautam Samanta",
        policyNumber: "PMSBY123456",
        coverage: "₹2 Lac",
        nextDueDate: "2025-05-31",
      },
    ],
    totalPremiumPaid: "₹12",
    installmentsPaid: 1,
    installmentsRemaining: "N/A",
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
                src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1738615222/WhatsApp_Image_2025-02-04_at_2.08.31_AM_dadcvi.jpg"
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
