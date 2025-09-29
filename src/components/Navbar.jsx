// import React, { useContext } from "react";
// import { Link, NavLink } from "react-router"; // Make sure this is react-router-dom
// import { AuthContext } from "../context/AuthContext";
// import { CiStar } from "react-icons/ci";
// import {
//   Home,
//   LogOutIcon,
//   Phone,
//   Plus,
//   PlusIcon,
//   ServerIcon,
//   Settings2,
//   SettingsIcon,
//   Star,
// } from "lucide-react";
// import { BiPlus } from "react-icons/bi";
// import { Settings } from "lucide";
// import ThemeToggle from "./ThemeToggle";
// import { FcAbout } from "react-icons/fc";
// import { TiArrowBackOutline } from "react-icons/ti";
// import { AbsoluteCenter } from "@chakra-ui/react";
// import { TbArrowRoundaboutLeft } from "react-icons/tb";
// import { SiAboutdotme } from "react-icons/si";
// import { RxDashboard } from "react-icons/rx";

// const Navbar = () => {
//   const { user, signOutUser } = useContext(AuthContext);

//   const handleSignOut = () => {
//     signOutUser()
//       .then(() => {
//         console.log("signed out user");
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   // Get first letter uppercase or fallback "U"
//   const getInitial = () => {
//     if (user?.displayName) {
//       return user.displayName.charAt(0).toUpperCase();
//     }
//     return "U";
//   };

//   const links = (
//     <>
//       <li>
//         <NavLink
//           className={({ isActive }) =>
//             isActive ? "text-blue-500  font-semibold" : "text-gray-500"
//           }
//           to="/"
//         >
//           <Home className="size-4" />
//           Home
//         </NavLink>
//       </li>
//       <li>
//         <NavLink
//           className={({ isActive }) =>
//             isActive ? "text-blue-500  font-semibold" : "text-gray-500"
//           }
//           to="/services"
//         >
//           <ServerIcon className="size-4" />
//           Services
//         </NavLink>
//       </li>
//       <li>
//         <NavLink
//           className={({ isActive }) =>
//             isActive ? "text-blue-500 font-semibold" : "text-gray-500"
//           }
//           to="/dashboard/addService"
//         >
//           <BiPlus className="text-gray-500 size-5" />
//           Add Service
//         </NavLink>
//       </li>
//       <li>
//         <NavLink
//           className={({ isActive }) =>
//             isActive ? "text-blue-500 font-semibold" : "text-gray-500"
//           }
//           to="/about"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             x="0px"
//             y="0px"
//             width="16"
//             height="16"
//             viewBox="0 0 24 24"
//             fill="currentColor"
//             className="text-gray-500"
//           >
//             <path
//               d="M12 3c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2S13.105 3 12 3zM14 21h-4V11h3c.552 0 1 .448 1 1V21z"
//               opacity=".3"
//             ></path>
//             <path d="M12 8c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3S13.654 8 12 8zM12 4c-.551 0-1 .449-1 1s.449 1 1 1 1-.449 1-1S12.551 4 12 4zM15 22H9V10h4c1.103 0 2 .897 2 2V22zM11 20h2v-8h-2V20z"></path>
//             <path d="M8 10H11V12H8zM8 20H16V22H8z"></path>
//           </svg>
//           About Us
//         </NavLink>
//       </li>
//       <li>
//         <NavLink
//           className={({ isActive }) =>
//             isActive ? "text-blue-500 font-semibold" : "text-gray-500"
//           }
//           to="/contact"
//         >
//           <Phone className="size-4" />
//           Contact
//         </NavLink>
//       </li>
//     </>
//   );

//   return (
//     <div className="fixed top-0 left-0 z-50 w-full bg-base-100 shadow-sm">
//       <div className="navbar w-10/12 mx-auto">
//         <div className="navbar-start">
//           <div className="dropdown">
//             <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h8m-8 6h16"
//                 />
//               </svg>
//             </div>
//             <ul
//               tabIndex={0}
//               className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
//             >
//               {links}
//             </ul>
//           </div>
//           <Link to="/" className="flex items-center space-x-2">
//             <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
//               <CiStar className="h-6 w-6 text-white" />
//             </div>
//             <span className="text-2xl font-bold hidden md:inline">
//               ServiceHub
//             </span>
//           </Link>
//         </div>

