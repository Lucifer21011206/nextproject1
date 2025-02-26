import Navbar from "../components/Navbar";
import CollaborativePartners from "../components/CollaborativePartners";
import HeroSection from "../components/HeroSection";
import CollaborativeProjects from "../components/CollaborativeProjects";
import FeatureSection from "../components/FeatureSection";
import HowItWorks from "../components/HowItWorks";
import TestimonialsSections from "../components/TestimonialsSections";
import SubscribeSection from "../components/SubscribeSection";
import Footer from "../components/Footer";
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
      <CollaborativeProjects/>
      <FeatureSection/>
      <HowItWorks /> 
      <TestimonialsSections/>
      <SubscribeSection />
      <Footer/>
      {children}
    </div>
  );
}
