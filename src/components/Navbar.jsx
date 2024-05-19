import React from "react";
import logo from "../assets/brand_logo.jpg";
import { navItems } from "../constants";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ isAuthenticated, logout }) => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const location = useLocation();

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const closeNavbar = () => {
    setMobileDrawerOpen(false);
  };

  // Function to determine if a link is active based on its path
  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-300/80 bg-theme-bg px-4">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img
              src={logo}
              alt="main logo"
              className="h-12 w-12 rounded-xl mr-2"
            />
            <span className="text-xl tracking-tight">VVMA</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12 items-center">
            {navItems.map((item, id) => (
              <li
                key={id}
                className={`flex min-w-16 hover:font-bold justify-center p-2 ${
                  isActiveLink(item.href) ? "active-link" : ""
                }`}
              >
                <Link to={item.href}>{item.label}</Link>
              </li>
            ))}
            {isAuthenticated && (
              <li
                className={`flex min-w-28 hover:font-bold justify-center p-2 ${
                  isActiveLink("/dashboard") ? "active-link" : ""
                }`}
              >
                <Link to="/dashboard">Dashboard</Link>
              </li>
            )}
            <div className="hidden lg:flex justify-center items-center">
              {isAuthenticated ? (
                <button
                  onClick={logout}
                  className="flex bg-gradient-to-r from-red-500 to-orange-800 py-2 px-4 border text-white rounded-md hover:font-bold items-center justify-center"
                  style={{ width: "7em" }}
                >
                  Log Out
                </button>
              ) : (
                <Link
                  to="/login"
                  className="flex w-20 bg-gradient-to-r from-red-500 to-orange-800 py-2 px-4 border text-white rounded-md hover:font-bold"
                >
                  Log In
                </Link>
              )}
            </div>
          </ul>
          <div className="lg:hidden flex flex-row justify-end items-center">
            {isAuthenticated ? (
              <button
                onClick={() => {
                  logout();
                  closeNavbar();
                }}
                className="bg-gradient-to-r from-red-500 to-orange-800 py-1.5 px-4 border text-white rounded-md hover:font-bold mr-2"
              >
                Log Out
              </button>
            ) : (
              <Link
                to="/login"
                onClick={closeNavbar}
                className="bg-gradient-to-r from-red-500 to-orange-800 py-1.5 px-4 border text-white rounded-md hover:font-bold mr-2"
              >
                Log In
              </Link>
            )}
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 w-full px-12 py-8 pb-6 flex flex-col justify-center bg-theme-bg items-center lg:hidden border-b border-neutral-300/80">
            <ul>
              {navItems.map((x, y) => (
                <li
                  key={y}
                  className={`text-center p-3 hover:font-bold ${
                    isActiveLink(x.href) ? "active-link" : ""
                  }`}
                >
                  <Link to={x.href} onClick={toggleNavbar}>
                    {x.label}
                  </Link>
                </li>
              ))}
              {isAuthenticated && (
                <li
                  className={`text-center p-3 hover:font-bold ${
                    isActiveLink("/dashboard") ? "active-link" : ""
                  }`}
                >
                  <Link to="/dashboard" onClick={toggleNavbar}>
                    Dashboard
                  </Link>
                </li>
              )}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
