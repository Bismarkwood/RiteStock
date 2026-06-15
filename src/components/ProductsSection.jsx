// src/components/ProductsSection.jsx
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./ProductsSection.css";

const cineEase = [0.25, 0.46, 0.45, 0.94];

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
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

const products = [
  {
    number: "01",
    title: "Household Essentials",
    description:
      "We supply a wide range of essential household products, carefully curated to meet the everyday needs of modern consumers.",
    badge: "DAILY USE",
    image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=700&q=85",
    accent: "blue",
  },
  {
    number: "02",
    title: "Toiletries & Personal Care",
    description:
      "We offer a robust selection of personal care and toiletry products from trusted brands, designed for daily use.",
    badge: "HIGH DEMAND",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=700&q=85",
    accent: "orange",
  },
  {
    number: "03",
    title: "Food & Beverages",
    description:
      "We manage a diverse and well-balanced portfolio of food and beverage products tailored to evolving consumer tastes and market demand",
    badge: "FAST MOVING",
    image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?auto=format&fit=crop&w=700&q=85",
    accent: "blue",
  },
];

export default function ProductsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-60px" });

  return (
    <section className="products" id="products" ref={sectionRef}>
      {/* Background decorative elements */}
      <div className="products__bg-shape products__bg-shape--1" />
      <div className="products__bg-shape products__bg-shape--2" />
      <div className="products__bg-shape products__bg-shape--3" />
      <div className="products__bg-dots" />

      {/* Section header */}
      <motion.div
        className="products__header"
        variants={fadeUp(0)}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <span className="products__tag">PRODUCT CATEGORIES</span>
        <h2 className="products__title">
          Fast-Moving Essentials for{" "}
          <span className="products__title-accent">Everyday Markets</span>
        </h2>
        <motion.div
          className="products__title-line"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: cineEase }}
        />
        <p className="products__intro">
          Ritestock sources and distributes everyday consumer products across
          household, toiletries, food, and beverage categories — helping brands
          stay visible, available, and market-ready.
        </p>
      </motion.div>

      {/* Staggered card grid */}
      <div className="products__grid">
        {products.map((product, i) => (
          <motion.div
            key={product.number}
            className={`products__card products__card--${product.accent}`}
            variants={fadeUp(0.25 + i * 0.18)}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {/* Image */}
            <div className="products__card-image-wrap">
              <img
                src={product.image}
                alt={product.title}
                className="products__card-image"
                loading="lazy"
              />
              <div className="products__card-image-overlay" />
              <span className="products__card-number">{product.number}</span>
            </div>

            {/* Content */}
            <div className="products__card-content">
              <h3 className="products__card-title">{product.title}</h3>
              <div className="products__card-line" />
              <p className="products__card-desc">{product.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
