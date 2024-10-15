import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register the necessary components for Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const EarningsChart: React.FC = () => {
  // Dummy data for the chart
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
        label: "Monthly Earnings",
        data: [500, 800, 700, 600, 900, 1625, 1100, 1200, 800, 950, 780, 850],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Allow for custom height and width
    scales: {
      x: {
        title: {
          display: true,
          text: "Months", // Corrected title to "Months"
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
          text: "Earnings (₹)", // Corrected title for better clarity
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
  };

  return (
    <div style={{ position: "relative", height: "400px", width: "100%" }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default EarningsChart;
