import React from "react";
import { CiStar } from "react-icons/ci";
import { NavLink } from "react-router";

const About = () => {
  return (
    <div className="min-h-screen bg-base-100 px-6 md:px-20 py-16 mt-20">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-primary">About ServiceHub</h1>
        <p className="mt-4 text-base-content/70 max-w-2xl mx-auto">
          ServiceHub is your one-stop solution for discovering, booking, and
          managing professional services with ease and confidence.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-6 bg-base-200 rounded-xl shadow-md">
          <div className="flex items-center gap-3 mb-4">
            <CiStar className="text-blue-500 text-3xl" />
            <h2 className="text-2xl font-semibold text-base-content">
              Our Mission
            </h2>
          </div>
          <p className="text-base-content/70">
            Our mission is to connect people with trusted service providers,
            making it easier to find quality services at the right time and
            place.
          </p>
        </div>

        <div className="p-6 bg-base-200 rounded-xl shadow-md">
          <div className="flex items-center gap-3 mb-4">
            <CiStar className="text-purple-500 text-3xl" />
            <h2 className="text-2xl font-semibold text-base-content">
              Our Vision
            </h2>
          </div>
          <p className="text-base-content/70">
            We envision a world where finding professional help is as easy as a
            click, ensuring reliability, affordability, and convenience for all.
          </p>
        </div>
      </div>

      {/* Values */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-center mb-8 text-primary">
          Our Core Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-base-200 rounded-xl shadow-md text-center">
            <CiStar className="text-yellow-500 text-4xl mx-auto mb-3" />
            <h3 className="text-xl font-semibold text-base-content">Trust</h3>
            <p className="text-base-content/70">
              We ensure that all listed service providers are verified and
              trustworthy.
            </p>
          </div>
          <div className="p-6 bg-base-200 rounded-xl shadow-md text-center">
            <CiStar className="text-green-500 text-4xl mx-auto mb-3" />
            <h3 className="text-xl font-semibold text-base-content">Quality</h3>
            <p className="text-base-content/70">
              We strive to maintain high standards in service quality and
              customer satisfaction.
            </p>
          </div>
          <div className="p-6 bg-base-200 rounded-xl shadow-md text-center">
            <CiStar className="text-red-500 text-4xl mx-auto mb-3" />
            <h3 className="text-xl font-semibold text-base-content">
              Convenience
            </h3>
            <p className="text-base-content/70">
              Our platform makes booking and managing services quick and
              hassle-free.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-semibold text-base-content">
          Join the ServiceHub Community
        </h2>
        <p className="text-base-content/70 mt-2">
          Whether you're a service provider or someone looking for help,
          ServiceHub is the right place for you.
        </p>
        <NavLink to="/services">
          <button className="btn btn-primary mt-4">Get Started</button>
        </NavLink>
      </div>
    </div>
  );
};

export default About;
