import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import Reviews from "./Reviews";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa"; // Import star icons
import Calendar, { CalendarProps } from "react-calendar"; // Import react-calendar with CalendarProps

// Register the necessary components for Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
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

const Row1: React.FC = () => {
  const [isActive, setIsActive] = useState<boolean>(false); // State for active status
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const currentDate = new Date().toLocaleDateString("en-GB"); // Force the client to use 'en-GB' format (DD/MM/YYYY)

  interface OrderDetailsProps {
    customerName: string;
    address: string;
    contactNumber: string;
    jobDescription: string;
    earnings: number;
    review: number; // Assuming review is a number, e.g., 4.5
    status: string; // New field for job status
    date: string; // Made required
  }
  // Helper function to render stars based on the rating
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating); // Full stars (e.g., 4 for 4.5)
    const halfStar = rating % 1 >= 0.5; // Half star if the remainder >= 0.5
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0); // Remaining empty stars

    return (
      <div className="flex justify-center">
        {Array(fullStars)
          .fill(0)
          .map((_, index) => (
            <FaStar key={index} className="text-yellow-500" />
          ))}
        {halfStar && <FaStarHalfAlt className="text-yellow-500" />}
        {Array(emptyStars)
          .fill(0)
          .map((_, index) => (
            <FaRegStar key={index} className="text-yellow-500" />
          ))}
      </div>
    );
  };

  // Function to get color based on job status
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Upcoming":
        return "text-orange-500";
      case "Completed":
        return "text-green-500";
      case "Missed":
        return "text-red-500";
      default:
        return "text-white"; // Default color for unknown statuses
    }
  };

  // Table component for displaying order details with job status
  const OrderDetailsTable: React.FC<OrderDetailsProps> = ({
    customerName,
    address,
    contactNumber,
    jobDescription,
    earnings,
    date,
    review,
    status,
  }) => {
    return (
      <tr className="text-center border-b border-gray-200">
        <td className="py-4 px-4">{customerName}</td>
        <td className="py-4 px-4">{address}</td>
        <td className="py-4 px-4">{contactNumber}</td>
        <td className="py-4 px-4">{jobDescription}</td>
        <td className="py-4 px-4">{date}</td>
        <td className="py-4 px-4">${earnings.toFixed(2)}</td>
        <td className="py-4 px-4">{renderStars(review)}</td>
        <td className={`py-4 px-4 font-semibold ${getStatusColor(status)}`}>
          {status}
        </td>{" "}
        {/* Dynamically set status color */}
      </tr>
    );
  };

  // Data for the bar chart
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Average Working Hours/Month",
        data: [160, 170, 150, 180, 175, 160, 165, 170, 180, 190, 200, 210], // Example data
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  // Updated dummy data to include job status and date
  const data2: OrderDetailsProps[] = [
    {
      customerName: "John Doe",
      address: "123 Main St, Cityville, ST 12345",
      contactNumber: "(123) 456-7890",
      jobDescription: "Residential Cleaning",
      earnings: 50.0,
      review: 4.5,
      status: "Completed",
      date: "2024-10-10",
    },
    {
      customerName: "Jane Smith",
      address: "456 Elm St, Townsville, ST 67890",
      contactNumber: "(987) 654-3210",
      jobDescription: "Office Cleaning",
      earnings: 75.0,
      review: 3,
      status: "Upcoming",
      date: "2024-10-15",
    },
    {
      customerName: "Bob Lee",
      address: "789 Oak St, Suburbia, ST 24680",
      contactNumber: "(654) 987-1234",
      jobDescription: "Industrial Cleaning",
      earnings: 100.0,
      review: 4,
      status: "Missed",
      date: "2024-10-12",
    },
    // Add more orders with different dates as needed
    {
      customerName: "Alice Johnson",
      address: "321 Pine St, Metropolis, ST 13579",
      contactNumber: "(321) 654-0987",
      jobDescription: "Window Cleaning",
      earnings: 60.0,
      review: 5,
      status: "Completed",
      date: "2024-10-10",
    },
    {
      customerName: "Mark Brown",
      address: "654 Maple St, Villagetown, ST 11223",
      contactNumber: "(654) 321-7890",
      jobDescription: "Carpet Cleaning",
      earnings: 85.0,
      review: 4.5,
      status: "Completed",
      date: "2024-10-11",
    },
    {
      customerName: "Lucy Green",
      address: "987 Cedar St, Hamlet, ST 44556",
      contactNumber: "(987) 654-3210",
      jobDescription: "Garage Cleaning",
      earnings: 40.0,
      review: 3.5,
      status: "Upcoming",
      date: "2024-10-15",
    },
    // Repeat or add more entries as needed
    {
      customerName: "Sam Wilson",
      address: "159 Walnut St, Smalltown, ST 77889",
      contactNumber: "(159) 753-4862",
      jobDescription: "Garden Cleaning",
      earnings: 65.0,
      review: 4,
      status: "Completed",
      date: "2024-10-13",
    },
    {
      customerName: "Emma Davis",
      address: "753 Birch St, Middletown, ST 33445",
      contactNumber: "(753) 159-4862",
      jobDescription: "Basement Cleaning",
      earnings: 90.0,
      review: 4.5,
      status: "Upcoming",
      date: "2024-10-14",
    },
    {
      customerName: "Liam Martinez",
      address: "852 Cherry St, Uptown, ST 66778",
      contactNumber: "(852) 963-7410",
      jobDescription: "Attic Cleaning",
      earnings: 55.0,
      review: 3,
      status: "Missed",
      date: "2024-10-16",
    },
    {
      customerName: "Olivia Garcia",
      address: "147 Spruce St, Downtown, ST 99000",
      contactNumber: "(147) 258-3690",
      jobDescription: "Kitchen Cleaning",
      earnings: 70.0,
      review: 4.2,
      status: "Completed",
      date: "2024-10-17",
    },
    // ... you can add more entries as needed
  ];

  // Filter jobs based on selected date
  const filteredJobs = selectedDate
    ? data2.filter(
        (job) =>
          new Date(job.date).toDateString() === selectedDate.toDateString()
      )
    : [];

  const toggleStatus = () => {
    setIsActive((prev) => !prev);
  };

  // Handler for calendar date change
  const handleDateChange: CalendarProps["onChange"] = (value, event) => {
    if (value instanceof Date) {
      setSelectedDate(value);
    }
  };

  return (
    <div className="p-8 bg-transparent min-h-screen">
      {/* First Row */}
      <div className="flex flex-col-reverse lg:flex-row w-full px-2 gap-4">
        <div className="gap-4 grid grid-cols-1 lg:grid-cols-3 lg:w-1/2 ring-2 ring-white p-4 rounded-md w-full">
          <StatCard
            title="New Jobs"
            value="0"
            subtitle="Yesterday 0"
            icon={<span>📋</span>}
            flexCol="lg:flex-col"
          />
          <StatCard
            title="Ongoing Jobs"
            value="₹ 0"
            subtitle="Yesterday ₹ 0"
            icon={<span>💰</span>}
            flexCol="lg:flex-col"
          />
          <StatCard
            title="Target"
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

      {/* Middle Section: Calendar & Jobs List and Bar Chart */}
      <div className="flex flex-col lg:flex-row gap-4 mb-6">
        {/* Calendar and Jobs List */}
        <div className="p-4 lg:w-1/2 w-full border rounded-lg text-white shadow-md flex flex-col">
          <h3 className="mb-4 text-lg font-semibold">Job Calendar</h3>
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Calendar */}
            <div className="w-full ring-2 ring-white p-2 rounded-md lg:w-1/2">
              <Calendar
                onChange={handleDateChange}
                value={selectedDate}
                tileClassName={({ date, view }) =>
                  view === "month" &&
                  data2.some(
                    (job) =>
                      new Date(job.date).toDateString() === date.toDateString()
                  )
                    ? "highlight"
                    : null
                }
              />
            </div>
            {/* Jobs List */}
            <div className="w-full lg:w-1/2">
              <h4 className="mb-2 text-md font-semibold text-white">
                Jobs on {selectedDate ? selectedDate.toDateString() : "N/A"}:
              </h4>
              {filteredJobs.length > 0 ? (
                <ul className="space-y-2">
                  {filteredJobs.map((job, index) => (
                    <li key={index} className="p-2 bg-gray-700 rounded">
                      <p>
                        <strong>{job.customerName}</strong>
                      </p>
                      <p>{job.jobDescription}</p>
                      <p className="text-green-500">
                        Earnings: ${job.earnings.toFixed(2)}
                      </p>
                      <p>
                        Status:{" "}
                        <span className={getStatusColor(job.status)}>
                          {job.status}
                        </span>
                      </p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No jobs on this date.</p>
              )}
            </div>
          </div>
        </div>

        {/* Bar Chart: Monthly Average Working Hours */}
        <div className="p-4 lg:w-1/2 w-full border rounded-lg shadow-md">
          <h3 className="mb-4 text-lg font-semibold text-white">
            Monthly Average Working Hours
          </h3>
          <div className="h-[300px]">
            <Bar
              data={data}
              options={{
                responsive: true,
                maintainAspectRatio: false, // Allows chart to take full height
                scales: {
                  x: {
                    title: {
                      display: true,
                      text: "Months",
                      color: "white",
                    },
                    ticks: { color: "white" },
                    grid: { color: "rgba(128, 128, 128, 0.5)" },
                  },
                  y: {
                    title: { display: true, text: "Hours", color: "white" },
                    ticks: { color: "white" },
                    grid: { color: "rgba(128, 128, 128, 0.5)" },
                  },
                },
                plugins: {
                  legend: { display: false }, // Hides the legend
                  title: {
                    display: true,
                    text: "Monthly Average Working Hours",
                    color: "white",
                  },
                },
              }}
            />
          </div>
        </div>
      </div>

      <Reviews />

      {/* Third Row */}
      {/* Order Details Section */}
      <div className="p-4 border rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4">Order Details</h3>
        <div className="overflow-x-auto">
          <table className="table-auto w-full text-sm text-left text-white">
            <thead className="text-xs text-center uppercase bg-gray-700">
              <tr>
                <th className="py-2 px-4">Customer Name</th>
                <th className="py-2 px-4">Address</th>
                <th className="py-2 px-4">Contact Number</th>
                <th className="py-2 px-4">Job Description</th>
                <th className="py-2 px-4">Date</th>
                <th className="py-2 px-4">Earnings</th>
                <th className="py-2 px-4">Review</th>
                <th className="py-2 px-4">Status</th> {/* New status header */}
              </tr>
            </thead>
            <tbody className="bg-gray-800">
              {data2.map((order, index) => (
                <OrderDetailsTable
                  key={index}
                  customerName={order.customerName}
                  address={order.address}
                  contactNumber={order.contactNumber}
                  jobDescription={order.jobDescription}
                  earnings={order.earnings}
                  review={order.review}
                  status={order.status} // Pass status to the component
                  date={order.date} // Pass date to the component
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* Custom styles for highlighted dates and calendar theming */}
      <style jsx global>{`
        /* Highlighted dates with jobs */
        .react-calendar__tile.highlight {
          background: #4ade80; /* Tailwind's green-400 */
          color: black;
          border-radius: 50%;
        }

        /* Calendar container with transparent background */
        .react-calendar {
          width: 100%;
          border: none;
          background: transparent; /* Transparent background */
          font-family: Arial, Helvetica, sans-serif;
          color: white; /* White text */
        }

        /* Navigation buttons */
        .react-calendar__navigation button {
          color: white;
          min-width: 44px;
          background: none;
          font-size: 16px;
          margin: 0 2px;
        }

        /* Weekday names */
        .react-calendar__month-view__weekdays {
          text-align: center;
          text-transform: uppercase;
          font-size: 0.75em;
          color: #d1d5db; /* Gray-300 */
        }

        /* Day tiles */
        .react-calendar__tile {
          height: 40px;
          max-width: 100%;
          padding: 0.5em 0.6em;
          background: transparent; /* Transparent background */
          text-align: center;
          line-height: 16px;
          border: none;
          color: white; /* White text */
          transition: background 0.3s, color 0.3s;
        }

        /* Hover effect on tiles */
        .react-calendar__tile:hover {
          background: rgba(255, 255, 255, 0.1);
          color: white;
        }

        /* Disabled tiles */
        .react-calendar__tile:disabled {
          background: transparent;
          color: #6b7280; /* Gray-500 */
        }

        /* Today's date */
        .react-calendar__tile--now {
          background: #2563eb; /* Blue-600 */
          color: white;
          border-radius: 50%;
        }

        /* Active (selected) date */
        .react-calendar__tile--active {
          background: #3b82f6; /* Blue-500 */
          color: white;
          border-radius: 50%;
        }

        /* Focused tile (keyboard navigation) */
        .react-calendar__tile:focus {
          outline: none;
          background: rgba(59, 130, 246, 0.5); /* Semi-transparent blue */
          color: white;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .react-calendar__tile {
            height: 35px;
            padding: 0.3em 0.4em;
            font-size: 0.8em;
          }

          .react-calendar__navigation button {
            font-size: 14px;
          }
        }
      `}</style>
    </div>
  );
};

export default Row1;
