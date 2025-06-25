import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router';

import { FaStar } from 'react-icons/fa';
import { valueContext } from '../../RootLayout/RootLayout';

const AppDetails = () => {

//title set
useEffect(()=>{
  document.title = "App Details | Apps";
},[])

  //next

  const { id } = useParams();
  const data = useLoaderData();
  const { user } = useContext(valueContext);

  const singleData = data.find(app => app.id === id);

  

  const [isInstalled, setIsInstalled] = useState(false);
  const [canReview, setCanReview] = useState(false);
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState(singleData?.reviews || []);

  const handleToggleInstall = () => {
    if (!isInstalled) {
      setIsInstalled(true);
      setCanReview(true);
    } else {
      setIsInstalled(false);
    }
  };

  const handleSubmitReview = () => {
    if (!canReview || !user) return;

    const newReview = {
      user: user.displayName || 'Anonymous',
      photoURL: user.photoURL || '',
      rating,
      comment: reviewText,
    };

    setReviews(prev => [...prev, newReview]);
    setReviewText('');
    setRating(0);
  };

  if (!singleData) {
    return (
      <div className="max-w-2xl mx-auto mt-20 p-6 text-center text-red-600 bg-white rounded shadow">
        <h2 className="text-2xl font-semibold mb-2">❌ App Not Found</h2>
        <p>The app you are looking for does not exist in our database. Please use a valid URL.</p>
        <div className="mt-4">
          <Link
            to="/"
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            🔙 Back to APPs
          </Link>
        </div>
      </div>
    );
  }
  

  return (
    <div className="max-w-4xl mx-auto p-4 mt-20">
      <div className="bg-white shadow-md rounded-lg overflow-hidden mb-6">
        <img
          src={singleData.banner}
          alt={singleData.name}
          className="w-full h-56 object-cover"
        />
        <div className="p-4">
          <div className="flex items-center gap-4">
            <img
              src={singleData.thumbnail}
              alt={singleData.name}
              className="w-20 h-20 rounded-full object-cover border-2 border-gray-300"
            />
            <div>
              <h2 className="text-2xl font-semibold">{singleData.name}</h2>
              <p className="text-gray-600">{singleData.developer}</p>
              <p className="text-yellow-500 flex items-center">
                <FaStar className="mr-1" /> {singleData.rating}
              </p>
            </div>
          </div>

          <div className="mt-4">
            <p><strong>Category:</strong> {singleData.category}</p>
            <p><strong>Downloads:</strong> {singleData.downloads.toLocaleString()}</p>
            <p className="mt-2 text-gray-700">{singleData.description}</p>
            <ul className="list-disc list-inside mt-2 text-gray-700">
              {singleData.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>

          <button
            onClick={handleToggleInstall}
            className={`mt-4 px-4 py-2 rounded font-semibold ${
              isInstalled ? 'bg-red-500' : 'bg-green-600'
            } text-white`}
          >
            {isInstalled ? 'Uninstall' : 'Install'}
          </button>
        </div>
      </div>

      {/* Review Section */}
      <div className="bg-white shadow-md rounded-lg p-4">
        <h3 className="text-xl font-semibold mb-2">Leave a Review</h3>
        {!canReview && (
          <p className="text-red-500 text-sm mb-2">You must install the app before submitting a review.</p>
        )}
        <div className="flex gap-2 mb-2">
          {[1, 2, 3, 4, 5].map((num) => (
            <FaStar
              key={num}
              onClick={() => canReview && setRating(num)}
              className={`cursor-pointer text-2xl ${
                num <= rating ? 'text-yellow-500' : 'text-gray-300'
              }`}
            />
          ))}
        </div>
        <textarea
          rows="3"
          placeholder="Write your review..."
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          disabled={!canReview}
          className="w-full border rounded p-2 mb-2"
        ></textarea>
        <button
          onClick={handleSubmitReview}
          disabled={!canReview || !user}
          className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          Submit Review
        </button>
      </div>

      {/* Submitted Reviews */}
      <div className="bg-white shadow-md rounded-lg p-4 mt-6">
        <h3 className="text-xl font-semibold mb-4">Reviews</h3>
        {reviews.length === 0 ? (
          <p>No reviews yet.</p>
        ) : (
          reviews.map((rev, idx) => (
            <div key={idx} className="border-b py-3">
              <div className="flex items-center gap-2 mb-1">
                {rev.photoURL && (
                  <img
                    src={rev.photoURL}
                    alt={rev.user}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                )}
                <span className="font-semibold">@{rev.user}</span>
              </div>
              <div className="flex text-yellow-500 mb-1">
                {[...Array(rev.rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p className="text-gray-700">{rev.comment}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AppDetails;
