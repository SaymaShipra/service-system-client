import React, { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = async (e) => {
    e.preventDefault();

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMessage("Please enter a valid email address.");
      return;
    }

    try {
      // Example: POST to your backend API
      // const res = await fetch("https://your-backend.com/newsletter", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ email }),
      // });
      // const data = await res.json();

      // Mock success
      setMessage("Thank you for subscribing!");
      setEmail("");
    } catch (err) {
      console.error(err);
      setMessage("Subscription failed. Please try again.");
    }
  };

  return (
    <section className="bg-blue-50 py-16">
      <div className="max-w-4xl mx-auto text-center px-5">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Subscribe to our Newsletter
        </h2>
        <p className="text-gray-600 mb-8">
          Get the latest updates and offers delivered straight to your inbox.
        </p>

        <form
          onSubmit={handleSubscribe}
          className="flex flex-col md:flex-row justify-center items-center gap-4"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full md:w-80 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Subscribe
          </button>
        </form>

        {message && <p className="text-green-600 mt-4">{message}</p>}
      </div>
    </section>
  );
};

export default Newsletter;
