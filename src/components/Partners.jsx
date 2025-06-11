import React from "react";
import { motion } from "framer-motion";
const Partners = () => {
  const partners = [
    {
      name: "TechGlobal Inc.",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop",
      description: "Leading technology solutions provider",
    },
    {
      name: "Innovation Labs",
      logo: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=100&h=100&fit=crop",
      description: "Cutting-edge research and development",
    },
    {
      name: "Digital Frontier",
      logo: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=100&h=100&fit=crop",
      description: "Digital transformation experts",
    },
    {
      name: "Creative Studio",
      logo: "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?w=100&h=100&fit=crop",
      description: "Award-winning design agency",
    },
  ];
  return (
    <div className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Meet Our Partners
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We collaborate with industry leaders to bring you the best services
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="text-center group"
            >
              <div className="bg-gray-100 rounded-full w-24 h-24 mx-auto mb-4 overflow-hidden group-hover:shadow-lg transition-shadow duration-300">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {partner.name}
              </h3>
              <p className="text-gray-600 text-sm">{partner.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
