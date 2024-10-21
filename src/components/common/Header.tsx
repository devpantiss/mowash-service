import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import hamburger and close icons

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // State to handle mobile menu
  const router = useRouter();

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

  // Toggle the mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

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

        {/* Navigation Links for Desktop */}
        <div className="hidden md:flex space-x-8 text-lg font-medium">
          <Link href="/" className={`hover:underline hover:text-blue-600 transition ${router.pathname === "/" ? 'text-blue-600 underline' : ''}  duration-300`}>
            MWC
          </Link>
          <Link href="/benefits" className={`hover:underline hover:text-blue-600 transition ${router.pathname === "/benefits" ? 'text-blue-600 underline' : ''}  duration-300`}>
            Benefits
          </Link>
          <Link href="/rewards" className={`hover:underline hover:text-blue-600 transition ${router.pathname === "/rewards" ? 'text-blue-600 underline' : ''}  duration-300`}>
            Rewards
          </Link>
          <Link href="/dashboard" className={`hover:underline hover:text-blue-600 transition ${router.pathname === "/dashboard" ? 'text-blue-600 underline' : ''}  duration-300`}>
            Dashboard
          </Link>
        </div>

        {/* Right-side buttons for Desktop */}
        <div className="hidden md:flex items-center space-x-4">
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

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl">
            {menuOpen ? <FaTimes className='text-red-600'/> : <FaBars className='text-blue-500'/>} {/* Toggle between hamburger and close icons */}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-[70px] left-0 w-full h-screen bg-white/90 text-black flex flex-col items-center justify-center transition-opacity duration-500 ${menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
      >
        <Link href="/" className={`text-2xl mb-4 ${router.pathname === "/" ? 'text-blue-600 underline' : ''}`} onClick={() => setMenuOpen(false)}>
          MWC
        </Link>
        <Link href="/benefits" className={`text-2xl mb-4 ${router.pathname === "/benefits" ? 'text-blue-600 underline' : ''}`} onClick={() => setMenuOpen(false)}>
          Benefits
        </Link>
        <Link href="/rewards" className={`text-2xl mb-4 ${router.pathname === "/rewards" ? 'text-blue-600 underline' : ''}`} onClick={() => setMenuOpen(false)}>
          Rewards
        </Link>
        <Link href="/dashboard" className={`text-2xl mb-4 ${router.pathname === "/dashboard" ? 'text-blue-600 underline' : ''}`} onClick={() => setMenuOpen(false)}>
          Dashboard
        </Link>
        <Link href="/login" className="text-2xl mb-4" onClick={() => setMenuOpen(false)}>
          Login
        </Link>
        <Link href="/signup" className="text-2xl mb-4" onClick={() => setMenuOpen(false)}>
          Register
        </Link>
      </div>
    </nav>
  );
};

export default Header;
