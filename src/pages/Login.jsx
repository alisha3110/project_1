import React, { useState } from "react";
import { Navigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/brand_logo.jpg";
import CommonInput from "../components/CommonInput";
import CommonButton from "../components/CommonButton";

const Login = ({ login }) => {
  const [redirectToDashboard, setRedirectToDashboard] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [formValid, setFormValid] = useState(false);
  const [loading, setLoading] = useState(false); // Added loading state

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError(""); // Reset error message when user types
    updateFormValidity(name, value); // Moved form validity check to a separate function
  };

  const updateFormValidity = (name, value) => {
    // Check form validity using the updated value directly from the event
    if ((name === "email" && value.trim() && formData.password.trim()) || (name === "password" && value.trim() && formData.email.trim())) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  };

  const handleLogin = async (e) => { // Added async for potential async login operation
    e.preventDefault();
    setLoading(true); // Show loading indicator
    // Your login logic here
    // For demonstration purpose, let's assume authentication always fails
    setError("Invalid email or password.");
    setLoading(false); // Hide loading indicator after login attempt
    console.log("Login", formData)
    login()
  };

  if (redirectToDashboard) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="h-full flex flex-col items-center justify-center min_height"
    >
      <section className="">
        <div className="container py-8 px-6 md:p-10">
          <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
            <div className="w-full">
              <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
                <div className="g-0 lg:flex lg:flex-wrap">
                  {/* <!-- Left column container--> */}
                  <div className="px-4 md:px-0 lg:w-6/12">
                    <div className="md:mx-6 p-3 pt-8 pb-8 md:p-12">
                      {/* <!--Logo--> */}
                      <div className="text-center">
                        <img
                          className="mx-auto w-32 rounded-lg"
                          src={logo}
                          alt="logo"
                        />
                        <h4 className="mb-6 mt-3 pb-1 text-xl font-semibold">
                          We are The VVMA Team
                        </h4>
                      </div>

                      <form onSubmit={handleLogin}>
                        <p className="mb-4">Please login to your account</p>
                        {/* <!--Username input--> */}
                        <CommonInput
                          type="text"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          label="Email"
                          required
                        />

                        <CommonInput
                          type="password"
                          name="password"
                          value={formData.password}
                          onChange={handleInputChange}
                          label="Password"
                          required
                        />

                        {/* <!--Submit button--> */}
                        <div className="mb-6 md:mb-12 pb-1 pt-1 text-center">
                          <div className="w-full mb-2">
                          <CommonButton type="submit" disabled={!formValid} className={formValid ? "w-full" : "w-full disabled:opacity-50"}>
                                          Login
                                      </CommonButton>
                          </div>

                          <div className='flex justify-between' style={{ fontSize: "0.7rem" }}>
                            <motion.div
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: error ? 1 : 0, y: error ? 0 : -10 }}
                              transition={{ duration: 0.3 }}
                              className="text-red-500 w-1/2 text-left "
                            >
                              {error}
                            </motion.div>
                            {/* <!--Forgot password link--> */}
                            <motion.div
                              className="text-right w-1/2 pr-1"
                              whileHover={{ scale: 1.05 }}
                            >
                              <Link
                                to="/"
                              >
                                Reset password?
                              </Link>
                            </motion.div>
                          </div>
                        </div>
                      </form>
                      <div className="flex items-center justify-between pb-6">
                        <p className="mb-0 mr-2">Interested to Join us?</p>
                        <div>
                          <Link to="/register">
                            <button
                              type="button"
                              className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                            >
                              Register
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Right column container with background and description--> */}
                  <div
                    className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none "
                    style={{
                      background:
                        "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                    }}
                  >
                    <div className="py-12 p-8 text-white md:mx-6 md:p-12">
                      <h4 className="mb-6 text-xl font-semibold">
                        We are more than just a company
                      </h4>
                      <p className="text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>{" "}
    </motion.div>
  );
};

export default Login;
