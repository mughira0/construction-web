import { staticImage } from "@/helpers/joiners";
import { Factory, Wrench, Zap } from "lucide-react";
import styles from "./OursServices.module.css";

const services = [
  {
    id: 1,
    title: "Automobile & Manufacturing",
    description:
      "We produce positive results from growing industrial estates, we have established a corporate or mandate to maintain the manufacturing economy.",
    image: staticImage("w1.jpg"),
    icon: Factory,
  },
  {
    id: 2,
    title: "Mechanical Engineering",
    description:
      "We produce positive results from growing industrial estates, we have established a corporate or mandate to maintain the manufacturing economy.",
    image: staticImage("w2.jpg"),
    icon: Wrench,
  },
  {
    id: 3,
    title: "Oil Gas & Power Plant",
    description:
      "We produce positive results from growing industrial estates, we have established a corporate or mandate to maintain the manufacturing economy.",
    image: staticImage("w3.jpg"),
    icon: Zap,
  },
];

const ServicesSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <p className={styles.subheading}>OUR SERVICES</p>
        <h2 className={styles.heading}>
          High Quality Construction Solutions
          <br />
          For Residentials &{" "}
          <span className={styles.highlight}>Industries!</span>
        </h2>
        <p className={styles.description}>
          Construction is a general term meaning the art and science to form
          objects systems organizations.
        </p>
      </div>

      <div className={styles.grid}>
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <div key={service.id} className={styles.card}>
              <div className={styles.imageContainer}>
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className={styles.image}
                />
              </div>
              <div className={styles.content}>
                <h3 className={styles.title}>{service.title}</h3>
                <p className={styles.text}>{service.description}</p>
                <a href="#" className={styles.link}>
                  READ MORE
                </a>
              </div>
              <div className={styles.iconContainer}>
                <Icon size={24} />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default ServicesSection;
