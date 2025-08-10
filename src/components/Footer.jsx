import React from "react";
import { Link, NavLink } from "react-router";
import { PiNotebookFill } from "react-icons/pi";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { CiLocationOn, CiStar } from "react-icons/ci";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-400 mt-auto pt-10">
      <section className="py-20 bg-gray-900  text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join our platform today and discover amazing services or showcase
              your own
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg rounded">
                  Sign Up Now
                </button>
              </Link>
              <Link to="/services">
                <button className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 text-lg rounded">
                  Browse Services
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="px-4 py-8">
        {/* <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 w-11/12 mx-auto"> */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 w-11/12 mx-auto">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                <CiStar className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">ServiceHub</span>
            </Link>
            <p className="mt-4 text-base text-gray-500 max-w-xs">
              Connecting service providers with customers through a trusted
              platform. Discover amazing services and share your experiences
              with our community.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl text-white font-medium">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li className="text-lg">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "text-white" : "text-gray-500"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="text-lg">
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    isActive ? "text-white" : "text-gray-500"
                  }
                >
                  All Services
                </NavLink>
              </li>
              <li className="text-lg">
                <NavLink
                  to="/addService"
                  className={({ isActive }) =>
                    isActive ? "text-white" : "text-gray-500"
                  }
                >
                  Add Service
                </NavLink>
              </li>
              <li className="text-lg">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "text-white" : "text-gray-500"
                  }
                >
                  About Us
                </NavLink>
              </li>
              <li className="text-lg">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? "text-white" : "text-gray-500"
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Categories */}
          {/* <div>
            <h3 className="text-lg text-white font-semibold mb-4">
              Popular Categories
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Technology
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Design
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Marketing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Consulting
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Photography
                </a>
              </li>
            </ul>
          </div> */}

          {/* Contact Info */}
          <div className="">
            <h3 className="text-xl text-white font-medium">Contact Info</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href=""
                  className="text-base text-gray-500 hover:text-white transition-colors flex items-center  gap-3"
                >
                  <HiOutlineMail className="h-5 w-5 text-blue-500" />
                  info@servicehub.com
                </a>
              </li>
              <div className="text-base text-gray-500 hover:text-white flex items-center gap-3 cursor-pointer">
                <FiPhone className="h-5 w-5 text-blue-500" />
                <span>012346548</span>
              </div>
              <div className="text-base text-gray-500 hover:text-white flex items-center gap-3 cursor-pointer">
                <CiLocationOn className="h-7 w-7 text-blue-500" />
                <span>123 Business St, Suite 100 New York, NY 10001</span>
              </div>
              <li className="flex space-x-4 mt-4">
                <a href="#" className="text-gray-500 hover:text-amber-500">
                  {/* Facebook Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-amber-500">
                  {/* Twitter Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-amber-500">
                  {/* Instagram Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-400 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-lg text-gray-500 text-center">
            &copy; {currentYear} ServiceHub. All rights reserved.
          </p>
          <div className="text-gray-500 flex gap-5 mt-4 md:mt-0">
            <p>Privacy policy</p>
            <p>Terms of Service</p>
            <p>Cookie Policy</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
