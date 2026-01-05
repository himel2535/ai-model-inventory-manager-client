import React, { use, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../contexts/AuthContext";
import LoadingLine from "../components/LoadingLine";
import LoadingSpinner from "../components/LoadingSpinner";

const UpdateModel = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { user } = use(AuthContext);

  const [loading, setLoading] = useState(true);

  const [submitting, setSubmitting] = useState(false);

  const [modelData, setModelData] = useState(null);

  const { dataset, description, framework, image, name, useCase } =
    modelData || {};

  useEffect(() => {
    if (user?.accessToken && id) {
      setLoading(true);
      fetch(
        `${import.meta.env.VITE_API_URL}/models/${id}`,
        {
          headers: {
            authorization: `Bearer ${user.accessToken}`,
          },
        }
      )
        .then((res) => {
          if (!res.ok) throw new Error("Failed to fetch model details");
          return res.json();
        })
        .then((data) => {
          setModelData(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Fetch error:", err);
          toast.error("Failed to load model data.");
          setLoading(false);
        });
    }
  }, [user, id]);

  if (loading) {
    return <LoadingSpinner fullScreen={true} />;
  }

  const handleUpdateForm = (e) => {
    e.preventDefault();
    setSubmitting(true);

    const formData = {
      name: e.target.name.value,
      framework: e.target.framework.value,
      useCase: e.target.useCase.value,
      dataset: e.target.dataset.value,
      description: e.target.description.value,
      image: e.target.image.value,
    };

    fetch(`${import.meta.env.VITE_API_URL}/models/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${user.accessToken}`,
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {

        toast.success("Successfully Updated This Model!");
        navigate(`/model-details/${id}`);
      })
      .catch((err) => {
        console.error(err);
        toast.error("Update failed.");
      })
      .finally(() => setSubmitting(false));
  };

  return (
    <div>
      <h1 className="text-center lg:text-4xl md:text-3xl text-2xl font-bold mt-12 md:mt-14 mb-12 leading-relaxed">
        Update Model
      </h1>

      <div className="min-h-screen flex items-center justify-center">
        <div className="card border border-gray-200 bg-base-100 w-full max-w-md mx-auto shadow-2xl rounded-2xl mb-12">
          <div className="card-body p-6 relative">
            <form onSubmit={handleUpdateForm} className="space-y-4">
              {/* Name Field */}
              <div>
                <label className="label font-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  defaultValue={name}
                  required
                  className="input w-full rounded-lg focus:border-0 focus:outline-gray-200"
                  placeholder="Enter name"
                />
              </div>

              {/* Framework */}
              <div>
                <label className="label font-medium">Framework</label>
                <input
                  type="text"
                  name="framework"
                  defaultValue={framework}
                  required
                  className="input w-full rounded-lg focus:border-0 focus:outline-gray-200"
                  placeholder="Enter Framework"
                />
              </div>

              {/* Use Case */}
              <div>
                <label className="label font-medium">Use Case</label>
                <input
                  type="text"
                  name="useCase"
                  defaultValue={useCase}
                  required
                  className="input w-full rounded-lg focus:border-0 focus:outline-gray-200"
                  placeholder="Enter use case"
                />
              </div>

              {/* Dataset */}
              <div>
                <label className="label font-medium">Dataset</label>
                <input
                  type="text"
                  name="dataset"
                  defaultValue={dataset}
                  required
                  className="input w-full rounded-lg focus:border-0 focus:outline-gray-200"
                  placeholder="Enter Dataset"
                />
              </div>

              {/* Description */}
              <div>
                <label className="label font-medium">Description</label>
                <textarea
                  name="description"
                  defaultValue={description}
                  required
                  rows="3"
                  className="textarea w-full rounded-lg focus:border-0 focus:outline-gray-200 h-[250px]"
                  placeholder="Enter Description"
                ></textarea>
              </div>

              {/* Image URL */}
              <div>
                <label className="label font-medium">Image</label>
                <input
                  type="url"
                  name="image"
                  defaultValue={image}
                  required
                  className="input w-full rounded-lg focus:border-0 focus:outline-gray-200"
                  placeholder="https://example.com/image.jpg"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="btn w-full mt-6 disabled:opacity-70"
                disabled={submitting}
              >
                {submitting ? "Updating..." : "Update Model"}
              </button>

              {submitting && (
                <div className="mt-4 w-full flex items-center justify-center text-center">
                  <LoadingLine />
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateModel;
