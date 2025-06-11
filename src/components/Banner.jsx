import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&h=600&fit=crop",
    title: "Discover Amazing Services",
    subtitle: "Find and review the best services in your area",
    description:
      "Connect with quality service providers and share your experiences",
  },
  {
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=600&fit=crop",
    title: "Share Your Experience",
    subtitle: "Help others by sharing honest reviews",
    description: "Your feedback matters and helps build a trusted community",
  },
  {
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop",
    title: "Grow Your Business",
    subtitle: "List your services and reach more customers",
    description: "Join our platform and showcase your exceptional services",
  },
];

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative md:h-[500px] lg:h-[700px] overflow-hidden">
      {/* Background Layers */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${
            index === currentSlide ? "opacity-100 z-0" : "opacity-0 z-0"
          }`}
          style={{ backgroundImage: `url('${slide.image}')` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
      ))}

      {/* Content - Centered both vertically and horizontally */}
      <div className="relative z-10 h-full flex items-center justify-center px-4 md:px-8 text-white text-center">
        <div className="max-w-3xl">
          <h1 className="text-7xl font-bold mb-4">
            {slides[currentSlide].title}
          </h1>
          <h2 className="text-2xl text-blue-200 font-semibold mb-4">
            {slides[currentSlide].subtitle}
          </h2>
          <p className="text-xl mb-6">{slides[currentSlide].description}</p>
          <div className="flex justify-center gap-4">
            <Link to="/service">
              <button className="btn bg-blue-500 text-white hover:bg-gray-200 text-lg">
                Explore Service <FaArrowRight />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
