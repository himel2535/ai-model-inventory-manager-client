import React from "react";
import { useLoaderData, useNavigate } from "react-router";
import { toast } from "react-toastify";

const UpdateModel = () => {
  const data = useLoaderData();
  const navigate=useNavigate()
//   console.log(data);
  const { dataset, description, framework, image, name, useCase,_id } = data;


  const handleUpdateForm = (e) => {
    e.preventDefault();
    const formData = {
      name: e.target.name.value,
      framework: e.target.framework.value,
      useCase: e.target.useCase.value,
      dataset: e.target.dataset.value,
      description: e.target.description.value,
      image: e.target.image.value,
    };

    fetch(`http://localhost:3000/models/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast("Successfully Updated This Model");
        navigate(`/model-details/${_id}`);
      })
      .catch((err) => {
        console.log(err);
      });
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

              {/* ---FrameWork--- */}

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

              {/* ---UseCae--- */}

              <div>
                <label className="label font-medium">useCase</label>
                <input
                  type="text"
                  name="useCase"
                  defaultValue={useCase}
                  required
                  className="input w-full rounded-lg focus:border-0 focus:outline-gray-200"
                  placeholder="Enter useCase"
                />
              </div>

              {/* ---Dataset--- */}

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

              {/* ---Description Textarea--- */}
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

              {/* image URL */}
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
              <button type="submit" className="btn w-full mt-6">
                Update Model
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateModel;
