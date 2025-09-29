// import React, { useState, useEffect } from "react";
// import { useLoaderData } from "react-router";
// import ServiceCard from "../components/ServiceCard";
// import { Spinner } from "@material-tailwind/react";

// const Services = () => {
//   const services = useLoaderData();
//   const [searchText, setSearchText] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("");
//   const [ratings, setRatings] = useState({}); // { serviceId: avgRating }
//   const [loadingRatings, setLoadingRatings] = useState(true);

//   // Filter services based on search and category
//   const filteredServices = services.filter((service) => {
//     const matchesSearch = service.title
//       .toLowerCase()
//       .includes(searchText.toLowerCase());

//     const matchesCategory =
//       !selectedCategory || service.category === selectedCategory;

//     return matchesSearch && matchesCategory;
//   });

//   useEffect(() => {
//     async function fetchAllRatings() {
//       try {
//         // Prepare promises for all review fetches
//         const promises = services.map((service) =>
//           fetch(
//             `https://service-system-server.vercel.app/reviews/${service._id}`
//           )
//             .then((res) => res.json())
//             .then((reviews) => {
//               if (!reviews.length) return { serviceId: service._id, avg: 0 };
//               const total = reviews.reduce(
//                 (sum, review) => sum + (review.rating || 0),
//                 0
//               );
//               const avg = total / reviews.length;
//               return { serviceId: service._id, avg };
//             })
//             .catch(() => ({ serviceId: service._id, avg: 0 }))
//         );

//         // Wait for all to complete
//         const results = await Promise.all(promises);

//         // Convert array to object map
//         const ratingsMap = {};
//         results.forEach(({ serviceId, avg }) => {
//           ratingsMap[serviceId] = avg;
//         });

//         setRatings(ratingsMap);
//       } catch (error) {
//         console.error("Failed to fetch ratings", error);
//       } finally {
//         setLoadingRatings(false);
//       }
//     }

//     fetchAllRatings();
//   }, [services]);

//   return (
//     <div className="pt-20 px-4 w-10/12 mx-auto">
//       <div className="space-y-4 text-center md:text-left">
//         <h1 className="text-4xl font-bold">All Services</h1>
//         <p className="text-gray-500 text-xl">
//           Discover amazing services from our trusted providers
//         </p>
//       </div>

//       {/* Search and Category Filter */}
//       <div className="mt-8 mb-8 flex flex-col md:flex-row gap-4 justify-between items-center">
//         <div className="w-full md:w-1/3">
//           <input
//             type="search"
//             value={searchText}
//             onChange={(e) => setSearchText(e.target.value)}
//             className="input input-bordered w-full text-lg "
//             placeholder=" Search services..."
//           />
//         </div>

//         <select
//           value={selectedCategory}
//           onChange={(e) => setSelectedCategory(e.target.value)}
//           className="select select-bordered w-full md:w-1/4 text-lg"
//           name="category"
//         >
//           <option value="">All Categories</option>
//           <option>Technology</option>
//           <option>Marketing</option>
//           <option>Photograph</option>
//           <option>Design</option>
//           <option>Consulting</option>
//           <option>Education</option>
//           <option>Healthcare</option>
//           <option>Food</option>
//           <option>Others</option>
//         </select>
//       </div>

//       {/* Loading indicator */}
//       {loadingRatings && (
//         <p className="text-center text-lg py-10 ">
//           {/* <span className="loading loading-spinner loading-md"></span> */}
//           <Spinner className="" />
//         </p>
//       )}

//       {/* Services Grid */}
//       {!loadingRatings && (
//         <>
//           {filteredServices.length > 0 ? (
//             <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 px-4 py-10">
//               {filteredServices.map((service) => (
//                 <ServiceCard
//                   key={service._id}
//                   service={service}
//                   rating={ratings[service._id] || 0}
//                 />
//               ))}
//             </div>
//           ) : (
//             <p className="text-center text-xl font-semibold py-10">
//               No matching services found.
//             </p>
//           )}
//         </>
//       )}
//     </div>
//   );
// };

// export default Services;

