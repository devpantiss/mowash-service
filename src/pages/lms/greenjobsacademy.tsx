import Layout from "@/components/Dash/Layout";
import { useRouter } from "next/router";
import animation from "@/components/assets/graduation.json";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });


const GreenJobsAcademy = () => {
  const router = useRouter();

  const handleCardClick = (path: string) => {
    router.push(path);
  };

  return (
    <Layout>
      <div className="flex flex-col justify-center mt-8 lg:mt-24 items-center bg-transparent p-6">
        <h1 className="text-4xl font-bold text-center text-white mb-4">
          Welcome To <span className="text-green-400">Green</span> Jobs Academy
        </h1>
        <p className="text-lg text-center text-white max-w-xl mb-10">
          Green Jobs Academy is dedicated to helping individuals develop the
          skills they need to succeed in sustainable careers. Explore our
          programs and choose the path that&apos;s right for you.
        </p>

        <div className="grid grid-cols-1 max-w-5xl md:grid-cols-2 gap-8">
          {/* Apprentice Card */}
          <div
            onClick={() => handleCardClick("/lms/course/apprentice")}
            className="cursor-pointer bg-transparent ring-2 ring-white text-white rounded-lg shadow-lg p-6 transition duration-300 transform hover:scale-105 hover:text-black hover:bg-blue-200"
          >
            <h2 className="text-2xl font-semibold text-center text-blue-600 mb-4">
              Be an Apprentice
            </h2>
            <p className="text-center">
              Begin your journey with practical training in green jobs
              industries. Learn from experienced professionals.
            </p>
          </div>

          {/* Mowash Engineer Card */}
          <div
            onClick={() => handleCardClick("/lms/course/mowashengineer")}
            className="cursor-pointer bg-transparent ring-2 text-white ring-white rounded-lg shadow-lg p-6 transition duration-300 transform hover:scale-105 hover:text-black hover:bg-blue-200"
          >
            <h2 className="text-2xl font-semibold text-center text-blue-600 mb-4">
              Be a Mowash Engineer
            </h2>
            <p className=" text-center">
              Get certified as a Mowash Engineer and become a key player in the
              clean energy sector.
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center p-4 rounded-lg">
          <Lottie
            animationData={animation}
            loop={true}
            style={{
              width: "100%",
              height: "600px",
            }}
            className="block"
          />
        </div>
      </div>
    </Layout>
  );
};

export default GreenJobsAcademy;
