import React, { useState, useEffect } from "react";
import logo from "../assets/brand_logo.png";
import { navItems } from "../constants";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import CommonButton from "../components/CommonButton";

const Navbar = ({ isAuthenticated, logout }) => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const closeNavbar = () => {
    setMobileDrawerOpen(false);
  };

  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  return (
    <nav
      className={`sticky top-0 z-50 py-3 border-b border-neutral-300/80 bg-theme-bg px-6 shadow-lg ${
        isScrolled ? "bg-opacity-90" : ""
      }`}
    >
      <div className="container mx-auto relative flex justify-between items-center text-sm">
        <div className="flex items-center flex-shrink-0">
          <img src={logo} alt="main logo" className="w-24 rounded-xl mr-2" />
        </div>
        <ul className="hidden lg:flex ml-14 space-x-12 items-center">
          {navItems.map((item, id) => (
            <motion.li
              key={id}
              className={`flex min-w-16 justify-center p-2 ${
                isActiveLink(item.href) ? "active-link" : ""
              }`}
              whileHover={{ scale: 1.1 }}
            >
              <Link to={item.href}>{item.label}</Link>
            </motion.li>
          ))}
          {isAuthenticated && (
            <motion.li
              className={`flex min-w-28 hover:font-bold justify-center p-2 ${
                isActiveLink("/dashboard") ? "active-link" : ""
              }`}
              whileHover={{ scale: 1.1 }}
            >
              <Link to="/dashboard">Dashboard</Link>
            </motion.li>
          )}
          <div className="hidden lg:flex justify-center items-center">
            {isAuthenticated ? (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center"
              >
                <CommonButton onClick={logout}>Logout</CommonButton>
              </motion.div>
            ) : (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center"
              >
                <Link to="/login">
                  <CommonButton>Log In</CommonButton>
                </Link>
              </motion.div>
            )}
          </div>
        </ul>
        <div className="lg:hidden flex flex-row justify-end items-center ">
          {isAuthenticated ? (
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center mr-2"
            >
              <CommonButton
                onClick={() => {
                  logout();
                  closeNavbar();
                }}
              >
                Logout
              </CommonButton>
            </motion.div>
          ) : (
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center mr-2"
            >
              <Link to="/login">
                <CommonButton onClick={closeNavbar}>Log In</CommonButton>
              </Link>
            </motion.div>
          )}
          <button onClick={toggleNavbar}>
            {mobileDrawerOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {mobileDrawerOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed right-0 z-20 w-full px-12 py-8 pb-6 flex flex-col justify-center bg-theme-bg items-center lg:hidden border-b border-neutral-300/80"
          >
            <ul>
              {navItems.map((x, y) => (
                <motion.li
                  key={y}
                  className={`text-center p-3 hover:font-bold ${
                    isActiveLink(x.href) ? "active-link" : ""
                  }`}
                  whileHover={{ scale: 1.1 }}
                >
                  <Link to={x.href} onClick={toggleNavbar}>
                    {x.label}
                  </Link>
                </motion.li>
              ))}
              {isAuthenticated && (
                <motion.li
                  className={`text-center p-3 hover:font-bold ${
                    isActiveLink("/dashboard") ? "active-link" : ""
                  }`}
                  whileHover={{ scale: 1.1 }}
                >
                  <Link to="/dashboard" onClick={toggleNavbar}>
                    Dashboard
                  </Link>
                </motion.li>
              )}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
