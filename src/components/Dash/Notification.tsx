import React from "react";
import { FaUserCircle } from "react-icons/fa"; // Import an icon for the job booker

interface JobNotification {
  id: number;
  name: string; // Who booked the job
  distance: number; // Distance from user's location in kilometers
  payment: number; // Payment amount
  timing: string; // Job timing
  category: string; // Job category
}

const Notification: React.FC<{
  job: JobNotification;
  onAccept: (id: number) => void;
  onCancel: (id: number) => void;
}> = ({ job, onAccept, onCancel }) => {
  return (
    <div className="bg-gray-900 p-4 rounded-md shadow-lg transition-transform transform hover:scale-105">
      <div className="flex items-center mb-3">
        <FaUserCircle className="text-blue-500 text-3xl mr-3" />
        <h4 className="text-white font-bold text-lg">{job.name}</h4>
      </div>
      <div className="flex flex-col lg:flex-row lg:gap-x-8 space-y-1">
        <p className="text-gray-300">
          <strong>Category:</strong> {job.category}
        </p>
        <p className="text-gray-300">
          <strong>Distance:</strong> {job.distance} km
        </p>
        <p className="text-gray-300">
          <strong>Payment:</strong> ₹{job.payment}
        </p>
        <p className="text-gray-300">
          <strong>Timing:</strong> {job.timing}
        </p>
      </div>
      <div className="flex gap-2 mt-4">
        <button
          onClick={() => onAccept(job.id)}
          className="bg-green-600 text-white px-4 py-2 rounded-md transition duration-200 hover:bg-green-700"
        >
          Accept
        </button>
        <button
          onClick={() => onCancel(job.id)}
          className="bg-red-600 text-white px-4 py-2 rounded-md transition duration-200 hover:bg-red-700"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Notification;
