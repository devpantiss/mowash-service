import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// Sample data for heart rate and oxygen levels
const heartRateData = {
  labels: ['12:00', '12:10', '12:20', '12:30', '12:40', '12:50'],
  datasets: [
    {
      label: 'Heart Rate (bpm)',
      data: [80, 85, 90, 87, 82, 88],
      borderColor: 'rgba(255, 0, 0, 1)', // Red color for the line
      backgroundColor: 'rgba(255, 0, 0, 0.2)', // Light red fill
      fill: true,
      tension: 0.4,
    },
  ],
};

// Chart options
const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false, // Disable the legend
    },
  },
  scales: {
    x: {
      ticks: {
        color: '#ffffff', // White color for the X-axis labels
      },
      grid: {
        color: '#d3d3d3', // Gray color for the grid lines
      },
    },
    y: {
      ticks: {
        color: '#ffffff', // White color for the Y-axis labels
      },
      grid: {
        color: '#d3d3d3', // Gray color for the grid lines
      },
      beginAtZero: false, // Allow values to start from dynamic values
    },
  },
};

const HeartRateChart = () => {
  return (
    <div className="bg-transparent ring-2 ring-white flex gap-z-3 rounded-lg shadow-lg p-6 mx-auto">
      {/* Heart Rate Section */}
      <div className="mb-6">
        <h3 className="text-lg text-white font-semibold">Heart Rate</h3>
        <p className="text-gray-500">Today: avg. 80 bpm</p>
        <Line data={heartRateData} options={options} />
      </div>
    </div>
  );
};

export default HeartRateChart;
