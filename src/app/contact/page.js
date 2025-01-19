"use client";

import HeroSection from "@/components/HeroSection";
import {
  ChevronDown,
  ChevronUp,
  Clock,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { useState } from "react";
import styles from "./Contact.module.css";

const contactInfo = [
  {
    icon: MapPin,
    title: "Our Location",
    content: "123 Construction Ave, Building City, ST 12345",
  },
  {
    icon: Phone,
    title: "Phone Number",
    content: "(555) 123-4567",
  },
  {
    icon: Mail,
    title: "Email Address",
    content: "info@constructionco.com",
  },
  {
    icon: Clock,
    title: "Working Hours",
    content: "Mon - Fri: 8:00 AM - 6:00 PM",
  },
];

const faqs = [
  {
    question: "What types of construction projects do you handle?",
    answer:
      "We handle a wide range of construction projects including residential, commercial, industrial, and infrastructure development. Our team has extensive experience in all aspects of construction.",
  },
  {
    question: "How do you ensure project quality and safety?",
    answer:
      "We maintain strict quality control measures and follow all safety protocols. Our team is regularly trained on the latest safety standards, and we conduct frequent inspections throughout the project lifecycle.",
  },
  {
    question: "What is your typical project timeline?",
    answer:
      "Project timelines vary depending on scope and complexity. During the initial consultation, we provide a detailed timeline with key milestones. We're committed to completing projects on schedule.",
  },
  {
    question: "Do you provide free project estimates?",
    answer:
      "Yes, we provide free initial consultations and project estimates. Contact us to schedule a meeting and discuss your construction needs.",
  },
];

const ContactPage = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <main style={{ marginTop: "80px" }}>
      <HeroSection
        item={{
          subheading: "Contact Us",
          heading: "Get In Touch With Us",
          description:
            "Have questions about our construction services? We're here to help and ready to bring your construction projects to life.",
        }}
      />
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.contactGrid}>
            {/* Contact Information */}
            <div className={styles.contactInfo}>
              <div className={styles.infoList}>
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className={styles.infoItem}>
                      <div className={styles.infoIcon}>
                        <Icon size={24} />
                      </div>
                      <div className={styles.infoContent}>
                        <h3>{info.title}</h3>
                        <p>{info.content}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Contact Form */}
            <div className={styles.formContainer}>
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.label}>
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className={styles.input}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.label}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className={styles.input}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="phone" className={styles.label}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className={styles.input}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.label}>
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    className={styles.textarea}
                    required
                  ></textarea>
                </div>
                <button type="submit" className={styles.button}>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.faqSection}>
        <div className={styles.container}>
          <p className={styles.subheading}>FAQ</p>
          <h2 className={styles.heading}>Frequently Asked Questions</h2>
          <div className={styles.faqGrid}>
            {faqs.map((faq, index) => (
              <div key={index} className={styles.faqItem}>
                <button
                  className={styles.faqTrigger}
                  onClick={() => toggleFaq(index)}
                >
                  <h3>{faq.question}</h3>
                  {openFaq === index ? (
                    <ChevronUp size={20} />
                  ) : (
                    <ChevronDown size={20} />
                  )}
                </button>
                {openFaq === index && (
                  <div className={styles.faqContent}>
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
