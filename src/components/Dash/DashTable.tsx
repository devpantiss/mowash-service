import React, { useState } from "react";

interface OrderDetailsProps {
  customerName: string;
  address: string;
  contactNumber: string;
  jobDescription: string;
  earnings: number;
  status: string;
  onStatusChange: (newStatus: string) => void;
}

const OrderDetailsTable: React.FC<OrderDetailsProps> = ({
  customerName,
  address,
  contactNumber,
  jobDescription,
  earnings,
  status,
  onStatusChange,
}) => {
  // Function to determine the background color based on the status
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-400 text-black";
      case "Completed":
        return "bg-green-400 text-black";
      case "Missed":
        return "bg-red-400 text-white";
      default:
        return "bg-gray-400 text-black";
    }
  };

  return (
    <tr className="text-center border-b border-gray-200">
      <td className="py-4 px-4">{customerName}</td>
      <td className="py-4 px-4">{address}</td>
      <td className="py-4 px-4">{contactNumber}</td>
      <td className="py-4 px-4">{jobDescription}</td>
      <td className="py-4 px-4">₹{earnings.toFixed(2)}</td>
      <td className={`py-4 px-4 ${getStatusColor(status)}`}>
        <select
          value={status}
          onChange={(e) => onStatusChange(e.target.value)}
          className={`rounded p-1 ${getStatusColor(status)}`}
        >
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
          <option value="Missed">Missed</option>
        </select>
      </td>
    </tr>
  );
};

const Table: React.FC = () => {
  const [data, setData] = useState([
    {
      customerName: "John Doe",
      address: "123 Main St, Cityville, ST 12345",
      contactNumber: "(123) 456-7890",
      jobDescription: "Residential Cleaning",
      earnings: 50.0,
      status: "Pending",
    },
    {
      customerName: "Jane Smith",
      address: "456 Elm St, Townsville, ST 67890",
      contactNumber: "(987) 654-3210",
      jobDescription: "Office Cleaning",
      earnings: 75.0,
      status: "Completed",
    },
    {
      customerName: "John Doe",
      address: "123 Main St, Cityville, ST 12345",
      contactNumber: "(123) 456-7890",
      jobDescription: "Residential Cleaning",
      earnings: 50.0,
      status: "Pending",
    },
    {
      customerName: "Jane Smith",
      address: "456 Elm St, Townsville, ST 67890",
      contactNumber: "(987) 654-3210",
      jobDescription: "Office Cleaning",
      earnings: 75.0,
      status: "Completed",
    },
    {
      customerName: "John Doe",
      address: "123 Main St, Cityville, ST 12345",
      contactNumber: "(123) 456-7890",
      jobDescription: "Residential Cleaning",
      earnings: 50.0,
      status: "Pending",
    },
    {
      customerName: "Jane Smith",
      address: "456 Elm St, Townsville, ST 67890",
      contactNumber: "(987) 654-3210",
      jobDescription: "Office Cleaning",
      earnings: 75.0,
      status: "Completed",
    },
  ]);

  const handleStatusChange = (index: number, newStatus: string) => {
    const updatedData = data.map((order, i) =>
      i === index ? { ...order, status: newStatus } : order
    );
    setData(updatedData);
  };

  return (
    <div className="bg-transparent lg:p-6 p-2 rounded-lg shadow-lg">
      <div className="flex justify-between mb-4">
        <h3 className="text-lg text-white font-bold">Today&apos;s Orders</h3>
        <span className="text-gray-200">Date: {new Date().toLocaleDateString()}</span>
      </div>
      <div className="overflow-x-auto">
        <div className="max-h-96 overflow-y-auto">
          <table className="min-w-full table-auto text-sm">
            <thead className="bg-gray-100 text-sm text-gray-600 sticky top-0">
              <tr>
                <th className="py-2 px-4">Customer Name</th>
                <th className="py-2 px-4">Address</th>
                <th className="py-2 px-4">Contact Number</th>
                <th className="py-2 px-4">Job Description</th>
                <th className="py-2 px-4">Earnings</th>
                <th className="py-2 px-4">Status</th>
              </tr>
            </thead>
            <tbody className="text-center text-white">
              {data.length > 0 ? (
                data.map((order, index) => (
                  <OrderDetailsTable
                    key={index}
                    customerName={order.customerName}
                    address={order.address}
                    contactNumber={order.contactNumber}
                    jobDescription={order.jobDescription}
                    earnings={order.earnings}
                    status={order.status}
                    onStatusChange={(newStatus) => handleStatusChange(index, newStatus)}
                  />
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="py-6 text-center">
                    <div className="flex flex-col items-center">
                      <span className="text-lg font-semibold">
                        No orders found for today.
                      </span>
                      <img
                        src="https://path-to-your-image.png"
                        alt="No Data"
                        className="mt-4 h-20"
                      />
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
