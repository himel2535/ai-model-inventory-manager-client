import { Link } from "react-router";

export const ModelCard = ({ model }) => {
  const { name, framework, useCase, image, _id } = model;
  return (
    <div  className="card bg-base-100 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:brightness-105">
      <figure className="h-48 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
      </figure>
      <div className="p-4 flex flex-col ">
        <div className=" overflow-hidden mb-2">
          <div className="flex items-center justify-between">
            <div className="badge px-2 py-1 h-5 text-[10px] badge-primary bg-gradient-to-r from-[#1CB5E0] to-[#000851] rounded-full shrink-0 border-none">
              {framework}
            </div>
            <h4 className="line-clamp-1 flex flex-wrap gap-x-1 ml-2">
              {useCase?.split(" ").map((word, idx) => (
                <span key={idx} className="bg-gradient-to-r from-[#1CB5E0] to-[#000851] bg-clip-text text-transparent font-semibold text-[10px]">
                  {word}
                </span>
              ))}
            </h4>
          </div>
        </div>

        <div className="flex items-center justify-center mb-2">
          <h2 className="font-bold text-base text-center leading-tight text-gray-800 dark:text-gray-100">{name}</h2>
        </div>

        <div className="">
          <Link
            to={`/model-details/${_id}`}
            className="btn btn-primary bg-gradient-to-r from-[#1CB5E0] to-[#000851] text-white w-full btn-sm border-none shadow-md hover:shadow-lg transition-all"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};
