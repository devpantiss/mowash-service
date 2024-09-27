import Link from "next/link";
import { useState } from "react";
import style from "@/components/common/input/input.module.css";

const SignupStep0: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    number: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Form data submitted:", formData);
  };

  return (
    <div className="flex h-[100vh]">
      {/* Left Side: Form Section */}
      <div className="w-1/2 bg-transparent p-10 text-white flex flex-col justify-center">
        <h1 className="text-4xl font-bold mb-8">Please Enter your details</h1>
        <form onSubmit={handleSubmit} className="space-y-12">
          {/* <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 mt-1 border border-gray-600 rounded-lg bg-black text-white focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="number" className="block text-sm font-medium">
              Number
            </label>
            <input
              type="number"
              name="number"
              id="number"
              value={formData.number}
              onChange={handleChange}
              required
              className="w-full p-3 mt-1 border border-gray-600 rounded-lg bg-black text-white focus:ring-2 focus:ring-blue-500"
              placeholder="+91 54223 54223"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full p-3 mt-1 border border-gray-600 rounded-lg bg-black text-white focus:ring-2 focus:ring-blue-500"
              placeholder="••••••••"
            />
          </div>
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium"
            >
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="w-full p-3 mt-1 border border-gray-600 rounded-lg bg-black text-white focus:ring-2 focus:ring-blue-500"
              placeholder="••••••••"
            />
          </div> */}

          <div className={`${style.brutalist_container} mt-4`}>
            <input
              placeholder="Enter Your Email"
              className={`${style.brutalist_input} ${style.smooth_type}`}
              type="text"
            />
            <label className={`${style.brutalist_label}`}>EMAIL</label>
          </div>

          <div className={`${style.brutalist_container} mt-4`}>
            <input
              placeholder="Enter Your Phone Number"
              className={`${style.brutalist_input} ${style.smooth_type}`}
              type="number"
            />
            <label className={`${style.brutalist_label}`}>NUMBER</label>
          </div>

          <div className={`${style.brutalist_container} mt-4`}>
            <input
              placeholder="Enter Your Password"
              className={`${style.brutalist_input} ${style.smooth_type}`}
              type="password"
            />
            <label className={`${style.brutalist_label}`}>PASSWORD</label>
          </div>

          <div className={`${style.brutalist_container} mt-4`}>
            <input
              placeholder="Enter Your Password Again"
              className={`${style.brutalist_input} ${style.smooth_type}`}
              type="password"
            />
            <label className={`${style.brutalist_label}`}>
              CONFIRM PASSWORD
            </label>
          </div>
        </form>
      </div>

      {/* Right Side: Cards Section */}
      <div className="w-1/2 bg-black/40 flex flex-col justify-center p-8">
        {/* Cards Section */}
        <div className="grid grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="bg-gray-900 p-6 rounded-xl text-center text-white flex flex-col items-center justify-center">
            <h3 className="text-xl font-semibold text-blue-400 mb-1">
              Unlimited Access to
            </h3>
            <p className="text-5xl font-bold text-blue-300 mb-1">30+</p>
            <p className="text-sm text-gray-400">services</p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-900 p-6 rounded-xl text-center text-white flex flex-col items-center row-span-2 justify-center">
            <h3 className="text-xl font-semibold text-blue-400 mb-2">
              Multiple services formats
            </h3>
            <div className="grid grid-cols-3 gap-2">
              <div className="text-blue-300">
                <p>Toilet Mason</p>
              </div>
              <div className="text-yellow-300">
                <p>Electrician</p>
              </div>
              <div className="text-yellow-300">
                <p>Plumbing</p>
              </div>
              <div className="text-yellow-300">
                <p>Cesspool</p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-900 p-6 rounded-xl text-center text-white flex flex-col items-center justify-center">
            <h3 className="text-xl font-semibold text-blue-400 mb-1">
              At Home
            </h3>
            <p className="text-sm text-gray-400 mb-1">Avail services</p>
            <div className="h-12 w-12 bg-blue-500 rounded-full flex items-center justify-center">
              <p className="text-white">💎</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-gray-900 p-6 rounded-xl text-center text-white flex flex-col items-center justify-center">
            <h3 className="text-xl font-semibold text-blue-400 mb-1">
              At center Group Classes
            </h3>
            {/* <img
              src="/group-class-image.png" // Replace with appropriate image link or icon
              alt="Group Class"
              className="h-16 w-16 rounded-full mt-2"
            /> */}
          </div>

          {/* Card 5 */}
          <div className="bg-gray-900 p-6 rounded-xl text-center text-white flex flex-col items-center justify-center">
            <h3 className="text-xl font-semibold text-blue-400 mb-1">SMART</h3>
            <p className="text-sm text-gray-400 mb-1">Workout plans</p>
            <div className="h-12 w-12 bg-blue-500 rounded-full flex items-center justify-center">
              <p className="text-white">🔊</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupStep0;
