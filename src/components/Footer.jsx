// src/components/Footer.jsx
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./Footer.css";

const cineEase = [0.25, 0.46, 0.45, 0.94];

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: cineEase },
  },
});

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.7, delay, ease: "easeOut" },
  },
});

const linkColumns = [
  {
    title: "Company",
    links: [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Our Services", href: "#service" },
      { label: "Products", href: "#products" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Retail Placement", href: "#service" },
      { label: "Distribution", href: "#service" },
      { label: "Marketing Activation", href: "#service" },
    ],
  },
  {
    title: "Product Categories",
    links: [
      { label: "Household Products", href: "#products" },
      { label: "Toiletries", href: "#products" },
      { label: "Food & Beverages", href: "#products" },
    ],
  },
];

export default function Footer() {
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, margin: "-60px" });

  const handleScrollTo = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="footer-wrapper">
      <footer className="footer" ref={footerRef}>
        {/* Background layers */}
        <div className="footer__bg-glow footer__bg-glow--blue" />
        <div className="footer__bg-glow footer__bg-glow--orange" />
        <div className="footer__bg-grid" />
        <div className="footer__grain" />

        {/* Ghost marquee */}
        <div className="footer__ghost-marquee">
          <div className="footer__ghost-track">
            <span className="footer__ghost-text">RITESTOCK LTD</span>
            <span className="footer__ghost-dot">·</span>
            <span className="footer__ghost-text">RITESTOCK LTD</span>
            <span className="footer__ghost-dot">·</span>
            <span className="footer__ghost-text">RITESTOCK LTD</span>
            <span className="footer__ghost-dot">·</span>
            <span className="footer__ghost-text">RITESTOCK LTD</span>
            <span className="footer__ghost-dot">·</span>
          </div>
        </div>

        {/* Inner content */}
        <div className="footer__inner">
          {/* Top section */}
          <div className="footer__top">
            {/* Left CTA */}
            <motion.div
              className="footer__cta"
              variants={fadeUp(0.1)}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {/* Brand label */}
              <div className="footer__brand-label">
                <img src="/logo.png" alt="RiteStock" className="footer__mini-logo" />
                <span className="footer__brand-tag">FMCG SOURCING &amp; DISTRIBUTION — WORLDWIDE</span>
              </div>

              <h3 className="footer__cta-heading">Let's move your products.</h3>
              <p className="footer__cta-sub">
                Connect with Ritestock for sourcing, retail placement,
                distribution, and market activation.
              </p>

              {/* Email input */}
              <form className="footer__input-wrap" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  className="footer__input"
                  placeholder="Enter your email"
                  aria-label="Email address"
                />
                <button type="submit" className="footer__input-btn" aria-label="Submit">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </button>
              </form>

              <p className="footer__input-helper">
                For distribution, retail placement, and brand activation enquiries.
              </p>

              {/* Quick contact pills */}
              <div className="footer__pills">
                <a href="tel:+233549729851" className="footer__pill">
                  <span className="footer__pill-dot" />
                  +233 549 729 851
                  <span className="footer__pill-arrow">↗</span>
                </a>
                <a href="https://www.ritestock.com" className="footer__pill">
                  <span className="footer__pill-dot" />
                  www.ritestock.com
                  <span className="footer__pill-arrow">↗</span>
                </a>
                <a href="#contact" className="footer__pill">
                  <span className="footer__pill-dot" />
                  Contact Form
                  <span className="footer__pill-arrow">↗</span>
                </a>
              </div>
            </motion.div>

            {/* Right columns */}
            <div className="footer__columns">
              {linkColumns.map((col, i) => (
                <motion.div
                  key={col.title}
                  className="footer__column"
                  variants={fadeUp(0.3 + i * 0.1)}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                >
                  <h4 className="footer__col-title">{col.title}</h4>
                  <ul className="footer__col-list">
                    {col.links.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          className="footer__col-link"
                          onClick={(e) => handleScrollTo(e, link.href)}
                        >
                          <span className="footer__col-link-arrow">→</span>
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}

              {/* Contact column */}
              <motion.div
                className="footer__column"
                variants={fadeUp(0.6)}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                <h4 className="footer__col-title">Contact</h4>
                <ul className="footer__col-list footer__col-list--contact">
                  <li>
                    <span className="footer__contact-label">Telephone</span>
                    <span className="footer__contact-val">+233 549 729 851</span>
                  </li>
                  <li>
                    <span className="footer__contact-label">Website</span>
                    <span className="footer__contact-val">www.ritestock.com</span>
                  </li>
                  <li>
                    <span className="footer__contact-label">Location</span>
                    <span className="footer__contact-val">Accra - Ghana</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Subtle category ticker */}
          <div className="footer__ticker">
            <div className="footer__ticker-track">
              <span className="footer__ticker-item">Household Products</span>
              <span className="footer__ticker-sep">·</span>
              <span className="footer__ticker-item">Toiletries</span>
              <span className="footer__ticker-sep">·</span>
              <span className="footer__ticker-item">Food &amp; Beverages</span>
              <span className="footer__ticker-sep">·</span>
              <span className="footer__ticker-item">Retail Placement</span>
              <span className="footer__ticker-sep">·</span>
              <span className="footer__ticker-item">Distribution</span>
              <span className="footer__ticker-sep">·</span>
              <span className="footer__ticker-item">Marketing Activation</span>
              <span className="footer__ticker-sep">·</span>
              <span className="footer__ticker-item">Household Products</span>
              <span className="footer__ticker-sep">·</span>
              <span className="footer__ticker-item">Toiletries</span>
              <span className="footer__ticker-sep">·</span>
              <span className="footer__ticker-item">Food &amp; Beverages</span>
              <span className="footer__ticker-sep">·</span>
              <span className="footer__ticker-item">Retail Placement</span>
              <span className="footer__ticker-sep">·</span>
              <span className="footer__ticker-item">Distribution</span>
              <span className="footer__ticker-sep">·</span>
              <span className="footer__ticker-item">Marketing Activation</span>
              <span className="footer__ticker-sep">·</span>
            </div>
          </div>

          {/* Divider */}
          <motion.div
            className="footer__divider"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: 1.0, ease: cineEase }}
          />

          {/* Bottom bar */}
          <motion.div
            className="footer__bottom"
            variants={fadeIn(1.1)}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <span className="footer__copyright">
              © 2026 Ritestock. All rights reserved.
            </span>
            <span className="footer__bottom-tag">
              FMCG Sourcing &amp; Distribution — Worldwide
            </span>
            <div className="footer__bottom-links">
              <a href="#" className="footer__bottom-link">Privacy Policy</a>
              <span className="footer__bottom-sep">·</span>
              <a href="#" className="footer__bottom-link">Terms</a>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
