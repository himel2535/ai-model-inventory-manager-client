import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import img1 from "../../assets/AI_model.webp";
// import img2 from "../../assets/brain.png";
// import img3 from "../../assets/humanoid.png";
import img4 from "../../assets/cyberAi.png";
import img5 from "../../assets/formakinglogo.jpg";
import img6 from "../../assets/chatbot.webp";
// import img7 from "../../assets/semantic.jpg";
import "./MotionSlider.css";

const images = [img1, img4, img5, img6];

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 800 : -800,
    opacity: 0,
    scale: 0.8,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 800 : -800,
    opacity: 0,
    scale: 0.8,
  }),
};

const MotionSlider = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const totalSlides = images.length;

  const imageIndex = Math.abs(page % totalSlides);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  const goToSlide = (index) => {
    const newDirection = index > imageIndex ? 1 : -1;
    setPage([page + (index - imageIndex), newDirection]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      paginate(1);
    }, 4000);

    return () => clearInterval(interval);
  }, [page]);

  return (
    <div className="slider-area ">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 100, damping: 20 },
            opacity: { duration: 0.5 },
            scale: { duration: 0.5 },
          }}
          className="motion-slide"
        >
          <img src={images[imageIndex]} alt={`Slide ${imageIndex + 1}`} />
        </motion.div>
      </AnimatePresence>

      <button className="next-btn" onClick={() => paginate(1)}>
        &gt;
      </button>
      <button className="prev-btn" onClick={() => paginate(-1)}>
        &lt;
      </button>

      {/* Navigation Dots */}
      <div className="navigation-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === imageIndex ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default MotionSlider;
