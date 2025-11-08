import React from "react";
// import "./index.css";

const Hero = () => {
  const particles = Array.from({ length: 25 });

  return (
    <section className="hero">
      {particles.map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            background: `radial-gradient(circle, ${
              ["#00c3ff", "#00ff9f", "#7a00ff"][i % 3]
            } 0%, transparent 70%)`,
          }}
        ></div>
      ))}

      <h1>Talk to Tomorrow’s Technology</h1>
    </section>
  );
};

export default Hero;
