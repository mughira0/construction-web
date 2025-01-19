"use client";

import { Play, X } from "lucide-react";
import { useState } from "react";
import styles from "./Styles.module.css";
const VedioSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className={styles.section}>
      <div className={styles.pattern} />
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.heading}>
            Construction Services With
            <br />
            Architectural <span className={styles.highlight}>Expertise!</span>
          </h1>
          <p className={styles.description}>
            Construction is a general term meaning the art and science to form
            the objects systems organizations, and comes from Latin construction
            and French construction. To construct is the verb the act of main
            industrial building, and the noun is construction.
          </p>
          <button className={styles.button}>GET A FREE QUOTE</button>
        </div>

        <div className={styles.imageContainer}>
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bkUoYsMAD8OGk6PRokLXOWvFNBVVj0.png"
            alt="Construction workers reviewing blueprints"
            className={styles.image}
          />
          <button
            className={styles.playButton}
            onClick={() => setIsModalOpen(true)}
            aria-label="Play video"
          >
            <Play size={32} color="white" />
          </button>
        </div>
      </div>

      {/* Video Modal */}
      <div className={`${styles.modal} ${isModalOpen ? styles.modalOpen : ""}`}>
        <div className={styles.modalContent}>
          <button
            className={styles.closeButton}
            onClick={() => setIsModalOpen(false)}
            aria-label="Close video"
          >
            <X size={24} />
          </button>
          {isModalOpen && (
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/your-video-id"
              title="Construction Services Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>
      </div>
    </section>
  );
};
export default VedioSection;
