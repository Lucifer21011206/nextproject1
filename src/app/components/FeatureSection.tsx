"use client";
import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  useTheme,
} from "@mui/material";

interface Feature {
  title: string;
  description: string;
  icon: string;
}

const features: Feature[] = [
  {
    title: "Monitor & Measure",
    description:
      "Track quantifiable and qualitative results to monitor progress and performance. Make data-driven decisions and continuously improve your strategies by measuring the impact of your efforts with clear metrics.",
    icon: "/heart.png",
  },
  {
    title: "Scheduling Functions",
    description:
      "Schedule meetings and collaboration sessions between business owners and strategic advisors. Optimize your time and enhance productivity by coordinating effectively with your advisors for regular check-ins.",
    icon: "/suitcase.png",
  },
  {
    title: "Cohort-based Learning",
    description:
      "Join exclusive cohorts led by industry experts to enhance your business skills and knowledge. Collaborate with like-minded entrepreneurs and accelerate your business growth through expert guidance.",
    icon: "/file.png",
  },
  {
    title: "Personalized Business Insights",
    description:
      "Utilize our advanced AI-powered tool to identify the best funding opportunities tailored to your business needs. Save time in securing capital by accessing a curated list of funding options that match your requirements.",
    icon: "/file.png",
  },
];

const FeaturesSection: React.FC = () => {
  const theme = useTheme();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width:600px)");
    setIsMobile(mediaQuery.matches);
  
    const handleResize = () => setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleResize);
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);
  
  return (
    <Box
      sx={{
        maxWidth: "100vw",
        py: 10,
        backgroundColor: "#fff",
        ml: { md: -6, lg: -20 },
        px: { xs: "5%", sm: "7%", md: 0 },
      }}
    >
      <Container component="div" sx={{ width: "100vw" }}>
        <Grid container spacing={8} alignItems="flex-start">
          {/* Left Content */}
          <Grid item xs={12} md={6}>
            <Typography variant="h3" fontWeight={600} sx={{ fontFamily: "Outfit", width:"100%" }}>
              Unlock Exclusive Resources and Opportunities
            </Typography>
            <Typography variant="body1" sx={{ fontFamily:"Outfit",color: "#333", mt: 2, width: "80%" }}>
              Introducing the BoostSociety.ai portal - your gateway to advanced business and technical functionality. Partner with
              us to host your educational, community, and business programs on our platform, benefiting from dynamic,
              expert-led cohorts and innovative tools.
            </Typography>
            <Button variant="contained" sx={{ background:"linear-gradient(98deg, rgb(228, 103, 3) -1.68%, rgb(199, 52, 13) 103.45%)",mt: 3, px: 4, py: 1.5, textTransform: "none" }}>
              View All Features →
            </Button>
          </Grid>

          {/* Feature Cards */}
          <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: isMobile ? "center" : "flex-end" }}>
            <Grid container spacing={4} sx={{ maxWidth: "95%", justifyContent: isMobile ? "center" : "flex-end" }}>
              {features.map((feature, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Card sx={{ borderRadius: "16px", backgroundColor: "rgb(218, 218, 218)", height: "280px" }}>
                    <CardContent>
                      <CardMedia component="img" image={feature.icon} alt={feature.title} sx={{ width: 44, height: 40 }} />
                      <Typography variant="h6" sx={{ mt: 1, fontWeight: "500", fontFamily: "Outfit" }}>
                        {feature.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#555", mt: 1 }}>
                        {feature.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default FeaturesSection;
