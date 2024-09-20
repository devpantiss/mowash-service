import Link from 'next/link';
import { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll event listener to toggle Header background color
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`sticky z-50 top-0 w-full transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg text-black' : 'bg-transparent text-black'
        }`}
    >
      <div className="flex justify-between items-center py-4 px-8 mx-auto max-w-[1200px]">
        {/* Logo */}
        <div className="flex items-center text-xl font-semibold">
          <img src='/images/mowash-logo.webp' alt="logo" className='cursor-pointer h-12' />
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8 text-lg font-medium">
          <a href="#" className="hover:underline hover:text-blue-600 transition duration-300">
            MWC
          </a>
          <a href="#" className="hover:underline hover:text-blue-600 transition duration-300">
            Benefits
          </a>
          <a href="#" className="hover:underline hover:text-blue-600 transition duration-300">
            Rewards
          </a>
        </div>

        {/* Right-side buttons */}
        <div className="flex items-center space-x-4">
          <button
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${isScrolled ? 'bg-blue-600 text-white border-blue-600' : 'bg-blue-600 text-white'}`}
          >
            <Link href="/login">Login</Link>
          </button>

          <div className='w-[2px] h-[35px] bg-gray-300'></div>

          <button
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${isScrolled ? 'bg-blue-600 text-white border-blue-600' : 'bg-blue-600 text-white'}`}
          >
            <Link href="/signup">Register</Link>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
