// src/components/AboutSection.jsx
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./AboutSection.css";

const cineEase = [0.25, 0.46, 0.45, 0.94];

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay, ease: cineEase },
  },
});

// Cards: content card followed by image card, alternating
const carouselItems = [
  {
    type: "content",
    title: "Retail Placement",
    quote: "We help brands secure stronger visibility across relevant retail outlets, ensuring products reach consumers where they shop.",
    color: "#244A6F",
  },
  {
    type: "image",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=85",
    alt: "Neatly arranged household cleaning products on shelf",
  },
  {
    type: "content",
    title: "Reliable Distribution",
    quote: "Our distribution capability supports smooth product movement from source to shelf, maintaining availability across retail channels.",
    color: "#E36A2E",
  },
  {
    type: "image",
    image: "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?auto=format&fit=crop&w=600&q=85",
    alt: "Stacked cardboard boxes ready for distribution",
  },
  {
    type: "content",
    title: "Market Activation",
    quote: "We support brands with merchandising, in-store promotions, and campaigns that increase awareness and drive consumer engagement.",
    color: "#1a1a2e",
  },
  {
    type: "image",
    image: "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?auto=format&fit=crop&w=600&q=85",
    alt: "Colorful beverage bottles lined up on display",
  },
  {
    type: "content",
    title: "Product Categories",
    quote: "Household products, toiletries, food, and beverages — the core categories we source, position, and distribute across global markets.",
    color: "#244A6F",
  },
  {
    type: "image",
    image: "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=600&q=85",
    alt: "Toiletries and personal care products on shelf",
  },
  {
    type: "content",
    title: "Supply Chain Excellence",
    quote: "End-to-end supply chain management ensuring products move efficiently from manufacturers to retail shelves without disruption.",
    color: "#E36A2E",
  },
  {
    type: "image",
    image: "https://images.unsplash.com/photo-1604480132736-44c188fe4d20?auto=format&fit=crop&w=600&q=85",
    alt: "Packaged food products and snacks on retail display",
  },
  {
    type: "content",
    title: "Brand Partnerships",
    quote: "We build lasting partnerships with leading FMCG brands, becoming their trusted distribution arm in markets worldwide.",
    color: "#1a1a2e",
  },
  {
    type: "image",
    image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=600&q=85",
    alt: "Detergent and cleaning supplies neatly displayed",
  },
  {
    type: "content",
    title: "Market Intelligence",
    quote: "Data-driven insights on consumer behaviour, retail trends, and market gaps help our partners make smarter distribution decisions.",
    color: "#244A6F",
  },
  {
    type: "image",
    image: "https://images.unsplash.com/photo-1601598851547-4302969d0614?auto=format&fit=crop&w=600&q=85",
    alt: "Cereal boxes and breakfast products on supermarket shelf",
  },
  {
    type: "content",
    title: "Nationwide Coverage",
    quote: "From local hubs to international corridors, our distribution network ensures consistent product availability across key retail zones worldwide.",
    color: "#E36A2E",
  },
  {
    type: "image",
    image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=600&q=85",
    alt: "Fresh fruits and packaged food products display",
  },
];

export default function AboutSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  // Duplicate items for seamless infinite loop
  const loopItems = [...carouselItems, ...carouselItems];

  return (
    <section className="about" id="about" ref={sectionRef}>
      {/* Background elements */}
      <div className="about__bg-accent" />
      <div className="about__bg-grid" />

      {/* Section header */}
      <motion.div
        className="about__header"
        variants={fadeUp(0)}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <span className="about__tag">ABOUT RITESTOCK</span>
        <h2 className="about__title">
          Connecting Products to<br />
          <span className="about__title-accent">Global Retail Markets</span>
        </h2>
        <div className="about__title-line" />
        <p className="about__intro">
          We are a results-driven FMCG sourcing and distribution company
          focused on connecting high-demand products with retail markets
          efficiently and reliably in Ghana. Our core strength lies in
          identifying fast-moving consumer goods that meet market needs and
          ensuring their consistent availability across retail channels.
        </p>
      </motion.div>

      {/* Partnership & Logistics feature cards */}
      <motion.div
        className="about__features"
        variants={fadeUp(0.3)}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="about__feature-card">
          <div className="about__feature-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          </div>
          <h4 className="about__feature-title">Diverse Product Portfolio</h4>
          <p className="about__feature-text">
            By partnering with both local producers and global brands, we curate
            a diverse portfolio of quality products—from everyday essentials to
            emerging consumer favourites.
          </p>
        </div>

        <div className="about__feature-card">
          <div className="about__feature-icon about__feature-icon--alt">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="1" y="3" width="15" height="13" rx="2" />
              <path d="M16 8h4l3 3v5h-7V8z" />
              <circle cx="5.5" cy="18.5" r="2.5" />
              <circle cx="18.5" cy="18.5" r="2.5" />
            </svg>
          </div>
          <h4 className="about__feature-title">Streamlined Logistics</h4>
          <p className="about__feature-text">
            Our streamlined logistics and distribution systems ensure that goods
            move quickly and efficiently from source to shelf.
          </p>
        </div>
      </motion.div>

      {/* Infinite scrolling carousel */}
      <div className="about__carousel-wrap">
        <div className="about__carousel-track">
          {loopItems.map((item, i) =>
            item.type === "content" ? (
              <div
                key={`${item.title}-${i}`}
                className="about__carousel-card about__carousel-card--content"
                style={{ "--card-color": item.color }}
              >
                <div className="about__carousel-content-inner">
                  <h3 className="about__carousel-title">{item.title}</h3>
                  <p className="about__carousel-quote">"{item.quote}"</p>
                  <div className="about__carousel-line" />
                </div>
              </div>
            ) : (
              <div
                key={`img-${i}`}
                className="about__carousel-card about__carousel-card--image"
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className="about__carousel-img"
                  loading="lazy"
                />
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
