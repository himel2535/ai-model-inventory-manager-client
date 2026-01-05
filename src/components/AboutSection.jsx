// src/components/AboutSection.jsx
import React from "react";

const AboutSection = () => {
  return (
    <section className="py-12 max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

      <h2 className="lg:text-5xl md:text-4xl text-3xl font-bold text-center mb-14 leading-relaxed heading-text-dark-aware">
        About AI Models
      </h2>

      <p className="text-lg mb-4 leading-relaxed text-gray-500">
        AI models are computational algorithms designed to perform tasks that
        normally require human intelligence. They can understand and generate
        text, recognize images, make predictions, and more. AI models are the
        backbone of modern intelligent applications.
      </p>

      <p className="text-lg mb-4 leading-relaxed font-semibold heading-text-dark-aware">
        Common examples include:
      </p>

      <ul className="list-disc ml-6 text-lg text-gray-500 space-y-2 mb-4">
        <li>
          <strong>Text Models:</strong> e.g., BERT, GPT for natural language
          understanding and generation.
        </li>
        <li>
          <strong>Vision Models:</strong> e.g., YOLO, CLIP for image recognition
          and processing.
        </li>
        <li>
          <strong>Speech Models:</strong> e.g., Whisper for speech recognition
          tasks.
        </li>
        <li>
          <strong>Generative Models:</strong> e.g., Stable Diffusion, StyleGAN
          for creating realistic images.
        </li>
      </ul>

      <p className="text-lg leading-relaxed text-gray-500">
        AI models power applications like chatbots, recommendation systems,
        autonomous vehicles, digital art, and healthcare diagnostics.
        Efficiently managing these models is essential for research, deployment,
        and collaboration in AI projects.
      </p>
    </section>
  );
};

export default AboutSection;
