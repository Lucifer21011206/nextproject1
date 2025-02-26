"use client";
import React, { useState } from "react";
import { Box, Typography, Avatar, IconButton, useMediaQuery } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useTheme } from "@mui/material/styles";

const testimonials = [
  {
    name: "Nathaniel",
    title: "Owner",
    text: "This cohort has been amazing! I am so more confident about myself as a leader and the direction of my business. Thank you, Business BOOST! Society!!!",
    img: "https://storageboostaccount.blob.core.windows.net/test-container-new/1715111550471_blob",
  },
  {
    name: "Beatriz W.",
    title: "Owner",
    text: "Taking over my late father's construction business as a woman in a male-dominated industry is tough. This cohort provided me with the knowledge, connections & confidence needed to navigate city contracts which my father wanted to pursue. Thanks, BOOST!",
    img: "https://storageboostaccount.blob.core.windows.net/test-container-new/1721840222921_BeatrizWillington-construction.png",
  },
  {
    name: "Ta'Nesha Justice",
    title: "Owner",
    text: "Being part of the BOOST! Your Business cohort has been incredible. The guidance and support from my BSA and others were invaluable in helping me achieve several business goals. Thanks to BOOST!, my Comfy Care products are now on Amazon!",
    img: "https://storageboostaccount.blob.core.windows.net/test-container-new/1723667869953_TaNeshaJustice_ComfyCare_biopic.jpg",
  },
];

const TestimonialsSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <Box sx={{ textAlign: "center", py: 10, backgroundColor: "#FAFAFA", position: "relative" }}>
      <Typography variant="h4" fontWeight={600} sx={{ fontSize: "42px", fontFamily: "Outfit", lineHeight: 1.5 }}>
        You Are The Center Of Our Universe
      </Typography>
      <Typography variant="h5" fontWeight={600} mt={1} mb={8} sx={{ fontSize: "32px", fontFamily: "Outfit", lineHeight: 1.5 }}>
        Testimonials
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", px: 2, position: "relative" }}>
        <IconButton
          sx={{
            position: "absolute",
            left: "3%",
            backgroundColor: "#f4a261",
            color: "#fff",
            zIndex: 2,
            borderRadius: "50%",
            "&:hover": { backgroundColor: "#e76f51" },
          }}
          onClick={handlePrev}
        >
          <ArrowBackIosNewIcon fontSize="medium" />
        </IconButton>

        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", px: 4 }}>
          {isMobile ? (
            <Box
              sx={{
                width: "100%",
                minHeight: "230px",
                backgroundColor: "rgb(233, 233, 233)",
                borderRadius: "12px",
                padding: "50px 30px 60px",
                textAlign: "center",
                position: "relative",
              }}
            >
              <Avatar
                src={testimonials[activeIndex].img}
                sx={{
                  width: 80,
                  height: 80,
                  position: "absolute",
                  top: "-40px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  border: "4px solid white",
                }}
              />
              <Typography variant="body1" sx={{ mt: 6, fontFamily: "Outfit", textAlign: "center" }}>
                "{testimonials[activeIndex].text}"
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "center", gap: "3px", mt: 2 }}>
                <Typography variant="body2" fontWeight={600} sx={{ fontFamily: "Outfit" }}>
                  {testimonials[activeIndex].name},
                </Typography>
                <Typography variant="body2" fontWeight={400} sx={{ fontFamily: "Outfit" }}>
                  {testimonials[activeIndex].title}
                </Typography>
              </Box>
            </Box>
          ) : (
            testimonials.map((item, index) => (
              <Box
  key={index}
  sx={{
    gap: "1px",
    position: "relative",
    width: "502px",
    minHeight: "380px",
    backgroundColor: index === activeIndex ? "rgba(82, 49, 104, 0.1)" : "rgb(233, 233, 233)",
    borderRadius: "12px",
    padding: "40px 25px 50px",
    textAlign: "center",
    margin: "10px",
    boxShadow: "0px 6px 16px rgba(0, 0, 0, 0.15)", // ✅ Elevation effect applied
    transition: "box-shadow 0.3s ease-in-out", // ✅ Smooth effect
  }}
>

                <Avatar src={item.img} sx={{ width: 80, height: 80, position: "absolute", top: "-40px", left: "50%", transform: "translateX(-50%)", border: "4px solid white" }} />
                <Box
  sx={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center", // ✅ Centers content vertically
    justifyContent: "center", // ✅ Centers content horizontally
  }}
>
  <Typography
    variant="body1"
    sx={{ mt: 8, fontFamily: "Outfit", textAlign: "center" }}
  >
    "{item.text}"
  </Typography>
</Box>

                <Box sx={{ position: "absolute", bottom: "10px", right: "10px", textAlign: "right" }}>
                <Typography 
  variant="body2" 
  fontWeight={400} 
  sx={{ fontFamily: "Outfit", mr: 9, mb: -2.5 }} // ✅ Moves text slightly downward
>
  {item.name},
</Typography>


<Typography 
  variant="body2" 
  fontWeight={400} 
  sx={{ fontFamily: "Outfit", mr: 3 }} // ✅ Moves text slightly left
>
  {item.title}
</Typography>

                </Box>
              </Box>
            ))
          )}
        </Box>

        <IconButton
          sx={{
            position: "absolute",
            right: "3%",
            backgroundColor: "#f4a261",
            color: "#fff",
            borderRadius: "50%",
            "&:hover": { backgroundColor: "#e76f51" },
          }}
          onClick={handleNext}
        >
          <ArrowForwardIosIcon fontSize="medium" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default TestimonialsSection;
