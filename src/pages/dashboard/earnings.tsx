// components/Earnings.tsx
import React from "react";
import EarningsChart from "../../components/Dash/EarningsChart";
import Layout from "@/components/Dash/Layout";
import {
  FaRegUser,
  FaMoneyBillAlt,
  FaCreditCard,
  FaChartLine,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";
import EarningsLineChart from "../../components/Dash/EarningsLineChart"; // Import the new chart component
import FlipCard from "@/components/Dash/FlipCard";

const Earnings: React.FC = () => {
  // Sample data for the charts
  const monthlyData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Monthly Earnings",
        data: [300, 500, 700, 400, 600, 800, 900],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderWidth: 2,
        fill: true,
      },
    ],
  };

  const yearlyData = {
    labels: ["2021", "2022", "2023"],
    datasets: [
      {
        label: "Yearly Earnings",
        data: [2500, 3000, 4000],
        borderColor: "rgba(153, 102, 255, 1)",
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        borderWidth: 2,
        fill: true,
      },
    ],
  };

  return (
    <Layout>
      <div className="p-8 bg-transparent min-h-screen">
        {/* Summary Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            {
              label: "Goals",
              amount: "$2,718.55",
              icon: <FaRegUser className="h-6 w-6 text-blue-500" />,
            },
            {
              label: "Revenue",
              amount: "$1,677.42",
              icon: <FaMoneyBillAlt className="h-6 w-6 text-green-500" />,
            },
            {
              label: "Expenses",
              amount: "$328.85",
              icon: <FaCreditCard className="h-6 w-6 text-red-500" />,
            },
            {
              label: "Total Profit",
              amount: "$1,348.57",
              icon: <FaChartLine className="h-6 w-6 text-yellow-500" />,
            },
          ].map((item) => (
            <div
              key={item.label}
              className="p-4 bg-white rounded-lg shadow-md flex items-center space-x-4"
            >
              {item.icon}
              <div>
                <h3 className="text-gray-500 text-sm">{item.label}</h3>
                <p className="text-2xl font-semibold">{item.amount}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Earnings Chart */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="md:col-span-2 bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold mb-4">Total Earnings</h4>
            <p className="text-3xl font-semibold mb-2">$779.58</p>
            {/* Chart */}
            <EarningsChart />
          </div>

          {/* Credit Card */}
          <FlipCard
            cardNumber="9759 2484 5269 6576"
            validThru="12/24"
            name="BRUCE WAYNE"
          />
        </div>

        {/* Earnings Goals with Transactions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <div className="bg-white p-6 rounded-lg shadow-md h-80 overflow-y-scroll">
            <h4 className="text-xl font-semibold mb-4">Recent Transactions</h4>
            <ul className="space-y-4">
              {[
                {
                  name: "Jane Cooper",
                  method: "WISE",
                  amount: "$293.01",
                  status: "Success",
                },
                {
                  name: "Arlene McCoy",
                  method: "PayPal",
                  amount: "$739.65",
                  status: "Cancelled",
                },
                {
                  name: "Jacob Jones",
                  method: "WISE",
                  amount: "$576.28",
                  status: "Success",
                },
                {
                  name: "Kathryn Murphy",
                  method: "WISE",
                  amount: "$128.01",
                  status: "Success",
                },
              ].map((transaction, index) => (
                <li
                  key={index}
                  className="bg-gray-100 p-4 rounded-lg shadow-md flex justify-between items-center"
                >
                  <div>
                    <p className="text-lg font-semibold">{transaction.name}</p>
                    <p className="text-sm text-gray-500">
                      {transaction.method}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold">
                      {transaction.amount}
                    </p>
                    <p
                      className={`text-sm ${
                        transaction.status === "Success"
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {transaction.status === "Success" ? (
                        <FaCheckCircle className="h-4 w-4 inline-block mr-1" />
                      ) : (
                        <FaTimesCircle className="h-4 w-4 inline-block mr-1" />
                      )}
                      {transaction.status}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Monthly and Yearly Summary with Charts */}
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-4">Monthly</h4>
              <p className="text-2xl font-semibold">$475.22</p>
              <p className="text-sm text-green-500">+29.16% from last month</p>
              {/* Monthly Line Chart */}
              <EarningsLineChart data={monthlyData} />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-4">Yearly</h4>
              <p className="text-2xl font-semibold">$854.08</p>
              <p className="text-sm text-red-500">-14.76% from last year</p>
              {/* Yearly Line Chart */}
              <EarningsLineChart data={yearlyData} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Earnings;
