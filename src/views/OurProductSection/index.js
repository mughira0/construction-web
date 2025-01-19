import ProductCard from "@/components/OurProductCard";
import { staticImage } from "@/helpers/joiners";
import { Col, Row } from "react-bootstrap";
import styles from "./OurProductSection.module.css";

const projects = [
  {
    id: 1,
    imageUrl: staticImage("w2.jpg"),
    category: "HOUSE",
    title: "Central Park Tower",
  },
  {
    id: 2,
    imageUrl: staticImage("w1.jpg"),
    category: "CONSTRUCTION",
    title: "Shun Hing Square",
  },
  {
    id: 3,
    imageUrl: staticImage("w3.jpg"),
    category: "BUILDING",
    title: "The Exchange 106",
  },
];

const stats = [
  { number: "3,245", label: "Project Complete" },
  { number: "4,518", label: "Happy Customer" },
  { number: "8,274", label: "Hours Worked" },
  { number: "1,479", label: "Worldwide Branch" },
];

export default function ProjectsSection() {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.header}>
          <p className={styles.subheading}>OUR PROJECTS</p>
          <h2 className={styles.heading}>
            Transforming The Ideas And Visions For{" "}
            <span className={styles.highlight}>Industries!</span>
          </h2>
        </div>
        <Row>
          {projects.map((project) => (
            <Col md={6} lg={4} key={project.id}>
              <ProductCard
                imageUrl={project.imageUrl}
                category={project.category}
                title={project.title}
              />
            </Col>
          ))}
        </Row>
      </section>

      <section className={styles.statsSection}>
        <div className={styles.statsContainer}>
          <h2 className={styles.statsHeading}>
            Delivering The Most Innovation Goals.
          </h2>
          <div className={styles.statsGrid}>
            {stats.map((stat, index) => (
              <div key={index} className={styles.statItem}>
                <span className={styles.statNumber}>{stat.number}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
