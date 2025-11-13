import React, { use, useEffect, useState } from "react";
import Banner from "../components/Banner";
import AboutSection from "../components/AboutSection";
import GetStartedSection from "../components/GetStartedSection";
import { ModelCard } from "../components/ModelCard";
import { AuthContext } from "../contexts/AuthContext";
import LoadingSpinner from "../components/LoadingSpinner";

const Home = () => {
  const [latestModels, setLatestModels] = useState([]);
  const { setLoading, loading } = use(AuthContext);

  useEffect(() => {
    setLoading(true);
    fetch("https://ai-model-inventory-manager-server.vercel.app/latest-models")
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
    <div className="">
      <Banner></Banner>
      <div className="lg:mx-8 md:mx-6 mx-4">
        <h1 className="text-center heading-text-dark-aware lg:text-4xl md:text-3xl text-2xl font-bold mt-12 md:mt-14 mb-10 leading-relaxed">
          Latest Models
        </h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7 md:gap-5 ">
          {latestModels.map((model) => (
            <ModelCard key={model._id} model={model}></ModelCard>
          ))}
        </div>
      </div>
      <AboutSection></AboutSection>
      <GetStartedSection></GetStartedSection>
    </div>
  );
};

export default Home;
