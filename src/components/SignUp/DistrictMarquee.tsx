import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

// Array of Odisha districts
const districts = [
  "Angul", "Balangir", "Balasore", "Bargarh", "Bhadrak", "Boudh", "Cuttack",
  "Deogarh", "Dhenkanal", "Gajapati", "Ganjam", "Jagatsinghpur", "Jajpur",
  "Jharsuguda", "Kalahandi", "Kandhamal", "Kendrapara", "Kendujhar", "Khordha",
  "Koraput", "Malkangiri", "Mayurbhanj", "Nabarangpur", "Nayagarh", "Nuapada",
  "Puri", "Rayagada", "Sambalpur", "Sonepur", "Sundargarh"
];

// Function to generate a random number of partners between 50 and 1000
const generateRandomPartners = () => Math.floor(Math.random() * 951) + 50;

const DistrictMarquee: React.FC = () => {
  const [partnerCounts, setPartnerCounts] = useState<number[]>([]);

  useEffect(() => {
    // Generate dummy partner counts for each district on mount
    const counts = districts.map(generateRandomPartners);
    setPartnerCounts(counts);
  }, []);

  return (
    <div className="absolute w-[100vw] -bottom-0 hidden lg:block bg-transparent border-y-2 border-blue-500 py-4">
      <Marquee speed={50} gradient={false} pauseOnHover={false} loop={0}>
        {/* Render districts twice for seamless looping */}
        {[...districts].map((district, index) => (
          <div
            key={index}
            className="mx-6 px-4 py-2 bg-transparent hover:text-blue-500 pointer text-white ring-2 ring-white rounded-lg shadow-lg hover:scale-110 transform transition-transform duration-300"
          >
            <div className="text-xl font-semibold">{district}</div>
            <div className="text-sm">
              <CountAnimation targetCount={partnerCounts[index % districts.length]} />
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

// Counting animation component
const CountAnimation: React.FC<{ targetCount: number }> = ({ targetCount }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let isMounted = true; // Track component mount status

    const countToTarget = () => {
      let currentCount = 0;

      const interval = setInterval(() => {
        if (isMounted && currentCount < targetCount) {
          currentCount += Math.ceil(targetCount / 50); // Increase by a fraction
          if (currentCount > targetCount) currentCount = targetCount; // Clamp to targetCount
          setCount(currentCount);
        } else {
          clearInterval(interval); // Stop the counting when reached
          setTimeout(() => {
            setCount(0); // Reset count for the next loop
            countToTarget(); // Start counting to the next target
          }, 3000); // Pause before resetting (optional)
        }
      }, 10); // Adjust interval speed as needed

      return () => clearInterval(interval); // Cleanup on unmount
    };

    countToTarget(); // Start the counting animation

    return () => {
      isMounted = false; // Cleanup on unmount
    };
  }, [targetCount]);

  return <span>{count}</span>;
};

export default DistrictMarquee;
