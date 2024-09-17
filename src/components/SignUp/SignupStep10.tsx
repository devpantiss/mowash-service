
import React from "react";

const SignupStep10: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh] bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-green-600 text-center">
        Congrats, you are now a member of the <p className="text-blue-600">MoWash</p> community!
      </h1>
      <div className="bg-white shadow-lg rounded-lg w-80 p-6 ring-2 ring-blue-600">
        <img
          src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726535095/Pranab_kumar_Misra_expert_1_udboll.jpg"
          alt={`s profile`}
          className="w-32 h-32 rounded-full mx-auto mb-4 object-cover ring-2 ring-red-600"
        />
        <h2 className="text-xl font-semibold text-gray-800 text-center">John Doe</h2>
        <p className="text-gray-600 text-center">MWC120</p>
        <div className="mt-4">
          <p className="text-gray-700 flex justify-between">
            <span className="font-bold">Age:</span> <p>28</p>
          </p>
          <p className="text-gray-700 flex justify-between">
            <span className="font-bold">Gender:</span> <p>Male</p>
          </p>
          <p className="text-gray-700 flex justify-between">
            <span className="font-bold">Email:</span> <p>john@gmail.com</p>
          </p>
          <p className="text-gray-700 flex justify-between">
            <span className="font-bold">Phone:</span> <p>123456789</p>
          </p>
        </div>
      </div>
      {/* Progress Bar */}
      <div className="fixed bottom-0 w-full h-2 bg-gray-200">
        <div className="h-2 bg-black" style={{ width: '72%' }}></div>
      </div>
    </div>
  );
};

export default SignupStep10;
