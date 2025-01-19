"use client";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>BrandName</div>
      <ul className={styles.menu}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>

        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
      <button className={styles.button}>Get Started</button>
    </nav>
  );
};

export default Navbar;
