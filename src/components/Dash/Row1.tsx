import React from "react";
import DashTable from "@/components/Dash/DashTable";

interface StatCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: React.ReactNode;
  bgColor?: string;
  flexCol?: string;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  subtitle,
  icon,
  bgColor,
  flexCol,
}) => {
  return (
    <div
      className={`flex items-center ${
        flexCol || "flex-row"
      } p-4 rounded-lg shadow-lg ${bgColor || "bg-white"}`}
    >
      <div className="mr-4 text-4xl">{icon}</div>
      <div>
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-2xl font-semibold">{value}</p>
        {subtitle && <p className="text-gray-500">{subtitle}</p>}
      </div>
    </div>
  );
};

const ProfileCard: React.FC = () => {
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
    </div>
  );
};

const Row1: React.FC = () => {
  return (
    <div className="w-full space-y-6 container py-10">
      {/* First Row */}
      <div className="flex flex-col lg:flex-row w-full px-2 gap-4">
        <div className="space-y-4 lg:w-1/2 ring-2 ring-white p-4 rounded-md w-full">
          <StatCard
            title="Today's Orders"
            value="0"
            subtitle="Yesterday 0"
            icon={<span>📋</span>}
            bgColor="bg-blue-200"
          />
          <StatCard
            title="Today's Revenue"
            value="₹ 0"
            subtitle="Yesterday ₹ 0"
            icon={<span>💰</span>}
            bgColor="bg-violet-300"
          />
          <StatCard
            title="Average Shipping"
            value="₹ 0"
            icon={<span>📦</span>}
            bgColor="bg-blue-200"
          />
        </div>
        <div className="lg:w-1/2 w-full flex flex-col lg:flex-row justify-between lg:space-x-16 items-center">
          <div className="w-full bg-transparent ring-2 ring-white p-4 rounded-lg shadow-lg">
            <h3 className="text-lg text-white font-bold">COD Status (Last 30 days)</h3>
            <div className="grid grid-cols-1 gap-4 mt-4">
              <StatCard title="Total COD" value="₹ 0" icon={<span>💵</span>} />
              <StatCard
                title="COD Available"
                value="₹ 0"
                icon={<span>💸</span>}
              />
              <StatCard
                title="COD Pending"
                value="₹ 0"
                subtitle="Greater than 8 days"
                icon={<span>⏳</span>}
              />
              {/* <StatCard
              title="Last COD Remitted"
              value="₹ 0"
              icon={<span>💳</span>}
            /> */}
            </div>
          </div>
          {/* Profile Card on the right */}
          <div className="lg:w-1/2 w-full mt-3">
            <ProfileCard />
          </div>
        </div>
      </div>

      {/* Second Row */}
      <div className="grid p-6 rounded-md grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-transparent ring-2 ring-white p-4 rounded-lg shadow-lg">
          <h3 className="text-lg text-white font-bold">
            Shipments Details (Last 30 days)
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
            <StatCard
              title="Total Shipments"
              value="0"
              icon={<span>🚚</span>}
            />
            <StatCard title="Pickup Pending" value="0" icon={<span>🕒</span>} />
            <StatCard title="In-Transit" value="0" icon={<span>🚛</span>} />
            <StatCard title="Delivered" value="0" icon={<span>✅</span>} />
            <StatCard title="NDR Pending" value="0" icon={<span>⚠️</span>} />
            <StatCard title="RTO" value="0" icon={<span>🔄</span>} />
          </div>
        </div>
        <div className="bg-transparent ring-2 ring-white p-4 rounded-lg shadow-lg">
          <h3 className="text-lg text-white font-bold">NDR Details (Last 30 days)</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
            <StatCard title="Total NDR" value="0" icon={<span>⚠️</span>} />
            <StatCard
              title="Your Reattempt Request"
              value="0"
              icon={<span>🔄</span>}
            />
            <StatCard
              title="Buyer Reattempt Request"
              value="0"
              icon={<span>🔄</span>}
            />
            <StatCard title="NDR Delivered" value="0" icon={<span>✅</span>} />
          </div>
        </div>
      </div>

      {/* Third Row */}
      <div className="p-6 ring-2 ring-white rounded-md flex flex-col gap-4">
        <DashTable />
      </div>
    </div>
  );
};

export default Row1;
