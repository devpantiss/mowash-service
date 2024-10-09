import { FC } from 'react';

const Navbar: FC = () => {
  return (
    <nav className="bg-white shadow-md fixed pl-20 top-0 w-full md:top-0 md:h-16 h-12 z-20 flex items-center justify-between p-4 pr-10">
        <img src="https://www.mowash.in/Images/mo-wash-logo.svg" className=" w-32"/>
        <div className="flex items-center space-x-4">
        <span className="text-gray-600">Profile</span>
        <span className="text-gray-600">Help</span>
      </div>
    </nav>
  );
};

export default Navbar;
