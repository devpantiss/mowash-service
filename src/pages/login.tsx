import Login from "@/screens/Login";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <>
      <div
        style={{
          background: "linear-gradient(to bottom, black, #001f3f)",
        }}
        className="px-4 py-2"
      >
        <div className="px-8 w-full z-50 bg-white flex justify-between items-center py-2 rounded-md">
          <div>
            <Link href="/">
              <Image
                src="https://www.mowash.in/Images/mo-wash-logo.svg"
                className="h-full"
                width={150}
                height={150}
                alt="logo"
              />
            </Link>
          </div>
        </div>
        <Login />
      </div>
    </>
  );
};

export default page;
