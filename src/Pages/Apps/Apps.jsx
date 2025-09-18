import React, { useEffect } from "react";
import APPSlider from "../../components/AppSlider/APPSlider";
import { useLoaderData } from "react-router";
import SingleApp from "../../components/SingleCard/SingleApp";
import Testimonials from "../../components/Testimonials/Testimonials";
import AppBanner from "../../components/AppBanner/AppBanner";
import Contact from "../contact/Contact";
import FAQ from "../faq/Faq";
import Aos from "aos";
import "aos/dist/aos.css";

// Dummy app generator
const getDummyApps = (count) =>
  Array.from({ length: count }).map((_, idx) => ({
    id: `dummy-${idx}`,
    name: "Coming Soon",
    developer: "TBD",
    thumbnail: "https://via.placeholder.com/150",
    banner: "",
    downloads: 0,
    category: "Unknown",
    rating: 0,
    description: "New app coming soon.",
    features: [],
    reviews: [],
    isDummy: true,
  }));

const fillToFour = (apps) => {
  const filled = [...apps];
  if (filled.length < 4) {
    const dummyApps = getDummyApps(4 - filled.length);
    filled.push(...dummyApps);
  }
  return filled;
};

const Apps = () => {
  const data = useLoaderData();

  //set page title
  useEffect(() => {
    document.title = "Apps | my App";
  }, []);

  // Get top 4 apps by rating for Trending
  const trendingApps = [...data]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 4);

  const trendingIds = trendingApps.map((app) => app.id);

  // Exclude trending apps from other categories
  const nonTrendingApps = data.filter((app) => !trendingIds.includes(app.id));

  const productivityApps = fillToFour(
    nonTrendingApps.filter((app) => app.category === "Productivity").slice(0, 4)
  );
  const healthcareApps = fillToFour(
    nonTrendingApps.filter((app) => app.category === "Healthcare").slice(0, 4)
  );
  const educationalApps = fillToFour(
    nonTrendingApps.filter((app) => app.category === "Educational").slice(0, 4)
  );

  // Animation
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <>
      <div className="w-full">
        <AppBanner />
      </div>

      <div data-aos="zoom-out" className="">
        <APPSlider />

        {/* Trending Section */}
        <section data-aos="fade-up" className="mt-16 lg:container mx-auto">
          <div className="w-11/12 mx-auto">
            <h2 className="text-3xl font-bold mb-3 text-center ">
              Trending <span className="text-primary">Apps</span>
            </h2>
            <p className="text-gray-500 text-sm w-1/2 mx-auto mt-2 text-center mb-10">
              Trending apps are constantly evolving. Currently, social media,
              AI, and video platforms dominate by offering users highly
              engaging, personalized, and useful experiences.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {trendingApps.map((app) => (
                <SingleApp key={app.id} app={app} isTrending={true} />
              ))}
            </div>
          </div>
        </section>

        {/* Productivity Section */}
        <section data-aos="zoom-in" className="mt-16  lg:container mx-auto">
          <div className="w-11/12 mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center">
              Productivity <span className="text-primary">Apps</span>
            </h2>
            <p className="text-gray-500 text-sm w-1/2 mx-auto mt-2 text-center mb-10">
              Productivity apps are digital tools that help users manage tasks,
              track time, and streamline workflows. They boost efficiency and
              organization, helping people and teams get more done
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {productivityApps.map((app) => (
                <SingleApp key={app.id} app={app} isTrending={false} />
              ))}
            </div>
          </div>
        </section>

        {/* Healthcare Section */}
        <section data-aos="flip-left" className="mt-16  lg:container mx-auto">
          <div className="w-11/12 mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center">
              Healthcare <span className="text-primary">Apps</span>
            </h2>
            <p className="text-gray-500 text-sm w-1/2 mx-auto mt-2 text-center mb-10">
              Healthcare apps empower you to manage your health. booking
              appointments, tracking fitness goals, monitoring symptoms, and
              connecting with medical professionals for better care.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {healthcareApps.map((app) => (
                <SingleApp key={app.id} app={app} isTrending={false} />
              ))}
            </div>
          </div>
        </section>

        {/* Educational Section */}
        <section data-aos="slide-right" className="mt-16  lg:container mx-auto">
          <div className="w-11/12 mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center">
              Educational <span className="text-primary">Apps</span>
            </h2>
            <p className="text-gray-500 text-sm w-1/2 mx-auto mt-2 text-center mb-10">
              Educational apps make learning engaging and accessible. They offer
              interactive lessons, games, and quizzes on any subject, helping
              users of all ages acquire new knowledge and skills.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {educationalApps.map((app) => (
                <SingleApp key={app.id} app={app} isTrending={false} />
              ))}
            </div>
          </div>
        </section>
      </div>

      <div
        data-aos="slide-left"
        className="space-y-8 px-4 mt-16 lg:container mx-auto"
      >
        <Testimonials></Testimonials>
      </div>

      <div>
        <FAQ />
      </div>
      <div>
        <Contact />
      </div>
    </>
  );
};

export default Apps;
