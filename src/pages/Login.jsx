import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { motion } from "framer-motion";

const Login = ({ login }) => {
  const [redirectToDashboard, setRedirectToDashboard] = useState(false);

  const handleLogin = () => {
    login();
    setRedirectToDashboard(true);
  };

  // Redirect to the dashboard if redirectToDashboard is true
  if (redirectToDashboard) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="h-full flex flex-col items-center justify-center"
    >
      <h1 style={{ fontSize: 60 }}>Login</h1>
      <button
        onClick={handleLogin}
        className="flex bg-gradient-to-r from-green-500 to-green-800 py-2 px-4 border text-white rounded-md hover:font-bold items-center justify-center my-4"
        style={{ width: "7em" }}
      >
        Login
      </button>
      <h1 style={{ fontSize: 60 }}>Login</h1>
      <h1 style={{ fontSize: 60 }}>Login</h1>
      <h1 style={{ fontSize: 60 }}>Login</h1>
      <h1 style={{ fontSize: 60 }}>Login</h1>
      <h1 style={{ fontSize: 60 }}>Login</h1>
      <h1 style={{ fontSize: 60 }}>Login</h1>
    </motion.div>
  );
};

export default Login;
