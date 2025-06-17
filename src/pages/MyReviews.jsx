import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { FaRegEdit, FaStar } from "react-icons/fa";
import Swal from "sweetalert2";
import { RiDeleteBin6Line } from "react-icons/ri";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [myReviews, setMyReviews] = useState([]);
  const [editingReview, setEditingReview] = useState(null);
  const [updatedComment, setUpdatedComment] = useState("");

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/myReviews?email=${user.email}`)
        .then((res) => res.json())
        .then(async (data) => {
          // For each review, fetch the service title using serviceId
          const updated = await Promise.all(
            data.map(async (review) => {
              const res = await fetch(
                `http://localhost:3000/services/${review.serviceId}`
              );
              const service = await res.json();
              return { ...review, serviceTitle: service.title };
            })
          );
          setMyReviews(updated);
        });
    }
  }, [user?.email]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Your review will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/reviews/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              setMyReviews(myReviews.filter((review) => review._id !== id));
              Swal.fire("Deleted!", "Your review has been deleted.", "success");
            }
          });
      }
    });
  };

  const handleEdit = (review) => {
    setEditingReview(review);
    setUpdatedComment(review.comment);
  };

  const handleUpdate = () => {
    fetch(`http://localhost:3000/reviews/${editingReview._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ comment: updatedComment }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          const updated = myReviews.map((r) =>
            r._id === editingReview._id ? { ...r, comment: updatedComment } : r
          );
          setMyReviews(updated);
          setEditingReview(null);
          Swal.fire("Updated!", "Your review has been updated.", "success");
        }
      });
  };

  return (
    <div className="w-10/12 mx-auto py-20">
      <h1 className="text-4xl font-bold pb-6">My Reviews</h1>

      {myReviews.length === 0 ? (
        <p className="text-gray-600 text-xl">
          You haven’t submitted any reviews yet.
        </p>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {myReviews.map((review) => (
            <div
              key={review._id}
              className="card bg-base-100 shadow-md p-5 flex flex-col gap-2"
            >
              <div className="flex items-center gap-3">
                <div>
                  <h2 className="font-semibold text-2xl">
                    {review.serviceTitle}
                  </h2>
                  <p className="text-sm text-gray-400">
                    Reviewed on {review.date}
                  </p>
                </div>
              </div>

              <div className="flex gap-1 text-yellow-500">
                {[...Array(review.rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              <p className="text-gray-700">{review.comment}</p>

              <div className="flex gap-3 mt-2">
                <button
                  onClick={() => handleEdit(review)}
                  className="text-blue-500 underline cursor-pointer"
                >
                  <FaRegEdit />
                </button>
                <button
                  onClick={() => handleDelete(review._id)}
                  className="cursor-pointer"
                >
                  <RiDeleteBin6Line className="text-red-400" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Edit Modal */}
      {editingReview && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-11/12 max-w-md shadow-lg">
            <h2 className="text-xl font-bold mb-2">Edit Review</h2>
            <textarea
              value={updatedComment}
              onChange={(e) => setUpdatedComment(e.target.value)}
              className="w-full h-32 textarea textarea-bordered"
            ></textarea>
            <div className="flex justify-end gap-3 mt-4">
              <button
                onClick={() => setEditingReview(null)}
                className="btn btn-sm bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={handleUpdate}
                className="btn btn-sm bg-blue-500 text-white"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyReviews;
