import React from "react";
import { FaThumbsUp } from "react-icons/fa";

// Define a type for the feedback data
interface Feedback {
  name: string;
  time: string;
  comment: string;
}

// Sample feedback data
const feedbackData: Feedback[] = [
  {
    name: "Danish Gourj",
    time: "5 months ago",
    comment: "Thanks Guys!",
  },
  {
    name: "John Doe",
    time: "1 month ago",
    comment: "Great as always!",
  },
  {
    name: "Chriss Haul",
    time: "7 months ago",
    comment: "All sorted, Thanks!",
  },
  {
    name: "Pollard Lora",
    time: "4 months ago",
    comment: "Awesome service!",
  },
  {
    name: "Danish Gourj",
    time: "5 months ago",
    comment: "Thanks Guys!",
  },
  {
    name: "John Doe",
    time: "1 month ago",
    comment: "Great as always!",
  },
  {
    name: "Chriss Haul",
    time: "7 months ago",
    comment: "All sorted, Thanks!",
  },
  {
    name: "Pollard Lora",
    time: "4 months ago",
    comment: "Awesome service!",
  },
  {
    name: "Danish Gourj",
    time: "5 months ago",
    comment: "Thanks Guys!",
  },
  {
    name: "John Doe",
    time: "1 month ago",
    comment: "Great as always!",
  },
  {
    name: "Chriss Haul",
    time: "7 months ago",
    comment: "All sorted, Thanks!",
  },
  {
    name: "Pollard Lora",
    time: "4 months ago",
    comment: "Awesome service!",
  },
];

// Define a type for the props of the RatingBar component
interface RatingBarProps {
  percentage: number;
}

// RatingBar component
const RatingBar: React.FC<RatingBarProps> = ({ percentage }) => (
  <div className="relative h-3 rounded-full bg-gray-300 w-full">
    <div
      className="absolute h-3 rounded-full bg-yellow-500"
      style={{ width: `${percentage}%` }}
    ></div>
  </div>
);

// Reviews component
const Reviews: React.FC = () => {
  return (
    <div className="bg-transparent mb-6 ring-2 ring-white text-white p-6 rounded-lg shadow-lg mx-auto">
      {/* Rating Summary */}
      <div className="text-center">
        <h2 className="text-xl font-semibold mb-2">Customer Feedback</h2>

        <div className="flex flex-col w-full lg:flex-row lg:gap-x-8">
          <div className="w-full lg:w-1/2 flex flex-row items-center gap-x-8 lg:justify-between">
            <div className="bg-blue-700 p-4 rounded-lg mb-6 lg:mb-0 lg:w-1/3">
              <h3 className="text-4xl font-bold">4.9</h3>
              <div className="flex justify-center my-2">
                {[...Array(5)].map((_, index) => (
                  <span key={index} className="text-yellow-400 text-xl">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-300">1680 Ratings</p>
            </div>

            {/* Ratings Breakdown */}
            <div className="flex-grow mb-6 lg:mb-0 lg:w-1/3">
              <div className="space-y-2">
                {[
                  { stars: 5, value: 32 },
                  { stars: 4, value: 12 },
                  { stars: 3, value: 6 },
                  { stars: 2, value: 2 },
                  { stars: 1, value: 1 },
                ].map((rating) => (
                  <div
                    key={rating.stars}
                    className="flex items-center space-x-2"
                  >
                    <span className="text-yellow-400">{rating.stars}★</span>
                    <RatingBar percentage={rating.value * 1} />
                    <span className="text-gray-300">{rating.value * 10}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Feedback List */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-xl text-left font-semibold mb-2">
              What They Said About You!
            </h2>
            <div className="max-h-48 overflow-y-auto space-y-4">
              {feedbackData.map((feedback, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex gap-x-16 justify-between flex-row">
                    <div className="flex flex-col lg:gap-x-8 lg:flex-row">
                      <h4 className="font-bold">{feedback.name}</h4>
                      <p className="text-gray-400 text-sm">{feedback.time}</p>
                    </div>
                    <p className="text-gray-200">{feedback.comment}</p>
                  </div>
                  <FaThumbsUp className="text-gray-400" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
