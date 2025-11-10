import React, { use } from "react";
import { Link, useLoaderData, useNavigate } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
// import { toast } from "react-toastify";

const ModelDetails = () => {
  const { user } = use(AuthContext);
  const navigate = useNavigate();
  //   console.log(user);
  const data = useLoaderData();
  //   console.log(data);

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: `${data.name} will be deleted!`,
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
        fetch(`http://localhost:3000/models/${data._id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            toast("Successfully deleted this model");
            navigate(`/models`);
            Swal.fire({
              title: "Deleted!",
              text: ` has been deleted.`,
              icon: "success",
              confirmButtonText: "OK",
              customClass: {
                confirmButton: "swal-confirm-btn",
              },
              buttonsStyling: false,
            });
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };

  return (
    <div className="max-w-5xl mx-auto p-4 md:p-6 lg:p-8 mt-12 md:mt-14 mb-4">
      <div className="card bg-base-100 shadow-xl border border-gray-200 rounded-2xl overflow-hidden">
        <div className="flex flex-col md:flex-row gap-8 p-6 md:p-8">
          <div className="shrink-0 w-full md:w-1/2">
            <img
              src={data.image}
              alt=""
              className="w-full object-cover rounded-xl shadow-md"
            />
          </div>

          <div className="flex flex-col justify-center space-y-4 w-full md:w-1/2">
            <div className="flex items-center justify-between">
              <h1 className="md:text-3xl text-2xl lg:text-4xl font-bold">
                {data.name}
              </h1>

              <div className="badge badge-outline text-white font-xs bg-gradient-to-r from-[#1CB5E0] to-[#000851]">
                {data.framework}
              </div>
            </div>

            <p className="text-gray-500 leading-relaxed">
              <span className="font-semibold text-gray-700">UseCase : </span>{" "}
              {data.useCase}
            </p>
            <p className="text-gray-500 leading-relaxed">
              <span className="font-semibold text-gray-700">Dataset : </span>{" "}
              {data.dataset}
            </p>

            <p className="text-gray-500 leading-relaxed ">
              <span className="font-semibold text-gray-700">Description: </span>
              {data.description}
            </p>

            <p className="text-gray-500 leading-relaxed">
              {" "}
              <span className="font-semibold text-gray-700">
                Purchased :{" "}
              </span>{" "}
              {data.purchased}
            </p>

            <div className="flex gap-3 mt-6">
              <Link to={`/purchased-model/${data._id}`} className="btn ">
                Purchase
              </Link>
              <div className="flex items-center gap-3">
                {data.createdBy === user?.email && (
                  <>
                    <Link to={`/update-model/${data._id}`} className="btn ">
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
    </div>
  );
};

export default ModelDetails;
