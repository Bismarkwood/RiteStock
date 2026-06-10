// src/components/CTABanner.jsx
import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import "./CTABanner.css";

const cineEase = [0.25, 0.46, 0.45, 0.94];

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay, ease: cineEase },
  },
});

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, delay, ease: "easeOut" },
  },
});

const lineExpand = (delay = 0) => ({
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.8, delay, ease: cineEase },
  },
});

export default function CTABanner() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Parallax
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section className="cta-banner" id="contact" ref={sectionRef}>
      {/* Background with parallax */}
      <motion.div
        className="cta-banner__bg"
        style={{ y: bgY }}
        initial={{ scale: 1.06 }}
        animate={isInView ? { scale: 1 } : { scale: 1.06 }}
        transition={{ duration: 14, ease: "easeOut" }}
      />

      {/* Overlay layers */}
      <div className="cta-banner__overlay" />
      <div className="cta-banner__grain" />
      <div className="cta-banner__vignette" />

      {/* Floating background words */}
      <div className="cta-banner__float-words">
        <span className="cta-banner__float-word cta-banner__float-word--1">Retail Placement</span>
        <span className="cta-banner__float-word cta-banner__float-word--2">Distribution</span>
        <span className="cta-banner__float-word cta-banner__float-word--3">Market Activation</span>
        <span className="cta-banner__float-word cta-banner__float-word--4">Household</span>
        <span className="cta-banner__float-word cta-banner__float-word--5">Toiletries</span>
        <span className="cta-banner__float-word cta-banner__float-word--6">Food &amp; Beverages</span>
      </div>

      {/* Content */}
      <div className="cta-banner__content">
        {/* Label with lines */}
        

        {/* Heading */}
        <motion.h2
          className="cta-banner__heading"
          variants={fadeUp(0.7)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          Let's Move Your Products{" "}
          <em className="cta-banner__heading-italic">From Source to Shelf.</em>
        </motion.h2>

        {/* Supporting text */}
        <motion.p
          className="cta-banner__text"
          variants={fadeUp(1.0)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          Whether you are a brand looking for distribution, a retailer seeking
          reliable supply, or a partner exploring collaboration, Ritestock is
          ready to connect.
        </motion.p>

        {/* Form */}
        <motion.form
          className="cta-banner__form"
          variants={fadeUp(1.3)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="cta-banner__input-wrap">
            <input
              type="email"
              className="cta-banner__input"
              placeholder="your@email.com"
              aria-label="Email address"
            />
            <motion.div
              className="cta-banner__input-line"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.9, delay: 1.5, ease: cineEase }}
            />
            <span className="cta-banner__input-dot" />
          </div>
          <button type="submit" className="cta-banner__btn">
            <span className="cta-banner__btn-text">Contact Us</span>
            <span className="cta-banner__btn-arrow">→</span>
          </button>
        </motion.form>

        {/* Trust line */}
        <motion.p
          className="cta-banner__micro"
          variants={fadeIn(1.7)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          Trusted FMCG sourcing &amp; distribution partner in Ghana.
        </motion.p>
      </div>
    </section>
  );
}
