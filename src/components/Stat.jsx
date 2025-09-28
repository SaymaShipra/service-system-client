import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { Building2, MessageSquare, Users } from "lucide-react";

const Stat = () => {
  return (
    <div className="py-16 bg-base-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Users */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <Users className="h-12 w-12 text-blue-600 mb-4" />
            <div className="text-4xl font-bold  mb-2">
              <CountUp end={1247} duration={2} />+
            </div>
            <p className="text-gray-400 text-lg">Happy Users</p>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <Building2 className="h-12 w-12 text-green-600 mb-4" />
            <div className="text-4xl font-bold  mb-2">
              <CountUp end={356} duration={2} />+
            </div>
            <p className="text-gray-400 text-lg">Services Listed</p>
          </motion.div>

          {/* Reviews */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <MessageSquare className="h-12 w-12 text-purple-600 mb-4" />
            <div className="text-4xl font-bold  mb-2">
              <CountUp end={2892} duration={2} />+
            </div>
            <p className="text-gray-400 text-lg">Reviews Posted</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Stat;
