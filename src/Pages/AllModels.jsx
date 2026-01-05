import React, { useContext, useEffect, useState } from "react";
import { ModelCard } from "../components/ModelCard";
import { AuthContext } from "../contexts/AuthContext";
import ModelCardSkeleton from "../components/ModelCardSkeleton";
import { FaSearch, FaFilter, FaSortAmountDown } from "react-icons/fa";

const AllModels = () => {
  const [models, setModels] = useState([]);
  const [framework, setFramework] = useState("");
  const [sortOrder, setSortOrder] = useState("newest");
  const [visibleCount, setVisibleCount] = useState(8);
  const { setLoading, loading } = useContext(AuthContext);

  useEffect(() => {
    fetchModels();
  }, []);

  const fetchModels = (searchText = "") => {
    setLoading(true);
    const url = searchText || framework 
      ? `${import.meta.env.VITE_API_URL}/search?search=${searchText}&framework=${framework}`
      : `${import.meta.env.VITE_API_URL}/models`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setModels(data);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const search_text = e.target.search.value;
    fetchModels(search_text);
  };

  const sortedModels = [...models].sort((a, b) => {
    if (sortOrder === "newest") {
      return new Date(b.createdAt || 0) - new Date(a.createdAt || 0);
    } else if (sortOrder === "popular") {
      return (b.purchased || 0) - (a.purchased || 0);
    }
    return 0;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-10 py-12">
      <div className="text-center mb-12">
        <h1 className="heading-text-dark-aware lg:text-5xl md:text-4xl text-3xl font-extrabold mb-4 leading-relaxed">
          Explore AI Models
        </h1>
        <p className="max-w-2xl mx-auto text-gray-500 text-lg leading-relaxed">
          The world's most comprehensive library of open-source and proprietary AI models,
          categorized and ranked for your convenience.
        </p>
      </div>

      {/* Filter & Search Bar */}
      <div className="bg-white dark:bg-gray-900 p-6 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm mb-12">
        <form onSubmit={handleSearch} className="flex flex-col lg:flex-row gap-4 items-center">
          <div className="relative flex-1 w-full">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
              name="search" 
              type="search" 
              placeholder="Search by model name..." 
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-gray-50 dark:bg-gray-800 border-none focus:ring-2 focus:ring-blue-500 transition-all outline-none"
            />
          </div>

          <div className="flex flex-wrap gap-4 w-full lg:w-auto">
            <div className="relative flex-1 lg:w-48">
              <FaFilter className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
              <select
                value={framework}
                onChange={(e) => {
                  setFramework(e.target.value);
                  // Trigger search immediately on filter change for better UX
                  setLoading(true);
                  fetch(`${import.meta.env.VITE_API_URL}/search?search=&framework=${e.target.value}`)
                    .then(res => res.json())
                    .then(data => setModels(data))
                    .finally(() => setLoading(false));
                }}
                className="w-full pl-10 pr-4 py-4 rounded-2xl bg-gray-50 dark:bg-gray-800 border-none focus:ring-2 focus:ring-blue-500 appearance-none outline-none font-medium cursor-pointer"
              >
                <option value="">Frameworks</option>
                <option value="TensorFlow">TensorFlow</option>
                <option value="PyTorch">PyTorch</option>
                <option value="JAX">JAX</option>
                <option value="Keras">Keras</option>
                <option value="Scikit-learn">Scikit-learn</option>
              </select>
            </div>

            <div className="relative flex-1 lg:w-48">
              <FaSortAmountDown className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className="w-full pl-10 pr-4 py-4 rounded-2xl bg-gray-50 dark:bg-gray-800 border-none focus:ring-2 focus:ring-blue-500 appearance-none outline-none font-medium cursor-pointer"
              >
                <option value="newest">Newest First</option>
                <option value="popular">Most Popular</option>
              </select>
            </div>

            <button className="btn btn-lg bg-gradient-to-r from-[#1CB5E0] to-[#000851] text-white border-none rounded-2xl px-8 hover:scale-105 transition-transform flex-1 lg:flex-none">
              Apply
            </button>
          </div>
        </form>
      </div>

      {/* Grid */}
      {loading ? (
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
            <ModelCardSkeleton key={n} />
          ))}
        </div>
      ) : sortedModels.length > 0 ? (
        <>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 md:gap-5 mb-12">
            {sortedModels.slice(0, visibleCount).map((model) => (
              <ModelCard key={model._id} model={model}></ModelCard>
            ))}
          </div>
          
          {visibleCount < sortedModels.length && (
            <div className="flex justify-center">
              <button 
                onClick={() => setVisibleCount(prev => prev + 4)}
                className="btn btn-outline border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white rounded-full px-10"
              >
                Load More Models
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="text-center py-20">
          <h3 className="text-2xl font-bold mb-2">No models found</h3>
          <p className="text-gray-500">Try adjusting your filters or search keywords.</p>
        </div>
      )}
    </div>
  );
};

export default AllModels;
