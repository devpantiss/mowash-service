// Services.tsx

import React, { useEffect, useState } from "react";
import Layout from "@/components/Dash/Layout";
import { Line } from "react-chartjs-2"; // Import the Line chart from react-chartjs-2
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import "react-calendar/dist/Calendar.css"; // Import react-calendar styles
import DashTable from "@/components/Dash/DashTable";

// Register ChartJS components
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  CategoryScale,
  LinearScale
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

const Services: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isActive, setIsActive] = useState<boolean>(true); // State for active status
  const [currentDate, setCurrentDate] = useState("");

  const TimeSlotSelector: React.FC<{ isActive: boolean }> = ({ isActive }) => {
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
              } hover:bg-blue-300 ${
                isActive ? "" : "opacity-50 cursor-not-allowed"
              }`} // Add opacity and disabled styling
            >
              <input
                type="checkbox"
                checked={selectedSlots.includes(slot)}
                onChange={() => isActive && handleSlotChange(slot)} // Only handle change if active
                disabled={!isActive} // Disable if not active
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

  useEffect(() => {
    setIsMounted(true); // Set the mounted flag to true after the component is mounted

    // Set current date using client-side date formatting (localized to "en-GB")
    const date = new Date().toLocaleDateString("en-GB");
    setCurrentDate(date);
  }, []);


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

  return (
    <Layout>
      <div className="p-6 bg-transparent text-white rounded-lg shadow-lg">
        {/* Top stats section */}
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
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
          {[
            {
              label: "Total Jobs Done",
              count: 201,
              change: "+8%",
              color: "text-green-500",
            },
            {
              label: "Mason Jobs",
              count: 70,
              change: "+5%",
              color: "text-green-500",
            },
            {
              label: "Plumbing Jobs",
              count: 20,
              change: "-10%",
              color: "text-red-500",
            },
            {
              label: "Sanitation Jobs",
              count: 21,
              change: "+4%",
              color: "text-green-500",
            },
            {
              label: "Water Jobs",
              count: 90,
              change: "-8%",
              color: "text-red-500",
            },
          ].map((stat, index) => (
            <div key={index} className="p-4 border rounded-lg shadow-md">
              <p className="text-lg font-semibold">{stat.label}</p>
              <div className="flex items-center space-x-2">
                <h3 className="text-2xl font-bold">{stat.count}</h3>
                <span className={`text-sm ${stat.color}`}>{stat.change}</span>
              </div>
            </div>
          ))}
        </div>
        {/* Second Row */}
        <div className="grid py-6 rounded-md grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-transparent ring-2 ring-white p-4 rounded-lg shadow-lg">
            <div className="flex justify-between">
              <h3 className="text-lg text-white font-bold">
                Work Timing Slots
              </h3>
              DATE{/* {isMounted && <span className="text-white">{currentDate}</span>} Render only when mounted */}
              {/* Render only when mounted */}
              {/* Display current date */}
            </div>
            <TimeSlotSelector isActive={isActive} />
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
        <div className="p-6 mt-6 ring-2 ring-white rounded-md flex flex-col gap-4">
          {isActive ? (
            <DashTable />
          ) : (
            <div className="h-full lg:p-6 p-2">
              <div className="flex justify-between mb-4">
                <h3 className="text-lg text-white font-bold">
                  Today&apos;s Orders
                </h3>
                <span className="text-gray-200">
                {/* {isMounted && <span className="text-white">{currentDate}</span>} Render only when mounted */}
                DATE{" "}
                  {/* Render only when mounted */}
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
    </Layout>
  );
};

export default Services;
