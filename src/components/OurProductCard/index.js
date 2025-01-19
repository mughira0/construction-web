"use client";

import { useCallback, useRef, useState } from "react";
import styles from "./OurProductCard.module.css";

const ProductCard = ({ imageUrl, category, title }) => {
  const [direction, setDirection] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  const getDirection = useCallback((e) => {
    if (!cardRef.current) return "none";

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const w = rect.width;
    const h = rect.height;

    const distTop = y;
    const distBottom = h - y;
    const distLeft = x;
    const distRight = w - x;

    const min = Math.min(distTop, distBottom, distLeft, distRight);

    switch (min) {
      case distTop:
        return "top";
      case distBottom:
        return "bottom";
      case distLeft:
        return "left";
      case distRight:
        return "right";
      default:
        return "none";
    }
  }, []);

  const handleMouseEnter = useCallback(
    (e) => {
      const newDirection = getDirection(e);
      setDirection(newDirection);
      setIsHovered(true);
    },
    [getDirection]
  );

  const handleMouseLeave = useCallback(
    (e) => {
      const newDirection = getDirection(e);
      setDirection(newDirection);
      setIsHovered(false);
    },
    [getDirection]
  );

  const getOverlayStyles = () => {
    const baseStyles = {
      transform: isHovered ? "translate(0, 0)" : "",
      transition: "transform 0.5s ease",
    };

    switch (direction) {
      case "top":
        baseStyles.transform = isHovered
          ? "translateY(0)"
          : "translateY(-100%)";
        break;
      case "bottom":
        baseStyles.transform = isHovered ? "translateY(0)" : "translateY(100%)";
        break;
      case "left":
        baseStyles.transform = isHovered
          ? "translateX(0)"
          : "translateX(-100%)";
        break;
      case "right":
        baseStyles.transform = isHovered ? "translateX(0)" : "translateX(100%)";
        break;
      default:
        baseStyles.transform = isHovered
          ? "translateY(0)"
          : "translateY(-100%)";
    }

    return baseStyles;
  };

  return (
    <div
      ref={cardRef}
      className={styles.card}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.imageContainer}>
        <img
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          className={styles.image}
        />
      </div>
      <div className={styles.overlay} style={getOverlayStyles()} />
      <div className={styles.content}>
        <span className={styles.category}>{category}</span>
        <h3 className={styles.title}>{title}</h3>
      </div>
    </div>
  );
};

export default ProductCard;
