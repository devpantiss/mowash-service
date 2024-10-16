// Navbar.tsx

import Link from "next/link";
import { FC, useState, useEffect, useRef } from "react";

const Navbar: FC = () => {
  // State to manage the visibility of the dropdown
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Ref to detect clicks outside the dropdown
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Toggle the dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  // Close the dropdown when clicking outside of it
  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsDropdownOpen(false);
    }
  };

  // Add event listener for clicks outside the dropdown
  useEffect(() => {
    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <nav className="bg-white shadow-md fixed pl-20 top-0 w-full md:top-0 md:h-16 h-12 z-20 flex items-center justify-between p-4 pr-10">
      {/* Logo */}
      <img
        src="https://www.mowash.in/Images/mo-wash-logo.svg"
        className="w-32"
        alt="Logo"
      />

      {/* Navigation Items */}
      <div className="flex items-center space-x-4 relative">
        {/* Profile Dropdown */}
        <div className="relative" ref={dropdownRef}>
          {/* Profile Button */}
          <button
            className="flex items-center space-x-2 text-gray-600 focus:outline-none"
            onClick={toggleDropdown}
            aria-haspopup="true"
            aria-expanded={isDropdownOpen}
          >
            {/* User Avatar */}
            <img
              src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726535095/Pranab_kumar_Misra_expert_1_udboll.jpg" // Replace with actual user image URL
              alt="User Avatar"
              className="w-8 h-8 rounded-full"
            />
            {/* User Name */}
            <span className="hidden md:block">Stalin Nayak</span>
            {/* Dropdown Arrow */}
            <svg
              className={`w-4 h-4 transition-transform duration-200 ${
                isDropdownOpen ? "transform rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute -right-24 mt-2 w-64 bg-white border border-gray-200 rounded-md shadow-lg">
              {/* User Information */}
              <div className="p-4 flex items-center space-x-3">
                {/* User Avatar */}
                <img
                  src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726535095/Pranab_kumar_Misra_expert_1_udboll.jpg" // Replace with actual user image URL
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full"
                />
                {/* User Details */}
                <div>
                  <p className="text-gray-800 font-semibold">Stalin Nayak</p>
                  <p className="text-gray-500 text-sm">MWC ID: 123456</p>
                </div>
              </div>

              {/* Divider */}
              <hr className="border-gray-200" />

              {/* Menu Options */}
              <ul className="py-2">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Profile
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Watch Training Videos
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Bank Details
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <Link href="/profile/documents">
                  Documents Uploaded
                  </Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Language
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Help Link */}
        <span className="text-gray-600 cursor-pointer">Help</span>
      </div>
    </nav>
  );
};

export default Navbar;
