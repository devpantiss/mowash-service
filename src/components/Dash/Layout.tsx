import { FC, ReactNode } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { NextPage } from "next";

interface LayoutProps {
  children: ReactNode;
}

const Layout: NextPage<LayoutProps> = ({ children }) => {
  return (
    <div className="relative min-h-screen flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-x-hidden" style={{
            background: "linear-gradient(to bottom, black, #001f3f)",
          }}>
        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <main className="flex-1  ml-10 w-full lg:ml-8 px-10 lg:px-6 pt-8 md:pt-20 transition-all duration-300">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
