"use client";

import { Star, StarOff } from "lucide-react";
import styles from "./OurClient.module.css";

const testimonials = [
  {
    id: 1,
    text: "The support on this theme is supper amazing. Requested a few changes and everything was done professionally, good theme, good support, great buy.",
    name: "Fiorella Ibáñez",
    role: "MARKETING MANAGER",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-domW6huIWDJwkMDum8n2QJLfkK3DtR.png",
    rating: 4,
  },
  {
    id: 2,
    text: "The support on this theme is supper amazing. Requested a few changes and everything was done professionally, good theme, good support, great buy.",
    name: "Zosé Carpio",
    role: "TECHNOLOGY OFFICER",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-domW6huIWDJwkMDum8n2QJLfkK3DtR.png",
    rating: 4,
  },
];

function StarRating({ rating }) {
  return (
    <div className={styles.rating}>
      {[...Array(5)].map((_, index) =>
        index < rating ? (
          <Star
            key={index}
            size={16}
            className={styles.star}
            fill="currentColor"
          />
        ) : (
          <StarOff key={index} size={16} className={styles.starEmpty} />
        )
      )}
    </div>
  );
}

function TestimonialCard({ testimonial }) {
  return (
    <div className={styles.testimonialCard}>
      <p className={styles.testimonialText}>{testimonial.text}</p>
      <div className={styles.clientInfo}>
        <img
          src={testimonial.image || "/placeholder.svg"}
          alt={testimonial.name}
          className={styles.clientImage}
        />
        <div className={styles.clientDetails}>
          <h4 className={styles.clientName}>{testimonial.name}</h4>
          <p className={styles.clientRole}>{testimonial.role}</p>
          <StarRating rating={testimonial.rating} />
        </div>
      </div>
    </div>
  );
}

const TestimonialsSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.backgroundPattern} />
      <div className={styles.container}>
        <p className={styles.subheading}>TESTIMONIALS</p>
        <h2 className={styles.heading}>
          Words From <span className={styles.highlight}>Clients</span>
        </h2>
        <p className={styles.description}>
          Construction is a general term meaning the art and science to form
          objects systems organizations.
        </p>
        <div className={styles.testimonialContainer}>
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
