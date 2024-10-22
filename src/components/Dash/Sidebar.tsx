import Link from "next/link";
import { FC, useState } from "react";
import { useRouter } from "next/router"; // Import useRouter to track active route
import {
  AiFillHome,
  AiFillDashboard,
  AiFillQuestionCircle,
  AiOutlineLogout,
} from "react-icons/ai";
import { BsFillHeartPulseFill } from "react-icons/bs";
import { FaUser, FaUserShield } from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";
import { MdHomeRepairService } from "react-icons/md";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";



const Sidebar: FC = () => {
  const router = useRouter(); // Use useRouter to get the current path
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  // Function to determine if a link is active
  const isActive = (path: string) => router.pathname === path;

  return (
    <aside
      className="group fixed top-0 left-0 h-screen bg-blue-700 text-white transition-all duration-300 z-50 
        w-16 hover:w-64 flex flex-col justify-between overflow-hidden z-60"
    >
      {/* Sidebar options */}
      <div className="space-y-6 py-6 px-2">
        {/* Home */}
        <Link
          href="/"
          className={`flex items-center space-x-2 p-2 rounded-md transition-all duration-300 ${
            isActive("/") ? "bg-white text-blue-700" : "hover:bg-blue-400"
          }`}
        >
          <AiFillHome size={24} />
          <span className="hidden group-hover:block">Home</span>
        </Link>

        {/* Dashboard */}
        <Link
          href="/dashboard"
          className={`flex items-center space-x-2 p-2 rounded-md transition-all duration-300 ${
            isActive("/dashboard")
              ? "bg-white text-blue-700"
              : "hover:bg-blue-400"
          }`}
        >
          <AiFillDashboard size={24} />
          <span className="hidden group-hover:block">Dashboard</span>
        </Link>

        {/* Services */}
        <Link
          href="/dashboard/services"
          className={`flex items-center space-x-2 p-2 rounded-md transition-all duration-300 ${
            isActive("/dashboard/services")
              ? "bg-white text-blue-700"
              : "hover:bg-blue-400"
          }`}
        >
          <MdHomeRepairService size={24} />
          <span className="hidden group-hover:block">Services</span>
        </Link>

        {/* Earnings */}
        <Link
          href="/dashboard/earnings"
          className={`flex items-center space-x-2 p-2 rounded-md transition-all duration-300 ${
            isActive("/dashboard/earnings")
              ? "bg-white text-blue-700"
              : "hover:bg-blue-400"
          }`}
        >
          <RiMoneyRupeeCircleFill size={24} />
          <span className="hidden group-hover:block">Earnings</span>
        </Link>

        {/* Health Checkup */}
        <Link
          href="/welfare/healthcheckup"
          className={`flex items-center space-x-2 p-2 rounded-md transition-all duration-300 ${
            isActive("/welfare/healthcheckup")
              ? "bg-white text-blue-700"
              : "hover:bg-blue-400"
          }`}
        >
          <BsFillHeartPulseFill size={20} />
          <span className="hidden group-hover:block">Health Stats</span>
        </Link>

        {/* Welfare Services */}
        <Link
          href="/dashboard/welfareservices"
          className={`flex items-center space-x-2 p-2 rounded-md transition-all duration-300 ${
            isActive("/dashboard/welfareservices")
              ? "bg-white text-blue-700"
              : "hover:bg-blue-400"
          }`}
        >
          <FaUserShield size={20} />
          <span className="hidden group-hover:block">Welfare Services</span>
        </Link>

        {/* LMS */}
        <Link
          href="/lms/certification"
          className={`flex items-center space-x-2 p-2 rounded-md transition-all duration-300 ${
            isActive("/lms/certification")
              ? "bg-white text-blue-700"
              : "hover:bg-blue-400"
          }`}
        >
          <GiGraduateCap size={20} />
          <span className="hidden group-hover:block">Green Jobs</span>
        </Link>

        {/* Profile */}
        <Link
          href="/dashboard/profile"
          className={`flex items-center space-x-2 p-2 rounded-md transition-all duration-300 ${
            isActive("/dashboard/profile")
              ? "bg-white text-blue-700"
              : "hover:bg-blue-400"
          }`}
        >
          <FaUser size={20} />
          <span className="hidden group-hover:block">Profile</span>
        </Link>

        {/* Help & Support */}
        <Link
          href="/dashboard/help"
          className={`flex items-center space-x-2 p-2 rounded-md transition-all duration-300 ${
            isActive("/dashboard/help")
              ? "bg-white text-blue-700"
              : "hover:bg-blue-400"
          }`}
        >
          <AiFillQuestionCircle size={24} />
          <span className="hidden group-hover:block">Help & Support</span>
        </Link>
      </div>

      {/* Logout Button */}
      <div className="p-2">
        <Link
          href="/signup"
          className="flex items-center space-x-2 hover:bg-red-600 p-2 rounded-md cursor-pointer transition-all duration-300"
        >
          <AiOutlineLogout size={24} />
          <span className="hidden group-hover:block">Logout</span>
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
