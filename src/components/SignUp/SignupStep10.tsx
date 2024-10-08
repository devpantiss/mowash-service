import Link from "next/link";
import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

const SignupStep10: React.FC = () => {
  const { width, height } = useWindowSize();
  const [showConfetti, setShowConfetti] = useState(true); // Start with confetti showing

  useEffect(() => {
    // Function to show confetti
    const startConfetti = () => {
      setShowConfetti(true);
      
      // Hide confetti after 1 second (duration for the falling effect)
      setTimeout(() => {
        setShowConfetti(false);
      }, 10000);
    };

    // Start the confetti effect immediately
    startConfetti();

    // Set an interval to restart the confetti effect every 2 seconds (1 second for confetti fall + 1 second wait)
    const intervalId = setInterval(startConfetti, 4000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative text-white flex flex-col items-center justify-center lg:h-[90vh] h-[90vh] bg-transparent">
      {/* Conditionally render Confetti Effect */}
      {showConfetti && (
        <Confetti
          width={width}
          height={height}
          numberOfPieces={300} // Adjust the number of pieces as needed
          recycle={false}
          gravity={0.1} // Adjust gravity to speed up the fall
        />
      )}

      <h1 className="text-3xl font-bold mb-6 text-green-600 text-center">
        Congrats, You are now a Member of the <span className="text-blue-600">Mo Wash</span> Community!
      </h1>
      <div className="bg-black/40 shadow-lg rounded-lg w-80 p-6 ring-2 ring-blue-600">
        <img
          src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726535095/Pranab_kumar_Misra_expert_1_udboll.jpg"
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto mb-4 object-cover ring-2 ring-green-600"
        />
        <h2 className="text-xl font-semibold text-white text-center">Stalin Nayak</h2>
        <p className="text-gray-200 text-center">MWC120</p>
        <div className="mt-4">
          <p className="text-white flex justify-between">
            <span className="font-bold">Age:</span> <p>32</p>
          </p>
          <p className="text-white flex justify-between">
            <span className="font-bold">Gender:</span> <p>Male</p>
          </p>
          <p className="text-white flex justify-between">
            <span className="font-bold">Email:</span> <p>stalinnayak96@gmail.com</p>
          </p>
          <p className="text-white flex justify-between">
            <span className="font-bold">Phone:</span> <p>9853939599</p>
          </p>
        </div>
      </div>

      <div className="absolute bottom-5 flex w-full max-w-4xl justify-between items-center">
        <button
          className="text-blue-500 bg-white ring-2 ring-blue-600 font-semibold p-3 rounded-lg shadow-lg hover:bg-blue-600 hover:ring-2 hover:ring-white hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <Link href="/">
            Back home
          </Link>
        </button>
        <button
          className="text-blue-500 bg-white ring-2 ring-blue-600 font-semibold p-3 rounded-lg shadow-lg hover:bg-blue-600 hover:ring-2 hover:ring-white hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <Link href="/dashboard">
            Continue to Dashboard
          </Link>
        </button>
      </div>
    </div>
  );
};

export default SignupStep10;

