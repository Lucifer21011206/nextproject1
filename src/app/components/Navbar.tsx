"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AppBar, Toolbar, Button, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText, Box } from "@mui/material";
import { Menu, Moon, Sun } from "lucide-react"; // Lucide icons for lightweight icons
import { Outfit } from "next/font/google"; // ✅ Import at the top (Fixes error)

// ✅ Load Outfit Font
const outfit = Outfit({ subsets: ["latin"], weight: ["400"] });

const Navbar: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  const toggleDrawer = () => {
    setMobileOpen(!mobileOpen);
  };

  useEffect(() => {
    document.documentElement.style.overflowX = "hidden";
    document.body.style.overflowX = "hidden";
  }, []);

  return (
    <>
      {/* Navbar */}
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          height: 72,
          backgroundColor: "white",
          color: "black",
          px: 3,
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          {/* Left Section */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            {/* Mobile Menu Icon */}
            <IconButton onClick={toggleDrawer} sx={{ display: { xs: "block", md: "none" }, color: "black" }}>
              <Menu size={28} />
            </IconButton>

            {/* Logo */}
            <Box sx={{ ml: 2 }}>
              <Link href="/" passHref>
                <img src="/icon.png" alt="Business Boost Society" width={80} height={62} style={{ cursor: "pointer" }} />
              </Link>
            </Box>
          </Box>

          {/* Right Section */}
          <Box sx={{ fontWeight: "400", display: { xs: "none", md: "flex" }, alignItems: "center"}}>
            <NavButton href="/about" label="About Us" />
            <NavSeparator />
            <NavButton href="/cohort" label="Cohort" />
            <NavSeparator />
            <NavButton href="/accelerator" label="Accelerator" />
            <NavSeparator />
            <NavButton href="/contact" label="Contact Us" />

            <Button component={Link} href="/signup" sx={{ fontWeight: "bold", color: "black", textTransform: "none" }}>
              Sign Up
            </Button>

            <Button
              component={Link}
              href="/login"
              variant="outlined"
              sx={{
                borderColor: "#E46703",
                color: "#E46703",
                textTransform: "none",
                fontWeight: "bold",
                borderRadius: "5px",
                minWidth: "fit-content",
                width: 130,
                height: 42,
                border: "2px solid #E46703",
                display: "flex",
                alignItems: "center",
                gap: 1,
                "&:hover": { borderColor: "#E46703", backgroundColor: "transparent" },
              }}
            >
              Login  
              <img src="/Layer 2.svg" alt="Login Icon" width={20} height={20} />
            </Button>

            <IconButton onClick={toggleDarkMode} sx={{ color: "black" }}>
              {darkMode ? <Sun size={24} /> : <Moon size={24} />}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Spacer for Navbar */}
      <Box sx={{ height: 72 }} />

      {/* Mobile Drawer */}
      <Drawer anchor="left" open={mobileOpen} onClose={toggleDrawer}>
        <List sx={{ width: 250, backgroundColor: "white" }}>
          <NavListItem href="/about" label="About Us" />
          <NavListItem href="/cohort" label="Cohort" />
          <NavListItem href="/accelerator" label="Accelerator" />
          <NavListItem href="/contact" label="Contact Us" />
        </List>
      </Drawer>
    </>
  );
};

// ✅ Desktop Navigation Button with Outfit Font
const NavButton: React.FC<{ href: string; label: string }> = ({ href, label }) => (
  <Button
    component={Link}
    href={href}
    sx={{
      color: "black",
      textTransform: "none",
      fontWeight: "bold",
      fontFamily: outfit.style.fontFamily, // ✅ Correct font usage
    }}
  >
    {label}
  </Button>
);

// ✅ Mobile Drawer Navigation Item
const NavListItem: React.FC<{ href: string; label: string }> = ({ href, label }) => (
  <ListItem disablePadding>
    <ListItemButton component={Link} href={href}>
      <ListItemText primary={label} />
    </ListItemButton>
  </ListItem>
);

// ✅ Separator for Navbar Links
const NavSeparator: React.FC = () => (
  <img src="/Line 317.svg" alt="Separator Icon" style={{ width: "20px", height: "20px" }} />
);

export default Navbar;
