import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-footer-color text-gray-700 p-8">
      <div className="container mx-auto px-4">
        {/* Quick Links */}
        <div className="text-center">
          <ul className="text-gray-600 flex gap-12 items-center justify-center">
            {/* <Link
              to="/register"
              className="hover:text-black transition duration-200"
            >
              Join Us
            </Link> */}
            <Link
              to="/blog"
              className="hover:text-black transition duration-200"
            >
              Blogs
            </Link>            
            <Link
              to="/about"
              className="hover:text-black transition duration-200"
            >
              About
            </Link>
            <Link
              to="/ourwork"
              className="hover:text-black transition duration-200"
            >
              OurWork
            </Link>
            <Link
              to="/team"
              className="hover:text-black transition duration-200"
            >
              Our Team
            </Link>
          </ul>
          <div className="flex justify-center space-x-6 text-gray-600 my-5">
            <a
              href="https://facebook.com"
              className="hover:text-blue-500 transition duration-300"
            >
              <Facebook className="w-5" />
            </a>
            <a
              href="https://twitter.com"
              className="hover:text-blue-400 transition duration-300"
            >
              <Twitter className="w-5" />
            </a>
            <a
              href="https://instagram.com"
              className="hover:text-pink-500 transition duration-300"
            >
              <Instagram className="w-5" />
            </a>
            <a
              href="https://linkedin.com"
              className="hover:text-blue-600 transition duration-300"
            >
              <Linkedin className="w-5" />
            </a>
          </div>
        </div>
        <div className="pt-2 text-center text-gray-500 text-sm">
          &copy; 2024 VVMA. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
