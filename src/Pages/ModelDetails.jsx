import React, { useEffect, useState, use } from "react";
import { Link, useNavigate, useParams } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import LoadingSpinner from "../components/LoadingSpinner";

const ModelDetails = () => {
  const { user } = use(AuthContext);
  const navigate = useNavigate();
  const { id } = useParams();

  const [model, setModel] = useState({});
  const [loading, setLoading] = useState(true);
  const [refetch, setRefetch] = useState(false);

  useEffect(() => {
    const fetchModel = async () => {
      try {
        setLoading(true);
        const res = await fetch(`http://localhost:3000/models/${id}`, {
          headers: {
            authorization: `Bearer ${user.accessToken}`,
          },
        });
        const data = await res.json();
        setModel(data);
      } catch (err) {
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    if (user && id) fetchModel();
  }, [id, user, refetch]);

  // ---handle delete model----
  const handleDelete = () => {
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
        fetch(`http://localhost:3000/models/${model._id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${user.accessToken}`,
          },
        })
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

    fetch(`http://localhost:3000/purchased-model/${model._id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(finalModel),
    })
      .then((res) => res.json())
      .then(() => {
        toast("Successfully Purchased this model");
        setRefetch(!refetch);
      })
      .catch((err) => console.log(err));
  };

  if (loading) return <LoadingSpinner fullScreen={true} />;

  return (
    <div className="max-w-5xl mx-auto p-4 md:p-6 lg:p-8 mt-12 md:mt-14 mb-4">
      <div className="card bg-base-100 shadow-xl border border-gray-200 rounded-2xl overflow-hidden">
        <div className="flex flex-col md:flex-row gap-8 p-6 md:p-8">
          <div className="shrink-0 w-full md:w-1/2">
            <img
              src={model.image}
              alt={model.name}
              className="w-full object-cover rounded-xl shadow-md"
            />
          </div>

          <div className="flex flex-col justify-center space-y-4 w-full md:w-1/2">
            <div className="flex items-center justify-between">
              <h1 className="md:text-3xl text-2xl lg:text-4xl text-gray-700 font-bold">
                {model.name}
              </h1>

              <div className="badge badge-outline text-white font-xs bg-gradient-to-r from-[#1CB5E0] to-[#000851]">
                {model.framework}
              </div>
            </div>

            <p className="text-gray-500 leading-relaxed">
              <span className="font-semibold text-gray-700">UseCase:</span>{" "}
              {model.useCase}
            </p>
            <p className="text-gray-500 leading-relaxed">
              <span className="font-semibold text-gray-700">Dataset:</span>{" "}
              {model.dataset}
            </p>
            <p className="text-gray-500 leading-relaxed">
              <span className="font-semibold text-gray-700">Description:</span>{" "}
              {model.description}
            </p>

            <p className="text-gray-500 leading-relaxed">
              <span className="font-semibold text-gray-700">Purchased:</span>{" "}
              <span className="bg-gradient-to-r from-[#1CB5E0] to-[#000851] text-transparent bg-clip-text font-bold">
                {model.purchased}
              </span>
            </p>

            <div className="flex gap-3 mt-6">
              <button onClick={handlePurchasedModel} className="btn">
                Purchase
              </button>

              {model.createdBy === user?.email && (
                <>
                  <Link to={`/update-model/${model._id}`} className="btn">
                    Update
                  </Link>
                  <button onClick={handleDelete} className="btn">
                    Delete
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelDetails;
