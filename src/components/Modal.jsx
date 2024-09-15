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

const Modal = ({ isOpen, onClose, children }) => {
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={backdrop}
          onClick={handleBackdropClick}
        >
          <motion.div
            className="relative bg-white dark:bg-gray-800 rounded-lg shadow-lg w-11/12 md:w-4/5 lg:w-4/5 xl:w-4/5 max-h-[90vh] min-h-[90vh] overflow-y-auto"
            variants={modal}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white"
            >
              <X />
            </button>
            {/* Render children here */}
            <div className="w-full p-4">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
