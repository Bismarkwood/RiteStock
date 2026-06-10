// src/App.jsx
import React from "react";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import MarqueeBanner from "./components/MarqueeBanner";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import ProductsSection from "./components/ProductsSection";
import CTABanner from "./components/CTABanner";
import Footer from "./components/Footer";
import IntroLoader from "./components/IntroLoader";

export default function App() {
  return (
    <>
      <IntroLoader />
      <div>
        <NavBar />
        <HeroSection />
        {/* <MarqueeBanner /> (temporarily hidden) */}
        <AboutSection />
        <ServicesSection />
        <ProductsSection />
        <CTABanner />
        <Footer />
      </div>
    </>
  );
}
