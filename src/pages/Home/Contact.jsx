import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-base-100 px-6 md:px-20 py-16 mt-20">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary">Contact Us</h1>
        <p className="mt-4 text-base-content/70 max-w-2xl mx-auto">
          Have a question, feedback, or need support? Fill out the form or reach
          us directly — we’re here to help.
        </p>
      </div>

      {/* Contact Info + Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="bg-base-200 rounded-2xl shadow-lg p-8 space-y-6">
          <h2 className="text-2xl font-semibold mb-4 text-base-content">
            Get in Touch
          </h2>
          <div className="flex items-center gap-4">
            <Mail className="text-primary" size={24} />
            <p className="text-base-content">support@servicehub.com</p>
          </div>
          <div className="flex items-center gap-4">
            <Phone className="text-primary" size={24} />
            <p className="text-base-content">+880 1234 567 890</p>
          </div>
          <div className="flex items-center gap-4">
            <MapPin className="text-primary" size={24} />
            <p className="text-base-content">Dhaka, Bangladesh</p>
          </div>
          <p className="text-base-content/70 mt-6">
            Our support team is available{" "}
            <strong>Mon–Fri, 9:00 AM – 6:00 PM</strong>.
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-base-200 rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-6 text-base-content">
            Send a Message
          </h2>
          <form className="space-y-5">
            <div>
              <label className="block mb-1 text-base-content">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div>
              <label className="block mb-1 text-base-content">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div>
              <label className="block mb-1 text-base-content">Message</label>
              <textarea
                placeholder="Write your message..."
                className="textarea textarea-bordered w-full"
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-full">
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Map Section */}
      <div className="mt-16">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.084772985865!2d90.42123877484709!3d23.81232638614043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7c947ac08f3%3A0x947ad0e0d8e29d35!2sDhaka!5e0!3m2!1sen!2sbd!4v1694030199999!5m2!1sen!2sbd"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          className="rounded-2xl shadow-lg"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
