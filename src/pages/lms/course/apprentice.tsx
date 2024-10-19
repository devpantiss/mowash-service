// pages/lms/course/apprentice.tsx

import { useState } from "react";
import { useRouter } from "next/router";
import Layout from "@/components/Dash/Layout";

interface Course {
  id: number; // Change id to be a number
  title: string;
  description: string;
  videoUrl: string;
  videoTiming: string;
  trainer: string;
  publishedBy: string;
  transcript: string;
}

const courses: Course[] = [
  {
    id: 1,
    title: "Mason",
    description: "Learn masonry skills for sustainable infrastructure.",
    videoUrl: "https://www.youtube.com/embed/9yGN8SG7fgk?si=sZPyODoXbOeFJN_T",
    videoTiming: "10:45",
    trainer: "John Doe",
    publishedBy: "Green Jobs Academy",
    transcript: "This is the transcript for the Mason course video.",
  },
  {
    id: 2,
    title: "Electrician",
    description: "Become a certified electrician for green jobs.",
    videoUrl: "https://www.youtube.com/embed/9yGN8SG7fgk?si=sZPyODoXbOeFJN_T",
    videoTiming: "12:30",
    trainer: "Jane Smith",
    publishedBy: "Green Jobs Academy",
    transcript: "This is the transcript for the Electrician course video.",
  },
  {
    id: 3,
    title: "Plumber",
    description: "Learn plumbing skills and get certified.",
    videoUrl: "https://www.youtube.com/embed/9yGN8SG7fgk?si=sZPyODoXbOeFJN_T",
    videoTiming: "14:15",
    trainer: "Michael Johnson",
    publishedBy: "Green Jobs Academy",
    transcript: "This is the transcript for the Plumber course video.",
  },
  {
    id: 4,
    title: "Cesspool Technician",
    description: "Become a certified cesspool technician.",
    videoUrl: "https://www.youtube.com/embed/9yGN8SG7fgk?si=sZPyODoXbOeFJN_T",
    videoTiming: "8:20",
    trainer: "Lisa Turner",
    publishedBy: "Green Jobs Academy",
    transcript: "This is the transcript for the Cesspool Technician course video.",
  },
  {
    id: 5,
    title: "Sanitation Crew",
    description: "Learn sanitation processes for a greener future.",
    videoUrl: "https://www.youtube.com/embed/9yGN8SG7fgk?si=sZPyODoXbOeFJN_T",
    videoTiming: "11:05",
    trainer: "Tom Williams",
    publishedBy: "Green Jobs Academy",
    transcript: "This is the transcript for the Sanitation Crew course video.",
  },
  {
    id: 6,
    title: "Nal Jal Mitra",
    description: "Get certified as a water management professional.",
    videoUrl: "https://www.youtube.com/embed/9yGN8SG7fgk?si=sZPyODoXbOeFJN_T",
    videoTiming: "9:50",
    trainer: "Aisha Khan",
    publishedBy: "Green Jobs Academy",
    transcript: "This is the transcript for the Nal Jal Mitra course video.",
  },
  {
    id: 7,
    title: "STP Operator",
    description: "Operate sewage treatment plants for a cleaner environment.",
    videoUrl: "https://www.youtube.com/embed/9yGN8SG7fgk?si=sZPyODoXbOeFJN_T",
    videoTiming: "10:30",
    trainer: "David Clarke",
    publishedBy: "Green Jobs Academy",
    transcript: "This is the transcript for the STP Operator course video.",
  },
  {
    id: 8,
    title: "Solar Pump Operator",
    description: "Learn to operate and maintain solar pumps.",
    videoUrl: "https://www.youtube.com/embed/9yGN8SG7fgk?si=sZPyODoXbOeFJN_T",
    videoTiming: "13:10",
    trainer: "Priya Patel",
    publishedBy: "Green Jobs Academy",
    transcript: "This is the transcript for the Solar Pump Operator course video.",
  },
  {
    id: 9,
    title: "Pond Excavator",
    description: "Excavate and manage water bodies for sustainable use.",
    videoUrl: "https://www.youtube.com/embed/9yGN8SG7fgk?si=sZPyODoXbOeFJN_T",
    videoTiming: "11:45",
    trainer: "Henry Adams",
    publishedBy: "Green Jobs Academy",
    transcript: "This is the transcript for the Pond Excavator course video.",
  },
  {
    id: 10,
    title: "Water Bill Collector",
    description: "Get certified in water bill management and collection.",
    videoUrl: "https://www.youtube.com/embed/9yGN8SG7fgk?si=sZPyODoXbOeFJN_T",
    videoTiming: "9:30",
    trainer: "Sophia Lee",
    publishedBy: "Green Jobs Academy",
    transcript: "This is the transcript for the Water Bill Collector course video.",
  },
];

