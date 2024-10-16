// Services.tsx

import React, { useState } from "react";
import Layout from "@/components/Dash/Layout";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa"; // Import star icons
import Calendar, { CalendarProps } from "react-calendar"; // Import react-calendar with CalendarProps
import "react-calendar/dist/Calendar.css"; // Import react-calendar styles

// Register ChartJS components
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const Services: React.FC = () => {
  // State for selected date
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  // Handler for calendar date change
  const handleDateChange: CalendarProps["onChange"] = (value, event) => {
    if (value instanceof Date) {
      setSelectedDate(value);
    }
  };

  // Data for the bar chart
  const data = {
    labels: [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
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

  // Interface for order details
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
        </td> {/* Dynamically set status color */}
      </tr>
    );
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

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Monthly Average Working Hours",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  // Filter jobs based on selected date
  const filteredJobs = selectedDate
    ? data2.filter(
        (job) =>
          new Date(job.date).toDateString() === selectedDate.toDateString()
      )
    : [];

  return (
    <Layout>
      <div className="p-6 bg-transparent text-white rounded-lg shadow-lg">
        {/* Top stats section */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
          {[
            { label: "Total Jobs Done", count: 201, change: "+8%", color: "text-green-500" },
            { label: "Mason Jobs", count: 70, change: "+5%", color: "text-green-500" },
            { label: "Plumbing Jobs", count: 20, change: "-10%", color: "text-red-500" },
            { label: "Sanitation Jobs", count: 21, change: "+4%", color: "text-green-500" },
            { label: "Water Jobs", count: 90, change: "-8%", color: "text-red-500" },
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

        {/* Middle Section: Calendar & Jobs List and Bar Chart */}
        <div className="flex flex-col lg:flex-row gap-4 mb-6">
          {/* Calendar and Jobs List */}
          <div className="p-4 lg:w-1/2 w-full border rounded-lg shadow-md flex flex-col">
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
                <h4 className="mb-2 text-md font-semibold">
                  Jobs on {selectedDate ? selectedDate.toDateString() : "N/A"}:
                </h4>
                {filteredJobs.length > 0 ? (
                  <ul className="space-y-2">
                    {filteredJobs.map((job, index) => (
                      <li key={index} className="p-2 bg-gray-700 rounded">
                        <p><strong>{job.customerName}</strong></p>
                        <p>{job.jobDescription}</p>
                        <p className="text-green-500">Earnings: ${job.earnings.toFixed(2)}</p>
                        <p>Status: <span className={getStatusColor(job.status)}>{job.status}</span></p>
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
            <h3 className="mb-4 text-lg font-semibold">Monthly Average Working Hours</h3>
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
    </Layout>
  );
};

export default Services;
