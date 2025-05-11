import React, { useState } from "react";
import CommonInput from "./CommonInput";
import CommonButton from "./CommonButton";
import CommonToggle from "./CommonToggle";
import { motion, AnimatePresence } from "framer-motion"; // Import Framer Motion
import Editor from "react-simple-wysiwyg"; // Import the WYSIWYG editor
import axios from "axios"; // Import Axios

const ProjectFormWithImages = ({ projectData = {}, onSave, goback }) => {
  const [formData, setFormData] = useState({
    id: projectData.id || "",
    title: projectData.title || "",
    content: projectData.content || "",
    submittedBy: projectData.submittedBy || "",
    status: projectData.status || 0,
    imageurls: projectData.imageurls || [],
    likes: projectData.likes || "",
    comments: projectData.comments || [], // Array to store comments
  });

  const [newImages, setNewImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [previewImage, setPreviewImage] = useState(""); // For previewing images
  const [message, setMessage] = useState(""); // State for showing API response message

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleToggleStatus = () => {
    setFormData((prev) => ({ ...prev, status: prev.status === 1 ? 0 : 1 }));
  };

  const handleAddNewImages = (e) => {
    const files = Array.from(e.target.files);
    setNewImages((prev) => [...prev, ...files]);
  };

  const handleRemoveCurrentImage = (index) => {
    const updatedImages = formData.imageurls.filter((_, i) => i !== index);
    setFormData({ ...formData, imageurls: updatedImages });
  };

  const handleRemoveNewImage = (index) => {
    const updatedNewImages = newImages.filter((_, i) => i !== index);
    setNewImages(updatedNewImages);
  };

  const findSubmitterName = (id) => {
    const users = JSON.parse(sessionStorage.getItem("team-members"));
    return users.find((x) => x.id == id);
  };

  const openPreview = (url) => {
    setPreviewImage(url);
  };

  const closePreview = () => {
    setPreviewImage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Step 1: Convert new images to Base64
    const newImageBase64 = await Promise.all(
      newImages.map((file) => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result);
          reader.onerror = (error) => reject(error);
          reader.readAsDataURL(file); // Convert to Base64
        });
      })
    );

    // Step 2: Create the final payload
    const payload = {
      ...formData,
      newImages: newImageBase64, // Base64-encoded new images
      removedImages: projectData.imageurls.filter(
        (url) => !formData.imageurls.includes(url)
      ), // Identify removed images
    };

    // Step 3: Make the PUT request
    try {
      setLoading(true);
      const user = JSON.parse(sessionStorage.getItem("user")); // Retrieve token from sessionStorage or other storage
      const response = await axios.put(
        `https://project-1-be.onrender.com/project/update/${formData.id}`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      if (response.status === 200) {
        setMessage("Project updated successfully!");
      } else {
        setMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      setMessage("Error updating project: " + error.message);
    }
    setLoading(false);
    // Clear the message after 3 seconds
    setTimeout(() => {
      goback();
      setMessage("");
    }, 2000);
  };

  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    if (newComment.trim()) {
      setFormData((prev) => ({
        ...prev,
        comments: [...prev.comments, newComment],
      }));
      setNewComment(""); // Reset the input field
    }
  };

  const handleRemoveComment = (index) => {
    setFormData((prev) => ({
      ...prev,
      comments: prev.comments.filter((_, i) => i !== index),
    }));
  };

  const commentAnimation = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 },
  };

  const imageAnimation = {
    initial: { scale: 0.9, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.9, opacity: 0 },
  };

  return (
    <>
      <div className="text-sm mb-2 text-align-left">
        <div style={{ cursor: "pointer", color: "#57a8e4" }} onClick={goback}>
          &#x261A; Back to Projects
        </div>
      </div>
      <div className="p-6 bg-white shadow-md rounded-lg m-4 mx-8">
        <h2 className="text-2xl font-bold mb-4 mt-2">
          {projectData.id ? "Edit Project" : "Add Project"}
        </h2>
        <form>
          {/* Form Inputs */}
          <div className="flex gap-4">
            <CommonInput
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              label="Title"
              required
            />
            <div className="flex gap-2 w-2/5">
              <CommonInput
                type="text"
                name="submittedBy"
                readOnly
                value={
                  findSubmitterName(formData.submittedBy).firstName +
                    ` (User ID: ${formData.submittedBy})` || "Unknown"
                }
                label="Submitted By "
              />
              <CommonInput
                type="number"
                name="likes"
                value={formData.likes}
                label="Likes "
                onChange={handleInputChange}
              />
            </div>
          </div>

          {/* Comments Section */}
          <div className="my-4">
            <label className="font-medium block mb-2">Comments:</label>
            <div className="flex items-center gap-2 mb-4">
              <input
                type="text"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Add a comment"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
              />
              <button
                type="button"
                onClick={handleAddComment}
                className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600"
              >
                Add
              </button>
            </div>

            {/* List of Comments */}
            <div className="flex items-center gap-2 pb-4">
              <AnimatePresence>
                {formData.comments.map((comment, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center justify-between bg-gray-100 p-2 rounded-md shadow-md"
                    {...commentAnimation}
                  >
                    <span className="text-sm text-gray-700">{comment}</span>
                    <button
                      type="button"
                      onClick={() => handleRemoveComment(index)}
                      className="text-red-500 hover:text-red-700"
                      aria-label="Remove comment"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </motion.li>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Current Images */}
          <div className="mb-4">
            <label className="font-medium block mb-2">Current Images:</label>
            {formData.imageurls.length > 0 ? (
              <div className="grid grid-cols-4 gap-4">
                <AnimatePresence>
                  {formData.imageurls.map((url, index) => (
                    <motion.div
                      key={index}
                      className="relative group bg-gray-100 rounded-md shadow-md overflow-hidden"
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.9, opacity: 0 }}
                    >
                      <img
                        src={url}
                        alt={`Project Image ${index + 1}`}
                        className="w-full h-24 object-cover cursor-pointer"
                        onClick={() => openPreview(url)}
                      />
                      <button
                        type="button"
                        onClick={() => handleRemoveCurrentImage(index)}
                        className="absolute top-2 right-2 bg-white text-red-500 rounded-full shadow-md p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            ) : (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
              >
                <p className="text-gray-500 italic">
                  No current images available.
                </p>
              </motion.div>
            )}
          </div>

          <div className="mb-4 w-3/4">
            <label className="font-medium block mb-2">Upload New Images:</label>
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleAddNewImages}
              className="block w-full text-sm bg-gray-50 rounded-lg border border-gray-300 cursor-pointer"
            />

            {/* Preview selected new images with remove functionality */}
            <div className="grid grid-cols-4 gap-4 mt-4">
              <AnimatePresence>
                {newImages.map((file, index) => (
                  <motion.div
                    key={index}
                    className="relative group bg-gray-100 rounded-md shadow-md overflow-hidden"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                  >
                    <img
                      src={URL.createObjectURL(file)}
                      alt={`New Image ${index + 1}`}
                      className="w-full h-24 object-cover"
                    />
                    <button
                      type="button"
                      onClick={() => handleRemoveNewImage(index)}
                      className="absolute top-2 right-2 bg-white text-red-500 rounded-full shadow-md p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Status Toggle */}
          <div className="flex my-4 gap-4 pt-4">
            <span className="font-medium block mb-2">Status: </span>
            <CommonToggle
              status={formData.status}
              onToggle={handleToggleStatus}
            />
          </div>

          {/* WYSIWYG Editor for Content */}
          <div className="my-4 mb-8">
            <label className="font-medium block mb-2">Content:</label>
            <Editor
              value={formData.content}
              onChange={(e) =>
                setFormData({ ...formData, content: e.target.value })
              }
              className="w-full border border-gray-300 rounded-lg"
              placeholder="Write your project content here..."
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <CommonButton
              onClick={handleSubmit}
              className={!loading ? "" : " disabled:opacity-50"}
              disabled={loading}
            >
              {projectData.id ? "Update Project" : "Create Project"}
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

      {/* Preview Modal */}
      {previewImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closePreview}
        >
          <div className="relative">
            <img
              src={previewImage}
              alt="Preview"
              className="max-w-full max-h-screen rounded-md"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectFormWithImages;
