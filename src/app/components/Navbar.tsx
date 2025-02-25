"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AppBar, Toolbar, Button, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText, Box } from "@mui/material";
import { Menu, Moon, Sun } from "lucide-react"; // Lucide icons for lightweight icons

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
            <Link href="/" passHref>
              <img src="/icon.png" alt="Business Boost Society" width={78} height={60} style={{ cursor: "pointer" }} />
            </Link>
          </Box>

          {/* Right Section */}
          <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 2 }}>
            <NavButton href="/about" label="About Us" />
            <NavButton href="/cohort" label="Cohort" />
            <NavButton href="/accelerator" label="Accelerator" />
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

// ✅ Desktop Navigation Button
const NavButton: React.FC<{ href: string; label: string }> = ({ href, label }) => (
  <Button component={Link} href={href} sx={{ color: "black", textTransform: "none", fontWeight: 500 }}>
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

export default Navbar;