import React, { useState, useEffect } from "react";
import { useLoaderData, useNavigation } from "react-router";
import ServiceCard from "../components/ServiceCard";
import Spinner from "../components/Spinner";

const Services = () => {
  const services = useLoaderData();
  const navigation = useNavigation();

  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [ratings, setRatings] = useState({});
  const [loadingRatings, setLoadingRatings] = useState(true);
  const [sortOrder, setSortOrder] = useState(""); // "asc" or "desc"

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Filter services based on search & category
  const filteredServices = services
    .filter((service) => {
      const matchesSearch = service.title
        .toLowerCase()
        .includes(searchText.toLowerCase());
      const matchesCategory =
        !selectedCategory || service.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sortOrder === "asc") return a.price - b.price;
      if (sortOrder === "desc") return b.price - a.price;
      return 0;
    });

  const totalPages = Math.ceil(filteredServices.length / itemsPerPage);

  const paginatedServices = filteredServices.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [searchText, selectedCategory, sortOrder]);

  // Fetch ratings for each service
  useEffect(() => {
    async function fetchAllRatings() {
      try {
        const promises = services.map((service) =>
          fetch(
            `https://service-system-server.vercel.app/reviews/${service._id}`
          )
            .then((res) => res.json())
            .then((reviews) => {
              if (!reviews.length) return { serviceId: service._id, avg: 0 };
              const total = reviews.reduce(
                (sum, review) => sum + (review.rating || 0),
                0
              );
              const avg = total / reviews.length;
              return { serviceId: service._id, avg };
            })
            .catch(() => ({ serviceId: service._id, avg: 0 }))
        );

        const results = await Promise.all(promises);
        const ratingsMap = {};
        results.forEach(({ serviceId, avg }) => {
          ratingsMap[serviceId] = avg;
        });
        setRatings(ratingsMap);
      } catch (error) {
        console.error("Failed to fetch ratings", error);
      } finally {
        setLoadingRatings(false);
      }
    }

    fetchAllRatings();
  }, [services]);

  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  if (navigation.state === "loading" || loadingRatings) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="pt-20 px-4 w-10/12 mx-auto">
      {/* Header */}
      <div className="space-y-4 text-center md:text-left">
        <h1 className="text-4xl font-bold">All Services</h1>
        <p className="text-gray-500 text-xl">
          Discover amazing services from our trusted providers
        </p>
      </div>

      {/* Filters & Sorting */}
      <div className="mt-8 mb-8 flex flex-col md:flex-row gap-4 justify-between items-center">
        <input
          type="search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="input input-bordered w-full md:w-1/3 text-lg"
          placeholder="Search services..."
        />

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="select select-bordered w-full md:w-1/4 text-lg"
        >
          <option value="">All Categories</option>
          <option>Technology</option>
          <option>Marketing</option>
          <option>Photograph</option>
          <option>Design</option>
          <option>Consulting</option>
          <option>Education</option>
          <option>Healthcare</option>
          <option>Food</option>
          <option>Others</option>
        </select>

        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="select select-bordered w-full md:w-1/5 text-lg"
        >
          <option value="">Sort by Price</option>
          <option value="asc">Price: Low → High</option>
          <option value="desc">Price: High → Low</option>
        </select>
      </div>

      {/* Services Grid */}
      {paginatedServices.length > 0 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 px-4 py-10">
            {paginatedServices.map((service) => (
              <div key={service._id} className="h-full">
                <ServiceCard
                  service={service}
                  rating={ratings[service._id] || 0}
                  className="h-full" // Ensure uniform card height
                />
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center gap-2 mb-10">
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="btn btn-sm"
            >
              Prev
            </button>

            {[...Array(totalPages)].map((_, idx) => {
              const pageNum = idx + 1;
              return (
                <button
                  key={pageNum}
                  onClick={() => goToPage(pageNum)}
                  className={`btn btn-sm ${
                    pageNum === currentPage ? "btn-primary" : "btn-outline"
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}

            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="btn btn-sm"
            >
              Next
            </button>
          </div>
        </>
      ) : (
        <p className="text-center text-xl font-semibold py-10">
          No matching services found.
        </p>
      )}
    </div>
  );
};

export default Services;
