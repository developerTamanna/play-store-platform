import React from 'react';
import { Link } from 'react-router';

const SingleApp = ({ app, isTrending }) => {
  return (
    <Link to={`/appdetails/${app.id}`} className="block">
      <div
        className={`p-4 rounded-2xl shadow-lg relative bg-white transition duration-300 hover:shadow-lg ${
          app.isDummy ? 'opacity-50 blur-sm pointer-events-none' : 'opacity-100'
        } flex flex-col h-full`}
      >
        {/* Trending Badge */}
        {isTrending && !app.isDummy && (
          <span className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded-full shadow">
            🔥 Trending
          </span>
        )}

        {/* Thumbnail */}
        <div className="w-full h-48 mb-3">
          <img
            src={app.thumbnail}
            alt={app.name}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* App Name */}
        <h3 className="text-lg font-semibold text-gray-800 truncate">{app.name}</h3>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
          {app.description}
        </p>

        {/* Rating & Downloads */}
        <div className="flex justify-between items-center text-sm text-gray-600 mt-auto">
          {/* Rating */}
          <div className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 .587l3.668 7.431L24 9.748l-6 5.847L19.336 24 12 20.019 4.664 24 6 15.595 0 9.748l8.332-1.73z" />
            </svg>
            <span>{app.rating}</span>
          </div>

          {/* Downloads */}
          <div className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-blue-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M12 12v6m0 0l-3-3m3 3l3-3m-9-4V6a2 2 0 012-2h6a2 2 0 012 2v2"
              />
            </svg>
            <span>{(app.downloads / 1000).toFixed(0)}K+</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SingleApp;
