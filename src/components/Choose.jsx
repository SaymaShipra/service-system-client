import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, Star, Users } from "lucide-react";
const Choose = () => {
  return (
    <div className="py-20 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose ServiceHub?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Experience the difference with our platform designed for excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="bg-white/10 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
              <Star className="h-8 w-8 text-yellow-400" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Quality Assured</h3>
            <p className="text-blue-100">
              All services go through our quality verification process to ensure
              you get the best experience.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <div className="bg-white/10 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
              <Users className="h-8 w-8 text-green-400" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Trusted Community</h3>
            <p className="text-blue-100">
              Join thousands of satisfied customers and service providers in our
              growing community.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <div className="bg-white/10 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
              <MessageSquare className="h-8 w-8 text-purple-400" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Real Reviews</h3>
            <p className="text-blue-100">
              Read authentic reviews from real customers to make informed
              decisions about services.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
