import React, { useEffect, useState } from "react";
import Layout from "@/components/Dash/Layout";
import { Line } from "react-chartjs-2";
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
import "react-calendar/dist/Calendar.css";
import DashTable from "@/components/Dash/DashTable";
import Notification from "@/components/Dash/Notification";



ChartJS.register(
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  CategoryScale,
  LinearScale
);

interface JobNotification {
  id: number;
  name: string; // Who booked the job
  distance: number; // Distance from user's location in kilometers
  payment: number; // Payment amount
  timing: string; // Job timing
  category: string; // Job category
  address: string
}

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
      } p-4 rounded-lg text-center justify-center bg-transparent`}
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
  const [isActive, setIsActive] = useState<boolean>(true);
  const [currentDate, setCurrentDate] = useState("");
  const [targetJobs, setTargetJobs] = useState<number>(0);
  const [targetRevenue, setTargetRevenue] = useState<number>(0);
  const [jobsInput, setJobsInput] = useState<number | string>("");
  const [revenueInput, setRevenueInput] = useState<number | string>("");
  const [selectedSlots, setSelectedSlots] = useState<string[]>([]); // Moved state here
  const [notifications, setNotifications] = useState<JobNotification[]>([
    { id: 1, name: "Rahul Kumar", distance: 8, payment: 600, timing: "2:00 PM", category: "Plumbing", address: "Cuttack" },
    { id: 2, name: "Anjali Mishra", distance: 5, payment: 400, timing: "4:00 PM", category: "Electrical", address: "Cuttack" },
  ]);

  // Calculate total working hours based on selected slots
  const totalWorkingHours = selectedSlots.length;

  useEffect(() => {
    setIsMounted(true);
    const formattedDate = new Date().toLocaleDateString("en-GB");
    setCurrentDate(formattedDate);
  }, []);

  if (!isMounted) {
    return null;
  }

  const toggleActiveStatus = () => {
    setIsActive((prev) => !prev);
  };

  const handleJobsInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setJobsInput(e.target.value);
  };

  const handleRevenueInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRevenueInput(e.target.value);
  };

  const handleJobsSubmit = () => {
    const parsedJobs = Number(jobsInput);
    if (!isNaN(parsedJobs)) {
      setTargetJobs(parsedJobs);
      setJobsInput(""); // Clear input field after submission
    }
  };

  const handleRevenueSubmit = () => {
    const parsedRevenue = Number(revenueInput);
    if (!isNaN(parsedRevenue)) {
      setTargetRevenue(parsedRevenue);
      setRevenueInput(""); // Clear input field after submission
    }
  };

  const TimeSlotSelector: React.FC<{ isActive: boolean }> = ({ isActive }) => {
    const timeSlots = Array.from({ length: 13 }, (_, i) => {
      const hour = 6 + i;
      const nextHour = hour + 1;
      const suffix = hour < 12 ? "AM" : "PM";
      const formattedHour = hour % 12 || 12;
      const formattedNextHour = nextHour % 12 || 12;
      return `${formattedHour}:00 ${suffix} - ${formattedNextHour}:00 ${suffix}`;
    });

    const handleSlotChange = (slot: string) => {
      setSelectedSlots((prev) =>
        prev.includes(slot)
          ? prev.filter((s) => s !== slot)
          : [...prev, slot]
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
              }`}
            >
              <input
                type="checkbox"
                checked={selectedSlots.includes(slot)}
                onChange={() => isActive && handleSlotChange(slot)}
                disabled={!isActive}
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

  const weeklyEarningsData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "This Week's Earnings",
        data: [120, 150, 170, 200, 250, 300, 400],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderWidth: 2,
        fill: true,
      },
      {
        label: "Jobs Completed",
        data: [10, 12, 15, 8, 20, 18, 25],
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderWidth: 2,
        fill: true,
      },
    ],
  };

  const handleAcceptJob = (id: number) => {
    setNotifications((prev) => prev.filter((job) => job.id !== id));
    // Handle job acceptance logic here
    console.log(`Accepted job ${id}`);
  };

  const handleCancelJob = (id: number) => {
    setNotifications((prev) => prev.filter((job) => job.id !== id));
    // Handle job cancellation logic here
    console.log(`Cancelled job ${id}`);
  };


  return (
    <Layout>
      <div className="p-6 bg-transparent text-white rounded-lg shadow-lg">
        <div className="flex flex-col lg:flex-row gap-y-8 lg:gap-x-8">
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
              value={`${totalWorkingHours} Hours`} // Dynamically update working hours
              icon={<span>🕒</span>}
              flexCol="lg:flex-col"
            />
          </div>
          <div className="gap-4 grid grid-cols-1 lg:grid-cols-3 lg:w-1/2 ring-2 ring-white p-4 rounded-md w-full">
            <StatCard
              title="Target Revenue"
              value={`₹ ${targetRevenue}`}
              subtitle="Yesterday ₹ 0"
              icon={<span>💰</span>}
              flexCol="lg:flex-col"
            />
            <StatCard
              title="Target Jobs"
              value={targetJobs}
              subtitle="Yesterday 0"
              icon={<span>📋</span>}
              flexCol="lg:flex-col"
            />
            <div className="flex flex-col">
              <button
                onClick={toggleActiveStatus}
                className={`p-2 rounded-md ${
                  isActive ? "bg-green-500" : "bg-red-500"
                } text-white`}
              >
                {isActive ? "ACTIVE" : "INACTIVE"}
              </button>
              <div className="flex flex-col w-full mt-2">
                <div className="flex w-full">
                  <input
                    type="number"
                    placeholder="Target Jobs"
                    value={jobsInput} // Set input value to jobsInput state
                    onChange={handleJobsInputChange}
                    className="p-2 rounded-bl-md w-full rounded-tl-md text-black"
                  />
                  <button
                    onClick={handleJobsSubmit}
                    className="p-2 bg-blue-500 rounded-br-md rounded-tr-md text-white"
                  >
                    Submit
                  </button>
                </div>
                <div className="flex mt-2 w-full">
                  <input
                    type="number"
                    placeholder="Target Revenue"
                    value={revenueInput} // Set input value to revenueInput state
                    onChange={handleRevenueInputChange}
                    className="p-2 rounded-bl-md w-full rounded-tl-md text-black"
                  />
                  <button
                    onClick={handleRevenueSubmit}
                    className="p-2 bg-blue-500 rounded-br-md rounded-tr-md text-white"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:gap-x-6 w-full gap-y-6">
          <div className="mt-6 lg:w-1/2 w-full ring-2 ring-white rounded-lg p-4">
            <div className="flex justify-between">
              <h3 className="text-lg text-white font-bold">
                Work Timing Slots
              </h3>
              <span className="text-white">{currentDate}</span>
            </div>
            <TimeSlotSelector isActive={isActive} />
          </div>
          <div className="mt-6 w-full lg:w-1/2 ring-2 ring-white rounded-lg p-4">
          <h3 className="text-lg text-white font-bold">Job Notifications</h3>
          <div className="mt-4 flex flex-col gap-4">
            {notifications.length > 0 ? (
              notifications.map((job) => (
                <Notification
                  key={job.id}
                  job={job}
                  onAccept={handleAcceptJob}
                  onCancel={handleCancelJob}
                />
              ))
            ) : (
              <p className="text-center text-white">No new job notifications.</p>
            )}
          </div>
        </div>

        </div>

        <div className="p-3 mt-6 ring-2 ring-white rounded-md flex flex-col gap-4">
          {isActive ? (
            <DashTable />
          ) : (
            <div className="h-full lg:p-6 p-2">
              <div className="flex justify-between mb-4">
                <h3 className="text-lg text-white font-bold">
                  Today&apos;s Orders
                </h3>
                <span className="text-white">{currentDate}</span>
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
