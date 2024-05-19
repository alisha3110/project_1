import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Team from "./pages/Team";

import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // A function to simulate login, replace with actual login logic
  const login = () => {
    setIsAuthenticated(true);
  };

  // A function to simulate logout, replace with actual logout logic
  const logout = () => {
    setIsAuthenticated(false);
  };

  // Protected route component
  const ProtectedRoute = ({ children }) => {
    return isAuthenticated ? children : <Navigate to="/login" />;
  };

  const basename = import.meta.env.VITE_BASE_URL || "/";

  return (
    <Router basename={basename}>
      <Navbar isAuthenticated={isAuthenticated} logout={logout} />
      <div
        className="w-full min-h-screen p-10"
        style={{ minHeight: "calc(100vh - 73px)" }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/login" element={<Login login={login} />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
