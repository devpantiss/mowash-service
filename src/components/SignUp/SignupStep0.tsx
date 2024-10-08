import { useState } from "react";
import style from "@/components/common/input/input.module.css";
import Link from "next/link";
import { MdEngineering } from "react-icons/md";
import { GrUserManager } from "react-icons/gr";
import dynamic from "next/dynamic";
import animation from "@/components/assets/animation.json";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

interface SignupStep0Props {
  goToStep: (stepIndex: number) => void; // Accept goToStep as a prop
}

const SignupStep0: React.FC<SignupStep0Props> = ({ goToStep }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    number: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Form data submitted:", formData);

    // Navigate to the next step
    goToStep(1); // Moves to the next step in the stepper
  };

  return (
    <>
      <div className="mx-auto h-full container">
        <div className="lg:ml-20 ml-0 flex justify-center cursor lg:justify-start">
          <Link href="/">
            <img src="/images/mowash-logo.webp" className="h-12" />
          </Link>
        </div>
        <div className="flex flex-col-reverse lg:flex-row">
          {/* Left Side: Information Section */}
          <div className="w-full lg:h-[100vh] h-full relative lg:w-1/2 flex flex-col items-center p-10">
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
                height: "auto",
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
            <div className="ring-2 ring-white rounded-md px-6 py-8 flex flex-col justify-center">
              <div className="space-x-4 mb-4 justify-center flex">
                <button
                  onClick={() => handleOptionClick("MoWash Engineer")}
                  className={`lg:p-4 border-2 p-2 rounded-lg gap-y-2 lg:gap-x-6 flex lg:flex-row flex-col items-center justify-center 
                ${
                  selectedOption === "MoWash Engineer"
                    ? "border-blue-500 text-blue-500 bg-blue-100"
                    : "text-white border-gray-300"
                }`}
                >
                  <MdEngineering className="text-2xl" />
                  <span className="font-semibold">Mo WashEngineer</span>
                </button>

                <button
                  onClick={() => handleOptionClick("MoWash Preneur")}
                  className={`lg:p-4 border-2 p-2 rounded-lg gap-y-2 lg:gap-x-6 flex lg:flex-row flex-col items-center justify-center 
                ${
                  selectedOption === "MoWash Preneur"
                    ? "border-blue-500 text-blue-500 bg-blue-100"
                    : "text-white border-gray-300"
                }`}
                >
                  <GrUserManager className="text-2xl" />
                  <span className="font-semibold">Mo WashPreneur</span>
                </button>
              </div>

              <h1 className="text-2xl font-bold text-white text-center">
                Get Started with a Free Account
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
                    placeholder="Name"
                    className={style.inputField}
                    type="text"
                  />
                  <label className={style.inputLabel}>Name</label>
                  <span className={style.inputHighlight}></span>
                </div>

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
                    placeholder="Phone Number"
                    className={style.inputField}
                    type="number"
                  />
                  <label className={style.inputLabel}>Phone Number</label>
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
                <div className={style.inputContainer}>
                  <input
                    placeholder="Confirm Password"
                    className={style.inputField}
                    type="password"
                  />
                  <label className={style.inputLabel}>Confirm Password</label>
                  <span className={style.inputHighlight}></span>
                </div>

                <div className="py-2">
                  <button
                    type="submit"
                    className="p-4 rounded-lg bg-blue-500 text-center text-white w-full"
                  >
                    Sign up for Free
                  </button>
                </div>
              </form>

              <div className="text-center mt-2 text-white">
                <span>Already have an account?</span>
                <Link href="/login" className="text-blue-400 ml-2">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <img
        src="https://app.shiprocket.in/sr_login/assets/images/regbackground2.png"
        alt="Login"
        className="absolute w-100 -bottom-10 lg:block hidden z-0"
      /> */}
    </>
  );
};

export default SignupStep0;
