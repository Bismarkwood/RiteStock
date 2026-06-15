// src/components/MarqueeBanner.jsx
import React from "react";
import "./MarqueeBanner.css";

export default function MarqueeBanner() {
  return (
    <div className="marquee-banner">
      {/* Top strip — moves left */}
      <div className="marquee-banner__strip marquee-banner__strip--orange">
        <div className="marquee-banner__track">
          <span className="marquee-banner__item">Household Products</span>
          <span className="marquee-banner__dot">●</span>
          <span className="marquee-banner__item">Retail Placement</span>
          <span className="marquee-banner__dot">●</span>
          <span className="marquee-banner__item">Toiletries</span>
          <span className="marquee-banner__dot">●</span>
          <span className="marquee-banner__item">Distribution</span>
          <span className="marquee-banner__dot">●</span>
          <span className="marquee-banner__item">Food &amp; Beverages</span>
          <span className="marquee-banner__dot">●</span>
          <span className="marquee-banner__item">Market Activation</span>
          <span className="marquee-banner__dot">●</span>
          <span className="marquee-banner__item">Household Products</span>
          <span className="marquee-banner__dot">●</span>
          <span className="marquee-banner__item">Retail Placement</span>
          <span className="marquee-banner__dot">●</span>
          <span className="marquee-banner__item">Toiletries</span>
          <span className="marquee-banner__dot">●</span>
          <span className="marquee-banner__item">Distribution</span>
          <span className="marquee-banner__dot">●</span>
          <span className="marquee-banner__item">Food &amp; Beverages</span>
          <span className="marquee-banner__dot">●</span>
          <span className="marquee-banner__item">Market Activation</span>
          <span className="marquee-banner__dot">●</span>
        </div>
      </div>

      {/* Bottom strip — moves right */}
      <div className="marquee-banner__strip marquee-banner__strip--blue">
        <div className="marquee-banner__track marquee-banner__track--reverse">
          <span className="marquee-banner__item">Source to Shelf</span>
          <span className="marquee-banner__dot">●</span>
          <span className="marquee-banner__item">FMCG Sourcing</span>
          <span className="marquee-banner__dot">●</span>
          <span className="marquee-banner__item">Global Market</span>
          <span className="marquee-banner__dot">●</span>
          <span className="marquee-banner__item">Reliable Supply</span>
          <span className="marquee-banner__dot">●</span>
          <span className="marquee-banner__item">Brand Growth</span>
          <span className="marquee-banner__dot">●</span>
          <span className="marquee-banner__item">Nationwide Coverage</span>
          <span className="marquee-banner__dot">●</span>
          <span className="marquee-banner__item">Source to Shelf</span>
          <span className="marquee-banner__dot">●</span>
          <span className="marquee-banner__item">FMCG Sourcing</span>
          <span className="marquee-banner__dot">●</span>
          <span className="marquee-banner__item">Global Market</span>
          <span className="marquee-banner__dot">●</span>
          <span className="marquee-banner__item">Reliable Supply</span>
          <span className="marquee-banner__dot">●</span>
          <span className="marquee-banner__item">Brand Growth</span>
          <span className="marquee-banner__dot">●</span>
          <span className="marquee-banner__item">Nationwide Coverage</span>
          <span className="marquee-banner__dot">●</span>
        </div>
      </div>
    </div>
  );
}
