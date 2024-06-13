import React from "react";
import { motion } from "framer-motion";

const EducationCard = ({ title, description, imageSrc, year }) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-md overflow-hidden"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      style={{ width: "300px", height: "400px" }} // Set fixed width and height
    >
      <div className="p-4">
        <motion.img
          src={imageSrc}
          alt={title}
          className="rounded-full h-20 w-20 mx-auto mb-4"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{ width: "100px", height: "100px" }} // Set fixed width and height
        />
        <motion.h2
          className="text-lg font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {title}
        </motion.h2>
        <motion.p
          className="text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {description}
        </motion.p>
        <motion.p
          className="text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {year}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default EducationCard;
