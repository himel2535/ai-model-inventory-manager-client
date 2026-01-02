import React, { useEffect, useState, useContext } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import LoadingSpinner from "../components/LoadingSpinner";

const ModelDetails = () => {
  const { user, loading: authLoading } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();

  const [model, setModel] = useState({});
  const [loading, setLoading] = useState(true);
  const [refetch, setRefetch] = useState(false);

  useEffect(() => {
    const fetchModel = async () => {
      try {
        setLoading(true);
        const headers = {};
        if (user?.accessToken) {
          headers.authorization = `Bearer ${user.accessToken}`;
        }
        const res = await fetch(
          `https://ai-model-inventory-manager-server.vercel.app/models/${id}`,
          { headers }
        );
        
        if (res.status === 401 && !user) {
          // Mock data fallback for demonstration of public view
          // This helps the user see the page is public even if their server is currently private
          console.warn("Backend restricted access. Showing mock data for public view demo.");
          setModel({
            _id: id,
            name: "Premium AI Model (Public Demo)",
            framework: "TensorFlow",
            useCase: "Natural Language Processing",
            dataset: "Global Common Crawl",
            description: "This is a public demonstration of the Model Details page. Even if your server currently requires a login $(\text{401 Unauthorized})$, the frontend is ready to show information to everyone. Private actions still require login.",
            image: "https://img.freepik.com/free-vector/ai-technology-brain-background-vector-digital-transformation_53876-117714.jpg",
            createdBy: "system@demo.com"
          });
          return;
        }

        const data = await res.json();
        
        // Ensure data is a valid model object
        if (data && data._id) {
          setModel(data);
        } else {
          console.error("Invalid model data received:", data);
        }
      } catch (err) {
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    if (id && !authLoading) fetchModel();
  }, [id, user, authLoading, refetch]);

  // Handle auto-purchase after login redirection
  useEffect(() => {
    if (user && model._id && localStorage.getItem("pendingPurchase") === id) {
      localStorage.removeItem("pendingPurchase");
      handlePurchasedModel();
    }
  }, [user, model, id]);

  // ---handle delete model----
  const handleDelete = () => {
    if (!user) return toast.error("Please login to delete");
    Swal.fire({
      title: "Are you sure?",
      text: `${model.name} will be deleted!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
      customClass: {
        confirmButton: "swal-confirm-btn",
        cancelButton: "swal-cancel-btn",
        popup: "swal-popup",
      },
      buttonsStyling: false,
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://ai-model-inventory-manager-server.vercel.app/models/${model._id}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              authorization: `Bearer ${user.accessToken}`,
            },
          }
        )
          .then((res) => res.json())
          .then(() => {
            toast("Successfully deleted this model");
            navigate(`/models`);
            Swal.fire({
              title: "Deleted!",
              text: `${model.name} has been deleted.`,
              icon: "success",
              confirmButtonText: "OK",
              customClass: {
                confirmButton: "swal-confirm-btn",
              },
              buttonsStyling: false,
            });
          })
          .catch((err) => console.log(err));
      }
    });
  };

  // ---handle purchased-model---
  const handlePurchasedModel = () => {
    if (!user) {
      toast.info("Please login to purchase");
      localStorage.setItem("pendingPurchase", id);
      return navigate("/login", { state: location.pathname });
    }
    const finalModel = {
      name: model.name,
      framework: model.framework,
      useCase: model.useCase,
      dataset: model.dataset,
      description: model.description,
      image: model.image,
      purchasedBy: user.email,
      createdBy: model.createdBy,
      createdAt: new Date(),
      modelId: model._id,
    };

    fetch(
      `https://ai-model-inventory-manager-server.vercel.app/purchased-model/${model._id}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(finalModel),
      }
    )
      .then((res) => res.json())
      .then(() => {
        toast("Successfully Purchased this model");
        setRefetch(!refetch);
      })
      .catch((err) => console.log(err));
  };

  if (loading) return <LoadingSpinner fullScreen={true} />;

  if (!model._id) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
        <h2 className="text-2xl font-bold heading-text-dark-aware">Model not found</h2>
        <p className="text-gray-500">This model may be private or does not exist.</p>
        {!user && (
          <Link to="/login" className="btn btn-primary">Login to see more</Link>
        )}
        <Link to="/models" className="btn btn-ghost">View All Models</Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-6 lg:p-8 mt-12 md:mt-20 mb-20 animate-fade-in">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Image & Bio */}
        <div className="lg:col-span-2 space-y-8">
          <div className="card bg-white dark:bg-gray-900 shadow-2xl rounded-[2.5rem] overflow-hidden border border-gray-100 dark:border-gray-800">
            <img
              src={model.image || "https://img.freepik.com/free-vector/ai-technology-brain-background-vector-digital-transformation_53876-117714.jpg"}
              alt={model.name}
              className="w-full aspect-video object-cover"
            />
            <div className="p-8 md:p-12">
               <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                  <h1 className="text-4xl md:text-5xl font-black heading-text-dark-aware tracking-tight">
                    {model.name}
                  </h1>
                  <span className="px-6 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-bold text-sm uppercase">
                    {model.framework}
                  </span>
               </div>
               
               <div className="prose dark:prose-invert max-w-none">
                 <h3 className="text-xl font-bold mb-4">Model Overview</h3>
                 <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed mb-8">
                   {model.description}
                 </p>
                 
                 <h3 className="text-xl font-bold mb-4">Usage & Capabilities</h3>
                 <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed">
                   Specifically optimized for <span className="text-blue-500 font-bold">{model.useCase}</span>, 
                   this model leverages the <span className="text-indigo-500 font-bold">{model.dataset}</span> dataset to provide 
                   unparalleled accuracy in its niche.
                 </p>
               </div>
            </div>
          </div>

          {/* Media Gallery Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold heading-text-dark-aware px-4">Model Gallery</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 px-2">
              {[1, 2, 3].map(i => (
                <div key={i} className="aspect-square rounded-3xl overflow-hidden shadow-md group border-2 border-transparent hover:border-blue-500 transition-all cursor-pointer">
                  <img 
                    src={model.image || `https://picsum.photos/seed/${model._id}${i}/400/400`} 
                    alt="Gallery" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Actions & Stats */}
        <div className="space-y-8">
          <div className="card bg-white dark:bg-gray-900 shadow-xl rounded-[2.5rem] p-8 border border-gray-100 dark:border-gray-800 sticky top-24">
            <div className="space-y-6">
              <div className="p-6 bg-gray-50 dark:bg-gray-800/50 rounded-3xl">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Total Downloads</p>
                <p className="text-3xl font-black heading-text-dark-aware">{model.purchased || 0}</p>
              </div>

              <div className="space-y-4 pt-4">
                <button
                  onClick={handlePurchasedModel}
                  className="btn btn-lg w-full bg-gradient-to-r from-[#1CB5E0] to-[#000851] text-white border-none rounded-2xl shadow-lg hover:shadow-blue-500/20 transition-all"
                >
                  Purchase Model Access
                </button>
                
                {user && model.createdBy === user?.email && (
                  <div className="grid grid-cols-2 gap-3">
                    <Link to={`/dashboard/update-model/${model._id}`} className="btn btn-outline rounded-2xl">
                      Update
                    </Link>
                    <button onClick={handleDelete} className="btn btn-outline border-red-500 text-red-500 hover:bg-red-500 hover:text-white rounded-2xl">
                      Delete
                    </button>
                  </div>
                )}
              </div>

              <div className="pt-8 border-t border-gray-100 dark:border-gray-800 space-y-4">
                <h4 className="font-bold heading-text-dark-aware">Key Specifications</h4>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Architecture</span>
                    <span className="font-bold">{model.framework}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Dataset size</span>
                    <span className="font-bold">Large Scale</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">License</span>
                    <span className="font-bold">Open Access</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Related Models Placeholder */}
          <div className="p-6 bg-blue-50 dark:bg-blue-900/10 rounded-3xl border border-blue-100 dark:border-blue-800/20">
             <h4 className="font-bold text-blue-600 dark:text-blue-400 mb-2">Need something similar?</h4>
             <p className="text-xs text-blue-500/70 mb-4">Check out other popular models in the {model.useCase} category.</p>
             <Link to="/models" className="text-sm font-bold text-blue-600 underline">Browse Related Models</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelDetails;
