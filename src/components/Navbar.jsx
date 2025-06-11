// import React, { useContext } from "react";
// import { CiStar } from "react-icons/ci";
// import { Link, NavLink, useNavigate } from "react-router";
// import { AuthContext } from "../context/AuthContext";

// const Navbar = () => {
//   const navigate = useNavigate();
//   const { currentUser, handleLogout } = useContext(AuthContext);

//   return (
//     <div className="navbar bg-base-100 shadow-md px-6 md:px-16 lg:px-64 border-b border-gray-200">
//       <div className="navbar-start">
//         <div className="dropdown">
//           <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h8m-8 6h16"
//               />
//             </svg>
//           </div>
//           <ul
//             tabIndex={0}
//             className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-8 shadow text-lg"
//           >
//             <li>
//               <NavLink
//                 to="/"
//                 className={({ isActive }) =>
//                   isActive ? "text-amber-500" : "text-gray-500"
//                 }
//               >
//                 Home
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="/allRecipes"
//                 className={({ isActive }) =>
//                   isActive ? "text-amber-500" : "text-gray-500"
//                 }
//               >
//                 All Recipes
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="/addRecipe"
//                 className={({ isActive }) =>
//                   isActive ? "text-amber-500" : "text-gray-500"
//                 }
//               >
//                 Add Recipe
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="/myRecipes"
//                 className={({ isActive }) =>
//                   isActive ? "text-amber-500" : "text-gray-500"
//                 }
//               >
//                 My Recipes
//               </NavLink>
//             </li>
//           </ul>
//         </div>
//         <Link to="/" className="flex items-center space-x-2">
//           <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
//             <CiStar className="h-6 w-6 text-white" />
//           </div>
//           <span className="text-2xl font-bold">ServiceHub</span>
//         </Link>
//       </div>

//       <div className="navbar-center hidden lg:flex">
//         <ul className="menu menu-horizontal gap-6 px-1">
//           <li>
//             <NavLink
//               to="/"
//               className={({ isActive }) =>
//                 isActive ? "text-amber-500" : "text-gray-500"
//               }
//             >
//               Home
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/service"
//               className={({ isActive }) =>
//                 isActive ? "text-amber-500" : "text-gray-500"
//               }
//             >
//               Service
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/addService"
//               className={({ isActive }) =>
//                 isActive ? "text-amber-500" : "text-gray-500"
//               }
//             >
//               Add Recipe
//             </NavLink>
//           </li>
//         </ul>
//       </div>

//       <div className="navbar-end gap-2">
//         {currentUser ? (
//           <div className="dropdown dropdown-end">
//             <label
//               tabIndex={0}
//               className="btn btn-ghost flex items-center gap-2"
//             >
//               <img
//                 src={currentUser?.photoURL || "https://via.placeholder.com/40"}
//                 alt="User"
//                 className="w-8 h-8 rounded-full border-2 border-green-600"
//               />
//             </label>
//             <ul
//               tabIndex={0}
//               className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-60"
//             >
//               <div className="border-b pb-4 pt-4">
//                 <h1 className="text-lg font-bold text-gray-700">
//                   {currentUser?.displayName || "User"}
//                 </h1>
//                 <p>{currentUser?.email || "User"}</p>
//               </div>
//               <li>
//                 <NavLink to="/allRecipes" className="text-base">
//                   All Recipes
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to="/myRecipes" className="text-base">
//                   My Recipes
//                 </NavLink>
//               </li>
//               <li>
//                 <button
//                   onClick={handleLogout}
//                   className="text-base text-red-500 border-t mt-2"
//                 >
//                   Logout
//                 </button>
//               </li>
//             </ul>
//           </div>
//         ) : (
//           <div className="flex gap-4">
//             <button
//               onClick={() => navigate("/register")}
//               className="btn btn-outline"
//             >
//               Register
//             </button>
//             <button
//               onClick={() => navigate("/signin")}
//               className="btn bg-blue-500 text-white"
//             >
//               Sign In
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { CiStar } from "react-icons/ci";

const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);
  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        console.log("signed out user");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
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
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
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
          <button onClick={handleSignOut} className="btn">
            Sign Out
          </button>
        ) : (
          <>
            <NavLink className="btn" to="/register">
              Register
            </NavLink>
            <NavLink className="btn" to="signIn">
              Sign In
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
