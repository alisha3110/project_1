import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Tabs from "../components/Tabs";
import Table from "../components/Table";
import BlogForm from "../components/BlogForm"; // Import the form component
import axios from "axios";
import CommonButton from "../components/CommonButton";
import Modal from "../components/Modal";
import CommonInput from "../components/CommonInput";

const Dashboard = () => {
  const headers = ["ID", "Title", "Content"];
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [createLoading, setCreateLoading] = useState(false);
  const [newBlog, setNewBlog] = useState(null);
  const [selectedBlog, setSelectedBlog] = useState(null); // Track selected blog for editing
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const openModal = () => {
    setNewBlog({
      title: "New Blog Title",
      content:
        "Dummy content Dummy content Dummy content Dummy content Dummy content",
    });
  };

  const closeModal = () => {
    setNewBlog(null);
  };

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://project-1-be.onrender.com/blogs"
      );
      setBlogs(response.data);
    } catch (err) {
      console.error("Failed to fetch blogs");
    } finally {
      setLoading(false);
    }
  };

  const handleEditClick = (row) => {
    const blogToEdit = blogs.find((blog) => blog.id === row.id);
    setSelectedBlog(blogToEdit);
    setIsEditing(true);
  };

  const handleSave = (updatedBlog) => {
    // Update the blog list with the edited blog
    setBlogs((prevBlogs) =>
      prevBlogs.map((blog) => (blog.id === updatedBlog.id ? updatedBlog : blog))
    );
  };

  const actions = [
    {
      label: "Edit",
      className: "text-white bg-blue-500 rounded hover:bg-blue-600",
      onClick: handleEditClick,
    },
  ];

  const tabData = [
    {
      label: "Blogs",
      content: (
        <div className="mx-auto">
          {loading ? (
            <p>Loading Blogs...</p>
          ) : (
            <>
              <Table
                headers={headers}
                rows={blogs.map(({ id, title, content }) => ({
                  id,
                  title,
                  content,
                }))}
                columnWidths={["5%", "40%", "45%"]}
                sortKey="id"
                actions={actions}
              />
              <div className="text-right mt-4">
                <CommonButton type="submit" onClick={openModal}>
                  CREATE BLOG
                </CommonButton>
              </div>
            </>
          )}
        </div>
      ),
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBlog((prevState) => ({
      ...prevState,
      [name]: value, // Update the state for the input field
    }));
  };

  const createBlog = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    console.log(newBlog);
    try {
      setCreateLoading(true);
      const user = JSON.parse(sessionStorage.getItem("user")); // Retrieve token from sessionStorage or other storage
      const response = await axios.post(
        `https://project-1-be.onrender.com/blogs`,
        newBlog,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      if (response.status === 201) {
        alert("Blog created successfully!"); // Success message or handle redirection
        // Optionally, reset the form fields after successful creation
        setNewBlog({
          title: "",
        });
        setCreateLoading(false);
        fetchBlogs();
        setNewBlog(null);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Error creating blog: " + error.message);
      setCreateLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="h-full flex flex-col items-center min_height"
    >
      <div className="container min-h-screen flex flex-col p-6">
        {isEditing ? (
          <BlogForm
            blogData={selectedBlog}
            onSave={handleSave}
            goback={() => {
              setIsEditing(false);
              setSelectedBlog(null);
              fetchBlogs();
            }}
          />
        ) : (
          <>
            <Tabs
              tabs={tabData}
              defaultActiveTab={0}
              onTabChange={(activeIndex) =>
                console.log("Active Tab:", activeIndex)
              }
            />
            {newBlog && (
              <Modal isOpen={!!newBlog} onClose={closeModal} member={newBlog}>
                {createLoading ? (
                  <div className="p-8">Creating your Blog, Please wait!!</div>
                ) : (
                  <div className="p-6 pt-8 text-right">
                    <CommonInput
                      type="text"
                      name="title"
                      value={newBlog.title}
                      onChange={handleInputChange}
                      label="Title"
                      required
                    />
                    <CommonButton
                      type="submit"
                      className={
                        newBlog.title?.length ? "" : " disabled:opacity-50"
                      }
                      disabled={!newBlog.title?.length}
                      onClick={createBlog}
                    >
                      CREATE
                    </CommonButton>
                  </div>
                )}
              </Modal>
            )}
          </>
        )}
      </div>
    </motion.div>
  );
};

export default Dashboard;
