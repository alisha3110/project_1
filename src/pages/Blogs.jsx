import React, { useState } from "react";
import { motion } from "framer-motion";
import { blogs } from "../constants";
import Modal from "../components/Modal";
import logo from "../assets/brand_logo.png";
import { MessageCircle, Heart, Eye, StepForward, StepBack } from "lucide-react";

const Blog = ({ blog, onClick }) => {
  return (
    <motion.div
      className="p-4 w-full sm:w-1/2 md:w-1/2 lg:w-1/2 flex flex-col items-center mb-1 cursor-pointer"
      whileHover={{ scale: 1.01 }}
      onClick={() => onClick(blog)}
    >
      <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="flex">
          <img className="w-1/2  object-fit" src={logo} alt="" />
          <div className="p-5 flex-1">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 w-full line-clamp-2">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-700 p-4 flex items-center justify-between">
          <div className="flex space-x-4">
            <button
              className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white flex items-center space-x-1"
              // onClick={handleLike}
            >
              <Eye className="w-4" />
              <span>100</span>
            </button>
            <button
              className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white flex items-center space-x-1"
              // onClick={handleView}
            >
              <MessageCircle className="w-4" />
              <span>100</span>
            </button>
          </div>
          <button
            className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white flex items-center space-x-1"
            // onClick={handleComment}
          >
            <Heart className="w-4" />
            <span>100</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const Blogs = () => {
  const [selectedblog, setSelectedblog] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (blog) => {
    setSelectedblog(blog);
  };

  const closeModal = () => {
    setSelectedblog(null);
  };

  const images = [
    "https://via.placeholder.com/800x400?text=Image+1",
    "https://via.placeholder.com/800x400?text=Image+2",
    "https://via.placeholder.com/800x400?text=Image+3",
  ];

  const totalSlides = images.length;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="h-full flex flex-col items-center min_height"
    >
      <section className="py-12 dark:bg-gray-900 w-full">
        <div className="container mx-auto px-4 w-full">
          <h2 className="text-3xl font-semibold text-center mb-8 text-gray-900 dark:text-gray-100">
            Here are our Blogs
          </h2>
          <div className="flex flex-wrap">
            {blogs.map((blog) => (
              <Blog key={blog.title} blog={blog} onClick={openModal} />
            ))}
          </div>
        </div>

        {selectedblog && (
          <Modal
            isOpen={!!selectedblog}
            onClose={closeModal}
            blog={selectedblog}
          >
            <div className="relative flex flex-col items-center m-4">
              {/* Carousel */}
              <div className="relative overflow-hidden sm:w-full md:w-4/5 lg:w-3/5 rounded-lg shadow-md">
                <div
                  className="flex transition-transform duration-700 ease-in-out"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {images.map((src, index) => (
                    <img
                      key={index}
                      src={logo}
                      alt={`Slide ${index + 1}`}
                      className="w-full object-cover rounded-lg"
                    />
                  ))}
                </div>

                {/* Prev Button */}
                <button
                  className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-gray-800 p-1 lg:p-2 rounded-full shadow-lg border border-gray-300 hover:bg-gray-200 focus:outline-none transition duration-300"
                  onClick={prevSlide}
                >
                  <StepBack className="w-3 lg:w-5" />
                </button>

                {/* Next Button */}
                <button
                  className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-gray-800 p-1 lg:p-2 rounded-full shadow-lg border border-gray-300 hover:bg-gray-200 focus:outline-none transition duration-300"
                  onClick={nextSlide}
                >
                  <StepForward className="w-3 lg:w-5" />
                </button>

                {/* Navigation Dots */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      className={`w-2 h-2 rounded-full ${
                        currentIndex === index ? "bg-gray-800" : "bg-gray-300"
                      } transition-all duration-300 lg:w-3 lg:h-3 `}
                      onClick={() => setCurrentIndex(index)}
                    />
                  ))}
                </div>
              </div>

              {/* Title and Scrollable Description */}
              <div className="p-4 md:p-6 mt-6 bg-gray-100 rounded-lg shadow-lg w-full ">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                  Title of the Carousel
                </h2>
                <div className="max-h-[200px] md:max-h-[300px] overflow-y-auto p-2 md:p-4">
                  <p className="text-sm md:text-base text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur ac justo vel ligula tincidunt scelerisque. Duis a
                    tortor vitae eros condimentum cursus. Suspendisse potenti.
                    Phasellus vel neque odio. Fusce eget est a dui pretium
                    malesuada. Integer vel semper erat. Duis nec magna sit amet
                    lectus luctus bibendum et et urna. Vestibulum ante ipsum
                    primis in faucibus orci luctus et ultrices posuere cubilia
                    curae; Phasellus venenatis felis nec ex vestibulum, ac
                    luctus orci eleifend.
                    <br />
                    <br />
                    Donec auctor vestibulum metus. Nam gravida orci ac augue
                    pharetra, at scelerisque risus fringilla. Aenean tristique
                    est at orci aliquam dictum. Duis in urna ac tortor ultrices
                    commodo. Nulla facilisi. Sed venenatis enim a dui dapibus
                    congue. Nam feugiat erat eu ex auctor, nec pretium sapien
                    convallis. Vivamus ac orci sit amet libero condimentum
                    interdum ac in erat. Donec vel viverra nulla. Mauris
                    suscipit elit ut diam vestibulum, ac varius velit fermentum.
                  </p>
                </div>
              </div>
            </div>
          </Modal>
        )}
      </section>
    </motion.div>
  );
};

export default Blogs;
