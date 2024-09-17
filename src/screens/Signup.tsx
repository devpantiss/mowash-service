import React, { useState } from "react";
// import SignUpStep1 from "@/components/SignUpStep1";
// import SignUpStep2 from "@/components/SignUpStep2";
// import SignUpStep3 from "@/components/SignUpStep3";
import { useRouter } from "next/navigation";
import SignupStep1 from "@/components/SignUp/SignupStep1";
import SignupStep2 from "@/components/SignUp/SignupStep2";
import SignupStep3 from "@/components/SignUp/SignupStep3";
import Image from "next/image";
import SignupStep4 from "@/components/SignUp/SignupStep4";
import SignupStep5 from "@/components/SignUp/SignupStep5";
import SignupStep6 from "@/components/SignUp/SignupStep6";
import SignupStep7 from "@/components/SignUp/SignupStep7";
import SignupStep8 from "@/components/SignUp/SignupStep8";
import SignupStep9 from "@/components/SignUp/SignupStep9";
import SignupStep10 from "@/components/SignUp/SignupStep10";
import SignupStep0 from "@/components/SignUp/SignupStep0";
import SignupStep11 from "@/components/SignUp/SignupStep11";
import SignupStep13 from "@/components/SignUp/SignupStep13";
import SignupStep12 from "@/components/SignUp/SignupStep12";

interface WorkingHour {
  start: string;
  end: string;
}

interface FormData {
  profilePicture?: string;
  fullName?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  age?: number;
  gender?: string;
  healthInsurance?: string;
  aadharCard?: string;
  workerCertificate?: string;
  aadharNumber?: string;
  opt_class?: string;
  working_hour?: WorkingHour[];
  working_day?: string[];
  work_history_pic?: string[];
  category: string;
  service: string;
  sub_service: string;
}

interface Errors {
  fullName?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  age?: string;
  gender?: string;
  healthInsurance?: string;
  aadharCard?: string;
  workerCertificate?: string;
  aadharNumber?: string;
  opt_class?: string;
  working_hour?: string;
  working_day?: string;
  work_history_pic?: string;
}

