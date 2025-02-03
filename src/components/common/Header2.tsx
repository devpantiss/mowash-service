import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { AiOutlineDownCircle } from "react-icons/ai";
import { TbDisabled } from "react-icons/tb";
import {
  GrBriefcase,
  GrHelpBook,
  GrHomeRounded,
  GrLocation,
} from "react-icons/gr";
import Link from "next/link";
import { useRouter } from "next/router";
import { TfiDashboard } from "react-icons/tfi";
import { GiTargetPrize } from "react-icons/gi";
import { SlNote } from "react-icons/sl";




const Header2: React.FC = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isWhatWeDoOpen, setIsWhatWeDoOpen] = useState(false);
  const [isEventsOpen, setIsEventsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCourseOpen, setIsCourseOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isBannerVisible, setIsBannerVisible] = useState(true);
  const [isAccessibilityOpen, setIsAccessibilityOpen] = useState(false); // New state for dropdown

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 550);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeAllDropdowns = () => {
    setIsAboutOpen(false);
    setIsWhatWeDoOpen(false);
    setIsEventsOpen(false);
    setIsCourseOpen(false);
    setIsProfileOpen(false);
    setIsAccessibilityOpen(false);
  };

  const handleOptionSelect = () => {
    closeAllDropdowns();
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  const isActive = (path: string): boolean => {
    return router.pathname === path;
  };

  const toggleAccessibilityMenu = () => {
    setIsAccessibilityOpen(!isAccessibilityOpen);
  };

  return (
    <header
      className={`w-full sticky z-50 backdrop-blur-sm shadow-md transition-colors duration-300 ${
        isScrolled ? "bg-white" : "bg-[white]"
      } ${isScrolled ? "text-white" : "text-black"}]`}
    >
      <div className="container py-2 px-2 lg:mx-[110px] flex justify-center items-center">
        {/* Logo */}
        <div className="flex flex-col justify-center items-center transition-transform duration-300 ease-in-out">
          <div className="glow-container">
            <Link href="/" onClick={toggleMenu}>
              <img
                src="https://mowash-service.vercel.app/images/mowash-logo.webp" // Adjusted for Next.js public folder
                alt="Company Logo"
                className="h-[60px] w-auto glow-effect"
              />
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-blue-600 flex flex-row py-3 gap-x-4 font-open text-white lg:h-[65px] justify-center">
        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:justify-between mx-[110px] w-full">
          <nav className="flex space-x-6">
            {/* HOME */}
            <Link
              href="/"
              className={`cursor-pointer flex items-center gap-x-2 font-open font-bold text-[16px] ${
                isScrolled ? "text-[white]" : "text-[white]"
              } ${
                isActive("/") ? "text-[white] underline" : ""
              } transition duration-300`}
              onClick={handleOptionSelect}
            >
              MWC
            </Link>

            <Link
              href="/benefits"
              className={`cursor-pointer flex items-center gap-x-2 font-open font-bold text-[16px] ${
                isScrolled ? "text-[white]" : "text-[white]"
              } ${
                isActive("/benefits") ? "text-[white] underline" : ""
              } transition duration-300`}
              onClick={handleOptionSelect}
            >
              Benefits
            </Link>

            <Link
              href="/rewards"
              className={`cursor-pointer flex items-center gap-x-2 font-open font-bold text-[16px] ${
                isScrolled ? "text-[white]" : "text-[white]"
              } ${
                isActive("/rewards") ? "text-[white] underline" : ""
              } transition duration-300`}
              onClick={handleOptionSelect}
            >
              Rewards
            </Link>

            {/* ABOUT */}
            {/* <div className="relative group">
              <button
                onClick={() => toggleDropdown("about")}
                className={`flex items-center gap-x-2 font-open font-bold text-[16px] ${
                  isScrolled ? "text-[white]" : "text-[white]"
                } transition duration-300`}
              >
                Who We are
                <AiOutlineDownCircle
                  className={`ml-1 transition-transform duration-300 ease-in-out ${
                    isAboutOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isAboutOpen && (
                <div className="absolute mt-6 w-[200px] text-black bg-blue-600 border rounded shadow-lg z-40">
                  <Link
                    href="/whoweare/about"
                    className="block px-4 py-2 hover:bg-white text-[white] hover:text-blue-600"
                    onClick={handleOptionSelect}
                  >
                    <span className="text-[16px]">About</span>
                  </Link>
                  <Link
                    href="/whoweare/team"
                    className="block px-4 py-2 hover:bg-white text-[white] hover:text-blue-600"
                    onClick={handleOptionSelect}
                  >
                    <span className="text-[16px]">Our Team</span>
                  </Link>
                  <Link
                    href="/whoweare/advisory-board"
                    className="block px-4 py-2 hover:bg-white text-[white] hover:text-blue-600"
                    onClick={handleOptionSelect}
                  >
                    <span className="text-[16px]">Our Advisory Board</span>
                  </Link>
                  <Link
                    href="/whoweare/reports-and-financials"
                    className="block px-4 py-2 hover:bg-white text-[white] hover:text-blue-600"
                    onClick={handleOptionSelect}
                  >
                    <span className="text-[16px]">Reports & Financials</span>
                  </Link>
                </div>
              )}
            </div> */}

            {/* What we do */}
            {/* <div className="relative group">
              <button
                onClick={() => toggleDropdown("whatWeDo")}
                className={`flex items-center gap-x-2 font-bold font-open text-[16px] ${
                  isScrolled ? "text-[white]" : "text-[white]"
                } transition duration-300`}
              >
                What We Do
                <AiOutlineDownCircle
                  className={`ml-1 transition-transform duration-300 ease-in-out ${
                    isWhatWeDoOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isWhatWeDoOpen && (
                <div className="absolute mt-6 w-[200px] text-black bg-blue-600 border rounded shadow-lg z-20">
                  <Link
                    href="/whatwedo/social-development"
                    className="block px-4 py-2 hover:bg-white text-[white] hover:text-blue-600"
                    onClick={handleOptionSelect}
                  >
                    <span className="text-[16px]">Social Development</span>
                  </Link>
                  <Link
                    href="/whatwedo/livelihoods"
                    className="block px-4 py-2 hover:bg-white text-[white] hover:text-blue-600"
                    onClick={handleOptionSelect}
                  >
                    <span className="text-[16px]">Livelihoods</span>
                  </Link>
                </div>
              )}
            </div> */}

            {/* EVENTS */}
            <Link
              href="/dashboard"
              className={`cursor-pointer flex items-center gap-x-2 font-bold font-open text-[16px] ${
                isScrolled ? "text-[white]" : "text-[white]"
              } ${
                isActive("/dashboard") ? "text-[white] underline" : ""
              } transition duration-300`}
              onClick={handleOptionSelect}
            >
              Dashboard
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                isScrolled
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-blue-600 text-white"
              }`}
            >
              <Link href="/login">Login</Link>
            </button>

            <div className="w-[2px] h-[35px] bg-gray-300"></div>

            <button
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                isScrolled
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-blue-600 text-white"
              }`}
            >
              <Link href="/signup">Register</Link>
            </button>
          </div>
        </div>

        {/* Hamburger Menu */}
        <button
          onClick={toggleMenu}
          className={`lg:hidden ${
            isScrolled ? "text-white" : "text-white"
          } focus:outline-none`}
        >
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        {/* Mobile Navigation */}
        <div
          className={`fixed top-[120px] right-0 w-full h-screen lg:hidden bg-blue-600/90 text-white flex flex-col z-99 items-left justify-start transition-transform duration-500 ${
            isMenuOpen
              ? "translate-x-0 opacity-1"
              : "translate-x-full opacity-0"
          }`}
        >
          <nav className="flex flex-col space-y-4 p-4">
            <Link
              href="/"
              className="cursor-pointer flex items-center text-[16px] gap-x-2 hover:underline text-[white]"
              onClick={handleOptionSelect}
            >
              <GrHomeRounded />
              MWC
            </Link>

            <Link
              href="/benefits"
              className="cursor-pointer flex items-center text-[16px] gap-x-2 hover:underline text-[white]"
              onClick={handleOptionSelect}
            >
              <SlNote />
              Benefits
            </Link>

            <Link
              href="/rewards"
              className="cursor-pointer flex items-center text-[16px] gap-x-2 hover:underline text-[white]"
              onClick={handleOptionSelect}
            >
              <GiTargetPrize />
              Rewards
            </Link>

            {/* Who We are */}
            {/* <div className="relative">
              <button
                onClick={() => toggleDropdown("about")}
                className="flex items-center text-[16px] gap-x-2 text-[white]"
              >
                <GrHelpBook />
                Who We are
                <AiOutlineDownCircle
                  className={`ml-1 transition-transform duration-300 ease-in-out ${
                    isAboutOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isAboutOpen && (
                <div className="flex flex-col pl-6 space-y-2">
                  <Link
                    href="/whoweare/about"
                    className="hover:underline text-[white]"
                    onClick={handleOptionSelect}
                  >
                    About
                  </Link>
                  <Link
                    href="/whoweare/team"
                    className="hover:underline text-[white]"
                    onClick={handleOptionSelect}
                  >
                    Our Team
                  </Link>
                  <Link
                    href="/whoweare/advisory-board"
                    className="hover:underline text-[white]"
                    onClick={handleOptionSelect}
                  >
                    Our Advisory Board
                  </Link>
                  <Link
                    href="/whoweare/reports-and-financials"
                    className="hover:underline text-[white]"
                    onClick={handleOptionSelect}
                  >
                    Reports & Financials
                  </Link>
                </div>
              )}
            </div>

            <div className="relative">
              <button
                onClick={() => toggleDropdown("whatWeDo")}
                className="flex items-center text-[16px] gap-x-2  text-[white]"
              >
                <GrBriefcase />
                What We Do
                <AiOutlineDownCircle
                  className={`ml-1 transition-transform duration-300 ease-in-out ${
                    isWhatWeDoOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isWhatWeDoOpen && (
                <div className="flex flex-col pl-6 space-y-2">
                  <Link
                    href="/whatwedo/social-development"
                    className="hover:underline text-[white]"
                    onClick={handleOptionSelect}
                  >
                    Social Development
                  </Link>
                  <Link
                    href=""
                    className="hover:underline text-[white]"
                    onClick={handleOptionSelect}
                  >
                    Social Enterprises
                  </Link>
                  <Link
                    href=""
                    className="hover:underline text-[white]"
                    onClick={handleOptionSelect}
                  >
                    Pantiss MINEX SIM
                  </Link>
                  <Link
                    href=""
                    className="hover:underline text-[white]"
                    onClick={handleOptionSelect}
                  >
                    Pantiss Hapiness Professionals
                  </Link>
                </div>
              )}
            </div> */}

            <Link
              href="/dashboard"
              className="flex text-[16px] items-center gap-x-2 hover:underline text-[white]"
              onClick={handleOptionSelect}
            >
              <TfiDashboard />
              Dashboard{" "}
            </Link>
          </nav>

          <div className="border-b-4 border-white mx-3 my-5"></div>

          <div className="flex flex-col justify-end px-5 space-y-6">
            <Link
              href="/login"
              className="cursor-pointer flex items-center text-[16px] gap-x-2 hover:underline text-[white]"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="cursor-pointer flex items-center text-[16px] gap-x-2 hover:underline text-[white]"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header2;
