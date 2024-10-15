import Layout from "@/components/Dash/Layout";
import React from "react";
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

// Register ChartJS components
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const Services: React.FC = () => {
  // Data for the chart
  const data = {
    labels: [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
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

  interface OrderDetailsProps {
    customerName: string;
    address: string;
    contactNumber: string;
    jobDescription: string;
    earnings: number;
    review: number; // Assuming review is a number, e.g., 4.5
    status: string; // New field for job status
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

  // Table component for displaying order details with job status
  const OrderDetailsTable: React.FC<OrderDetailsProps> = ({
    customerName,
    address,
    contactNumber,
    jobDescription,
    earnings,
    review,
    status, // Added status prop
  }) => {
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
  
    return (
      <tr className="text-center border-b border-gray-200">
        <td className="py-4 px-4">{customerName}</td>
        <td className="py-4 px-4">{address}</td>
        <td className="py-4 px-4">{contactNumber}</td>
        <td className="py-4 px-4">{jobDescription}</td>
        <td className="py-4 px-4">${earnings.toFixed(2)}</td>
        <td className="py-4 px-4">{renderStars(review)}</td>
        <td className={`py-4 px-4 font-semibold ${getStatusColor(status)}`}>
          {status}
        </td> {/* Dynamically set status color */}
      </tr>
    );
  };

  // Updated dummy data to include job status
  const data2 = [
    {
      customerName: "John Doe",
      address: "123 Main St, Cityville, ST 12345",
      contactNumber: "(123) 456-7890",
      jobDescription: "Residential Cleaning",
      earnings: 50.0,
      review: 4.5,
      status: "Completed", // New field
    },
    {
      customerName: "Jane Smith",
      address: "456 Elm St, Townsville, ST 67890",
      contactNumber: "(987) 654-3210",
      jobDescription: "Office Cleaning",
      earnings: 75.0,
      review: 3,
      status: "Upcoming", // New field
    },
    {
      customerName: "Bob Lee",
      address: "789 Oak St, Suburbia, ST 24680",
      contactNumber: "(654) 987-1234",
      jobDescription: "Industrial Cleaning",
      earnings: 100.0,
      review: 4,
      status: "Missed", // New field
    },
    {
      customerName: "John Doe",
      address: "123 Main St, Cityville, ST 12345",
      contactNumber: "(123) 456-7890",
      jobDescription: "Residential Cleaning",
      earnings: 50.0,
      review: 4.5,
      status: "Completed", // New field
    },
    {
      customerName: "Jane Smith",
      address: "456 Elm St, Townsville, ST 67890",
      contactNumber: "(987) 654-3210",
      jobDescription: "Office Cleaning",
      earnings: 75.0,
      review: 3,
      status: "Upcoming", // New field
    },
    {
      customerName: "Bob Lee",
      address: "789 Oak St, Suburbia, ST 24680",
      contactNumber: "(654) 987-1234",
      jobDescription: "Industrial Cleaning",
      earnings: 100.0,
      review: 4,
      status: "Missed", // New field
    },
    {
      customerName: "John Doe",
      address: "123 Main St, Cityville, ST 12345",
      contactNumber: "(123) 456-7890",
      jobDescription: "Residential Cleaning",
      earnings: 50.0,
      review: 4.5,
      status: "Completed", // New field
    },
    {
      customerName: "Jane Smith",
      address: "456 Elm St, Townsville, ST 67890",
      contactNumber: "(987) 654-3210",
      jobDescription: "Office Cleaning",
      earnings: 75.0,
      review: 3,
      status: "Upcoming", // New field
    },
    {
      customerName: "Bob Lee",
      address: "789 Oak St, Suburbia, ST 24680",
      contactNumber: "(654) 987-1234",
      jobDescription: "Industrial Cleaning",
      earnings: 100.0,
      review: 4,
      status: "Missed", // New field
    },
    {
      customerName: "John Doe",
      address: "123 Main St, Cityville, ST 12345",
      contactNumber: "(123) 456-7890",
      jobDescription: "Residential Cleaning",
      earnings: 50.0,
      review: 4.5,
      status: "Completed", // New field
    },
    {
      customerName: "Jane Smith",
      address: "456 Elm St, Townsville, ST 67890",
      contactNumber: "(987) 654-3210",
      jobDescription: "Office Cleaning",
      earnings: 75.0,
      review: 3,
      status: "Upcoming", // New field
    },
    {
      customerName: "Bob Lee",
      address: "789 Oak St, Suburbia, ST 24680",
      contactNumber: "(654) 987-1234",
      jobDescription: "Industrial Cleaning",
      earnings: 100.0,
      review: 4,
      status: "Missed", // New field
    },
    {
      customerName: "John Doe",
      address: "123 Main St, Cityville, ST 12345",
      contactNumber: "(123) 456-7890",
      jobDescription: "Residential Cleaning",
      earnings: 50.0,
      review: 4.5,
      status: "Completed", // New field
    },
    {
      customerName: "Jane Smith",
      address: "456 Elm St, Townsville, ST 67890",
      contactNumber: "(987) 654-3210",
      jobDescription: "Office Cleaning",
      earnings: 75.0,
      review: 3,
      status: "Upcoming", // New field
    },
    {
      customerName: "Bob Lee",
      address: "789 Oak St, Suburbia, ST 24680",
      contactNumber: "(654) 987-1234",
      jobDescription: "Industrial Cleaning",
      earnings: 100.0,
      review: 4,
      status: "Missed", // New field
    },
  ];

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

        {/* Middle Section: Licensed Personnel & Bar Chart */}
        <div className="flex flex-col lg:flex-row gap-4 mb-6">
          {/* Bar Chart: Total Jobs Completed */}
          <div className="p-4 lg:w-1/2 w-full border rounded-lg shadow-md">
            <h3 className="mb-4 text-lg font-semibold">Total Jobs Completed</h3>
            <h2 className="text-3xl font-bold mb-2">657</h2>
            <p className="text-green-500 mb-4">+10%</p>
            <div className="space-y-2">
              {[
                { label: "Region A", count: 219, color: "bg-red-600" },
                { label: "Region B", count: 160, color: "bg-orange-500" },
                { label: "Region C", count: 200, color: "bg-orange-700" },
                { label: "Region D", count: 78, color: "bg-red-400" },
              ].map((region, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span>{region.label}</span>
                  <div className="w-3/4 h-4 rounded-lg overflow-hidden bg-gray-200">
                    <div
                      className={`${region.color} h-full`}
                      style={{ width: `${(region.count / 219) * 100}%` }}
                    ></div>
                  </div>
                  <span>{region.count}</span>
                </div>
              ))}
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
                        text: "Days of the Week",
                        color: "white",
                      },
                      ticks: { color: "white" },
                      grid: { color: "rgba(128, 128, 128, 0.5)" },
                    },
                    y: {
                      title: { display: true, text: "Value", color: "white" },
                      ticks: { color: "white" },
                      grid: { color: "rgba(128, 128, 128, 0.5)" },
                    },
                  },
                  plugins: {
                    legend: { display: false }, // Hides the legend
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
              <thead className="text-xs uppercase bg-gray-700">
                <tr>
                  <th className="py-2 px-4">Customer Name</th>
                  <th className="py-2 px-4">Address</th>
                  <th className="py-2 px-4">Contact Number</th>
                  <th className="py-2 px-4">Job Description</th>
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
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Services;
