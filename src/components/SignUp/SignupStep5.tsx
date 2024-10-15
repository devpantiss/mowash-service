import React, { useState, useEffect } from "react";
import AnimatedNumbers from "react-animated-numbers";

// SignupStep5 Component
const SignupStep5: React.FC = () => {
  // State for hours worked
  const [hoursWorked, setHoursWorked] = useState(8); // Default to 8 hours
  const ratePerHour = 300; // Rate per hour

  // State for animated earnings
  const [animatedEarnings, setAnimatedEarnings] = useState<number>(
    hoursWorked * ratePerHour
  );

  // Preset hours options
  const presetHours = [2, 4, 6, 8];

  // Update earnings when hoursWorked changes
  useEffect(() => {
    const targetEarnings = hoursWorked * ratePerHour;
    setAnimatedEarnings(targetEarnings);
  }, [hoursWorked]);

  // Handle preset button clicks
  const handlePresetClick = (hours: number) => {
    setHoursWorked(hours);
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="bg-white/90 p-8 rounded-lg shadow-lg max-w-md w-full">
        {/* Title */}
        <h1 className="text-blue-600 text-3xl font-bold mb-4 text-center">
          Earnings Estimator
        </h1>

        {/* Earnings Text */}
        <p className="text-xl text-black font-semibold text-center mb-6">
          You could earn
        </p>

        {/* Animated Earnings */}
        <div className="text-4xl lg:text-5xl flex justify-center gap-x-3 text-black font-bold mb-6">
          ₹
          {/* <AnimatedNumbers
            includeComma
            animateToNumber={animatedEarnings}
            fontStyle={{ fontSize: 50 }}
          /> */}
        </div>

        {/* Daily Earnings Estimate */}
        <p className="text-md text-black text-center mb-6">
          1 day working at an estimated ₹{animatedEarnings.toLocaleString()} a
          day
        </p>

        {/* Preset Hours Buttons */}
        <div className="flex justify-center space-x-4 mb-6">
          {presetHours.map((hours) => (
            <button
              key={hours}
              onClick={() => handlePresetClick(hours)}
              className={`px-4 py-2 rounded-lg border transition ${
                hoursWorked === hours
                  ? "bg-blue-500 text-white border-blue-500"
                  : "bg-white text-black border-gray-300 hover:bg-blue-500 hover:text-white"
              }`}
            >
              {hours} Hours
            </button>
          ))}
        </div>

        {/* Hours Worked Slider */}
        <div className="space-y-2">
          <input
            type="range"
            min="1"
            max="8"
            value={hoursWorked}
            onChange={(e) => setHoursWorked(Number(e.target.value))}
            className="w-full h-2 bg-blue-500 rounded-lg appearance-none cursor-pointer"
          />
          <p className="text-sm text-black text-center">
            Adjust hours worked per day: {hoursWorked} hours
          </p>
        </div>

        {/* Learn More Link */}
        <p className="text-sm text-blue-600 underline cursor-pointer text-center mt-4">
          Learn how we estimate your earnings
        </p>
      </div>
    </div>
  );
};

export default SignupStep5;
