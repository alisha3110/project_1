import React from "react";
import Slider from "react-slick";
import { StepBack, StepForward } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NextArrow = ({ onClick }) => (
  <button
    className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-gray-800 p-1 lg:p-2 rounded-full shadow-lg border border-gray-300 hover:bg-gray-200 focus:outline-none transition duration-300 z-10"
    onClick={onClick}
  >
    <StepForward className="w-3 lg:w-5" />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-gray-800 p-1 lg:p-2 rounded-full shadow-lg border border-gray-300 hover:bg-gray-200 focus:outline-none transition duration-300 z-10"
    onClick={onClick}
  >
    <StepBack className="w-3 lg:w-5" />
  </button>
);

const Carousel = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="w-full relative">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Slide ${index}`}
              className="w-full object-cover rounded-lg"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
