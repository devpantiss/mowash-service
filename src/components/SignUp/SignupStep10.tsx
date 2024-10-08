import Link from "next/link";
import React from "react";

const SignupStep10: React.FC = () => {
  return (
    <div className="relative  text-white flex flex-col items-center justify-center lg:h-[90vh] h-[100vh] bg-transparent">
      <h1 className="text-3xl font-bold mb-6 text-green-600 text-center">
        Congrats, You are now a Member of the <p className="text-blue-600">Mo Wash</p> Community!
      </h1>
      <div className="bg-black/40 shadow-lg rounded-lg w-80 p-6 ring-2 ring-blue-600">
        <img
          src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726535095/Pranab_kumar_Misra_expert_1_udboll.jpg"
          alt={`s profile`}
          className="w-32 h-32 rounded-full mx-auto mb-4 object-cover ring-2 ring-green-600"
        />
        <h2 className="text-xl font-semibold text-white text-center">Stalin Nayak</h2>
        <p className="text-gray-200 text-center">MWC120</p>
        <div className="mt-4">
          <p className="text-white flex justify-between">
            <span className="font-bold">Age:</span> <p>32</p>
          </p>
          <p className="text-white flex justify-between">
            <span className="font-bold">Gender:</span> <p>Male</p>
          </p>
          <p className="text-white flex justify-between">
            <span className="font-bold">Email:</span> <p>stalinnayak96@gmail.com</p>
          </p>
          <p className="text-white flex justify-between">
            <span className="font-bold">Phone:</span> <p>9853939599</p>
          </p>
        </div>
      </div>

      <div className=" absolute bottom-5 flex w-full max-w-4xl justify-between items-center">
      <button
        className="text-blue-500 bg-white ring-2 ring-blue-600 font-semibold p-3 rounded-lg shadow-lg hover:bg-blue-600 hover:ring-2 hover:ring-white hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <Link href="/">
          Back home
        </Link>
      </button>
      <button
        className="text-blue-500 bg-white ring-2 ring-blue-600 font-semibold p-3 rounded-lg shadow-lg hover:bg-blue-600 hover:ring-2 hover:ring-white hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <Link href="/dashboard">
          Continue to DashBoard
        </Link>
      </button>
      </div>
    </div>
  );
};

export default SignupStep10;
