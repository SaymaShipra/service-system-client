import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase.init";
import { FiUser, FiMail, FiCamera } from "react-icons/fi";

const Settings = () => {
  const { user } = useContext(AuthContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (user) {
      setName(user.displayName || "");
      setEmail(user.email || "");
      setPhotoURL(user.photoURL || "");
    }
  }, [user]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!user) return;

    try {
      await updateProfile(auth.currentUser, { displayName: name, photoURL });
      setMessage("Profile updated successfully!");
    } catch (err) {
      console.error(err);
      setMessage("Error updating profile.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-20 px-5">
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10">
        {/* Profile Preview */}
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-500 mb-4">
            {photoURL ? (
              <img
                src={photoURL}
                alt={name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="flex items-center justify-center w-full h-full bg-blue-200 text-blue-700 font-bold text-4xl">
                {name.charAt(0).toUpperCase()}
              </div>
            )}
          </div>
          <h2 className="text-2xl font-bold">{name}</h2>
          <p className="text-gray-500 mt-1">{email}</p>
          {message && (
            <p className="text-green-600 mt-4 font-medium">{message}</p>
          )}
        </div>

        {/* Settings Form */}
        <form
          onSubmit={handleUpdate}
          className="md:col-span-2 bg-white rounded-xl shadow-md p-8 flex flex-col gap-6"
        >
          <h1 className="text-3xl font-bold mb-6">Account Settings</h1>

          {/* Name Input */}
          <div className="flex items-center gap-3 border-b border-gray-300 py-2">
            <FiUser className="text-gray-400 text-xl" />
            <input
              type="text"
              className="w-full outline-none text-gray-700 placeholder-gray-400 py-2"
              value={name}
              placeholder="Your Name"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {/* Email Input (disabled) */}
          <div className="flex items-center gap-3 border-b border-gray-300 py-2">
            <FiMail className="text-gray-400 text-xl" />
            <input
              type="email"
              className="w-full outline-none text-gray-700 placeholder-gray-400 py-2"
              value={email}
              disabled
            />
          </div>

          {/* Profile Photo Input */}
          <div className="flex items-center gap-3 border-b border-gray-300 py-2">
            <FiCamera className="text-gray-400 text-xl" />
            <input
              type="text"
              className="w-full outline-none text-gray-700 placeholder-gray-400 py-2"
              value={photoURL}
              placeholder="Profile Photo URL"
              onChange={(e) => setPhotoURL(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="mt-6 bg-primary hover:bg-purple-700 transition-colors text-white py-3 rounded-lg font-semibold shadow-md"
          >
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default Settings;
