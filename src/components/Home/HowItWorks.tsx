import React, { useEffect, useState } from "react";
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
    title: "Explore 50,000+ expert articles",
    description: "Dive into a world of diverse destinations, prestigious universities, and exciting courses.",
    imgSrc: "https://publicassets.leverageedu.com/landing-pages-new/Frame984.png",
  },
  {
    id: 2,
    title: "Find your Right-Fit Universities",
    description: "Share your profile and let our tools recommend the best-fit universities and courses for you.",
    imgSrc: "https://publicassets.leverageedu.com/landing-pages-new/Frame985.png",
  },
  {
    id: 3,
    title: "Get Expert Advice from our Counsellors",
    description: "Engage in personalized conversation with our expert mentors.",
    imgSrc: "https://publicassets.leverageedu.com/landing-pages-new/Frame986.png",
  },
];

const TimelineComponent: React.FC = () => {

  return (
    <div className="relative bg-blue-600 p-8">
      <h2 className="text-center text-3xl text-white font-bold">How It Works!</h2>

      <Timeline position="alternate" className="p-8 block">
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
                    className="mx-auto"
                  />
                </Box>
              ) : (
                <Card className="p-4 shadow-lg">
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
              <TimelineDot
                className="bg-white text-blue-500 transition-transform duration-300"
              >
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
                    className="mx-auto"
                  />
                </Box>
              ) : (
                <Card className="p-4 shadow-lg">
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
  );
};

export default TimelineComponent;
