import { useState } from "react";
import style from "@/components/common/input/input.module.css";
import Link from "next/link";
import dynamic from "next/dynamic";
import animation from "@/components/assets/animation.json";
import { useRouter } from "next/router"; // Import useRouter

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

interface LoginProps {
  goToStep: (stepIndex: number) => void; // Accept goToStep as a prop
}

const Login: React.FC<LoginProps> = () => {
  const router = useRouter(); // Initialize router

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    number: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Form data submitted:", formData);
  };

  return (

      <div
        className="mx-auto pt-20 h-[full] container"
        style={{
          background: "linear-gradient(to bottom, black, #001f3f)",
        }}
      >
        <div className="lg:ml-20 ml-0 flex justify-center cursor lg:justify-start">
          <Link href="/">
            <img src="/images/mowash-logo.webp" className="h-12" />
          </Link>
        </div>
        <div className="flex flex-col-reverse lg:flex-row">
          {/* Left Side: Information Section */}
          <div className="w-full h-[100vh] relative lg:w-1/2 flex flex-col items-center p-10">
            <div className="z-10">
              <h1 className="text-3xl font-bold mb-2 text-white">
                We Are More than Just your Wash Partner
              </h1>
              <ul className="list-none text-lg my-6 text-white">
                <li className="flex items-center gap-x-3 mb-2">
                  <img
                    src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1728033086/Black_Illustrated_Lion_Hotel_Logo-removebg-preview_iuhnp9.png"
                    className="h-6"
                  />{" "}
                  AI-Powered Courier Selection
                </li>
                <li className="flex items-center gap-x-3 mb-2">
                  <img
                    src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1728033086/Black_Illustrated_Lion_Hotel_Logo-removebg-preview_iuhnp9.png"
                    className="h-6"
                  />{" "}
                  Branded Order Tracking Page
                </li>
                <li className="flex items-center gap-x-3 mb-2">
                  <img
                    src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1728033086/Black_Illustrated_Lion_Hotel_Logo-removebg-preview_iuhnp9.png"
                    className="h-6"
                  />{" "}
                  Automated NDR Management
                </li>
                <li className="flex items-center gap-x-3 mb-2">
                  <img
                    src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1728033086/Black_Illustrated_Lion_Hotel_Logo-removebg-preview_iuhnp9.png"
                    className="h-6"
                  />{" "}
                  Up to 45% Lesser RTOs
                </li>
              </ul>
            </div>

            <Lottie
              animationData={animation}
              loop={true}
              style={{
                width: "100%",
                height:"auto",
                maxWidth: "350px",
                // position: "absolute",
                // right: "-25%",
                // bottom: "0",
              }}
              className="lg:block hidden"
            />
          </div>

          {/* Right Side: Form Section */}
          <div className="w-full lg:w-1/2 lg:max-w-2xl z-10 bg-transparent p-10">
            <div className="ring-2 ring-white rounded-md px-6 py-8 flex lg:mt-24 flex-col justify-center">
              <h1 className="text-2xl font-bold text-white text-center">
                Login
              </h1>

              {/* Social Signup Options */}
              <div className="flex justify-center space-x-4 my-6">
                <button className="px-4 flex py-2 bg-white border border-gray-300 rounded-md">
                  <img
                    src="https://app.shiprocket.in/sr_login/assets/images/google.png"
                    className="h-6 w-6"
                  />
                  Google
                </button>
                <button className="px-4 flex py-2 bg-white border border-gray-300 rounded-md">
                  <img
                    src="https://app.shiprocket.in/sr_login/assets/images/Whatsapp.png"
                    className="h-6 w-6"
                  />
                  WhatsApp
                </button>
              </div>

              <form
                onSubmit={handleSubmit}
                className="space-y-6 flex flex-col justify-center"
              >
                <div className={style.inputContainer}>
                  <input
                    placeholder="Email"
                    className={style.inputField}
                    type="email"
                  />
                  <label className={style.inputLabel}>Email</label>
                  <span className={style.inputHighlight}></span>
                </div>

                <div className={style.inputContainer}>
                  <input
                    placeholder="Password"
                    className={style.inputField}
                    type="password"
                  />
                  <label className={style.inputLabel}>Password</label>
                  <span className={style.inputHighlight}></span>
                </div>
                <div className="py-2">
                  <button
                    type="submit"
                    className="p-4 rounded-lg bg-blue-500 text-center text-white w-full"
                  >
                    Login
                  </button>
                </div>
              </form>

              <div className="text-center mt-2 text-white">
                <span>New here?</span>
                <Link href="/signup" className="text-blue-400 ml-2">
                  Signup
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Login;
