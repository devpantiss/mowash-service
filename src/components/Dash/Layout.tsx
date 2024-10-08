import { FC, ReactNode } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { NextPage } from 'next';

interface LayoutProps {
  children: ReactNode;
}

const Layout: NextPage<LayoutProps> = ({ children }) => {
  return (
    <div className="relative min-h-screen flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col bg-gray-100 overflow-x-hidden">
        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <main className="flex-1 ml-10 p-10 pt-16 md:pt-20 transition-all duration-300">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
