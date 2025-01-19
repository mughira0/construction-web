"use client";

import { staticImage } from "@/helpers/joiners";
import {
  Building2,
  Facebook,
  Linkedin,
  Send,
  Twitter,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Company Info */}
        <div>
          <div className={styles.logo}>
            <Building2 size={32} />
            Industrus.
          </div>
          <p className={styles.description}>
            Industrus have completed over 30,000 projects, specializing in
            Industrial Building.
          </p>
          <div className={styles.socialLinks}>
            <a href="#" className={styles.socialLink}>
              <Facebook size={20} />
            </a>
            <a href="#" className={styles.socialLink}>
              <Twitter size={20} />
            </a>
            <a href="#" className={styles.socialLink}>
              <Linkedin size={20} />
            </a>
            <a href="#" className={styles.socialLink}>
              <Youtube size={20} />
            </a>
          </div>
        </div>

        {/* Information */}
        <div>
          <h3 className={styles.heading}>Information</h3>
          <div className={styles.links}>
            <a href="#" className={styles.link}>
              Community
            </a>
            <a href="#" className={styles.link}>
              About Us
            </a>
            <a href="#" className={styles.link}>
              Become an affiliate
            </a>
            <a href="#" className={styles.link}>
              Help Center
            </a>
          </div>
        </div>

        {/* Recent Posts */}
        <div>
          <h3 className={styles.heading}>Recent Posts</h3>
          <div className={styles.posts}>
            <article className={styles.post}>
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Kksr7mRjQCbzWtf8zPTEuakApEBdRY.png"
                alt="Industrial Factory"
                className={styles.postImage}
              />
              <div className={styles.postContent}>
                <h4 className={styles.postTitle}>
                  Industrial Factory Building Eq...
                </h4>
                <time className={styles.postDate}>SEPTEMBER 21, 2020</time>
              </div>
            </article>
            <article className={styles.post}>
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Kksr7mRjQCbzWtf8zPTEuakApEBdRY.png"
                alt="Construction Evolution"
                className={styles.postImage}
              />
              <div className={styles.postContent}>
                <h4 className={styles.postTitle}>
                  The Evolution Of Construction ...
                </h4>
                <time className={styles.postDate}>SEPTEMBER 21, 2020</time>
              </div>
            </article>
          </div>
        </div>

        {/* Newsletter */}
        <div className={styles.newsletter}>
          <h3 className={styles.newsletterHeading}>Newsletter Signup</h3>
          <p className={styles.newsletterText}>
            Stay always in touch! Subscribe to our newsletter.
          </p>
          <form onSubmit={handleSubmit} className={styles.form}>
            <input
              type="email"
              placeholder="Your email address"
              className={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className={styles.button}>
              <Send size={20} />
            </button>
          </form>
          <p className={styles.disclaimer}>* Don't worry, we don't spam.</p>
        </div>
      </div>

      {/* Animated Vehicles */}
      <div className={styles.road}>
        {/* Dump Truck - Slow */}
        <div className={`${styles.vehicle} ${styles.vehicle1}`}>
          <Image
            src={staticImage("truck-1.png")}
            alt="Delivery Truck"
            width={120}
            height={60}
          />
        </div>

        {/* Delivery Truck - Medium Speed, Opposite Direction */}
        <div className={`${styles.vehicle} ${styles.vehicle2}`}>
          <Image
            src={staticImage("truck-2.png")}
            alt="Dump Truck"
            width={120}
            height={60}
          />
        </div>
        {/* Crane Truck - Fast */}
        <div className={`${styles.vehicle} ${styles.vehicle3}`}>
          <Image
            src={staticImage("truck-3.png")}
            alt="Crane Truck"
            width={120}
            height={100}
          />
        </div>
      </div>
    </footer>
  );
}
