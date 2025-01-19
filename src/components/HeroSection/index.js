import styles from "./heroSection.module.css";
const HeroSection = ({
  item = {
    subheading: "CONTACT US",
    heading: "Get In Touch With Us",
    description:
      "Have questions about our construction services? We're here to help and ready to bring your construction projects to life.",
  },
}) => {
  return (
    <section className={styles.hero}>
      <div className={styles.backgroundPattern}></div>
      <div className={styles.heroContent}>
        <p className={styles.subheading}>{item.subheading}</p>
        <h1 className={styles.heading}>{item.heading}</h1>
        <p className={styles.description}>{item.description}.</p>
      </div>
    </section>
  );
};

export default HeroSection;
