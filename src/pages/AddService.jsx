import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";

const AddService = () => {
  const { user } = useContext(AuthContext);

  const currentDate = new Date().toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const handleAddService = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const newService = Object.fromEntries(formData.entries());

    newService.userEmail = user?.email || "anonymous@example.com";
    newService.date = currentDate;

    fetch("https://service-system-server.vercel.app/services", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newService),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Service added successfully!",
            icon: "success",
            draggable: true,
          });
          form.reset();
        }
      })
      .catch((error) => {
        Swal.fire({
          title: "Error adding service",
          text: error.message,
          icon: "error",
        });
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-8">
      <div className="text-center pt-10 space-y-2">
        <h1 className="text-4xl font-bold">Add New Service</h1>
        <p className="text-gray-600 text-xl">
          Share your amazing service with our community
        </p>
      </div>

      <form
        onSubmit={handleAddService}
        className="mt-10 w-10/12 mx-auto bg-base-100 p-10 rounded-lg shadow"
      >
        <div>
          <h1 className="text-2xl font-semibold">Service Information</h1>
          <p className="text-base text-gray-500 pb-10">
            Fill in the details about your service
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="label text-black">Service Title</label>
            <input
              type="text"
              name="title"
              className="input w-full"
              placeholder="Enter service title"
              required
            />
          </div>
          <div className="space-y-2">
            <label className="label text-black">Service Image URL</label>
            <input
              type="text"
              name="image"
              className="input w-full"
              placeholder="https://example.com/image.jpg"
            />
          </div>
          <div className="space-y-2">
            <label className="label text-black">Company Name</label>
            <input
              type="text"
              name="company"
              className="input w-full"
              placeholder="Enter company name"
            />
          </div>
          <div className="space-y-2">
            <label className="label text-black">Website</label>
            <input
              type="text"
              name="website"
              className="input w-full"
              placeholder="https://yourwebsite.com"
            />
          </div>
          <div className="space-y-2 grid">
            <label className="label text-black">Service Category</label>
            <select
              defaultValue="Select a category"
              className="select"
              name="category"
              required
            >
              <option disabled>Select a category</option>
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
          </div>
          <div className="space-y-2 ">
            <label className="label text-black">Price</label>
            <input
              type="text"
              name="price"
              className="input w-full"
              placeholder="$0.00"
              required
            />
          </div>
        </div>

        <div className="space-y-6 mt-6">
          <div>
            <label className="label text-black pb-2">Description</label>
            <textarea
              placeholder="Describe your service in detail..."
              name="description"
              className="textarea textarea-lg w-full h-28 text-base"
              required
            ></textarea>
          </div>

          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4 text-lg">
            <label className="label">Additional Information</label>
            <div className="flex justify-between">
              <h3>
                Added Date: <span className="font-medium">{currentDate}</span>
              </h3>
              <h3>
                User Email:{" "}
                <span className="font-medium">
                  {user?.email || "anonymous@example.com"}
                </span>
              </h3>
            </div>
          </fieldset>
        </div>

        <input
          type="submit"
          className="btn mt-8 w-full text-white bg-blue-500 text-lg"
          value="Add Service"
        />
      </form>
    </div>
  );
};

export default AddService;
