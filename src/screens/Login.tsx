import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import style from "@/components/common/input/input.module.css";

const Login: React.FC = () => {
  const router = useRouter();

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    router.push("/");
  };

  return (
    <div
      className="h-screen flex justify-center lg:flex-row flex-col py-16 items-center"
      style={{
        backgroundImage: `url('https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726501728/lk_okjesa.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex h-screen mb-[100px] justify-start gap-x-4 w-1/2">
        <div className="">
          <Link href="/">
            <img src="/images/mowash-logo.webp" className="h-12" />
          </Link>
        </div>
        <div className="flex justify-center items-center">
          <div className="p-4">
            <p>Initiative By</p>
            <Image
              src="https://pantiss.com/wp-content/uploads/2022/08/logo.png"
              height={100}
              width={200}
              alt="pantiss"
            />
          </div>

          {/* <div className='p-4'>
            <p>Supported By</p>
            <Image src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726055080/1200px-UNICEF_Logo_g3gwyz.png" height={100} width={200} alt="unicef"/>
          </div> */}
        </div>
      </div>

      <div>
        {/* Right side with login form */}
        <div className="bg-white ring-2 ring-blue-600 shadow-lg rounded-lg p-8 w-[400px]">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Log In
          </h2>
          <form className="space-y-10" onSubmit={handleLogin}>
            <div className={`${style.brutalist_container} mt-12`}>
              <input
                placeholder="Enter Your Email"
                className={`${style.brutalist_input} ${style.smooth_type}`}
                type="text"
              />
              <label className={`${style.brutalist_label}`}>EMAIL</label>
            </div>

            <div className={`${style.brutalist_container} mt-12`}>
              <input
                placeholder="Enter Your Password"
                className={`${style.brutalist_input} ${style.smooth_type}`}
                type="password"
              />
              <label className={`${style.brutalist_label}`}>PASSWORD</label>
            </div>
            <div className="mt-8">
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Log In
              </button>
            </div>

            <p>
              New here?{" "}
              <Link href="/signup" className="text-blue-600 hover:underline">
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