//         <div className="navbar-center hidden lg:flex">
//           <ul className="menu menu-horizontal px-1">
//             {user ? (
//               <>
//                 <li>
//                   <NavLink
//                     className={({ isActive }) =>
//                       isActive
//                         ? "text-blue-500  font-semibold"
//                         : "text-gray-500"
//                     }
//                     to="/"
//                   >
//                     <Home className="size-4" />
//                     Home
//                   </NavLink>
//                 </li>
//                 <li>
//                   <NavLink
//                     className={({ isActive }) =>
//                       isActive
//                         ? "text-blue-500  font-semibold"
//                         : "text-gray-500"
//                     }
//                     to="/services"
//                   >
//                     <ServerIcon className="size-4" />
//                     Services
//                   </NavLink>
//                 </li>
//                 <li>
//                   <NavLink
//                     className={({ isActive }) =>
//                       isActive ? "text-blue-500 font-semibold" : "text-gray-500"
//                     }
//                     to="/addService"
//                   >
//                     <BiPlus className="text-gray-500 size-5" />
//                     Add Service
//                   </NavLink>
//                 </li>
//                 <li>
//                   <NavLink
//                     className={({ isActive }) =>
//                       isActive ? "text-blue-500 font-semibold" : "text-gray-500"
//                     }
//                     to="/about"
//                   >
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       x="0px"
//                       y="0px"
//                       width="16"
//                       height="16"
//                       viewBox="0 0 24 24"
//                       fill="currentColor"
//                       className="text-gray-500"
//                     >
//                       <path
//                         d="M12 3c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2S13.105 3 12 3zM14 21h-4V11h3c.552 0 1 .448 1 1V21z"
//                         opacity=".3"
//                       ></path>
//                       <path d="M12 8c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3S13.654 8 12 8zM12 4c-.551 0-1 .449-1 1s.449 1 1 1 1-.449 1-1S12.551 4 12 4zM15 22H9V10h4c1.103 0 2 .897 2 2V22zM11 20h2v-8h-2V20z"></path>
//                       <path d="M8 10H11V12H8zM8 20H16V22H8z"></path>
//                     </svg>
//                     About Us
//                   </NavLink>
//                 </li>
//                 <li>
//                   <NavLink
//                     className={({ isActive }) =>
//                       isActive ? "text-blue-500 font-semibold" : "text-gray-500"
//                     }
//                     to="/contact"
//                   >
//                     <Phone className="size-4" />
//                     Contact
//                   </NavLink>
//                 </li>
//               </>
//             ) : (
//               <>
//                 <li>
//                   <NavLink
//                     className={({ isActive }) =>
//                       isActive
//                         ? "text-blue-500  font-semibold"
//                         : "text-gray-500"
//                     }
//                     to="/"
//                   >
//                     <Home className="size-4" />
//                     Home
//                   </NavLink>
//                 </li>
//                 <li>
//                   <NavLink
//                     className={({ isActive }) =>
//                       isActive
//                         ? "text-blue-500  font-semibold"
//                         : "text-gray-500"
//                     }
//                     to="/services"
//                   >
//                     <ServerIcon className="size-4" />
//                     Services
//                   </NavLink>
//                 </li>
//                 <li>
//                   <NavLink
//                     className={({ isActive }) =>
//                       isActive ? "text-blue-500 font-semibold" : "text-gray-500"
//                     }
//                     to="/about"
//                   >
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       x="0px"
//                       y="0px"
//                       width="16"
//                       height="16"
//                       viewBox="0 0 24 24"
//                       fill="currentColor"
//                       className="text-gray-500"
//                     >
//                       <path
//                         d="M12 3c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2S13.105 3 12 3zM14 21h-4V11h3c.552 0 1 .448 1 1V21z"
//                         opacity=".3"
//                       ></path>
//                       <path d="M12 8c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3S13.654 8 12 8zM12 4c-.551 0-1 .449-1 1s.449 1 1 1 1-.449 1-1S12.551 4 12 4zM15 22H9V10h4c1.103 0 2 .897 2 2V22zM11 20h2v-8h-2V20z"></path>
//                       <path d="M8 10H11V12H8zM8 20H16V22H8z"></path>
//                     </svg>
//                     About Us
//                   </NavLink>
//                 </li>
//               </>
//             )}
//           </ul>
//         </div>

//         <div className="navbar-end">
//           <ThemeToggle></ThemeToggle>
//           {user ? (
//             <div className="dropdown dropdown-end">
//               <label
//                 tabIndex={0}
//                 className="btn btn-ghost flex items-center gap-2 cursor-pointer"
//               >
//                 {user.photoURL ? (
//                   <img
//                     src={user.photoURL}
//                     alt={user.displayName || "User"}
//                     className="w-8 h-8 rounded-full border-2 border-green-600"
//                   />
//                 ) : (
//                   <div className="w-8 h-8 rounded-full border-2 border-green-600 bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
//                     {getInitial()}
//                   </div>
//                 )}
//               </label>

