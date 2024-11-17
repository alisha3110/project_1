import React, { useState } from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import About from "./pages/About";
import Team from "./pages/Team";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Footer from "./components/Footer";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    sessionStorage.getItem("user")
  );

  // A function to simulate login, replace with actual login logic
  const login = () => {
    setIsAuthenticated(true);
  };

  // A function to simulate logout, replace with actual logout logic
  const logout = () => {
    sessionStorage.clear();
    setIsAuthenticated(false);
  };

  // Protected route component
  const ProtectedRoute = ({ children }) => {
    return isAuthenticated ? children : <Navigate to="/login" />;
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar isAuthenticated={isAuthenticated} logout={logout} />
        <main className="flex-grow container mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blogs />} />
            <Route path="/about" element={<About />} />
            <Route path="/team" element={<Team />} />
            <Route path="/login" element={<Login login={login} />} />
            <Route path="/register" element={<Register login={login} />} />
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
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
