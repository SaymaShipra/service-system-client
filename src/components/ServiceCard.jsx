import React from "react";
import { Link } from "react-router";

const ServiceCard = ({ service }) => {
  const { _id, title, description, image, category, company, price } = service;

  return (
    <div className="card bg-base-100 shadow-md w-full">
      <figure>
        <img src={image} alt={title} className="h-48 w-full object-cover" />
        <p className="badge px-4 badge-primary absolute top-2 right-2">
          {category}
        </p>
      </figure>
      <div className=" py-5 px-4">
        <h2 className=" text-3xl font-bold pb-2">{title}</h2>
        <p className="text-gray-600 pb-3 text-lg">{description}</p>
        <div className="flex justify-between pb-3 text-xl ">
          <h3 className="text-gray-500">{company}</h3>
          <h3 className="text-blue-500 font-bold"> {price}</h3>
        </div>

        <div>
          <Link to={`/services/${_id}`}>
            <button className="btn bg-primary text-lg text-white w-full rounded-lg">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
