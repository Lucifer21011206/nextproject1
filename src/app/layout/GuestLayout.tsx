import Navbar from "../components/Navbar";
import CollaborativePartners from "../components/CollaborativePartners";
import HeroSection from "../components/HeroSection";
import { ReactNode } from "react";

interface GuestLayoutProps {
  children: ReactNode;
}

export default function GuestLayout({ children }: GuestLayoutProps) {
  return (
    <div>
      <Navbar />
      <HeroSection/>
      <CollaborativePartners/>
      {children}
    </div>
  );
}
