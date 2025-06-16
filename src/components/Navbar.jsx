import React, { useContext } from "react";
import { Link, NavLink } from "react-router"; // Make sure this is react-router-dom
import { AuthContext } from "../context/AuthContext";
import { CiStar } from "react-icons/ci";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        console.log("signed out user");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Get first letter uppercase or fallback "U"
  const getInitial = () => {
    if (user?.displayName) {
      return user.displayName.charAt(0).toUpperCase();
    }
    return "U";
  };

  const links = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-blue-500  font-semibold" : "text-gray-500"
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-blue-500  font-semibold" : "text-gray-500"
          }
          to="/services"
        >
          Services
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-blue-500 font-semibold" : "text-gray-500"
          }
          to="/addService"
        >
          Add Service
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to="/" className="flex items-center space-x-2">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
            <CiStar className="h-6 w-6 text-white" />
          </div>
          <span className="text-2xl font-bold">ServiceHub</span>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      <div className="navbar-end">
        {user ? (
          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className="btn btn-ghost flex items-center gap-2 cursor-pointer"
            >
              {user.photoURL ? (
                <img
                  src={user.photoURL}
                  alt={user.displayName || "User"}
                  className="w-8 h-8 rounded-full border-2 border-green-600"
                />
              ) : (
                <div className="w-8 h-8 rounded-full border-2 border-green-600 bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
                  {getInitial()}
                </div>
              )}
            </label>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-60"
            >
              <div className="border-b border-gray-200 pb-4 pt-4 px-4">
                <h1 className="text-lg font-bold text-gray-700">
                  {user.displayName || "User"}
                </h1>
                <p>{user.email || "No Email"}</p>
              </div>
              <li>
                <NavLink to="/addService" className="text-base">
                  Add Service
                </NavLink>
              </li>
              <li>
                <NavLink to="/myServices" className="text-base">
                  My Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/myReviews" className="text-base">
                  My Reviews
                </NavLink>
              </li>
              <li>
                <button onClick={handleSignOut} className="btn w-full">
                  Sign Out
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <div className="flex gap-4">
            <NavLink className="btn btn-primary" to="/register">
              Register
            </NavLink>
            <NavLink className="btn btn-primary" to="/signIn">
              Sign In
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
