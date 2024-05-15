import React from "react";
import logo from "../assets/brand_logo.jpg";
import { navItems } from "../constants";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-300/80 bg-main-bg px-4">
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
              <li key={id}>
                <a href={item.href} className="flex w-12 hover:font-bold">
                  {item.label}
                </a>
              </li>
            ))}
            <div className="hidden lg:flex justify-center items-center">
              <a
                href="#"
                className="flex w-20 bg-gradient-to-r from-red-500 to-orange-800 py-2 px-4 border text-white rounded-md hover:font-bold"
              >
                Log In
              </a>
            </div>
          </ul>
          <div className="lg:hidden flex flex-row justify-end items-center">
            <a
              href="#"
              className="bg-gradient-to-r from-red-500 to-orange-800 py-1.5 px-4 border text-white rounded-md hover:font-bold mr-2"
            >
              Log In
            </a>
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 w-full px-12 py-8 pb-6 flex flex-col justify-center items-center lg:hidden border-b border-neutral-300/80">
            <ul>
              {navItems.map((x, y) => (
                <li key={y} className="py-3 hover:font-bold">
                  <a href={x.href}>{x.label}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
