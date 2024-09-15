import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-footer-color text-gray-700 p-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center justify-center md:items-start flex-col">
            <h3 className="text-2xl font-semibold mb-4">Be a part of us!!</h3>
            <Link to="/register" className="underline text-gray-600">
              Join Us
            </Link>
          </div>
          {/* Quick Links */}
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
            <ul className="text-gray-600 flex gap-6 items-center justify-center">
              <Link to="/blogs" className="underline">
                Blogs
              </Link>
              <Link to="/blogs" className="underline">
                About
              </Link>
              <Link to="/blogs" className="underline">
                Our Team
              </Link>
            </ul>
          </div>

          {/* Social Media */}
          <div className="text-center md:text-right">
            <h3 className="text-2xl font-semibold mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-end space-x-6 text-gray-600">
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
        </div>

        <div className="mt-6 text-center text-gray-500 text-sm">
          &copy; 2024 Your Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
