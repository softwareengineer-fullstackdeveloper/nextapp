"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const carouselItems = [
  {
    heading: "Transform Your Look",
    paragraph:
      "Experience the ultimate grooming destination for men, where style meets sophistication.",
    buttonText: "Learn More",
    backgroundImage: "/cropped-slide1.webp",
  },
  {
    heading: "Grooming Redefined",
    paragraph:
      "Elevate your style with our expert services, from cuts to shaves, and more.",
    buttonText: "Explore",
    backgroundImage: "/cropped-slide2.webp",
  },
  {
    heading: "Unleash Your Style",
    paragraph:
      "Discover a new you with our premium grooming services, tailored to perfection.",
    buttonText: "Get Started",
    backgroundImage: "/cropped-slide3.webp",
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? carouselItems.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === carouselItems.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section id="carousel" className="w-full">
      <div className="relative w-full h-[550px] overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center transition-all duration-1000 ease-in-out"
          style={{
            backgroundImage: `url(${carouselItems[currentIndex].backgroundImage})`,
          }}
        >
          <div className="flex items-center justify-center w-full h-full bg-black bg-opacity-50">
            <div className="text-center text-white px-4 md:px-10">
              <h1 className="text-4xl md:text-6xl font-bold">
                {carouselItems[currentIndex].heading}
              </h1>
              <p className="mt-4 text-lg md:text-xl">
                {carouselItems[currentIndex].paragraph}
              </p>
              <button className="mt-8 px-6 py-3 bg-yellow-700 hover:bg-yellow-600 transition duration-300 rounded-lg relative z-10">
                {carouselItems[currentIndex].buttonText}
              </button>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 flex items-center justify-between px-4">
          <button
            onClick={goToPrevious}
            className="text-white p-2 bg-black bg-opacity-50 rounded-full hover:bg-opacity-70 transition duration-300"
          >
            <ChevronLeft size={32} />
          </button>
          <button
            onClick={goToNext}
            className="text-white p-2 bg-black bg-opacity-50 rounded-full hover:bg-opacity-70 transition duration-300"
          >
            <ChevronRight size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
