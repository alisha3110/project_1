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

const Modal = ({ isOpen, onClose, children, size = "medium" }) => {
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const sizeClasses = {
    small: "w-1/3", // Small size
    medium: "w-1/2", // Medium size (default)
    large: "w-3/4", // Large size
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
            className={`relative bg-white dark:bg-gray-800 rounded-lg shadow-lg max-h-[90vh] min-h-auto overflow-y-auto ${sizeClasses[size]}`}
            variants={modal}
            size="small"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white"
            >
              <X />
            </button>
            <div className="w-full p-4">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
