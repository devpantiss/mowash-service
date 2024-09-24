import React from "react";

const InsuranceMarquee: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-red-600 text-white py-2 overflow-hidden z-50">
      <div className="whitespace-nowrap">
        <div className="animate-marquee flex">
          {/* Add your rolling text here */}
          <span className="mx-4">
            Important: ₹1 Crore Term plan starting @ ₹478+/month. Don’t miss out!
          </span>
          <span className="mx-4">
            Secure your future with life insurance today. Affordable and easy to apply.
          </span>
          <span className="mx-4">
            Term Insurance: Get a high coverage at low premiums!
          </span>
          <span className="mx-4">
            Protect your loved ones. Avail insurance plans starting at ₹478/month.
          </span>
          {/* You can repeat or add more spans as needed */}
        </div>
      </div>
    </div>
  );
};

export default InsuranceMarquee;
