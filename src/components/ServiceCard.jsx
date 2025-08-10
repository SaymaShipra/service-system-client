// import React from "react";
// import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
// import { Link } from "react-router";

// const ServiceCard = ({ service, rating }) => {
//   const { _id, title, description, image, category, company, price } = service;

//   // Default rating 0 if none
//   const rate = rating || 0;

//   // Create star icons array for 5 stars
//   const stars = [];

//   for (let i = 1; i <= 5; i++) {
//     if (rate >= i) {
//       // full star
//       stars.push(<FaStar key={i} className="text-yellow-500" />);
//     } else if (rate >= i - 0.5) {
//       // half star
//       stars.push(<FaStarHalfAlt key={i} className="text-yellow-500" />);
//     } else {
//       // empty star
//       stars.push(<FaRegStar key={i} className="text-yellow-500" />);
//     }
//   }

//   // Format rating to 1 decimal place
//   const displayRating = rate.toFixed(1);

//   return (
//     <div className="card bg-base-100 shadow-md w-full relative overflow-hidden hover:shadow-lg transition-shadow">
//       <figure>
//         <img src={image} alt={title} className="h-48 w-full object-cover" />
//         <p className="badge px-4 badge-primary absolute top-2 right-2">
//           {category}
//         </p>
//       </figure>
//       <div className="py-5 px-4">
//         <h2 className="text-3xl font-bold pb-2">{title}</h2>
//         <p className="text-gray-600 pb-3 text-lg">{description}</p>
//         <div className="flex justify-between pb-3 text-xl ">
//           <h3 className="text-gray-500">{company}</h3>
//           <h3 className="text-blue-500 font-bold"> {price}</h3>
//         </div>

//         <div className="flex justify-between items-center">
//           <div className="flex items-center gap-1 font-semibold text-lg">
//             {stars}
//             <span className="ml-1 text-gray-700">({displayRating})</span>
//           </div>
//           <Link to={`/services/${_id}`}>
//             <button className="btn bg-primary text-lg text-white rounded-lg">
//               View Details
//             </button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServiceCard;

import React, { useState } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { Link } from "react-router";

const ServiceCard = ({ service, rating }) => {
  const { _id, title, description, image, category, company, price } = service;

  const [showFullDesc, setShowFullDesc] = useState(false);

  // Default rating 0 if none
  const rate = rating || 0;

  // Create star icons array for 5 stars
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (rate >= i) {
      stars.push(<FaStar key={i} className="text-yellow-500" />);
    } else if (rate >= i - 0.5) {
      stars.push(<FaStarHalfAlt key={i} className="text-yellow-500" />);
    } else {
      stars.push(<FaRegStar key={i} className="text-yellow-500" />);
    }
  }

  // Format rating to 1 decimal place
  const displayRating = rate.toFixed(1);

  // Limit description for preview
  const truncatedDescription =
    description.length > 100 && !showFullDesc
      ? `${description.slice(0, 50)}...`
      : description;

  return (
    <div className="card bg-base-100 shadow-md w-full relative overflow-hidden hover:shadow-lg transition-shadow">
      <figure>
        <img src={image} alt={title} className="h-48 w-full object-cover" />
        <p className="badge px-4 badge-primary absolute top-2 right-2">
          {category}
        </p>
      </figure>
      <div className="py-5 px-4">
        <h2 className="text-3xl font-bold pb-2">{title}</h2>

        <p className="text-gray-600 pb-1 text-lg">{truncatedDescription}</p>
        {description.length > 100 && (
          <button
            onClick={() => setShowFullDesc((prev) => !prev)}
            className="text-primary text-sm font-semibold hover:underline"
          >
            {showFullDesc ? "See less" : "See more"}
          </button>
        )}

        <div className="flex justify-between pb-3 text-xl mt-3">
          <h3 className="text-gray-500">{company}</h3>
          <h3 className="text-blue-500 font-bold">{price}</h3>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1 font-semibold text-lg">
            {stars}
            <span className="ml-1 text-gray-700">({displayRating})</span>
          </div>
          <Link to={`/services/${_id}`}>
            <button className="btn bg-primary text-lg text-white rounded-lg">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
