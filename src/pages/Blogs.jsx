import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import Modal from "../components/Modal";
import Carousel from "../components/Carousel";
import { MessageCircle, Heart } from "lucide-react";
import CommonButton from "../components/CommonButton";

const Blog = ({ blog, onClick, onLike }) => {
  const firstImage =
    blog.imageurls && blog.imageurls.length > 0
      ? blog.imageurls[0]
      : "https://via.placeholder.com/800x400?text=No+Image";

  const isLiked = sessionStorage.getItem(`liked_${blog.id}`) === "true";

  const getFullName = (id) => {
    const teamMembers =
      JSON.parse(sessionStorage.getItem("team-members")) || [];
    const person = teamMembers.find((obj) => obj.id === id);
    return person ? `${person.firstName} ${person.lastName}` : "One of us!";
  };

  const handleLike = async (event) => {
    event.stopPropagation();
    const newLikeState = !isLiked;
    sessionStorage.setItem(`liked_${blog.id}`, newLikeState);

    try {
      await axios.post(
        `https://project-1-be.onrender.com/blogs/${blog.id}/like`,
        {
          liked: newLikeState,
        }
      );
      onLike(blog.id, newLikeState);
    } catch (error) {
      console.error("Error liking the blog:", error);
    }
  };

  return (
    <motion.div
      className="p-4 w-full sm:w-1/2 md:w-1/2 lg:w-1/2 flex flex-col items-center mb-1 cursor-pointer"
      whileHover={{ scale: 1.01 }}
      onClick={() => onClick(blog)}
    >
      <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 min-h-[300px] max-h-full md:max-h-[300px] flex flex-col">
        <div className="flex grow flex-col md:flex-row overflow-hidden">
          <img
            className="w-full md:w-1/2 object-fit"
            src={firstImage}
            alt="Blog Image"
          />
          <div className="p-3 lg:p-5 flex-1">
            <h5 className="text-xl lg:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {blog.title}
            </h5>
            <p className="mb-2 text-xs float-right">
              {" "}
              - By {getFullName(blog.submittedBy)}
            </p>
            <p
              className="mb-3 text-sm md:text-base text-gray-700 dark:text-gray-400 w-full line-clamp-2"
              style={{ overflowWrap: "anywhere" }}
              dangerouslySetInnerHTML={{ __html: blog.content }}
            ></p>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-700 p-4 flex items-center justify-end">
          <div className="flex space-x-4">
            <button className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white flex items-center space-x-1">
              <MessageCircle className="w-4" />
              <span>{blog.comments.length}</span>
            </button>
            <button
              onClick={handleLike}
              className={`flex items-center space-x-1 ${
                isLiked ? "text-pink-500" : "text-gray-500"
              } dark:${
                isLiked ? "text-pink-500" : "text-gray-400"
              } hover:text-gray-900 dark:hover:text-white`}
            >
              <Heart className="w-4" fill={isLiked ? "currentColor" : "none"} />
              <span>{blog.likes}</span>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Blogs = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [commentLoader, setCommentLoader] = useState(false);
  const [newComment, setNewComment] = useState("");
  const [commentError, setCommentError] = useState("");

  useEffect(() => {
    const fetchBlogs = async () => {
      console.log("Fetching blogs...");
      try {
        const response = await axios.get(
          "https://project-1-be.onrender.com/blogs"
        );
        setBlogs(response.data.filter((x) => x.status == 1));
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch blogs");
      }
    };
    const fetchTeamMembers = async () => {
      try {
        const response = await axios.get(
          "https://project-1-be.onrender.com/auth/users"
        );
        sessionStorage.setItem(
          "team-members",
          JSON.stringify(response.data.sort((x, y) => x.id - y.id))
        );
        setLoading(false);
      } catch (error) {
        console.log("Failed to fetch team members");
      }
    };
    if (!sessionStorage.getItem("team-members")) fetchTeamMembers();
    fetchBlogs();
  }, []);

  const openModal = (blog) => {
    setSelectedBlog(blog);
    setNewComment(""); // Reset new comment input
    setCommentError(""); // Reset error message
  };

  const closeModal = () => {
    setSelectedBlog(null);
  };

  const handleLikeUpdate = (id, liked) => {
    setBlogs((prevBlogs) =>
      prevBlogs.map((blog) =>
        blog.id === id
          ? {
              ...blog,
              likes: liked
                ? parseInt(blog.likes) + 1
                : parseInt(blog.likes) == 0
                ? 0
                : parseInt(blog.likes) - 1,
            }
          : blog
      )
    );
  };

  const handleCommentSubmit = async () => {
    if (newComment.length < 10) {
      setCommentError("Comment must be at least 10 characters long.");
      return;
    }
    setCommentLoader(true);
    try {
      await axios.put(
        `https://project-1-be.onrender.com/blogs/comment/${selectedBlog.id}`,
        {
          comment: newComment,
        }
      );

      // Update the selected blog's comments in state
      setSelectedBlog((prevBlog) => ({
        ...prevBlog,
        comments: [...prevBlog.comments, newComment],
      }));
      setBlogs((prevBlogs) =>
        prevBlogs.map((blog) =>
          blog.id === selectedBlog.id
            ? { ...blog, comments: [...blog.comments, newComment] }
            : blog
        )
      );
      setNewComment(""); // Reset comment input
      setCommentError(""); // Reset error message
      setCommentLoader(false);
    } catch (error) {
      console.error("Error posting comment:", error);
      setCommentLoader(false);
    }
  };

  const getFullName = (id) => {
    const teamMembers =
      JSON.parse(sessionStorage.getItem("team-members")) || [];
    const person = teamMembers.find((obj) => obj.id === id);
    return person ? `${person.firstName} ${person.lastName}` : "One of us!";
  };

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="h-full flex flex-col items-center min_height"
    >
      <section className="py-16 dark:bg-gray-900 w-full">
        <div className="container mx-auto px-4 w-full">
          <h2 className="text-3xl font-semibold text-center mb-8 text-gray-900 dark:text-gray-100">
            VVMA IS A VOICE FOR EQUALIZING MEDICINE
          </h2>
          <div className="w-[80vw] md:w-[60vw] m-auto pb-10 text-center">
            <p>
              At VVMA, our blog is more than just a platform—it's a resource for
              change. Through in-depth and researched articles, we dive into
              critical health issues, exploring the challenges and disparities
              that exist in global healthcare along with exciting new medical
              technologies. Join us as we share actionable insights and inspire
              solutions to bridge the gaps and promote health equity for all.
            </p>
          </div>
          {loading ? (
            <div role="status" className="flex justify-center mt-10">
              <svg
                aria-hidden="true"
                className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
            <div className="flex flex-wrap">
              {blogs
                .sort((a, b) => a.id - b.id)
                .map((blog) => (
                  <Blog
                    key={blog.id}
                    blog={blog}
                    onClick={openModal}
                    onLike={handleLikeUpdate}
                  />
                ))}
            </div>
          )}
        </div>

        {selectedBlog && (
          <Modal
            isOpen={!!selectedBlog}
            onClose={closeModal}
            blog={selectedBlog}
            size="large"
          >
            <div className="relative flex flex-col items-center m-4">
              {/* Carousel */}
              {selectedBlog.imageurls.length ? (
                <div className="w-full md:w-2/3">
                  <Carousel images={selectedBlog.imageurls} />
                </div>
              ) : null}

              {/* Title and Scrollable Description */}
              <div className="p-4 md:p-6 mt-6 bg-gray-100 rounded-lg shadow-lg w-full ">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                  {selectedBlog.title}
                </h2>
                <div className="overflow-y-auto p-2">
                  <p
                    className="text-sm md:text-base text-gray-700 content-p-tag"
                    dangerouslySetInnerHTML={{ __html: selectedBlog.content }}
                  ></p>
                </div>
                <p className="mt-2 text-xs float-right">
                  {" "}
                  - By {getFullName(selectedBlog.submittedBy)}
                </p>
              </div>

              {/* Comments Section */}
              <div className="w-full mt-6">
                <h3 className="text-lg font-semibold mb-2">Comments:</h3>
                <div className="max-h-40 overflow-y-auto mb-4">
                  {selectedBlog.comments.map((comment, index) => (
                    <div
                      key={index}
                      className="w-full md:w-4/5 p-2 px-4 bg-gray-200 rounded-lg mb-3 shadow-sm text-sm"
                    >
                      {comment}
                    </div>
                  ))}
                </div>

                <textarea
                  value={newComment}
                  onChange={(e) => {
                    setNewComment(e.target.value);
                    setCommentError(""); // Clear error message on input change
                  }}
                  placeholder="Write your comment..."
                  className={`w-full p-2 border rounded ${
                    commentError ? "border-red-500" : "border-gray-300"
                  }`}
                  rows="3"
                />
                {commentError && (
                  <p className="text-red-500 text-sm">{commentError}</p>
                )}
                <CommonButton
                  onClick={handleCommentSubmit}
                  disabled={newComment.length < 10 || commentLoader}
                  className={
                    newComment.length < 10 || commentLoader
                      ? "disabled:opacity-50 mt-4"
                      : "mt-4"
                  }
                >
                  Post Comment
                </CommonButton>
                {/* <button
                  
                  
                  className={`mt-2 p-2 rounded text-white ${
                    newComment.length < 10
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-blue-500 hover:bg-blue-600"
                  }`}
                >
                  
                </button> */}
              </div>
            </div>
          </Modal>
        )}
      </section>
    </motion.div>
  );
};

export default Blogs;
