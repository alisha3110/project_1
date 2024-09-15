import logo from "../assets/modal_bg.jpeg";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="h-full flex flex-col items-center min_height"
    >
      <div className="min-h-screen flex flex-col items-center px-6 py-16">
        {/* About Section */}
        <div className="text-center max-w-2xl mb-16">
          <h1 className="text-gray-600 text-lg md:text-xl mb-2">
            The Full Story
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
            About
          </h2>
          <p className="text-gray-600 text-sm md:text-base mt-2">
            This is your About Page. It's a great opportunity to give a full
            background on who you are, what you do, and what your website has to
            offer. Double-click on the text box to start editing your content,
            and make sure to add all the relevant details you want to share with
            your visitors.
          </p>
        </div>

        {/* Mission and Vision Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-0">
          {/* Image on the left */}
          <div className="flex items-center justify-center">
            <img
              src={logo} // Placeholder image path, replace with the actual image path
              alt="Mission Image"
              className="w-full h-auto object-cover shadow-lg rounded-lg"
            />
          </div>

          {/* Mission Section */}
          <div className="flex flex-col items-center justify-center px-4 md:px-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6">
              Mission
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              This is a Paragraph. Click on 'Edit Text' or double-click on the
              text box to start editing the content and make sure to add any
              relevant details or information that you want to share with your
              visitors.
            </p>
          </div>

          <hr className="block md:hidden border-gray-300 my-4" />

          {/* Vision Section */}
          <div className="flex flex-col items-center justify-center px-4 md:px-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6">
              Vision
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              This is a Paragraph. Click on 'Edit Text' or double-click on the
              text box to start editing the content and make sure to add any
              relevant details or information that you want to share with your
              visitors.
            </p>
          </div>

          {/* Image on the right */}
          <div className="flex items-center justify-center">
            <img
              src={logo} // Placeholder image path, replace with the actual image path
              alt="Vision Image"
              className="w-full h-auto object-cover shadow-lg rounded-lg"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
