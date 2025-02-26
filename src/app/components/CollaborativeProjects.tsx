'use client';

import React, { useState } from "react";
import Image from "next/image";
import {
  Box,
  IconButton,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  useMediaQuery,
} from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import { useSwipeable } from "react-swipeable";



interface Project {
  description: string;
  img: string;
}

const projects: Project[] = [
  {
    description:
      "VetsFest 2024: Filling Your Bunker for Entrepreneurial Success! VetsFest 2024, hosted by the Bunker Labs Ambassador Atlanta Team, is a premier event dedicated to empowering veteran and military spouse entrepreneurs.",
    img: "https://storageboostaccount.blob.core.windows.net/test-container-new/1718224796512_BunkerLabs.png",
  },
  {
    description:
      "Fascinating conversations with extraordinary individuals. Engage in enlightening exchanges with trailblazers from various sectors and delve into the stories that shaped their paths to successto empowering veteran.",
    img: "https://storageboostaccount.blob.core.windows.net/test-container-new/1718226583321_LWLScreenSaver.png",
  },
];

const CollaborativeProjects: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(600));
  const isTablet = useMediaQuery(theme.breakpoints.between(600, 900));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up(900));
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrev(),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
  };

  return (
    <Box sx={{ position: "relative", pb: 10, overflow: "hidden", width: "100vw" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          align="center"
          fontWeight={600}
          fontFamily="Outfit"
          lineHeight={1.5}
          letterSpacing="0.00938em"
          sx={{ fontSize: { xs: "25px", md: "42px" } }}
        >
        Collaborative Projects"

        </Typography>

        <Typography
          variant="body1"
          align="center"
          sx={{ mt: 1, mb: 4, maxWidth: "1200px", mx: "auto", fontFamily: "Outfit", fontSize: "18px", color: "rgba(63, 60, 60, 0.87)" }}
        >
          Our collaborative projects have been at the forefront of innovation, solving complex challenges and achieving remarkable outcomes. Here are some notable projects we have undertaken in collaboration with our partners.
        </Typography>

        {isMobile ? (
          <Box {...handlers} sx={{ display: "flex", justifyContent: "center", alignItems: "center", position: "relative" }}>
            <Card sx={{ backgroundColor: "#512D6D", borderRadius: "17px", p: 2, color: "#fff", width: "90%" }}>
              <CardMedia
                component="img"
                image={projects[currentIndex].img}
                alt="Project Image"
                sx={{ width: "100%", height: 200, borderRadius: "10px" }}
              />
              <CardContent>
                <Typography variant="body2" sx={{ fontSize: "16px", color: "rgba(255, 255, 255, 0.75)" }}>
                  {projects[currentIndex].description}
                </Typography>
              </CardContent>
            </Card>
            <IconButton onClick={handlePrev} sx={{ position: "absolute", left: "5%", color: "#fff" }}>
              <ArrowBackIos />
            </IconButton>
            <IconButton onClick={handleNext} sx={{ position: "absolute", right: "5%", color: "#fff" }}>
              <ArrowForwardIos />
            </IconButton>
          </Box>
        ) : (
          <Grid container spacing={1} sx={{ display: "flex", width: isTablet ? "40%" : "80%", height: isTablet ? "600px" : "430px" }}>
            {projects.map((project, index) => (
              <Grid item xs={12} md={5.5} key={index}>
                <Card sx={{ backgroundColor: "#512D6D", borderRadius: "17px", p: 2, color: "#fff" }}>
                  <CardMedia
                    component="img"
                    image={project.img}
                    alt="Project Image"
                    sx={{ width: "100%", height: 200, borderRadius: "10px" }}
                  />
                  <CardContent>
                    <Typography variant="body2" sx={{ fontSize: "16px", color: "rgba(255, 255, 255, 0.75)" }}>
                      {project.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>

      {isLargeScreen && (
        <Box sx={{ position: "absolute", bottom: -5, left: 0, width: "100%", zIndex: -1 }}>
          <img src="/Vector 27.png" alt="Overlay" layout="fill" objectFit="cover" />
        </Box>
      )}
    </Box>
  );
};

export default CollaborativeProjects;
