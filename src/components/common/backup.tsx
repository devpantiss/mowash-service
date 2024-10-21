import React from "react";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";
import { Box, Typography, Card, CardContent } from "@mui/material";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import Image from "next/image";

interface Event {
  id: number;
  title: string;
  description: string;
  imgSrc: string;
}

const events: Event[] = [
  {
    id: 1,
    title: "Explore the wide range of services listed.",
    description:
      "Choose from a wide range of services that aligns best with you.",
    imgSrc:
      "https://publicassets.leverageedu.com/landing-pages-new/Frame984.png",
  },
  {
    id: 2,
    title: "Registration & Verification",
    description:
      "Register on our partner Platform, and get verified and become a MoWash Engineer or MoWash Preneur.",
    imgSrc:
      "https://publicassets.leverageedu.com/landing-pages-new/Frame985.png",
  },
  {
    id: 3,
    title: "Get the best prices for your services from our huge user base",
    description:
      "Get Bookings for your services, track them, complete the bookings and get the best value for your services.",
    imgSrc:
      "https://publicassets.leverageedu.com/landing-pages-new/Frame986.png",
  },
];

const TimelineComponent: React.FC = () => {
  return (
    <div className="relative bg-blue-600 p-8">
      <h2 className="text-center text-3xl text-white font-bold">
        How It Works!
      </h2>

      <div className="p-8 lg:block md:block hidden">
        {/* Desktop View: Alternating Timeline */}
        <Timeline position="alternate">
          {events.map((event, index) => (
            <TimelineItem key={event.id}>
              {/* Opposite content for alternating sides */}
              <TimelineOppositeContent>
                {index % 2 === 0 ? (
                  <Box textAlign="center">
                    <Image
                      src={event.imgSrc}
                      alt={event.title}
                      width={350}
                      height={350}
                      className="mx-auto mt-20"
                    />
                  </Box>
                ) : (
                  <Card className="p-4 mt-20 shadow-lg">
                    <CardContent>
                      <Typography
                        variant="h6"
                        className="text-left text-blue-500 font-bold mb-2"
                      >
                        {event.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        className="text-left text-gray-700 mb-4"
                      >
                        {event.description}
                      </Typography>
                    </CardContent>
                  </Card>
                )}
              </TimelineOppositeContent>

              <TimelineSeparator>
                <TimelineConnector className="bg-white h-[150px]" />
                <TimelineDot className="bg-white text-blue-500 transition-transform duration-300">
                  <SchoolOutlinedIcon />
                </TimelineDot>
                <TimelineConnector className="bg-white h-[150px]" />
              </TimelineSeparator>

              <TimelineContent>
                {index % 2 !== 0 ? (
                  <Box textAlign="center">
                    <Image
                      src={event.imgSrc}
                      alt={event.title}
                      width={350}
                      height={350}
                      className="mx-auto mt-20"
                    />
                  </Box>
                ) : (
                  <Card className="p-4 mt-20 shadow-lg">
                    <CardContent>
                      <Typography
                        variant="h6"
                        className="text-left text-blue-500 font-bold mb-2"
                      >
                        {event.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        className="text-left text-gray-700 mb-4"
                      >
                        {event.description}
                      </Typography>
                    </CardContent>
                  </Card>
                )}
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </div>

      <div className="p-5 block md:hidden lg:hidden">
        {/* Mobile View: Left-Aligned Timeline */}
        <Timeline>
          {events.map((event) => (
            <TimelineItem key={event.id}>
              <TimelineSeparator>
                <TimelineDot className="bg-white text-blue-500 transition-transform duration-300">
                  <SchoolOutlinedIcon />
                </TimelineDot>
                <TimelineConnector className="bg-white h-[150px]" />
              </TimelineSeparator>

              <TimelineContent>
                <Card className="p-4 mt-10 shadow-lg">
                  <CardContent>
                    <Typography
                      variant="h6"
                      className="text-left text-blue-500 font-bold mb-2"
                    >
                      {event.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      className="text-left text-gray-700 mb-4"
                    >
                      {event.description}
                    </Typography>

                    {/* Image inside the card for mobile view */}
                    <Box textAlign="center" className="mt-4">
                      <Image
                        src={event.imgSrc}
                        alt={event.title}
                        width={350}
                        height={350}
                        className="mx-auto"
                      />
                    </Box>
                  </CardContent>
                </Card>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </div>
  );
};

export default TimelineComponent;
