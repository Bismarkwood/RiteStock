// src/components/ServicesSection.jsx
import React, { useRef, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, useInView, AnimatePresence } from "framer-motion";
import "./ServicesSection.css";

const cineEase = [0.25, 0.46, 0.45, 0.94];

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 36 },
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
    transition: { duration: 0.7, delay, ease: "easeOut" },
  },
});

const services = [
  {
    number: "01",
    title: "Retail Placement",
    description:
      "We secure optimal retail positioning for brands, ensuring strong visibility and accessibility across key outlets and markets. Through our established trade relationships, we enhance product presence and drive consistent sales performance",
    highlights: ["Shelf Visibility", "Outlet Positioning", "Trade Relationships", "Sales Performance Support"],
    image: "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?auto=format&fit=crop&w=900&q=85",
    caption: "Retail visibility across key outlets",
    variant: "light",
    details: [
      "Strategic placement in high-traffic retail zones",
      "Negotiation of premium shelf positions",
      "Regular audits to ensure product availability",
      "Relationship management with retail partners",
      "Point-of-sale optimization for maximum impact",
    ],
  },
  {
    number: "02",
    title: "Distribution",
    description:
      "Through our distribution capability and network, we ensure seamless product flow from source to shelf through a well-managed logistics network, enabling timely deliveries, broad coverage, and sustained product availability across all channels.",
    highlights: ["Product Flow", "Timely Delivery", "Channel Coverage", "Availability Management"],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=85",
    caption: "Reliable movement from source to shelf",
    variant: "dark",
    details: [
      "End-to-end supply chain management",
      "Temperature-controlled logistics where required",
      "Real-time inventory tracking and reporting",
      "Multi-channel distribution coverage",
      "Efficient last-mile delivery solutions",
    ],
  },
  {
    number: "03",
    title: "Marketing Activation",
    description:
      "We support brands with innovative marketing solutions designed to increase awareness, drive consumer engagement, and boost sales. From in-store promotions and merchandising to brand activations and market campaigns",
    highlights: ["Merchandising", "In-Store Promotions", "Brand Campaigns", "Consumer Engagement"],
    image: "https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&w=900&q=85",
    caption: "Campaigns that drive consumer engagement",
    variant: "accent",
    details: [
      "Tailored brand activation strategies",
      "In-store merchandising and display setup",
      "Consumer sampling and promotional events",
      "Digital and traditional marketing integration",
      "Campaign performance tracking and analytics",
    ],
  },
];

/* ─── Service Popup Modal ─── */
function ServiceModal({ service, onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <motion.div
      className="services-modal__backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onClose}
    >
      <motion.div
        className={`services-modal services-modal--${service.variant}`}
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 30, scale: 0.95 }}
        transition={{ type: "spring", stiffness: 260, damping: 28 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button className="services-modal__close" onClick={onClose} aria-label="Close">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Modal image */}
        <div className="services-modal__image-wrap">
          <img src={service.image} alt={service.title} className="services-modal__image" />
          <div className="services-modal__image-overlay" />
          <span className="services-modal__number">{service.number}</span>
        </div>

        {/* Modal content */}
        <div className="services-modal__content">
          <h2 className="services-modal__title">{service.title}</h2>
          <div className="services-modal__line" />
          <p className="services-modal__desc">{service.description}</p>

          <h4 className="services-modal__subtitle">What We Deliver</h4>
          <ul className="services-modal__details">
            {service.details.map((detail) => (
              <li key={detail} className="services-modal__detail">
                <span className="services-modal__detail-icon">✓</span>
                {detail}
              </li>
            ))}
          </ul>

          <div className="services-modal__highlights">
            {service.highlights.map((h) => (
              <span key={h} className="services-modal__highlight">
                <span className="services-modal__highlight-dot" />
                {h}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─── Service Card ─── */
function ServiceCard({ service, index, totalCards, onClick }) {
  const handleClick = (e) => {
    e.stopPropagation();
    onClick(service);
  };

  return (
    <div
      className={`services__card services__card--${service.variant}`}
      style={{ "--card-index": index }}
      id={`service-card-${index}`}
    >
      <div
        className="services__card-inner"
        onClick={handleClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onClick(service); } }}
      >
        {/* Content */}
        <div className="services__card-content">
          <span className="services__card-number">{service.number}</span>

          <h3 className="services__card-title">{service.title}</h3>

          <div className="services__card-line" />

          <p className="services__card-desc">{service.description}</p>

          <ul className="services__card-highlights">
            {service.highlights.map((h) => (
              <li key={h} className="services__card-highlight">
                <span className="services__card-highlight-dot" />
                {h}
              </li>
            ))}
          </ul>

          {/* Click to read CTA */}
          <span className="services__card-cta">
            <span className="services__card-cta-text">Click to read more</span>
            <span className="services__card-cta-arrow">→</span>
          </span>

          {/* Page indicator */}
          <span className="services__card-indicator">
            {service.number} / 0{totalCards}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  const sectionRef = useRef(null);
  const stackRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-60px" });
  const [progress, setProgress] = useState(0);
  const [activeService, setActiveService] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!stackRef.current) return;
      const rect = stackRef.current.getBoundingClientRect();
      const stackHeight = stackRef.current.scrollHeight - window.innerHeight;
      const scrolled = -rect.top;
      const ratio = Math.max(0, Math.min(1, scrolled / stackHeight));
      setProgress(ratio);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="services" id="service" ref={sectionRef}>
      {/* Section header */}
      <motion.div
        className="services__header"
        variants={fadeUp(0)}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <span className="services__tag">OUR SERVICES</span>
        <h2 className="services__title">Designed to Move Brands Faster</h2>
        <motion.div
          className="services__title-line"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: cineEase }}
        />
        <p className="services__intro">
          From retail visibility to product movement and market activation,
          Ritestock helps FMCG brands enter, grow, and remain available across
          retail markets worldwide.
        </p>
      </motion.div>

      {/* Progress bar — moves linearly as user scrolls */}
      <motion.div
        className="services__progress"
        variants={fadeIn(0.6)}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="services__progress-track">
          <div
            className="services__progress-fill"
            style={{ width: `${Math.max(33.33, progress * 100)}%` }}
          />
        </div>
        <div className="services__progress-labels">
          <button
            type="button"
            className={`services__progress-label ${progress < 0.33 ? "services__progress-label--active" : ""}`}
            onClick={() => document.getElementById("service-card-0")?.scrollIntoView({ behavior: "smooth", block: "center" })}
          >
            Retail Placement
          </button>
          <button
            type="button"
            className={`services__progress-label ${progress >= 0.33 && progress < 0.66 ? "services__progress-label--active" : ""}`}
            onClick={() => document.getElementById("service-card-1")?.scrollIntoView({ behavior: "smooth", block: "center" })}
          >
            Distribution
          </button>
          <button
            type="button"
            className={`services__progress-label ${progress >= 0.66 ? "services__progress-label--active" : ""}`}
            onClick={() => document.getElementById("service-card-2")?.scrollIntoView({ behavior: "smooth", block: "center" })}
          >
            Marketing
          </button>
        </div>
      </motion.div>

      {/* Sticky stack scroll container */}
      <div className="services__stack" ref={stackRef}>
        {services.map((service, i) => (
          <ServiceCard
            key={service.number}
            service={service}
            index={i}
            totalCards={services.length}
            onClick={setActiveService}
          />
        ))}
      </div>

      {/* Service detail popup — rendered via portal */}
      {createPortal(
        <AnimatePresence>
          {activeService && (
            <ServiceModal
              service={activeService}
              onClose={() => setActiveService(null)}
            />
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
}
