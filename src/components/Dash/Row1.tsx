import React, { useState } from "react";
import { Line } from "react-chartjs-2"; // Import the Line chart from react-chartjs-2
import DashTable from "@/components/Dash/DashTable";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import Reviews from "./Reviews";

// Register the necessary components for Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface StatCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: React.ReactNode;
  flexCol?: string;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  subtitle,
  icon,
  flexCol,
}) => {
  return (
    <div
      className={`flex ring-2 ring-white items-center ${
        flexCol || "flex-row"
      } p-4 rounded-lg text-center justify-center bg-transparent}`}
    >
      <div className="mr-4 text-4xl">{icon}</div>
      <div>
        <h2 className="text-xl text-white font-bold">{title}</h2>
        <p className="text-2xl text-white font-semibold">{value}</p>
        {subtitle && <p className="text-white">{subtitle}</p>}
      </div>
    </div>
  );
};

const ProfileCard: React.FC<{
  onToggleStatus: () => void;
  isActive: boolean;
}> = ({ onToggleStatus, isActive }) => {
  return (
    <div className="bg-black/40 shadow-lg rounded-lg w-80 h-[400px] p-6 ring-2 ring-blue-600 mx-auto">
      <img
        src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726535095/Pranab_kumar_Misra_expert_1_udboll.jpg"
        alt="Profile"
        className="w-32 h-32 rounded-full mx-auto mb-4 object-cover ring-2 ring-green-600"
      />
      <h2 className="text-xl font-semibold text-white text-center">
        Stalin Nayak
      </h2>
      <p className="text-gray-200 text-center">MWC120</p>
      <div className="mt-4">
        <div className="text-white flex justify-between">
          <span className="font-bold">Age:</span>
          <span>32</span>
        </div>
        <div className="text-white flex justify-between">
          <span className="font-bold">Gender:</span>
          <span>Male</span>
        </div>
        <div className="text-white flex justify-between">
          <span className="font-bold">Email:</span>
          <span>stalinnayak96@gmail.com</span>
        </div>
        <div className="text-white flex justify-between">
          <span className="font-bold">Phone:</span>
          <span>9853939599</span>
        </div>
      </div>
      <div className="mt-4 flex justify-center">
        <button
          onClick={onToggleStatus}
          className={`px-4 py-2 rounded-md ${
            isActive ? "bg-green-500" : "bg-red-500"
          } text-white`}
        >
          {isActive ? "Active" : "Inactive"}
        </button>
      </div>
    </div>
  );
};

