import Link from "next/link";
import { FC, useState } from "react";
import {
  AiFillHome,
  AiFillDashboard,
  AiFillDollarCircle,
  AiFillSetting,
  AiFillProfile,
  AiFillQuestionCircle,
  AiOutlineLogout,
  AiOutlineDown,
} from "react-icons/ai";
import {
  BsFillHeartPulseFill,
  BsFillShieldLockFill,
  BsCardChecklist,
} from "react-icons/bs";
import { FaUserShield } from "react-icons/fa";

const Sidebar: FC = () => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  return (
    <aside
      className="group fixed top-0 left-0 h-screen bg-blue-700 text-white transition-all duration-300 z-50 
        w-16 hover:w-64 flex flex-col justify-between overflow-hidden z-60"
    >
      {/* Sidebar options */}
      <div className="space-y-6 py-6 px-2">
        {/* Home */}
        <Link
          className="flex items-center space-x-2 hover:bg-blue-400 p-2 rounded-md transition-all duration-300"
          href="/"
        >
          <AiFillHome size={24} />
          <span className="hidden group-hover:block">Home</span>
        </Link>

        {/* Dashboard */}
        <Link
          className="flex items-center space-x-2 hover:bg-blue-400 p-2 rounded-md transition-all duration-300"
          href="/dashboard"
        >
          <AiFillDashboard size={24} />
          <span className="hidden group-hover:block">Dashboard</span>
        </Link>

        {/* Services */}
        <Link
          className="flex items-center space-x-2 hover:bg-blue-400 p-2 rounded-md transition-all duration-300"
          href="/dashboard/services"
        >
          <AiFillSetting size={24} />
          <span className="hidden group-hover:block">Services</span>
        </Link>

        {/* Earnings */}
        <Link
          className="flex items-center space-x-2 hover:bg-blue-400 p-2 rounded-md transition-all duration-300"
          href="/dashboard/earnings"
        >
          <AiFillDollarCircle size={24} />
          <span className="hidden group-hover:block">Earnings</span>
        </Link>
        
        {/* Checkup */}
        <Link
          className="flex items-center space-x-2 hover:bg-blue-400 p-2 rounded-md transition-all duration-300"
          href="/welfare/healthcheckup"
        >
                <BsFillHeartPulseFill size={20} />
                <span className="hidden group-hover:block">Health Checkup</span>
        </Link>

        {/* welfare */}
        <Link
          className="flex items-center space-x-2 hover:bg-blue-400 p-2 rounded-md transition-all duration-300"
          href="/dashboard/welfareservices"
        >
                <FaUserShield size={20} />
                <span className="hidden group-hover:block">Welfare Services</span>
        </Link>
        
        
        {/* welfare */}
        <Link
          className="flex items-center space-x-2 hover:bg-blue-400 p-2 rounded-md transition-all duration-300"
          href="/lms/certification"
        >
                <FaUserShield size={20} />
                <span className="hidden group-hover:block">LMS</span>
        </Link>

        {/* Help & Support */}
        <Link
          className="flex items-center space-x-2 hover:bg-blue-400 p-2 rounded-md transition-all duration-300"
          href="/dashboard"
        >
          <AiFillQuestionCircle size={24} />
          <span className="hidden group-hover:block">Help & Support</span>
        </Link>
      </div>

      {/* Logout Button */}
      <div className="p-2">
        <Link href="/signup">
          <div className="flex items-center space-x-2 hover:bg-red-600 p-2 rounded-md cursor-pointer transition-all duration-300">
            <AiOutlineLogout size={24} />
            <span className="hidden group-hover:block">Logout</span>
          </div>
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
