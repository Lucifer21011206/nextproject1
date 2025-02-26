"use client";

import { Box, Typography, Grid } from "@mui/material";
import { styled } from "@mui/system";
import Image from "next/image";

const CircleImage = styled(Image)({
  width: "100%",
  maxWidth: "660px",
  borderRadius: "50%",
});

const HowItWorks = () => {
  return (
    <Box
      sx={{
        position: "relative",
        backgroundImage: "url('/girl.png')", 
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        py: 3,
        px: "5%",
        overflow: "hidden",
        minHeight: "55vh", // Ensure full viewport height
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Overlay for better text visibility */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          
          zIndex: 1,
        }}
      />

      <Grid container spacing={4} alignItems="center" sx={{ position: "relative", zIndex: 2 }}>
        {/* Left Section */}
        <Grid item xs={12} md={6} sx={{ color: "white", ml: { xs: "-3%", md: "-1%" } }}>
          <Typography sx={{ fontFamily: "Outfit", fontWeight: 600, fontSize: { xs: "20px", md: "20px" } }}>
            Next steps:
          </Typography>
          <Typography sx={{ fontSize: { xs: "1.5rem", md: "4.2rem" }, color: "rgb(218, 100, 5)" }}>
            How Does It Work
          </Typography>
          <ul style={{ listStyleType: "none", paddingLeft: "4%" }}>
            <li>
              <Typography sx={{ fontSize: { xs: "1rem", md: "2rem" }, fontWeight: "600" }} gutterBottom>
                For Prospective Partners:
              </Typography>
              <ol style={{ paddingLeft: "4%" }}>
                {[
                  "Review the features and benefits on this page.",
                  "Email us with information regarding your interest in a strategic partnership. You can expect a follow-up within 48-72 business hours.",
                  "Join our vibrant community at BusinessBoostSociety.com to take advantage of personalized insights, expert advice, exclusive events, collaboration opportunities, and other resources.",
                ].map((item, index) => (
                  <li key={index}>
                    <Typography sx={{ fontSize: { xs: "0.6rem", md: "1.1rem" } }}>{item}</Typography>
                  </li>
                ))}
              </ol>
            </li>
            <li>
              <Typography sx={{ fontSize: { xs: "1rem", md: "2rem" }, fontWeight: "600" }} gutterBottom>
                For Students, Entrepreneurs, or Existing Business Owners Interested in a Cohort:
              </Typography>
            </li>
            <ol style={{ paddingLeft: "4%" }}>
              {[
                "Review the features and benefits on this page.",
                "Browse our list of cohorts, select a cohort and apply! You can expect a decision according to the info included in the application details.",
                "Join BusinessBoostSociety.com for personalized insights, expert advice, exclusive events, and collaboration opportunities.",
              ].map((item, index) => (
                <li key={index}>
                  <Typography sx={{ fontSize: { xs: "0.6rem", md: "1.1rem" } }}>{item}</Typography>
                </li>
              ))}
            </ol>
          </ul>
        </Grid>

        {/* Right Section - Image */}
        <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center" }}>
        <Box
      sx={{
        width: "660px",
        height: "660px",
        borderRadius: "50%", // Ensures circular shape
        overflow: "hidden", // Clips image to the circular container
        position: "relative", // Needed for next/image
      }}
    >
      <img
        src="/circle.png"
        alt="Team Discussion"
        layout="fill" // Makes image fully cover the box
        objectFit="cover" // Ensures proper aspect ratio inside the circle
      />
    </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HowItWorks;
