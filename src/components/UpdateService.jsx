import React from "react";
import Swal from "sweetalert2";

const UpdateService = ({ service, onClose, onUpdate }) => {
  const { _id, title, description, image, company, website, price, category } =
    service;

  const handleUpdateService = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedService = Object.fromEntries(formData.entries());

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
          onUpdate(updatedService); // update parent
          onClose(); // close modal
        }
      });
  };

  return (
    <form
      onSubmit={handleUpdateService}
      className="mt-10  mx-auto bg-base-100 p-10  rounded-lg shadow"
    >
      <div>
        <h1 className="text-2xl font-semibold">Update Service </h1>
        <p className="text-base text-gray-500 pb-10">
          Update your service information below.
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
          <label className="label text-black pb-2">
            Description (Optional)
          </label>
          <textarea
            placeholder="Describe your service in detail..."
            name="description"
            defaultValue={description}
            className="textarea textarea-lg w-full h-28 text-base"
            required
          ></textarea>
        </div>
      </div>

      <div className="flex justify-end gap-4 pt-5">
        <button type="button" className="btn" onClick={onClose}>
          Cancel
        </button>
        <input
          type="submit"
          className="btn  text-white bg-blue-500 text-lg"
          value="Update Service"
        />
      </div>
      <button
        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
        onClick={onClose}
      >
        ✕
      </button>
    </form>
  );
};

export default UpdateService;
