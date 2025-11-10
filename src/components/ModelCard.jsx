import { Link } from "react-router";

export const ModelCard = ({ model }) => {
  const { name, framework, useCase, image, _id } = model;
  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      <figure className="h-48 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
      </figure>
      <div className="card-body">
        <div className="flex items-center justify-between">
          <div className="badge p-2 badge-xs badge-secondary bg-gradient-to-r from-[#1CB5E0] to-[#000851] rounded-full">
            {framework}
          </div>
          <h4 className="line-clamp-1 bg-gradient-to-r from-[#1CB5E0] to-[#000851] bg-clip-text text-transparent">
            <span className="font-semibold">{useCase}</span>
          </h4>
        </div>

        <h2 className="font-extrabold text-lg text-center mt-2 mb-1">{name}</h2>

        <div className="card-actions justify-between items-center ">
          <Link
            to={`/model-details/${_id}`}
            className="btn text-white w-full btn-sm"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};
