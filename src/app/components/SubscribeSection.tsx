"use client";

import React, { useState } from "react";
import { Box, Container, TextField, Button, Typography } from "@mui/material";

const SubscribeSection: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const validateEmail = () => {
    setIsSubmitted(true);

    if (!email.trim()) {
      setError("Email address is required.");
      return;
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailPattern.test(email)) {
      setError("Please enter a valid email address.");
    } else {
      setError(""); // Clear error when email is valid
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    setIsTyping(value.length > 0);

    if (!value.trim()) {
      setError(isSubmitted ? "Email is required." : "");
    } else {
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      setError(emailPattern.test(value) ? "" : "Please enter a valid email address.");
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: "#4B2A69",
        color: "#fff",
        py: 9,
        position: "relative",
        overflow: "hidden",
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          justifyContent: "right",
          alignItems: "center",
          flexDirection: "row",
          width: "100%",
          px: 0,
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: 2,
            flexShrink: 0,
            justifyContent: "flex-end",
            width: "auto",
            marginLeft: "auto",
            position: "relative",
            ml: 5, // Moves content to the right
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", position: "relative" }}>
            <TextField
              variant="outlined"
              placeholder="Enter your email address"
              value={email}
              onChange={handleChange}
              sx={{
                backgroundColor: "#fff",
                borderRadius: 1,
                width: { xs: "calc(100% - 40px)", sm: "486px" },
                height: "56px",
                marginLeft: { xs: "20px", sm: 3 },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: error ? "rgb(211, 47, 47)" : "#ccc",
                  },
                  "&:hover fieldset": {
                    borderColor: error ? "rgb(211, 47, 47)" : "#888",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: error ? "rgb(211, 47, 47)" : "#1976d2",
                  },
                },
              }}
            />
            <Typography
              sx={{
                color: "rgb(211, 47, 47)",
                fontSize: { xs: "0.75rem", sm: "14px" },
                textAlign: "left",
                position: "absolute",
                top: "100%",
                left: { xs: "25px", sm: "5px" },
                marginTop: "4px",
                visibility: error ? "visible" : "hidden",
                whiteSpace: "nowrap",
              }}
            >
              {error || " "}
            </Typography>
          </Box>
          <Button
            variant="contained"
            onClick={validateEmail}
            sx={{
              minWidth: "120px",
              fontFamily: "Outfit",
              fontWeight: "500",
              display: "inline-flex",
              boxSizing: "border-box",
              lineHeight: "1.75",
              letterSpacing: "0.02857em",
              backgroundColor: "#FF6600",
              color: isTyping ? "#fff" : "rgba(0, 0, 0, 0.26)",
              height: "53px",
              px: { xs: 3, sm: 4, md: 4 },
              background: "linear-gradient(98deg, rgb(228, 103, 3) -1.68%, rgb(199, 52, 13) 103.45%)",
              borderRadius: "5px",
              marginRight: "6%",
              textTransform: "none",
              
            }}
          >
            Subscribe
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default SubscribeSection;
