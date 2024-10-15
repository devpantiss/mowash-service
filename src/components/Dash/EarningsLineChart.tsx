// components/EarningsLineChart.tsx
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface EarningsLineChartProps {
  data: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      borderColor: string;
      backgroundColor: string;
      borderWidth: number;
      fill: boolean;
    }[];
  };
}

const EarningsLineChart: React.FC<EarningsLineChartProps> = ({ data }) => {
  return (
    <div className="chart-container">
      <Line
        data={data}
        options={{
          responsive: true,
          maintainAspectRatio: false, // Allows the chart to take the full height of its container
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
                color: "rgba(128, 128, 128, 0.5)",
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
                color: "rgba(128, 128, 128, 0.5)",
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
  );
};

export default EarningsLineChart;
