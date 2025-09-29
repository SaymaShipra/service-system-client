// src/pages/Dashboard/Overview.jsx
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router";
import {
  PlusCircle,
  Star,
  Settings,
  ClipboardList,
  Eye,
  Edit2,
} from "lucide-react";

const Overview = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [stats, setStats] = useState({ services: 0, reviews: 0 });
  const [recentServices, setRecentServices] = useState([]);
  const [recentReviews, setRecentReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (!user?.email) return;
      setLoading(true);
      try {
        // Fetch user services
        const servicesRes = await fetch(
          `https://service-system-server.vercel.app/myServices?userEmail=${user.email}`
        );
        const servicesData = await servicesRes.json();

        // Fetch user reviews
        const reviewsRes = await fetch(
          `https://service-system-server.vercel.app/myReviews?userEmail=${user.email}`
        );
        const reviewsData = await reviewsRes.json();

        setStats({
          services: servicesData.length,
          reviews: reviewsData.length,
        });

        // Show only latest 3 services
        setRecentServices(servicesData.slice(-3).reverse());
        setRecentReviews(reviewsData.slice(-3).reverse());
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [user?.email]);

  const statCard = (title, value, desc, color, icon) => (
    <div
      className={`card bg-base-100 shadow-lg border-l-4 border-${color}-500 hover:shadow-xl transition-all duration-300`}
    >
      <div className="card-body flex items-center gap-4">
        <div className={`p-3 rounded-full bg-${color}-100 text-${color}-600`}>
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-2xl font-bold">{value}</p>
          <p className="text-gray-500 text-sm">{desc}</p>
        </div>
      </div>
    </div>
  );

  if (loading) {
    return (
      <div className="flex justify-center items-center h-full">
        <p className="text-gray-500">Loading dashboard...</p>
      </div>
    );
  }

  return (
    <div className="p-6 mt-20 space-y-8">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-xl shadow-lg flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">
            Welcome back, {user?.displayName || "User"}!
          </h1>
          <p className="mt-2 text-gray-200">
            Here's your dashboard summary and quick actions.
          </p>
        </div>
        <ClipboardList className="w-14 h-14 opacity-50" />
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {statCard(
          "My Services",
          stats.services,
          "Active services",
          "blue",
          <Settings />
        )}
        {statCard(
          "My Reviews",
          stats.reviews,
          "Feedback received",
          "green",
          <Star />
        )}
        {statCard(
          "Account Status",
          "Active",
          "All systems go",
          "purple",
          <PlusCircle />
        )}
      </div>

      {/* Quick Actions */}
      <div className="card bg-base-100 shadow-lg rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => navigate("/dashboard/addService")}
            className="btn btn-primary btn-lg flex-1 md:flex-auto"
          >
            Add New Service
          </button>
          <button
            onClick={() => navigate("/dashboard/myServices")}
            className="btn bg-purple-500 text-white btn-lg flex-1 md:flex-auto"
          >
            My Services
          </button>
          <button
            onClick={() => navigate("/dashboard/myReviews")}
            className="btn bg-blue-600 text-white btn-lg flex-1 md:flex-auto"
          >
            My Reviews
          </button>
        </div>
      </div>

      {/* Recent Services */}
      <div className="card bg-base-100 shadow-lg rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Services</h2>
        {recentServices.length === 0 ? (
          <p className="text-gray-500">No services added yet.</p>
        ) : (
          <ul className="space-y-2">
            {recentServices.map((service) => (
              <li
                key={service._id}
                className="flex justify-between items-center p-3 rounded hover:bg-gray-100 transition"
              >
                <div>
                  <p className="font-semibold">{service.title}</p>
                  <p className="text-gray-500 text-sm">{service.category}</p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => navigate(`/dashboard/myServices`)}
                    className="btn btn-sm btn-outline"
                  >
                    <Eye size={16} />
                  </button>
                  <button
                    onClick={() =>
                      navigate(`/dashboard/updateService/${service._id}`)
                    }
                    className="btn btn-sm btn-primary"
                  >
                    <Edit2 size={16} />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Recent Reviews */}
      <div className="card bg-base-100 shadow-lg rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Reviews</h2>
        {recentReviews.length === 0 ? (
          <p className="text-gray-500">No reviews yet.</p>
        ) : (
          <ul className="space-y-2">
            {recentReviews.map((review) => (
              <li
                key={review._id}
                className="p-3 rounded border hover:bg-gray-50 transition"
              >
                <p className="font-semibold">
                  {review.serviceTitle || "Service"}
                </p>
                <p className="text-gray-600 text-sm">
                  {review.comment} -{" "}
                  <span className="text-gray-400">{review.date}</span>
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Overview;
