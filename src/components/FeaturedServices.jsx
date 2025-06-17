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
      <h2 className="text-3xl font-bold mb-4 flex items-center gap-5 pb-5">
        Top Rated Services <IoMdArrowForward />
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
