import React from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const UpdateService = () => {
  const { _id, title, description, image, company, website, price, category } =
    useLoaderData();
  const handleUpdateService = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const updatedService = Object.fromEntries(formData.entries());
    console.log(updatedService);
    // Add user email and current date

    // send updated recipe
    fetch(`http://localhost:3000/services/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedService),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Service updated successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-8">
      <div className="text-center pt-10 space-y-2">
        <h1 className="text-4xl font-bold">Update Service</h1>
        <p className="text-gray-600 text-xl">
          Share your amazing service with our community
        </p>
      </div>

      <form
        onSubmit={handleUpdateService}
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
              defaultValue={title}
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
              defaultValue={image}
              className="input w-full"
              placeholder="https://example.com/image.jpg"
            />
          </div>
          <div className="space-y-2">
            <label className="label text-black">Company Name</label>
            <input
              type="text"
              name="company"
              defaultValue={company}
              className="input w-full"
              placeholder="Enter company name"
            />
          </div>
          <div className="space-y-2">
            <label className="label text-black">Website</label>
            <input
              type="text"
              name="website"
              defaultValue={website}
              className="input w-full"
              placeholder="https://yourwebsite.com"
            />
          </div>
          <div className="space-y-2 grid">
            <label className="label text-black">Service Category</label>
            <select
              defaultValue={category || "Select a category"}
              name="category"
              className="select"
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
              defaultValue={price}
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
              defaultValue={description}
              className="textarea textarea-lg w-full h-28 text-base"
              required
            ></textarea>
          </div>
        </div>

        <div
          className="flex gap-4 items-center justify-between
        "
        >
          <button className="btn">Cancel</button>
          <input
            type="submit"
            className="btn mt-8  text-white bg-blue-500 text-lg"
            value="Update Service"
          />
        </div>
      </form>
    </div>
  );
};

export default UpdateService;
