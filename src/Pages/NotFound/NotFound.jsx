import React from 'react';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
      <img
        src="https://i.ibb.co.com/r2XwgnTq/download.jpg"
        alt="404 Not Found"
        className="w-72 h-auto mb-6"
      />
      <h1 className="text-5xl font-bold text-red-600 mb-4">404 - Page Not Found</h1>
      <p className="text-lg text-gray-600 mb-6">
        Sorry, the page you're looking for doesn't exist or has been moved.
      </p>
      <a
        href="/"
        className="px-5 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
      >
        Go Back Home
      </a>
    </div>
  );
};

export default NotFound;
