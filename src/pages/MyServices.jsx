import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { LuEye } from "react-icons/lu";
import Swal from "sweetalert2";
import UpdateService from "../components/UpdateService";

const MyServices = () => {
  const { user, loading } = useContext(AuthContext);
  const [myServices, setMyServices] = useState([]);
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/myServices?userEmail=${user.email}`)
        .then((res) => res.json())
        .then((data) => setMyServices(data))
        .catch((error) => {
          console.error("Error fetching user's services:", error);
          setMyServices([]);
        });
    }
  }, [user]);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/services/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire(
                "Deleted!",
                "Your service has been deleted.",
                "success"
              );
              const remaining = myServices.filter((r) => r._id !== _id);
              setMyServices(remaining);
            }
          });
      }
    });
  };

  const handleUpdate = (updatedService) => {
    setMyServices((prev) =>
      prev.map((item) =>
        item._id === selectedService._id ? { ...item, ...updatedService } : item
      )
    );
  };

  if (loading) {
    return (
      <p className="text-center py-20 text-xl font-semibold">
        Loading services...
      </p>
    );
  }

  if (!myServices.length) {
    return (
      <p className="text-center py-20 text-xl font-semibold">
        You haven't added any services yet.
      </p>
    );
  }

  return (
    <div className="w-11/12 mx-auto mt-30 mb-30 p-5 card bg-base-100 shadow-md">
      <h1 className="text-4xl font-bold pb-8">
        My Services ({myServices.length})
      </h1>

      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Service </th>
              <th>Category</th>
              <th>Price</th>
              <th>Company</th>
              <th>Added Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {myServices.map((service, index) => (
              <tr key={service._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={service.image} alt={service.title} />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{service.title}</div>
                    </div>
                  </div>
                </td>
                <td className="badge rounded-full badge-sm bg-purple-200 px-3 text-primary">
                  {service.category}
                </td>
                <td className="text-blue-500 font-bold">{service.price}</td>
                <td>{service.company}</td>
                <td>{service.date}</td>
                <td className="gap-2 flex">
                  <button className="btn btn-sm btn-outline text-lg">
                    <LuEye />
                  </button>

                  <button
                    className="btn btn-sm btn-outline text-lg"
                    onClick={() => {
                      setSelectedService(service);
                      document.getElementById("update_modal").showModal();
                    }}
                  >
                    <FaRegEdit />
                  </button>

                  <button
                    onClick={() => handleDelete(service._id)}
                    className="btn btn-sm btn-outline text-lg"
                  >
                    <RiDeleteBin6Line className="text-red-400" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      <dialog id="update_modal" className="modal modal-bottom sm:modal-middle ">
        <div className="modal-box ">
          {selectedService && (
            <UpdateService
              service={selectedService}
              onClose={() => {
                document.getElementById("update_modal").close();
                setSelectedService(null);
              }}
              onUpdate={handleUpdate}
            />
          )}
        </div>
      </dialog>
    </div>
  );
};

export default MyServices;
