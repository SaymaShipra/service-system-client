import React, { useContext, useEffect, useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import { useLoaderData } from "react-router";
import { AuthContext } from "../context/AuthContext";

const ServiceDetails = () => {
  const {
    _id: serviceId,
    title,
    description,
    image,
    company,
    website,

    price,
  } = useLoaderData(); // Make sure your loader returns website and email

  const { user } = useContext(AuthContext);

  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const currentDate = new Date().toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
  // Load reviews
  useEffect(() => {
    fetch(`https://service-system-server.vercel.app/reviews/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [serviceId]);

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const comment = form.review.value;

    const newReview = {
      serviceId,
      name: user?.displayName || "Anonymous",
      avatar: user?.photoURL || "",
      initial: user?.displayName?.charAt(0).toUpperCase() || "U",
      rating,
      comment,
      date: new Date().toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
    };

    const res = await fetch(
      "https://service-system-server.vercel.app/reviews",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newReview),
      }
    );

    const result = await res.json();
    if (result.insertedId || result.acknowledged) {
      setReviews([newReview, ...reviews]);
      form.reset();
      setRating(0);
    }
  };

  return (
    <div className="w-10/12 p-6 pt-20 mx-auto">
      {/* Service Info */}
      <div className="card bg-base-100 shadow-md w-full">
        <img
          className="w-full h-96 rounded-lg shadow-lg object-cover"
          src={image}
          alt={title}
        />
        <div className="flex justify-between p-5 pt-7 flex-col md:flex-row gap-5">
          <div>
            <h2 className="text-xl md:text-5xl font-semibold pb-5">{title}</h2>
            <p className="text-gray-600 text-lg md:text-xl">{description}</p>
            <div className="pt-4">
              {website && (
                <p className="font-semibold">
                  Website:{" "}
                  <a
                    href={website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    {website}
                  </a>
                </p>
              )}
              <h3 className=" font-bold pt-2">
                Provider Email:{" "}
                <span className="font-medium text-gray-600">
                  {user?.email || "anonymous@example.com"}
                </span>
              </h3>
              <h3>
                Added Date: <span className="font-medium">{currentDate}</span>
              </h3>
            </div>
          </div>
          <div className="text-xl text-right">
            <h3 className="text-blue-500 font-bold text-xl md:text-3xl pb-2">
              {price}
            </h3>
            <h3 className="text-gray-500">{company}</h3>
          </div>
        </div>
      </div>

      {/* Review Form and List */}
      <div className="flex flex-col md:flex-row justify-between gap-10 pt-10">
        {/* Review Form */}
        <form
          className="card bg-base-100 shadow-md w-full p-5"
          onSubmit={handleReviewSubmit}
        >
          <h1 className="text-3xl font-semibold">Add Your Review</h1>
          <p className="text-gray-600">
            Share your experience with this service
          </p>

          {/* Rating */}
          <div className="pb-4">
            <p className="font-bold pt-3">Rating</p>
            <div className="flex gap-1 text-yellow-500 text-2xl">
              {[...Array(5)].map((_, i) => {
                const currentRating = i + 1;
                return (
                  <span
                    key={i}
                    onClick={() => setRating(currentRating)}
                    onMouseEnter={() => setHoverRating(currentRating)}
                    onMouseLeave={() => setHoverRating(0)}
                    className="cursor-pointer"
                  >
                    {currentRating <= (hoverRating || rating) ? (
                      <FaStar />
                    ) : (
                      <FaRegStar />
                    )}
                  </span>
                );
              })}
            </div>
          </div>

          {/* Comment */}
          <div>
            <label className="label text-black pb-2">Review</label>
            <textarea
              placeholder="Write your review here..."
              name="review"
              className="textarea textarea-lg w-full h-28 text-base"
              required
            ></textarea>
          </div>

          <input
            type="submit"
            className="btn mt-8 w-full text-white bg-blue-500 text-lg"
            value="Submit Review"
          />
        </form>

        {/* Reviews List */}
        <div className="w-full">
          <h1 className="text-3xl font-bold mb-4">
            Reviews ({reviews.length})
          </h1>

          {reviews.map((rev, index) => (
            <div
              key={index}
              className="card bg-base-100 shadow-md w-full p-5 mb-4"
            >
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full border-2 border-blue-600 flex items-center justify-center overflow-hidden bg-blue-500 text-white font-bold text-lg">
                  {rev.avatar ? (
                    <img
                      src={rev.avatar}
                      alt={rev.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span>{rev.initial}</span>
                  )}
                </div>

                <div className="w-full">
                  <div className="flex justify-between items-center">
                    <h1 className="font-bold">{rev.name}</h1>
                    <p className="text-sm text-gray-400">{rev.date}</p>
                  </div>
                  <div className="flex gap-1 text-yellow-500 text-sm pb-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                  <p className="text-gray-600">{rev.comment}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
