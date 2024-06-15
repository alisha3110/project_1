import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modal = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
  exit: {
    opacity: 0,
    scale: 0.5,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

const Modal = ({ isOpen, onClose, member }) => {
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black bg-modal_bg modal_bg_css bg-opacity-50 z-50"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={backdrop}
          onClick={handleBackdropClick}
        >
          <motion.div
            className="relative bg-white dark:bg-gray-800 rounded-lg shadow-lg w-11/12 md:w-4/5 lg:w-4/5 xl:w-4/5 max-h-[90vh] overflow-y-auto"
            variants={modal}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white"
            >
              <X />
            </button>
            <div className="w-full">
              <div className="flex flex-col md:flex-row justify-start rounded-md border-b-2 border-black dark:border-gray-600 mb-6">
                <div className="w-full md:w-3/5 lg:w-3/5 xl:w-2/5 h-auto">
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-md md:rounded-l-md"
                  />
                </div>
                <div className="flex flex-col p-8 md:p-4 md:px-12 w-full">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                    {member.name}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {member.role}
                  </p>
                  <div className="flex flex-wrap text-sm text-left">
                    <p className="w-full md:w-1/2 lg:w-1/2 p-2 text-gray-800 dark:text-gray-200">
                      <strong>Phone:</strong> <br />
                      {member.phone}
                    </p>
                    <p className="w-full md:w-1/2 lg:w-1/2 p-2 text-gray-800 dark:text-gray-200">
                      <strong>Email:</strong> <br />
                      {member.email}
                    </p>
                    <p className="w-full md:w-1/2 lg:w-1/2 p-2 text-gray-800 dark:text-gray-200">
                      <strong>Address:</strong> <br />
                      {member.address}
                    </p>
                    <p className="w-full md:w-1/2 lg:w-1/2 p-2 text-gray-800 dark:text-gray-200">
                      <strong>Date of Birth:</strong> <br />
                      {member.dob}
                    </p>
                  </div>
                </div>
              </div>
              <div className="text-left p-8 md:px-12 pt-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  A Bit About Me
                </h3>
                <div className="md:max-h-60 overflow-y-auto">
                  <p className="text-gray-600 dark:text-gray-300">
                    {member.about}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">
                    {member.moreAbout}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
