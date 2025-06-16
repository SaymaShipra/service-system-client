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
      <h2 className="text-2xl font-bold mb-4">
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
