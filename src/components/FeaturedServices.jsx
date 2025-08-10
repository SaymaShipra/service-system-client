import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import { IoMdArrowForward } from "react-icons/io";

const FeaturedServices = () => {
  const [topServices, setTopServices] = useState([]);

  useEffect(() => {
    fetch("https://service-system-server.vercel.app/topServices")
      .then((res) => res.json())
      .then((data) => setTopServices(data))
      .catch((err) => console.error("Failed to load top services", err));
  }, []);

  return (
    <div className="pt-20 w-10/12 mx-auto">
      <div className="text-center pb-10">
        <h1 className="text-5xl font-semibold pb-4">Featured Services</h1>
        <p className="text-gray-500 text-xl">
          Discover top-rated services from our trusted community of providers
        </p>
      </div>
      <h2 className="text-3xl font-bold mb-4 flex items-center gap-3 pb-5">
        Top Rated Services
        <span>
          {" "}
          <svg
            className="w-8 h-10 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 12H5m14 0-4 4m4-4-4-4"
            />
          </svg>
        </span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {topServices.map((service) => (
          <ServiceCard
            key={service._id}
            service={service}
            rating={service.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedServices;