//               <ul
//                 tabIndex={0}
//                 className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-60"
//               >
//                 <div className="border-b border-gray-200 pb-4 pt-4 px-4">
//                   <h1 className="text-lg font-bold text-gray-700">
//                     {user.displayName || "User"}
//                   </h1>
//                   <p>{user.email || "No Email"}</p>
//                 </div>

//                 <li>
//                   <NavLink to="/dashboard" className="text-base">
//                     <RxDashboard className="text-gray-500" />
//                     Dashboard
//                   </NavLink>
//                 </li>
//                 <li>
//                   <NavLink to="/addService" className="text-base">
//                     <BiPlus className="text-gray-500" />
//                     Add Service
//                   </NavLink>
//                 </li>
//                 <li>
//                   <button onClick={handleSignOut} className="btn w-full ">
//                     <LogOutIcon className="text-gray-500 size-4" />
//                     Sign Out
//                   </button>
//                 </li>
//               </ul>
//             </div>
//           ) : (
//             <div className="flex gap-4">
//               <NavLink className="btn btn-primary" to="/register">
//                 Register
//               </NavLink>
//               <NavLink className="btn btn-dash btn-primary" to="/signIn">
//                 Sign In
//               </NavLink>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { CiStar } from "react-icons/ci";
import { Home, ServerIcon, Star, LogOutIcon } from "lucide-react";
import { BiPlus } from "react-icons/bi";
import ThemeToggle from "./ThemeToggle";
import { RxDashboard } from "react-icons/rx";
import { FcAbout } from "react-icons/fc";
import { FaExclamation } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [userRole, setUserRole] = useState("user");

  useEffect(() => {
    const fetchUserRole = async () => {
      if (user?.email) {
        try {
          const res = await fetch(
            `https://service-system-server.vercel.app/users/search?email=${user.email}`
          );
          const data = await res.json();
          setUserRole(data?.role || "user");
        } catch (error) {
          console.error("Error fetching user role:", error);
        }
      }
    };
    fetchUserRole();
  }, [user]);

  const handleSignOut = () => {
    signOutUser()
      .then(() => console.log("Signed out user"))
      .catch((error) => console.log(error));
  };

  const getInitial = () =>
    user?.displayName ? user.displayName.charAt(0).toUpperCase() : "U";

  const links = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-blue-500 font-semibold" : "text-gray-500"
          }
          to="/"
        >
          <Home className="w-5 h-5 mr-1" />
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-blue-500 font-semibold" : "text-gray-500"
          }
          to="/services"
        >
          <ServerIcon className="w-5 h-5 mr-1" />
          Services
        </NavLink>
      </li>
      {user && (
        <>
          {/* <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-blue-500 font-semibold" : "text-gray-500"
              }
              to="/dashboard/addService"
            >
              <BiPlus className="w-5 h-5 mr-1" />
              Add Service
            </NavLink>
          </li> */}
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-blue-500 font-semibold" : "text-gray-500"
              }
              to="/dashboard"
            >
              <RxDashboard className="w-5 h-5 mr-1" />
              Dashboard
            </NavLink>
          </li>
        </>
      )}
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-blue-500 font-semibold" : "text-gray-500"
          }
          to="/about"
        >
          <FaExclamation /> About
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-blue-500 font-semibold" : "text-gray-500"
          }
          to="/contact"
        >
          <FiPhone /> Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="fixed top-0 left-0 z-50 w-full bg-base-100 shadow-sm">
      <div className="navbar w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} className="btn btn-ghost lg:hidden">
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
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
              <CiStar className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold hidden md:inline">
              ServiceHub
            </span>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        <div className="navbar-end flex items-center gap-4">
          <ThemeToggle />
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
                  <p className="text-gray-500">{user.email}</p>
                  <p className="text-sm text-gray-400 capitalize">
                    Role: {userRole}
                  </p>
                </div>
                <li>
                  <button onClick={handleSignOut} className="btn w-full">
                    <LogOutIcon className="w-5 h-5 mr-1" />
                    Sign Out
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <>
              <NavLink className="btn btn-primary" to="/register">
                Register
              </NavLink>
              <NavLink className="btn btn-outline btn-primary" to="/signIn">
                Sign In
              </NavLink>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
