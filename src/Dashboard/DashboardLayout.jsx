// src/layouts/DashboardLayout.jsx
import { useContext, useState } from "react";
import { Home, PlusCircle, Star, Settings, LogOut } from "lucide-react";
import { AuthContext } from "../context/AuthContext";
import Overview from "./Overview";
import MyServices from "../pages/MyServices";
import MyReviews from "../pages/MyReviews";
import AddService from "../pages/AddService";

// Import actual components

const DashboardLayout = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [activeTab, setActiveTab] = useState("overview");

  const handleSignOut = () => {
    signOutUser().then(() => console.log("Signed out"));
  };

  return (
    <div className="flex min-h-screen bg-base-100">
      {/* Sidebar */}
      <aside className="w-64 bg-base-200 p-4 flex flex-col justify-between">
        <div>
          <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

          {/* User info */}
          {user && (
            <div className="mb-6 p-3 rounded bg-white shadow">
              <p className="font-semibold">{user.displayName || "User"}</p>
              <p className="text-sm text-gray-600">{user.email}</p>
            </div>
          )}

          {/* Sidebar Tabs */}
          <nav className="flex flex-col gap-3">
            <button
              onClick={() => setActiveTab("overview")}
              className={`flex items-center gap-2 p-2 rounded ${
                activeTab === "overview"
                  ? "bg-blue-500 text-white"
                  : "hover:bg-gray-200"
              }`}
            >
              <Home size={18} /> Overview
            </button>

            <button
              onClick={() => setActiveTab("myServices")}
              className={`flex items-center gap-2 p-2 rounded ${
                activeTab === "myServices"
                  ? "bg-blue-500 text-white"
                  : "hover:bg-gray-200"
              }`}
            >
              <Settings size={18} /> My Services
            </button>

            <button
              onClick={() => setActiveTab("myReviews")}
              className={`flex items-center gap-2 p-2 rounded ${
                activeTab === "myReviews"
                  ? "bg-blue-500 text-white"
                  : "hover:bg-gray-200"
              }`}
            >
              <Star size={18} /> My Reviews
            </button>

            <button
              onClick={() => setActiveTab("addService")}
              className={`flex items-center gap-2 p-2 rounded ${
                activeTab === "addService"
                  ? "bg-blue-500 text-white"
                  : "hover:bg-gray-200"
              }`}
            >
              <PlusCircle size={18} /> Add Service
            </button>
          </nav>
        </div>

        {/* Sign Out */}
        <button
          onClick={handleSignOut}
          className="flex items-center gap-2 p-2 rounded text-red-500 hover:bg-gray-200 mt-6"
        >
          <LogOut size={18} /> Sign Out
        </button>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6">
        {activeTab === "overview" && <Overview />}
        {activeTab === "myServices" && <MyServices />}
        {activeTab === "myReviews" && <MyReviews />}
        {activeTab === "addService" && <AddService />}
      </main>
    </div>
  );
};

export default DashboardLayout;
