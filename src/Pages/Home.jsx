import React, { useContext, useEffect, useState } from "react";
import Banner from "../components/Banner";
import AboutSection from "../components/AboutSection";
import GetStartedSection from "../components/GetStartedSection";
import { ModelCard } from "../components/ModelCard";
import { AuthContext } from "../contexts/AuthContext";
import LoadingSpinner from "../components/LoadingSpinner";
import FAQSection from "../components/FAQSection";
import ContactUsSection from "../components/ContactUsSection";
import StatsSection from "../components/StatsSection";
import FeaturesSection from "../components/FeaturesSection";

import NewsLetter from "../components/Newsletter";
import Testimonials from "../components/Testimonials";

const Home = () => {
  const [latestModels, setLatestModels] = useState([]);
  const { setLoading, loading } = useContext(AuthContext);

  useEffect(() => {
    setLoading(true);
    fetch(`${import.meta.env.VITE_API_URL}/latest-models`)
      .then((res) => res.json())
      .then((data) => {
        setLatestModels(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [setLoading]);

  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  return (
    <div className="overflow-x-hidden">
      <Banner></Banner>
      <StatsSection></StatsSection>
      <section id="latest-models-section" className="py-20 bg-gradient-to-b from-transparent to-base-200/30">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-center heading-text-dark-aware lg:text-5xl md:text-4xl text-3xl font-bold mb-14 leading-relaxed">
            Latest Frontier Models
          </h1>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-7 md:gap-5 px-4 md:px-6 lg:px-10">
            {latestModels.slice(0, 4).map((model) => (
              <ModelCard key={model._id} model={model}></ModelCard>
            ))}
          </div>
        </div>
      </section>
      <FeaturesSection></FeaturesSection>
      <Testimonials></Testimonials>
      <FAQSection></FAQSection>
      <AboutSection></AboutSection>
      <ContactUsSection></ContactUsSection>
      <NewsLetter></NewsLetter>
      <GetStartedSection></GetStartedSection>
    </div>
  );
};

export default Home;
