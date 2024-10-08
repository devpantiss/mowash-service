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
      className="group fixed top-0 left-0 h-screen bg-blue-900 text-white transition-all duration-300 z-50 
        w-16 hover:w-64 flex flex-col justify-between overflow-hidden"
    >
      {/* Sidebar options */}
      <div className="space-y-6 py-6 px-2">
        {/* Home */}
        <Link href="/">
          <div className="flex items-center space-x-2 hover:bg-indigo-800 p-2 rounded-md transition-all duration-300">
            <AiFillHome size={24} />
            <span className="hidden group-hover:block">Home</span>
          </div>
        </Link>

        {/* Dashboard */}
        <div className="flex items-center space-x-2 hover:bg-indigo-800 p-2 rounded-md transition-all duration-300">
          <AiFillDashboard size={24} />
          <span className="hidden group-hover:block">Dashboard</span>
        </div>

        {/* Services */}
        <div className="flex items-center space-x-2 hover:bg-indigo-800 p-2 rounded-md transition-all duration-300">
          <AiFillSetting size={24} />
          <span className="hidden group-hover:block">Services</span>
        </div>

        {/* Earnings */}
        <div className="flex items-center space-x-2 hover:bg-indigo-800 p-2 rounded-md transition-all duration-300">
          <AiFillDollarCircle size={24} />
          <span className="hidden group-hover:block">Earnings</span>
        </div>

        {/* Profile */}
        <div className="flex items-center space-x-2 hover:bg-indigo-800 p-2 rounded-md transition-all duration-300">
          <AiFillProfile size={24} />
          <span className="hidden group-hover:block">Profile</span>
        </div>

        {/* Welfare Services - Accordion */}
        <div className="space-y-1">
          <div
            onClick={toggleAccordion}
            className="flex items-center space-x-2 hover:bg-indigo-800 p-2 rounded-md cursor-pointer transition-all duration-300"
          >
            <FaUserShield size={24} />
            <span className="hidden group-hover:block">Welfare Services</span>
          </div>

          {/* Accordion Content */}
          {isAccordionOpen && (
            <div className="ml-6 space-y-2 transition-all duration-300">
              <div className="flex items-center space-x-2 hover:bg-indigo-800 p-2 rounded-md">
                <BsFillHeartPulseFill size={20} />
                <span className="hidden group-hover:block">
                  Health & Wellness
                </span>
              </div>
              <div className="flex items-center space-x-2 hover:bg-indigo-800 p-2 rounded-md">
                <BsFillShieldLockFill size={20} />
                <span className="hidden group-hover:block">
                  Social Security
                </span>
              </div>
              <div className="flex items-center space-x-2 hover:bg-indigo-800 p-2 rounded-md">
                <AiFillSetting size={20} />
                <span className="hidden group-hover:block">Insurance</span>
              </div>
              <div className="flex items-center space-x-2 hover:bg-indigo-800 rounded-md">
                <BsCardChecklist size={20} />
                <span className="hidden group-hover:block">Certification</span>
              </div>
            </div>
          )}
        </div>

        {/* Help & Support */}
        <div className="flex items-center space-x-2 hover:bg-indigo-800 p-2 rounded-md transition-all duration-300">
          <AiFillQuestionCircle size={24} />
          <span className="hidden group-hover:block">Help & Support</span>
        </div>
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
