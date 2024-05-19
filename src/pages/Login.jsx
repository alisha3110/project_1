import React, { useState } from "react";
import { Navigate } from "react-router-dom";

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
    <div>
      <h1>Login</h1>
      <button
        onClick={handleLogin}
        className="flex bg-gradient-to-r from-green-500 to-green-800 py-2 px-4 border text-white rounded-md hover:font-bold items-center justify-center my-4"
        style={{ width: "7em" }}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
