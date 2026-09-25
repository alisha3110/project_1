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
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Vital Voices Medical Advocacy Facebook"
              className="hover:text-blue-500 transition duration-300"
            >
              <Facebook className="w-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Vital Voices Medical Advocacy Twitter"
              className="hover:text-blue-400 transition duration-300"
            >
              <Twitter className="w-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Vital Voices Medical Advocacy Instagram"
              className="hover:text-pink-500 transition duration-300"
            >
              <Instagram className="w-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Vital Voices Medical Advocacy LinkedIn"
              className="hover:text-blue-600 transition duration-300"
            >
              <Linkedin className="w-5" />
            </a>
          </div>
        </div>
        <div className="pt-4 text-center text-gray-500 text-xs max-w-2xl mx-auto leading-relaxed">
          <p>
            <strong>Vital Voices Medical Advocacy (VVMA)</strong> | <a href="https://vvmadvocacy.com" className="underline hover:text-black">vvmadvocacy.com</a>
          </p>
          <p className="mt-1">
            A youth-led global health non-profit founded by Anvitha Rayala, championing healthcare accessibility advocacy, community health education and CPR workshops, and underserved rural medical outreach.
          </p>
        </div>
        <div className="pt-3 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} VVMA. All rights reserved. Powered by <a href="https://vinraytech.com" target="_blank" rel="noopener noreferrer"> <b>vinraytech.com</b> </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
