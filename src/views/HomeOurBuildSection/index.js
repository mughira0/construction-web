"use client";
import Button from "@/components/Button";
import { staticImage } from "@/helpers/joiners";
import { motion } from "framer-motion";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import { GiCrossedChains } from "react-icons/gi";
import classes from "./HomeOurBuild.module.css";

function HomeBuildSection() {
  // Animation Variants
  const fadeInUp = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  const fadeInLeft = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  const fadeInRight = {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <Container>
      <motion.div
        className={classes.homeBuildSection}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Row>
          <Col md={12} lg={6}>
            <motion.div variants={fadeInLeft} className={classes.contentDiv}>
              <h4>
                We're Building Everything Best That You
                <span> Needed!</span>
              </h4>
              <p>
                Construction is a general term meaning the art and science to
                form objects systems organizations, and comes from Latin
                construction and Old French construction. To construct is the
                verb: the act of building, and the noun is construction.
              </p>
              <Row>
                <Col md={12} lg={6}>
                  <Card />
                </Col>
                <Col md={12} lg={6}>
                  <Card />
                </Col>
              </Row>
              <Button className={classes.button} label="Read More" />
            </motion.div>
          </Col>
          <Col md={12} lg={6}>
            <Row>
              <Col>
                <motion.div variants={fadeInRight}>
                  <ImagesSection />
                </motion.div>
              </Col>
            </Row>
          </Col>
        </Row>
      </motion.div>
    </Container>
  );
}

export default HomeBuildSection;

// Card Component with Animation
const Card = ({
  image,
  title = "Our Vision",
  description = "Construction is a general term meaning the art and science to form objects systems.",
}) => {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className={classes.cardDiv}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className={classes.left}>
        <GiCrossedChains />
      </div>
      <div className={classes.right}>
        <h5>{title}</h5>
        <p>{description}</p>
      </div>
    </motion.div>
  );
};

// Images Section with Animation
const ImagesSection = () => {
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      className={classes.imagesMainDiv}
      variants={imageVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className={classes.imageDiv}>
        <Image src={staticImage("About-Image-03.png")} alt="Image" fill />
      </div>
    </motion.div>
  );
};