const Apprentice = () => {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [isComplete, setIsComplete] = useState(false);
  const [attemptsLeft, setAttemptsLeft] = useState(3);
  const router = useRouter();

  const handleCourseSelect = (course: Course) => {
    setSelectedCourse(course);
    setIsComplete(false);
    setAttemptsLeft(3); // Reset attempts on new course selection
  };

  const handleMarkComplete = () => {
    setIsComplete(true);
  };

  const handleTestClick = () => {
    if (attemptsLeft > 0) {
      setAttemptsLeft(attemptsLeft - 1);
      if (attemptsLeft - 1 === 0) {
        alert("Test failed. You must undergo training as a Mowash Engineer.");
        router.push("/lms/course/mowashengineer");
      } else {
        alert(`You have ${attemptsLeft - 1} attempts left.`);
      }
    }
  };

  return (
    <Layout>
      <div className="min-h-screen p-6 bg-transparent">
        <h1 className="text-4xl font-bold text-white text-center mb-6">
          Welcome to the Apprentice program by <span className="text-green-600">Green</span> Jobs Academy
        </h1>
        <p className="text-lg text-white text-center max-w-3xl mx-auto mb-10">
          The Apprentice program offers you the opportunity to gain
          certification in various trades. By following the tutorial videos and
          passing the tests, you can earn a certification. Choose a course to
          get started!
        </p>

        {/* Hide courses if one is selected */}
        {!selectedCourse && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {courses.map((course) => (
              <div
                key={course.id}
                onClick={() => handleCourseSelect(course)}
                className={`cursor-pointer p-6 bg-transparent text-white ring-2 ring-white rounded-lg shadow-lg hover:bg-blue-200 hover:text-black transition duration-300`}
              >
                <h2 className="text-2xl font-semibold text-blue-600 text-center mb-4">
                  {course.title}
                </h2>
                <p className="text-center">
                  {course.description}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Show video and details if a course is selected */}
        {selectedCourse && (
          <div className="flex flex-col md:flex-row md:space-x-6">
            {/* Video and Course Details in one section */}
            <div className="md:w-full w-full mb-6 md:mb-0">
              <div className="flex flex-col lg:flex-row lg:gap-x-10">
                <iframe
                  className="w-full h-[400px] md:h-[700px]"
                  src={selectedCourse.videoUrl}
                  title={selectedCourse.title}
                  allowFullScreen
                ></iframe>

                {/* Course Details */}
                <div className="mt-4">
                  <h2 className="text-2xl font-semibold text-blue-500 mb-2">
                    {selectedCourse.title}
                  </h2>
                  <p className="text-white">{selectedCourse.description}</p>
                  <p className="text-white mt-2">
                    <strong>Video Timing:</strong> {selectedCourse.videoTiming}
                  </p>
                  <p className="text-white">
                    <strong>Trainer:</strong> {selectedCourse.trainer}
                  </p>
                  <p className="text-white">
                    <strong>Published By:</strong> {selectedCourse.publishedBy}
                  </p>

                  {!isComplete ? (
                    <button
                      onClick={handleMarkComplete}
                      className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300"
                    >
                      Mark Complete
                    </button>
                  ) : (
                    <button
                      onClick={handleTestClick}
                      className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300"
                    >
                      Take Test (Attempts Left: {attemptsLeft})
                    </button>
                  )}
                </div>
              </div>

              {/* Transcript Section */}
              <div className="mt-8 p-4 bg-gray-50 border rounded">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Closed Caption (Transcript):
                </h3>
                <p className="text-black">{selectedCourse.transcript}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Apprentice;
