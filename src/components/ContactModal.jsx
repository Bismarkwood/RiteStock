// src/components/ContactModal.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./ContactModal.css";

export default function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
    phone: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ fullName: "", email: "", subject: "", message: "", phone: "" });
      setSubmitted(false);
      onClose();
    }, 4000);
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const modalVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 260, damping: 28 } },
    exit: { opacity: 0, y: 30, scale: 0.95, transition: { duration: 0.2 } },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="cm-backdrop"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={onClose}
        >
          <motion.div
            className="cm-modal"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            {/* ── Left panel ── */}
            <div className="cm-left">
              <div className="cm-left__overlay" />
              <div className="cm-left__content">
                <div className="cm-left__icon">
                  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="24" r="24" fill="rgba(255,255,255,0.15)" />
                    <path d="M14 16h20a2 2 0 012 2v12a2 2 0 01-2 2H14a2 2 0 01-2-2V18a2 2 0 012-2z" stroke="white" strokeWidth="2" strokeLinejoin="round" />
                    <path d="M12 18l12 9 12-9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h2 className="cm-left__title">Get in Touch</h2>
                <p className="cm-left__subtitle">
                  We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                </p>
                <div className="cm-left__features">
                  <div className="cm-feature">
                    <span className="cm-feature__dot" />
                    <span>Fast response within 24 hours</span>
                  </div>
                  <div className="cm-feature">
                    <span className="cm-feature__dot" />
                    <span>Dedicated support team</span>
                  </div>
                  <div className="cm-feature">
                    <span className="cm-feature__dot" />
                    <span>Tailored solutions for your needs</span>
                  </div>
                </div>
              </div>
              <div className="cm-left__circles">
                <div className="cm-circle cm-circle--1" />
                <div className="cm-circle cm-circle--2" />
                <div className="cm-circle cm-circle--3" />
              </div>
            </div>

            {/* ── Right panel ── */}
            <div className="cm-right">
              <button className="cm-close" onClick={onClose} aria-label="Close modal">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>

              {submitted ? (
                <motion.div
                  className="cm-success"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                >
                  <div className="cm-success__icon">
                    <svg viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="26" cy="26" r="25" stroke="#E36A2E" strokeWidth="2" />
                      <path d="M14 26l8 8 16-16" stroke="#E36A2E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="cm-success__title">Message Sent!</h3>
                  <p className="cm-success__text">
                    Thank you for your enquiry. We have received your message and will get back to you shortly.
                  </p>
                </motion.div>
              ) : (
                <>
                  <div className="cm-right__header">
                    <h3 className="cm-right__title">Contact / Enquiry Form</h3>
                    <p className="cm-right__subtitle">Fill in the form below and we'll be in touch.</p>
                  </div>

                  <form className="cm-form" onSubmit={handleSubmit}>
                    <div className="cm-form__row">
                      <div className={`cm-field ${focused === "fullName" || formData.fullName ? "cm-field--active" : ""}`}>
                        <label className="cm-label">Full Name <span className="cm-required">*</span></label>
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          onFocus={() => setFocused("fullName")}
                          onBlur={() => setFocused(null)}
                          placeholder="John Doe"
                          required
                          className="cm-input"
                        />
                      </div>
                      <div className={`cm-field ${focused === "email" || formData.email ? "cm-field--active" : ""}`}>
                        <label className="cm-label">Email Address <span className="cm-required">*</span></label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          onFocus={() => setFocused("email")}
                          onBlur={() => setFocused(null)}
                          placeholder="john@example.com"
                          required
                          className="cm-input"
                        />
                      </div>
                    </div>

                    <div className="cm-form__row">
                      <div className={`cm-field ${focused === "subject" || formData.subject ? "cm-field--active" : ""}`}>
                        <label className="cm-label">Subject <span className="cm-required">*</span></label>
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          onFocus={() => setFocused("subject")}
                          onBlur={() => setFocused(null)}
                          placeholder="How can we help?"
                          required
                          className="cm-input"
                        />
                      </div>
                      <div className={`cm-field ${focused === "phone" || formData.phone ? "cm-field--active" : ""}`}>
                        <label className="cm-label">Phone Number <span className="cm-optional">(optional)</span></label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          onFocus={() => setFocused("phone")}
                          onBlur={() => setFocused(null)}
                          placeholder="+1 (555) 000-0000"
                          className="cm-input"
                        />
                      </div>
                    </div>

                    <div className={`cm-field cm-field--full ${focused === "message" || formData.message ? "cm-field--active" : ""}`}>
                      <label className="cm-label">Message <span className="cm-required">*</span></label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => setFocused("message")}
                        onBlur={() => setFocused(null)}
                        placeholder="Tell us more about your enquiry..."
                        rows="4"
                        required
                        className="cm-textarea"
                      />
                    </div>

                    <button type="submit" className="cm-submit">
                      <span>Submit Enquiry</span>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
