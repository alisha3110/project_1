import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Tabs from "../components/Tabs";
import Table from "../components/Table";
import BlogForm from "../components/BlogForm"; // Import the form component
import UserForm from "../components/UserForm"; // Import the form component
import ProjectForm from "../components/ProjectForm"; //Import the form component
import axios from "axios";
import CommonButton from "../components/CommonButton";
import Modal from "../components/Modal";
import CommonInput from "../components/CommonInput";

const Dashboard = () => {
  const blogHeaders = ["ID", "Title", "Content"];
  const userHeaders = ["ID", "Name", "Designation", "Role"];
  const projectHeaders = ["ID", "Title", "Content"];
  const [blogs, setBlogs] = useState([]);
  const [projects, setProjects] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [createLoading, setCreateLoading] = useState(false);
  const [newBlog, setNewBlog] = useState(null);
  const [newUser, setNewUser] = useState(null);
  const [newProject, setNewProject] = useState(null);
  const [selectedBlog, setSelectedBlog] = useState(null); // Track selected blog for editing
  const [selectedUser, setSelectedUser] = useState(null); // Track selected blog for editing
  const [selectedProject, setSelectedProject] = useState(null);
  const [isBlogEditing, setIsBlogEditing] = useState(false);
  const [isUserEditing, setIsUserEditing] = useState(false);
  const [isProjectEditing, setIsProjectEditing] = useState(false);
  const [isDelBlogModeEnabled, setIsDelBlogModeEnabled] = useState("");
  const [isDelProjectModeEnabled, setIsDelProjectModeEnabled] = useState("");
  const [activeTab, setActiveTab]=useState(0);


  const closeModal = () => {
    setNewBlog(null);
    setNewUser(null);
    setNewProject(null);
    setIsDelBlogModeEnabled("");
    setIsDelProjectModeEnabled("");
  };

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://project-1-be.onrender.com/blogs"
      );
      setBlogs(response.data.filter((x) => x.status !== 3));
    } catch (err) {
      console.error("Failed to fetch blogs");
    } finally {
      setLoading(false);
    }
  };

  const fetchProjects = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://project-1-be.onrender.com/project"
      );
      setActiveTab(2);
      setProjects(response.data.filter((x) => x.status !== 3));
    } catch (err) {
      console.error("Failed to fetch projects");
    } finally {
      setLoading(false);
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
      setUsers(response.data);
    } catch (error) {
      console.log("Failed to fetch team members");
    }
  };

  useEffect(() => {
    fetchBlogs();
    fetchTeamMembers();
    fetchProjects();
  }, []);

  const openModal = () => {
    setNewBlog({
      title: "New Blog Title",
      content:
        "Dummy content Dummy content Dummy content Dummy content Dummy content",
    });
    setNewUser({
      title: "New Blog Title",
      content:
        "Dummy content Dummy content Dummy content Dummy content Dummy content",
    });
    setNewProject({
      title: "New Project Title",
      content:
        "Dummy content Dummy content Dummy content Dummy content Dummy content",
    })
  };

  const handleEditClick = (row, type) => {
    if (type === "blog") {
      const blogToEdit = blogs.find((blog) => blog.id === row.id);
      setIsBlogEditing(true);
      setSelectedBlog(blogToEdit);
    } else if(type === 'project') {
      const projectToEdit = projects.find((project) => project.id === row.id);
      setIsProjectEditing(true);
      setSelectedProject(projectToEdit);
    } else {
      const userToToEdit = users.find((blog) => blog.id === row.id);
      setIsUserEditing(true);
      console.log(userToToEdit);
      setSelectedUser(userToToEdit);
    }
  };

  const handleDelClick = (row, type) => {
    if (type === "blog") {
      setIsDelBlogModeEnabled(row.id);
    }
  };

  const handleProjectDelClick = (row, type) => {
    if (type === "project") {
      setIsDelProjectModeEnabled(row.id);
    }
  };

  const handleBlogSave = () => {
    fetchBlogs();
  };

  const handleUserSave = () => {
    fetchTeamMembers();
  };

  const handleProjectSave = () => {
    fetchProjects();    
  };

  const blogActions = [
    {
      label: "Edit",
      className: "text-white bg-blue-500 rounded hover:bg-blue-600",
      onClick: handleEditClick,
      type: "blog",
    },
    {
      label: "Del",
      className: "text-white bg-red-400 rounded hover:bg-red-500",
      onClick: handleDelClick,
      type: "blog",
    },
  ];

  const projectActions = [
    {
      label: "Edit",
      className: "text-white bg-blue-500 rounded hover:bg-blue-600",
      onClick: handleEditClick,
      type: "project",
    },
    {
      label: "Del",
      className: "text-white bg-red-400 rounded hover:bg-red-500",
      onClick: handleProjectDelClick,
      type: "project",
    },
  ];

  const userActions = [
    {
      label: "Edit",
      className: "text-white bg-blue-500 rounded hover:bg-blue-600",
      onClick: handleEditClick,
      type: "user",
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
                headers={blogHeaders}
                rows={blogs.map(({ id, title, content }) => ({
                  id,
                  title,
                  content,
                }))}
                columnWidths={["5%", "40%", "45%"]}
                sortKey="id"
                actions={blogActions}
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
    {
      label: "Users",
      content: (
        <div className="mx-auto">
          {loading ? (
            <p>Loading Users...</p>
          ) : (
            <>
              <Table
                headers={userHeaders}
                rows={users.map(({ id, firstName, designation, role }) => ({
                  id,
                  firstName,
                  designation,
                  role,
                }))}
                columnWidths={["5%", "20%", "20%", "45%"]}
                sortKey="id"
                actions={userActions}
              />
              <div className="text-right mt-4">
                <CommonButton
                  type="submit"
                  onClick={openModal}
                  disabled
                  className="disabled:opacity-50"
                >
                  CREATE USER
                </CommonButton>
              </div>
            </>
          )}
        </div>
      ),
    },
    {
      label: "OurWork",
      content: (
        <div className="mx-auto">
          {loading ? (
            <p>Loading OurWork...</p>
          ) : (
            <>
              <Table
                headers={projectHeaders}
                rows={projects.map(({ id, title, content }) => ({
                  id,
                  title,
                  content,
                }))}
                columnWidths={["5%", "40%", "45%"]}
                sortKey="id"
                actions={projectActions}
              />
              <div className="text-right mt-4">
                <CommonButton
                  type="submit"
                  onClick={openModal}
                  className="disabled:opacity-50"
                >
                  ADD PROJECT
                </CommonButton>
              </div>
            </>
          )}
        </div>
      ),
    },
  ];

  // Create new Project methods
  const createProject = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    console.log(newProject);
    try {
      setCreateLoading(true);
      const user = JSON.parse(sessionStorage.getItem("user")); // Retrieve token from sessionStorage or other storage
      const response = await axios.post(
        `https://project-1-be.onrender.com/project`,
        newProject,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      if (response.status === 201) {
        alert("Project created successfully!"); // Success message or handle redirection
        // Optionally, reset the form fields after successful creation
        setNewProject({
          title: "",
        });
        setCreateLoading(false);
        fetchProjects();
        setNewProject(null);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Error creating project: " + error.message);
      setCreateLoading(false);
    }
  };

  const deleteProject = async () => {
    console.log("Delete", isDelProjectModeEnabled);
    const user = JSON.parse(sessionStorage.getItem("user")); // Retrieve token from sessionStorage or other storage
    setCreateLoading(true);
    await axios.delete(
      `https://project-1-be.onrender.com/project/delete/${isDelProjectModeEnabled}`,
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
    setCreateLoading(false);
    closeModal();
    await fetchProjects();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBlog((prevState) => ({
      ...prevState,
      [name]: value, // Update the state for the input field
    }));

    setNewProject((prevState) => ({
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

  const deleteBlog = async () => {
    console.log("Delete", isDelBlogModeEnabled);
    const user = JSON.parse(sessionStorage.getItem("user")); // Retrieve token from sessionStorage or other storage
    setCreateLoading(true);
    await axios.delete(
      `https://project-1-be.onrender.com/blogs/delete/${isDelBlogModeEnabled}`,
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
    setCreateLoading(false);
    closeModal();
    await fetchBlogs();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="h-full flex flex-col items-center min_height"
    >
      <div className="container min-h-screen flex flex-col p-6">
        {isBlogEditing ? (
          <BlogForm
            blogData={selectedBlog}
            onSave={handleBlogSave}
            goback={() => {
              setIsBlogEditing(false);
              setSelectedBlog(null);
              fetchBlogs();
            }}
          />
        ) : isUserEditing ? (
          <UserForm
            goback={() => {
              setIsUserEditing(false);
              setSelectedUser(null);
              fetchTeamMembers();
            }}
            userData={selectedUser}
            onSave={handleUserSave}
          />
        ) : isProjectEditing ? (
          <ProjectForm
            goback={() => {
              setIsProjectEditing(false);
              setSelectedProject(null);
              fetchProjects();
            }}
            projectData={selectedProject}
            onSave={handleProjectSave}
          />
        ) : (
          <>
            <Tabs tabs={tabData} defaultActiveTab={activeTab} />
            {isDelBlogModeEnabled && (
              <Modal
                isOpen={isDelBlogModeEnabled}
                onClose={closeModal}
                size="small"
              >
                <div className="pt-6 font-bold text-right">
                  <p className="text-left pb-4 text-white">
                    Are you sure to delete the blog?
                  </p>
                  <CommonButton
                    onClick={deleteBlog}
                    disabled={createLoading}
                    className={!createLoading ? "" : " disabled:opacity-50"}
                  >
                    {createLoading ? "DELETING..." : "DELETE BLOG"}
                  </CommonButton>
                </div>
              </Modal>
            )}
            {isDelProjectModeEnabled && (
              <Modal
                isOpen={isDelProjectModeEnabled}
                onClose={closeModal}
                size="small"
              >
                <div className="pt-6 font-bold text-right">
                  <p className="text-left pb-4 text-white">
                    Are you sure to delete the project?
                  </p>
                  <CommonButton
                    onClick={deleteProject}
                    disabled={createLoading}
                    className={!createLoading ? "" : " disabled:opacity-50"}
                  >
                    {createLoading ? "DELETING..." : "DELETE PROJECT"}
                  </CommonButton>
                </div>
              </Modal>
            )}
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
            {newProject && (
              <Modal isOpen={!!newProject} onClose={closeModal} member={newProject}>
                {createLoading ? (
                  <div className="p-8">Creating your Project, Please wait!!</div>
                ) : (
                  <div className="p-6 pt-8 text-right">
                    <CommonInput
                      type="text"
                      name="title"
                      value={newProject.title}
                      onChange={handleInputChange}
                      label="Title"
                      required
                    />
                    <CommonButton
                      type="submit"
                      className={
                        newProject.title?.length ? "" : " disabled:opacity-50"
                      }
                      disabled={!newProject.title?.length}
                      onClick={createProject}
                    >
                      CREATE PROJECT
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
