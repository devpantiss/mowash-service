// components/EarningsLineChart.tsx
import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';

ChartJS.register(LineElement, PointElement, LinearScale, Title, Tooltip, Legend, Filler);

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
    <div className="w-full h-40">
      <Line data={data} options={{ responsive: true }} />
    </div>
  );
};

export default EarningsLineChart;
