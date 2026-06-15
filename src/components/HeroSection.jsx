// src/components/HeroSection.jsx
import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import "./HeroSection.css";

// Smooth cinematic easing
const cineEase = [0.25, 0.46, 0.45, 0.94];

const fadeUp = (delay = 0, duration = 0.8) => ({
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration, delay, ease: cineEase },
  },
});

const fadeIn = (delay = 0, duration = 0.7) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration, delay, ease: "easeOut" },
  },
});

// High-quality distribution/logistics/FMCG images
const heroImages = [
  "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=1920&q=85",
  "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1920&q=85",
  "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1920&q=85",
  "https://images.unsplash.com/photo-1556767576-5ec41e3239ea?auto=format&fit=crop&w=1920&q=85",
  "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1920&q=85",
];

// Floating service tags
const floatingTags = [
  { text: "Retail Placement", top: "22%", left: "6%" },
  { text: "Distribution", top: "68%", right: "7%" },
  { text: "Market Activation", bottom: "28%", left: "8%" },
  { text: "Reliable Supply", top: "35%", right: "5%" },
];

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = useCallback(() => {
    setCurrentImage((prev) => (prev + 1) % heroImages.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextImage, 6000);
    return () => clearInterval(interval);
  }, [nextImage]);

  // Scroll-based parallax
  const { scrollY } = useScroll();
  const bgScale = useTransform(scrollY, [0, 600], [1, 1.08]);
  const contentY = useTransform(scrollY, [0, 400], [0, -60]);
  const contentOpacity = useTransform(scrollY, [0, 350], [1, 0]);

  return (
    <section className="hero" id="home">
      {/* Rotating background images with parallax zoom on scroll */}
      <motion.div className="hero__bg-wrapper" style={{ scale: bgScale }}>
        <AnimatePresence mode="sync">
          <motion.div
            key={currentImage}
            className="hero__bg"
            style={{ backgroundImage: `url(${heroImages[currentImage]})` }}
            initial={{ scale: 1.08, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2.5, ease: "easeOut" }}
          />
        </AnimatePresence>
      </motion.div>

      {/* Overlay layers */}
      <div className="hero__overlay" />
      <div className="hero__grain" />
      <div className="hero__vignette" />

      {/* Soft spotlight glow behind logo */}
      <div className="hero__spotlight" />

      {/* Animated orange route lines */}
      <div className="hero__routes">
        <div className="hero__route hero__route--1" />
        <div className="hero__route hero__route--2" />
        <div className="hero__route hero__route--3" />
      </div>

      {/* Floating service tags */}
      <div className="hero__floating-tags">
        {floatingTags.map((tag, i) => (
          <motion.span
            key={tag.text}
            className="hero__float-tag"
            style={{ top: tag.top, left: tag.left, right: tag.right, bottom: tag.bottom }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.0 + i * 0.3, duration: 1, ease: cineEase }}
          >
            <span className="hero__float-tag-dot" />
            {tag.text}
          </motion.span>
        ))}
      </div>



      {/* Main content block — parallax on scroll */}
      <motion.div
        className="hero__content"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        {/* Logo — brand mark reveal with blur-to-sharp */}
        <motion.div
          className="hero__logo-wrap"
          initial={{ opacity: 0, scale: 1.12, filter: "blur(12px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.2, delay: 0.6, ease: cineEase }}
        >
          <img src="/logo.png" alt="RiteStock Ltd" className="hero__logo" />
        </motion.div>

        {/* Orange accent line — draws from center */}
        <motion.div
          className="hero__accent-line"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.7, delay: 1.3, ease: cineEase }}
        />

        {/* Main headline */}
        <motion.h1
          className="hero__label"
          variants={fadeIn(1.5)}
          initial="hidden"
          animate="visible"
        >
          FMCG SOURCING &amp; DISTRIBUTION — WORLDWIDE
        </motion.h1>
      </motion.div>



      {/* Bottom glass strip */}
      <motion.div
        className="hero__glass-strip"
        variants={fadeUp(3.0)}
        initial="hidden"
        animate="visible"
      >
        <div className="hero__glass-strip-inner">
          <span className="hero__glass-item">
            <span className="hero__glass-dot" />
            Retail Placement
          </span>
          <span className="hero__glass-divider" />
          <span className="hero__glass-item">
            <span className="hero__glass-dot" />
            Reliable Distribution
          </span>
          <span className="hero__glass-divider" />
          <span className="hero__glass-item">
            <span className="hero__glass-dot" />
            Market Activation
          </span>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.6, duration: 0.8 }}
      >
        <span className="hero__scroll-text">Scroll to explore</span>
        <span className="hero__scroll-line" />
      </motion.div>

      {/* Bottom-left brand detail */}
      <motion.span
        className="hero__brand-detail"
        variants={fadeIn(3.4)}
        initial="hidden"
        animate="visible"
      >
        Est. Worldwide · FMCG Distribution
      </motion.span>
    </section>
  );
}
