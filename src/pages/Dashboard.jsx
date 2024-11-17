import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Tabs from "../components/Tabs";
import Table from "../components/Table";
import axios from "axios";

const Dashboard = () => {
  const headers = ["ID", "Title", "Content"];
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchBlogs = async () => {
      console.log("Fetching blogs...");
      try {
        const response = await axios.get(
          "https://project-1-be.onrender.com/blogs"
        );
        console.log(response.data);
        setBlogs(response.data);
      } catch (err) {
        setError("Failed to fetch blogs");
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  // const rows = [
  //   { id: 1, name: "John Doe", email: "john@example.com" },
  //   { id: 2, name: "Jane Smith", email: "jane@example.com" },
  //   { id: 3, name: "Alice Johnson", email: "alice@example.com" },
  // ];
  const columnWidths = ["5%", "40%", "45%"];

  const actions = [
    {
      label: "Edit",
      className: "text-white bg-blue-500 rounded hover:bg-blue-600",
      onClick: (row) => console.log("Edit clicked for:", row),
    },
  ];
  const tabData = [
    {
      label: "Blogs",
      content: (
        <div className="mx-auto">
          {loading ? (
            <p>Loading our Blogs ...</p>
          ) : (
            <Table
              headers={headers}
              rows={blogs.map(({ id, title, content }) => ({
                id,
                title,
                content,
              }))}
              columnWidths={columnWidths}
              sortKey="id"
              actions={actions}
            />
          )}
        </div>
      ),
    },
    // { label: "Users", content: <p>This is your Profile tab.</p> },
  ];
  const handleTabChange = (activeIndex) => {
    console.log("Active Tab:", activeIndex);
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="h-full flex flex-col items-center min_height"
    >
      <div className="container min-h-screen flex flex-col items-center p-6">
        <Tabs
          tabs={tabData}
          defaultActiveTab={0}
          onTabChange={handleTabChange}
        />
      </div>
    </motion.div>
  );
};

export default Dashboard;
