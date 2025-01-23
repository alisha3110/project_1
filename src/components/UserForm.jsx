import React, { useState, useEffect } from "react";
import CommonInput from "../components/CommonInput";
import CommonButton from "../components/CommonButton";
import CommonToggle from "../components/CommonToggle";
import { motion } from "framer-motion"; // Import Framer Motion
import Editor from "react-simple-wysiwyg"; // Import the WYSIWYG editor
import axios from "axios"; // Import Axios

const UserForm = ({ userData = {}, loggedInUser, onSave, goback }) => {
  const [formData, setFormData] = useState({
    id: userData.id || "",
    firstName: userData.firstName || "",
    lastName: userData.lastName || "",
    role: userData.role || "",
    email: userData.email || "",
    imageurl: userData.imageurl || "",
    status: userData.status || 1,
    about: userData.about || "",
    social: JSON.parse(userData.social || "{}"),
    designation: userData.designation || "",
  });

  const [newImage, setNewImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleToggleStatus = () => {
    // Only super admin can toggle user status
    if (loggedInUser.role === "Super Admin") {
      setFormData((prev) => ({ ...prev, status: prev.status === 1 ? 0 : 1 }));
    } else {
      setMessage("Only Super Admin can change user status.");
      setTimeout(() => setMessage(""), 2000);
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setNewImage(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Step 1: Convert the new image to Base64 if selected
    let imageBase64 = null;
    if (newImage) {
      imageBase64 = await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
        reader.readAsDataURL(newImage);
      });
    }

    // Step 2: Prepare payload
    const payload = {
      ...formData,
      social: JSON.stringify(formData.social), // Convert social links back to JSON string
      ...(imageBase64 && { imageurl: imageBase64 }), // Include the new image only if uploaded
    };

    // Step 3: Send API request
    try {
      setLoading(true);
      const user = JSON.parse(sessionStorage.getItem("user")); // Retrieve token from sessionStorage or other storage
      const response = await axios.put(
        `https://project-1-be.onrender.com/auth/user/${formData.id}`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      if (response.status === 200) {
        setMessage("User updated successfully!");
        onSave(); // Trigger parent callback
      } else {
        setMessage("Failed to update user. Please try again.");
      }
    } catch (error) {
      setMessage("Error updating user: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="text-sm mb-2 text-align-left">
        <div style={{ cursor: "pointer", color: "#57a8e4" }} onClick={goback}>
          &#x261A; Back to Users
        </div>
      </div>
      <div className="p-6 bg-white shadow-md rounded-lg m-4 mx-8">
        <h2 className="text-2xl font-bold mb-4 mt-2">
          {formData.id ? "Edit User" : "Add User"}
        </h2>

        <form>
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <CommonInput
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                label="First Name"
                required
              />
              <CommonInput
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                label="Last Name"
              />
            </div>
            <div className="flex gap-4">
              <CommonInput
                type="text"
                name="designation"
                value={formData.designation}
                onChange={handleInputChange}
                label="Designation"
              />
              <CommonInput
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                label="Email"
                readOnly
              />
              <div className="w-1/3">
                <CommonInput
                  type="text"
                  name="role"
                  value={formData.role}
                  label="Role"
                  readOnly
                />
              </div>
            </div>
          </div>
          <div className="my-4">
            <CommonInput
              type="url"
              name="linkedIn"
              value={formData.social.linkedIn || ""}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  social: { ...prev.social, linkedIn: e.target.value },
                }))
              }
              label="LinkedIn"
            />
          </div>
          <div className="flex py-4 gap-8 items-end">
            {/* Image Upload */}
            <div className="">
              <label className="block mb-2 font-medium">Profile Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="block w-full text-sm bg-gray-50 rounded-lg border border-gray-300 cursor-pointer"
              />
            </div>
            {formData.imageurl && (
              <motion.img
                src={formData.imageurl}
                alt="Profile"
                className="w-32 h-32 object-cover rounded-md shadow-md"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
              />
            )}
          </div>

          {/* WYSIWYG Editor for Content */}
          <div className="mb-6 mt-8">
            <label className="font-medium block mb-2">Content:</label>
            <Editor
              value={formData.about}
              onChange={(e) => {
                setFormData({ ...formData, about: e.target.value });
              }}
              className="w-full border border-gray-300 rounded-lg"
              placeholder="Write your blog content here..."
            />
          </div>

          <div className="flex gap-4">
            {/* Status Toggle */}
            <div className="flex gap-4">
              <span className="font-medium block">Status: </span>
              <CommonToggle
                status={formData.status}
                onToggle={handleToggleStatus}
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center mt-6">
            <CommonButton
              onClick={handleSubmit}
              disabled={loading}
              className={!loading ? "" : "disabled:opacity-50"}
            >
              {formData.id ? "Update User" : "Create User"}
            </CommonButton>
          </div>

          {/* Message Display */}
          {message && (
            <div className="mt-4 text-center">
              <p className="text-blue-500">{message}</p>
            </div>
          )}
        </form>
      </div>
    </>
  );
};

export default UserForm;