const Signup: React.FC = () => {
  const router = useRouter();
  const [loader, setLoader] = useState(false);

  const [step, setStep] = useState<number>(0);
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    age: undefined,
    gender: "",
    profilePicture: "",
    healthInsurance: "",
    aadharCard: "",
    workerCertificate: "",
    aadharNumber: "",
    opt_class: "",
    working_hour: [],
    working_day: [],
    work_history_pic: [],
    category: "",
    service: "",
    sub_service: "",
  });
  const [errors, setErrors] = useState<Errors>({});


  const handleNext = () => {
    if (step === 0) {
      setStep((prevStep) => Math.min(prevStep + 1, 13));
    } else if (step === 1) {
      setStep((prevStep) => Math.min(prevStep + 1, 13));
    } else if (step === 2) {
      setStep((prevStep) => Math.min(prevStep + 1, 13));
    } else if (step === 3) {
      setStep((prevStep) => Math.min(prevStep + 1, 13));
    } else if (step === 4) {
      setStep((prevStep) => Math.min(prevStep + 1, 13))
    } else if (step === 5) {
      setStep((prevStep) => Math.min(prevStep + 1, 13))
    } else if (step === 6) {
      setStep((prevStep) => Math.min(prevStep + 1, 13))
    } else if (step === 7) {
      setStep((prevStep) => Math.min(prevStep + 1, 13))
    } else if (step === 8) {
      setStep((prevStep) => Math.min(prevStep + 1, 13))
    } else if (step === 9) {
      setStep((prevStep) => Math.min(prevStep + 1, 13))
    } else if (step === 10) {
      setStep((prevStep) => Math.min(prevStep + 1, 13))
    } else if (step === 11) {
      setStep((prevStep) => Math.min(prevStep + 1, 13))
    } else if (step === 12) {
      setStep((prevStep) => Math.min(prevStep + 1, 13))
    } else if (step === 13) {
      setStep((prevStep) => Math.min(prevStep + 1, 13))
    }
  };

  const handlePrev = () => {
    setStep((prevStep) => Math.max(prevStep - 1, 0));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (/^\d*$/.test(value)) {
      setFormData((prevData) => ({
        ...prevData,
        [name]: parseInt(value, 10),
      }));
    }
  };

  // const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const files = e.target.files;
  //   const { name } = e.target;
  //   if (files && files.length > 0) {
  //     onUploadImage(name, files[0]);
  //   }
  // };

  // const onUploadImage = async (name: string, file: File) => {
  //   try {
  //     setLoader(true);
  //     setLoader(false);
  //   } catch (error) {
  //     setLoader(false);
  //     console.error("Error uploading image:", error);
  //   }
  // };

  const formatTime = (time: string): string => {
    const [hours, minutes] = time.split(":").map(Number);
    const period = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12;
    return `${formattedHours}:${minutes < 10 ? "0" : ""}${minutes}${period}`;
  };

  // const onSignUp = async () => {
  //   setLoader(true);
  //   try {
  //     const formattedWorkingHour =
  //       formData.working_hour?.map((hour) => {
  //         const startTime = formatTime(hour.start);
  //         const endTime = formatTime(hour.end);
  //         return `${startTime}-${endTime}`;
  //       }) || [];

  //     const data = {
  //       name: formData.fullName,
  //       email: formData.email,
  //       password: formData.password,
  //       age: formData.age,
  //       aadharNumber: formData.aadharNumber,
  //       aadharPhoto: formData.aadharCard,
  //       userType: "service",
  //       profilePicture: formData.profilePicture,
  //       working_hour: formattedWorkingHour,
  //       working_day: formData.working_day,
  //       work_history_pic: formData.work_history_pic,
  //       opt_class: formData.opt_class,
  //       gender: formData.gender,
  //       health_insurace: formData.healthInsurance,
  //       worker_certificate: formData.workerCertificate,
  //       category: formData.category,
  //       service: formData.service,
  //       sub_service: formData.sub_service,
  //     };
  //     await http.post("/api/signup", data);
  //     setLoader(false);

  //     router.push("/");
  //   } catch (error: any) {
  //     setLoader(false);
  //     const errorMessage = error.response?.data.Message;
  //   }
  // };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
        <div className="w-full p-4 bg-red border border-gray-200 rounded-lg shadow sm:p-6 md:px-8 md:py-6 dark:bg-gray-800 dark:border-gray-700">
          <div data-hs-stepper="">
            {/* <ul className="relative flex flex-row gap-x-2">
              {Array.from({ length: 3 }, (_, i) => i + 1).map((index) => (
                <li
                  key={index}
                  className="flex items-center gap-x-2 shrink basis-0 flex-1 group"
                  data-hs-stepper-nav-item={`{"index": ${index}}`}
                >
                  <span className="min-w-7 min-h-7 group inline-flex items-center text-xs align-middle">
                    <span
                      className={`size-7 flex justify-center items-center shrink-0 ${
                        index === step
                          ? "bg-blue-600 text-white"
                          : "bg-gray-100 text-gray-800"
                      } font-medium rounded-full`}
                    >
                      {step > index ? (
                        <svg
                          className="shrink-0 size-3"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      ) : (
                        index
                      )}
                    </span>
                    <span className="ms-2 text-sm font-medium text-gray-800 dark:text-neutral-200">
                      {index === 1
                        ? "Details"
                        : index === 2
                        ? "Personal Data"
                        : "Availability"}
                    </span>
                  </span>
                  <div className="w-full h-px flex-1 group-last:hidden bg-blue-600 dark:bg-neutral-700"></div>
                </li>
              ))}
            </ul> */}
            <div className="h-24">
              <Image src="https://www.mowash.in/Images/mo-wash-logo.svg" className="h-full" width={150} height={150} alt="logo" />
            </div>

            <div className="mt-5 sm:mt-8">
              {step === 0 && (
                <SignupStep0 />
              )}
              {step === 1 && (
                <SignupStep1 />
              )}
              {step === 2 && (
                <SignupStep2 />
              )}
              {step === 3 && (
                <SignupStep3 />
              )}
              {step === 4 && (
                <SignupStep4 />
              )}
              {step === 5 && (
                <SignupStep5 />
              )}
              {step === 6 && (
                <SignupStep6 />
              )}
              {step === 7 && (
                <SignupStep7 />
              )}
              {step === 8 && (
                <SignupStep8 />
              )}
              {step === 9 && (
                <SignupStep9 />
              )}
              {step === 10 && (
                <SignupStep10 />
              )}
              {step === 11 && (
                <SignupStep11 />
              )}
              {step === 12 && (
                <SignupStep12 />
              )}
              {step === 13 && (
                <SignupStep13 />
              )}
              <div className="mt-5 flex justify-between items-center gap-x-2">
                <button
                  type="button"
                  className="px-6 py-2 flex bg-gray-400 text-black ring-2 ring-black rounded-lg"
                  onClick={handlePrev}
                  disabled={step === 1}
                >
                  <svg
                    className="shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m15 18-6-6 6-6"></path>
                  </svg>
                  Back
                </button>



                <button
                  type="button"
                  className="px-6 py-2 flex bg-black text-white rounded-lg"
                  onClick={handleNext}
                >
                  Next
                  <svg
                    className="shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
