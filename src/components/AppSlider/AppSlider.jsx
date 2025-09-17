import React from "react";
import Slider from "react-slick";
import { FaPlay } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AppSlider = () => {
  const apps = [
    {
      id: 1,
      name: "OTR - Offroad Car Driving Game",
      image: "https://i.postimg.cc/Z5D6bqM0/unnamed-3.png",
      icon: "https://i.postimg.cc/Z5D6bqM0/unnamed-3.png",
      rating: 4.5,
    },
    {
      id: 2,
      name: "WWE SuperCard - Wrestling Game",
      image: "https://i.postimg.cc/4NfcptCm/unnamed-1.webp",
      icon: "https://i.postimg.cc/4NfcptCm/unnamed-1.webp",
      category: "Sports · Card",
      rating: 3.7,
    },
    {
      id: 3,
      name: "Mobile Legends: Bang Bang",
      image: "https://i.postimg.cc/BZgLZ68s/unnamed-2.webp",
      icon: "https://i.postimg.cc/BZgLZ68s/unnamed-2.webp",
      category: "Action · Strategy",
      rating: 4.1,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1, centerMode: true } },
    ],
  };

  return (
    <div className="p-4 sm:p-5 md:mt-16 mx-auto overflow-hidden">
      <div className="pb-2 text-center">
        <h2 className="text-3xl font-bold mb-1">
          Play on the big <span className="text-[#7f22fe]">screen</span>
        </h2>
        <p className="text-gray-500 text-sm w-full sm:w-1/2 mx-auto mt-2">
          Don't watch your favorites on a small screen. Bring the cinema
          experience home and immerse yourself in stunning visuals and powerful
          sound on the big screen.
        </p>
      </div>

      <div className="overflow-hidden">
        {" "}
        {/* slider wrapper */}
        <Slider {...settings}>
          {apps.map((app) => (
            <div key={app.id} className="px-2 sm:px-3 mt-6 sm:mt-10">
              <div className="bg-white rounded-lg shadow-md overflow-hidden group relative flex flex-col h-auto min-h-[380px] sm:min-h-[400px]">
                {/* Image */}
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <img
                    src={app.image}
                    alt={app.name}
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                    <FaPlay className="text-white text-3xl" />
                  </div>
                </div>

                {/* App info */}
                <div className="flex items-center gap-3 p-3 sm:p-4 mt-auto">
                  <img
                    src={app.icon}
                    alt="icon"
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl"
                  />
                  <div>
                    <h3 className="text-sm sm:text-base font-semibold text-gray-900 break-words">
                      {app.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600">
                      {app.category || "No category"}
                    </p>
                    <p className="text-xs sm:text-sm text-yellow-500">
                      ⭐ {app.rating}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default AppSlider;