const TimeSlotSelector: React.FC = () => {
  const [selectedSlots, setSelectedSlots] = useState<string[]>([]);

  const timeSlots = Array.from({ length: 13 }, (_, i) => {
    const hour = 6 + i;
    const nextHour = hour + 1;
    const suffix = hour < 12 ? "AM" : "PM"; // Determine AM/PM
    const formattedHour = hour % 12 || 12; // Format hour to 12-hour format
    const formattedNextHour = nextHour % 12 || 12;
    return `${formattedHour}:00 ${suffix} - ${formattedNextHour}:00 ${suffix}`;
  });

  const handleSlotChange = (slot: string) => {
    setSelectedSlots(
      (prev) =>
        prev.includes(slot)
          ? prev.filter((s) => s !== slot) // Deselect if already selected
          : [...prev, slot] // Select if not selected
    );
  };

  return (
    <div className="mt-4 bg-transparent">
      <h3 className="text-lg text-white font-bold">Available Time Slots</h3>
      <div className="grid grid-cols-2 gap-2 mt-2">
        {timeSlots.map((slot) => (
          <label
            key={slot}
            className={`flex items-center cursor-pointer p-2 rounded-md transition-colors ${
              selectedSlots.includes(slot)
                ? "bg-blue-500 text-white"
                : "bg-transparent ring-2 ring-white text-white"
            } hover:bg-blue-300`}
          >
            <input
              type="checkbox"
              checked={selectedSlots.includes(slot)}
              onChange={() => handleSlotChange(slot)}
              className="hidden"
            />
            <span className="h-5 w-5 border-2 border-blue-500 rounded-md flex items-center justify-center mr-2">
              {selectedSlots.includes(slot) && (
                <div className="bg-blue-500 h-3 w-3 rounded-full" />
              )}
            </span>
            <span>{slot}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

const Row1: React.FC = () => {
  const currentDate = new Date().toLocaleDateString("en-GB"); // Force the client to use 'en-GB' format (DD/MM/YYYY)
  const [isActive, setIsActive] = useState<boolean>(false); // State for active status

  // Mock data for weekly earnings and jobs completed
  const weeklyEarningsData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "This Week's Earnings",
        data: [120, 150, 170, 200, 250, 300, 400], // Earnings data
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderWidth: 2,
        fill: true,
      },
      {
        label: "Jobs Completed",
        data: [10, 12, 15, 8, 20, 18, 25], // Jobs completed data
        borderColor: "rgba(255, 99, 132, 1)", // Different color for jobs completed
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderWidth: 2,
        fill: true,
      },
    ],
  };

  const toggleStatus = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <div className="p-8 bg-transparent min-h-screen">
      {/* First Row */}
      <div className="flex flex-col-reverse lg:flex-row w-full px-2 gap-4">
        <div className="gap-4 grid grid-cols-1 lg:grid-cols-3 lg:w-1/2 ring-2 ring-white p-4 rounded-md w-full">
          <StatCard
            title="Today's Orders"
            value="0"
            subtitle="Yesterday 0"
            icon={<span>📋</span>}
            flexCol="lg:flex-col"
          />
          <StatCard
            title="Today's Revenue"
            value="₹ 0"
            subtitle="Yesterday ₹ 0"
            icon={<span>💰</span>}
            flexCol="lg:flex-col"
          />
          <StatCard
            title="Today's Working Hours"
            value="0 Hours"
            icon={<span>🕒</span>}
            flexCol="lg:flex-col"
          />
        </div>
        <div className="lg:w-1/2 w-full flex flex-col-reverse lg:flex-row justify-between lg:gap-x-16 items-center">
          <div className="w-full bg-transparent ring-2 ring-white p-4 rounded-lg shadow-lg">
            <h3 className="text-lg text-white font-bold">
              Earnings Status (Last 30 days)
            </h3>
            <div className="grid grid-cols-1 gap-4 mt-4">
              <StatCard
                title="Total Revenue"
                value="₹ 0"
                icon={<span>💸</span>}
              />
              <StatCard
                title="Amount Credited to Bank"
                value="₹ 0"
                icon={<span>💳</span>}
              />
              <StatCard
                title="Amount Pending"
                value="₹ 0"
                subtitle="Greater than 8 days"
                icon={<span>⏳</span>}
              />
            </div>
          </div>
          {/* Profile Card on the right */}
          <div className="lg:w-1/2 w-full mb-6">
            <ProfileCard onToggleStatus={toggleStatus} isActive={isActive} />
          </div>
        </div>
      </div>

      {/* Second Row */}
      <div className="grid py-6 rounded-md grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-transparent ring-2 ring-white p-4 rounded-lg shadow-lg">
          <div className="flex justify-between">
            <h3 className="text-lg text-white font-bold">Work Timing Slots</h3>
            <span className="text-white">{currentDate}</span>{" "}
            {/* Display current date */}
          </div>
          <TimeSlotSelector />
        </div>
        <div className="bg-transparent ring-2 ring-white p-4 rounded-lg shadow-lg">
          <h3 className="text-lg text-white font-bold">
            This Week&apos;s Earnings
          </h3>
          <div className="mt-4">
            <Line
              data={weeklyEarningsData}
              options={{
                responsive: true,
                maintainAspectRatio: false, // Allow the chart to stretch to fit its container
                scales: {
                  x: {
                    title: {
                      display: true,
                      text: "Days of the Week",
                      color: "white",
                    },
                    ticks: {
                      color: "white",
                    },
                    grid: {
                      color: "rgba(128, 128, 128, 0.5)", // Set grid line color to gray
                    },
                  },
                  y: {
                    title: {
                      display: true,
                      text: "Value",
                      color: "white",
                    },
                    ticks: {
                      color: "white",
                    },
                    grid: {
                      color: "rgba(128, 128, 128, 0.5)", // Set grid line color to gray
                    },
                  },
                },
                plugins: {
                  legend: {
                    labels: {
                      color: "white",
                    },
                  },
                },
              }}
              height={0}
              width={0}
            />
          </div>
        </div>
      </div>

      <Reviews />

      {/* Third Row */}
      <div className="p-6 ring-2 ring-white rounded-md flex flex-col gap-4">
        {isActive ? (
          <DashTable />
        ) : (
          <div className="h-full lg:p-6 p-2">
            <div className="flex justify-between mb-4">
              <h3 className="text-lg text-white font-bold">
                Today&apos;s Orders
              </h3>
              <span className="text-gray-200">
                Date: {new Date().toLocaleDateString("en-GB")}{" "}
                {/* Use the same locale */}
              </span>
            </div>
            <p className="text-center text-white">
              No active orders right now as you are offline.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Row1;
