import React from "react";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 text-center">
      <img
        src="https://i.ibb.co/X09qLJ6/5203299.jpg"
        alt="Sad chef with empty plate"
        className="w-48 h-48 mb-8"
      />
      <h1 className="text-9xl font-extrabold text-blue-400 mb-6">404</h1>
      <p className="text-2xl font-semibold mb-4 text-gray-700">
        Oops! This service page is cooking somewhere else.
      </p>
      <p className="mb-8 text-gray-600 max-w-md">
        We couldn't find the service you were looking for. Maybe try browsing
        our available services instead?
      </p>

      <Link
        to="/"
        className="inline-block bg-blue-500 hover:bg-blue-300 text-white font-bold py-3 px-8 rounded shadow"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
