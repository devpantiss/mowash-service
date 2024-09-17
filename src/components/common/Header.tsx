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
      className={`fixed z-50 top-0 w-full transition-all  duration-300 ${isScrolled ? 'bg-white shadow-lg text-black' : 'bg-transparent text-blue-600'
        }`}
    >
      <div className="flex justify-between items-center py-6 px-4">
        {/* Logo */}
        <div className="text-xl mx-[100px] font-semibold">
          <img src='/images/mowash-logo.webp' alt="logo" className='cursor-pointer h-16 w-full'/>
        </div>

        {/* Navigation Links */}
        <div className="flex text-[20px] space-x-6">
          <a href="#" className="hover:underline">
            MWC
          </a>
          <a href="#" className="hover:underline">
            Benefits   
          </a>
          <a href="#" className="hover:underline">
            Rewards
          </a>
          <a href="#" className="hover:underline">
            Contact
          </a>
        </div>

        {/* Right-side buttons */}
        <div className="flex text-[20px] items-center space-x-4">
          {/* <a href="#" className="hover:underline">
            Calm Business
          </a>
          <a href="#" className="hover:underline">
            Calm Health
          </a> */}
          <button className="px-4 py-2 text-[20px] rounded-full font-semibold transition-all duration-300 border ${
            isScrolled ? 'bg-blue-600 border-blue-600 text-white' : 'bg-blue-600 text-white'
          }">
            <Link href="/login">Login</Link>
            </button>
          <div className='w-[3px] h-[35px] bg-blue-600'></div>
          <button className="px-4 py-2 text-[20px] rounded-full font-semibold transition-all duration-300 border ${
            isScrolled ? 'bg-blue-600 border-blue-600 text-white' : 'bg-blue-600 text-white'
          }">
            <Link href="/signup">Register</Link>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
