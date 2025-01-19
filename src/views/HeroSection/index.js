"use client";
import Button from "@/components/Button";
import CarouselContainer from "@/components/Carousel";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import classes from "./HeroSection.module.css";

const imagesSrc = [
  {
    src: "/images/w1.jpg",
    heading: "Innovative Solutions for Modern Challenges",
    paragraph:
      "Experience cutting-edge technologies and tailored strategies designed to drive growth and efficiency. Let us turn your ideas into reality.",
    buttons: [
      { label: "Learn More", variant: "primary" },
      { label: "Contact Us", variant: "secondary" },
    ],
  },
  {
    src: "/images/w2.jpg",
    heading: "Crafting Extraordinary Experiences",
    paragraph:
      "Delivering creativity and innovation to shape your vision into an exceptional experience that stands out in today's competitive world.",
    buttons: [
      { label: "Our Services", variant: "primary" },
      { label: "Get Started", variant: "secondary" },
    ],
  },
  {
    src: "/images/w3.jpg",
    heading: "Building a Future Without Limits",
    paragraph:
      "Empowering businesses to achieve their goals with comprehensive solutions and industry expertise that guarantees success.",
    buttons: [
      { label: "Discover More", variant: "primary" },
      { label: "Join Us", variant: "secondary" },
    ],
  },
];

function HomeHeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Animation Variants
  const headingVariant = {
    hidden: { y: -90, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, delay: 0.2 } },
  };

  const paragraphVariant = {
    hidden: { x: -90, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6, delay: 0.2 } },
  };

  const buttonVariant = {
    hidden: { y: 90, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, delay: 0.7 } },
  };

  return (
    <div className={classes.heroSection}>
      <div className={classes.carousel}>
        <CarouselContainer
          autoplay={true}
          onSlideChange={(index) => {
            console.log(index);
            setCurrentSlide(index?.activeIndex);
          }} // Detect slide change
          slides={imagesSrc.map((item, index) => {
            const isActiveSlide = currentSlide === index;

            return (
              <div className={classes.slideMain} key={item.src}>
                <div className={classes.content}>
                  {/* Animated Heading */}
                  <motion.h3
                    variants={headingVariant}
                    initial="hidden"
                    animate={isActiveSlide ? "visible" : "hidden"}
                  >
                    {item.heading}
                  </motion.h3>

                  {/* Animated Paragraph */}
                  <motion.p
                    variants={paragraphVariant}
                    initial="hidden"
                    animate={isActiveSlide ? "visible" : "hidden"}
                  >
                    {item.paragraph}
                  </motion.p>

                  {/* Animated Buttons */}
                  <div className={classes.btns}>
                    {item.buttons.map((btn, btnIndex) => (
                      <motion.div
                        key={btnIndex}
                        variants={buttonVariant}
                        initial="hidden"
                        animate={isActiveSlide ? "visible" : "hidden"}
                      >
                        <Button label={btn.label} />
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className={classes.slide}>
                  <Image src={item.src} alt="image" fill />
                </div>
              </div>
            );
          })}
        />
      </div>
    </div>
  );
}

export default HomeHeroSection;
