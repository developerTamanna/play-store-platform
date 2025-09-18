import React, { useEffect } from "react";

const Kids = () => {
  useEffect(() => {
    document.title = "Kids | Apps";
  }, []);
  return (
    <>
      <>
        <section className="bg-gradient-to-r from-indigo-100 to-purple-200 mt-16">
          <div className="relative group hover:shadow-2xl hover:scale-[1.02] duration-300 container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between overflow-hidden rounded-lg">
            {/* Left Text Section */}
            <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
              <h1 className="text-5xl font-bold leading-none sm:text-6xl">
                Celebrate <span className="text-violet-600">Golden</span> Week
                With Sago Mini
              </h1>
              <p className="mt-6 mb-8 text-lg sm:mb-12">
                Make Origami, eat treats, and more
              </p>
            </div>

            {/* Right Image Section */}
            <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
              <img
                src="https://i.postimg.cc/J4cjHLpc/unnamed-1.webp"
                alt=""
                className="object-contain h-72 w-190 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
              />
            </div>

            {/* Bottom Left Small Circle Image */}
            <img
              src="https://i.postimg.cc/J4cjHLpc/unnamed-1.webp"
              alt="corner img"
              className="absolute bottom-4 left-4 w-14 h-14 rounded-full border-2 border-white shadow-md"
            />

            {/* Bottom Right Install Text */}
            <div className="absolute bottom-4 right-4 bg-violet-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg cursor-pointer hover:bg-violet-700">
              Install
            </div>
          </div>
        </section>
      </>

      <section className="bg-white py-12 px-4 mt-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            Recommended for you
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
            {/* Repeat this block for each card */}
            {[
              {
                img: "https://i.postimg.cc/sBGjcrWR/unnamed-10.webp",
                title: "Timpy Cooking Games For Kid",
              },
              {
                img: "https://i.postimg.cc/xN3Tz3zJ/unnamed-2.webp",
                title: "iDraw",
              },
              {
                img: "https://i.postimg.cc/hzxGSB40/unnamed-3.webp",
                title: "youTube Kids",
              },
              {
                img: "https://i.postimg.cc/V5qNpmVf/unnamed-4.webp",
                title: "Nails Salon Games Nail Art",
              },
              {
                img: "https://i.postimg.cc/PPK5fKH0/unnamed-7.webp",
                title: "Numbers Alphabet Tracing",
              },
              {
                img: "https://i.postimg.cc/21681v8y/unnamed-8.webp",
                title: "ABc Song Rhymes Learning Games",
              },
              {
                img: "https://i.postimg.cc/xX4jMCcR/unnamed-9.webp",
                title: "LEGO@ DUPLO@ Marvel",
              },
              {
                img: "https://i.postimg.cc/N5Q0wS31/unnamed-6.webp",
                title: "Baby Pop It",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-purple-200 rounded-xl shadow-md p-4 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300 group"
              >
                <div className="w-28 h-28 rounded-full bg-gray-300 mb-4 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-sm font-semibold text-gray-700">
                  {item.title}
                </h3>

                {/* Rating */}
                <div className="text-yellow-500 mt-2 text-sm">★ 4.5</div>

                {/* Install Button */}
                <button className="mt-3 px-4 py-1 bg-blue-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Install
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-purple-100 py-12 px-4 mt-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            Kids <span className="text-primary">Reviews</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Review 1 */}
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src="https://i.pravatar.cc/100?img=1"
                  alt="Kid 1"
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-700">Liam</h4>
                  <p className="text-yellow-500">⭐⭐⭐⭐⭐</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "I love this game! It's super fun and I learned ABC too!"
              </p>
            </div>

            {/* Review 2 */}
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src="https://i.pravatar.cc/100?img=2"
                  alt="Kid 2"
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-700">Emma</h4>
                  <p className="text-yellow-500">⭐⭐⭐⭐</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Drawing game is my favorite! I made a rainbow!"
              </p>
            </div>

            {/* Review 3 */}
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src="https://i.pravatar.cc/100?img=3"
                  alt="Kid 3"
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-700">Noah</h4>
                  <p className="text-yellow-500">⭐⭐⭐⭐⭐</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Mom said I can play everyday. It's so cool!"
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Kids;
