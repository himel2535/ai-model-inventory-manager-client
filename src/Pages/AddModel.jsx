import React, { use } from "react";
import { AuthContext } from "../contexts/AuthContext";

const AddModel = () => {
  const { user } = use(AuthContext);
  const handleAddForm = (e) => {
    e.preventDefault();
    const formData = {
      name: e.target.name.value,
      framework: e.target.framework.value,
      useCase: e.target.useCase.value,
      dataset: e.target.dataset.value,
      description: e.target.description.value,
      image: e.target.photoURL.value,
      createdBy: user.email,
      createdAt: new Date(),
      purchased: 0,
    };

    fetch("http://localhost:3000/models", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1 className="text-center lg:text-4xl md:text-3xl text-2xl font-bold mt-12 md:mt-14 mb-12 leading-relaxed">
        Add New Model
      </h1>
      <div className="min-h-screen flex items-center justify-center">
        <div className="card border border-gray-200 bg-base-100 w-full max-w-md mx-auto shadow-2xl rounded-2xl mb-12">
          <div className="card-body p-6 relative">
            <form onSubmit={handleAddForm} className="space-y-4">
              {/* Name Field */}
              <div>
                <label className="label font-medium">Name</label>
                <input
                  type="text"
                  name="name"
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
                  required
                  className="input w-full rounded-lg focus:border-0 focus:outline-gray-200"
                  placeholder="Enter Framework"
                />
              </div>

              {/* Category Dropdown */}
              {/* <div>
                <label className="label font-medium">Category</label>
                <select
                  defaultValue={""}
                  name="category"
                  required
                  className="select w-full rounded-lg focus:border-0 focus:outline-gray-200"
                >
                  <option value="" disabled>
                    Select category
                  </option>
                  <option value="Vehicles">Vehicles</option>
                  <option value="Plants">Plants</option>
                  <option value="Foods">Foods</option>
                  <option value="Home & Living">Home & Living</option>
                  <option value="Characters">Characters</option>
                  <option value="Space">Space</option>
                  <option value="Animals">Animals</option>
                  <option value="Other">Other</option>
                </select>
              </div> */}

              {/* ---UseCae--- */}

              <div>
                <label className="label font-medium">useCase</label>
                <input
                  type="text"
                  name="useCase"
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
                  required
                  rows="3"
                  className="textarea w-full rounded-lg focus:border-0 focus:outline-gray-200 h-[250px]"
                  placeholder="Enter Description"
                ></textarea>
              </div>

              {/* Thumbnail URL */}
              <div>
                <label className="label font-medium">Photo URL</label>
                <input
                  type="url"
                  name="photoURL"
                  required
                  className="input w-full rounded-lg focus:border-0 focus:outline-gray-200"
                  placeholder="https://example.com/image.jpg"
                />
              </div>

              {/* Submit Button */}
              <button type="submit" className="btn w-full mt-6">
                Add Model
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddModel;
