import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router";

const AppBannerSlider = () => {
  const images = [
    "https://i.postimg.cc/tTjz9fc7/images.png",
    "https://i.postimg.cc/mgSLdFGq/unnamed-2.png",
    "https://i.postimg.cc/rmYpWd5t/unnamed-3.webp",
    "https://i.postimg.cc/2ykz4k1v/unnamed.jpg",
    "https://i.ibb.co.com/bpxPXRJ/amazon-apps-logo-png-seeklogo-459165.png",
    "https://i.postimg.cc/QtptQY0L/png-transparent-myfitnesspal-physical-fitness-fitness-app-android-android-blue-physical-fitness-silh.png",
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 2 },
      },
    ],
  };

  return (
    <div className="bg-gradient-to-r from-indigo-100 to-blue-300 min-h-screen flex items-center justify-center px-6 md:px-12">
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 lg:container mx-auto">
        {/* Left Text Section */}
        <div className="text-center md:text-left w-full md:w-1/2 space-y-6">
          <h1 className="text-4xl text-primary sm:text-5xl font-bold leading-tight">
            Discover the Best Apps
          </h1>
          <p className="text-sm text-primary">
            Finding the right app can be a challenge. Discover our handpicked
            selection of the best apps across various categories, designed to
            help you live, work, and play better.
          </p>
          <Link to={"/kids"}>
            <button className="bg-primary text-white font-bold px-6 py-3 rounded-lg shadow hover:bg-purple-800 transition">
              Explore Now
            </button>
          </Link>
        </div>

        {/* Right Slider Section */}
        <div className="w-full md:w-1/2">
          <Slider {...settings}>
            {images.map((img, i) => (
              <div key={i} className="px-2">
                <img
                  src={img}
                  alt={`app-${i}`}
                  className="w-full h-40 sm:h-48 object-contain rounded-xl shadow-lg"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default AppBannerSlider;
