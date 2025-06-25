import React, { useEffect } from 'react';
import APPSlider from '../../components/AppSlider/APPSlider';
import { useLoaderData } from 'react-router';
import SingleApp from '../../components/SingleCard/SingleApp';
import Testimonials from '../../components/Testimonials/Testimonials';
import AppBanner from '../../components/AppBanner/AppBanner';

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
      useEffect(()=>{

        document.title = "Apps | my App"
      },[])

    // Get top 4 apps by rating for Trending
    const trendingApps = [...data]
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 4);

    const trendingIds = trendingApps.map(app => app.id);

    // Exclude trending apps from other categories
    const nonTrendingApps = data.filter(app => !trendingIds.includes(app.id));

    const productivityApps = fillToFour(
        nonTrendingApps.filter(app => app.category === "Productivity").slice(0, 4)
    );
    const healthcareApps = fillToFour(
        nonTrendingApps.filter(app => app.category === "Healthcare").slice(0, 4)
    );
    const educationalApps = fillToFour(
        nonTrendingApps.filter(app => app.category === "Educational").slice(0, 4)
    );

    return (
       <>

       <div className='mt-20'>
        <AppBanner></AppBanner>
       </div>
       
       <div className="space-y-8 px-4">
            <APPSlider />

            {/* Trending Section */}
            <section className='mt-30'>
                <h2 className="text-2xl font-bold mb-4">🔥 Trending Apps</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {trendingApps.map(app => (
                        <SingleApp key={app.id} app={app} isTrending={true} />
                    ))}
                </div>
            </section>

            {/* Productivity Section */}
            <section className='mt-20'>
                <h2 className="text-2xl font-bold mb-4">🧠 Productivity Apps</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {productivityApps.map(app => (
                        <SingleApp key={app.id} app={app} isTrending={false} />
                    ))}
                </div>
            </section>

            {/* Healthcare Section */}
            <section className='mt-20'>
                <h2 className="text-2xl font-bold mb-4">❤️ Healthcare Apps</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {healthcareApps.map(app => (
                        <SingleApp key={app.id} app={app} isTrending={false} />
                    ))}
                </div>
            </section>

            {/* Educational Section */}
            <section className='mt-20'>
                <h2 className="text-2xl font-bold mb-4">📚 Educational Apps</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {educationalApps.map(app => (
                        <SingleApp key={app.id} app={app} isTrending={false} />
                    ))}
                </div>
            </section>
        </div>
       

       <div className='space-y-8 px-4 mt-20'>
        <Testimonials></Testimonials>
       </div>
       
       </>
    );
};

export default Apps;
