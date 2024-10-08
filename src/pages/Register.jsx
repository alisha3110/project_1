import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/brand_logo.png";
import { Link } from "react-router-dom";
import CommonInput from "../components/CommonInput";
import CommonSelect from "../components/CommonSelect";
import CommonButton from "../components/CommonButton";

const Register = () => {
  const [redirectToDashboard, setRedirectToDashboard] = useState(false);
  const [error, setError] = useState(false);
  const [matchError, setmatchError] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    confirmPassword: "",
    secQues: "",
    secAns: "",
  });
  const [formValid, setFormValid] = useState(false);
  const [loading, setLoading] = useState(false); // Added loading state
  const options = [
    { value: "US", label: "United States" },
    { value: "CA", label: "Canada" },
    { value: "FR", label: "France" },
    { value: "DE", label: "Germany" },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => {
      // Update formData with the latest state
      const updatedFormData = { ...prevFormData, [name]: value };
      let error;
      if (name === "password" || name === "confirmPassword") {
        error = checkPasswordMatch(
          updatedFormData.password,
          updatedFormData.confirmPassword
        );
      }
      updateFormValidity(error); // Pass the updated formData to updateFormValidity
      setmatchError(error);
      return updatedFormData; // Return the updated state
    });
  };

  const checkPasswordMatch = (password, confirmPassword) => {
    if (password && confirmPassword && password !== confirmPassword) {
      return "Passwords do not match.";
    } else {
      return "";
    }
  };

  const updateFormValidity = (error) => {
    // Check if all values are non-empty
    const allValuesNonEmpty =
      Object.values(formData).every((value) => value.trim()) && !error;

    // Update form validity based on the result
    setFormValid(allValuesNonEmpty);
  };

  const handleLogin = async (e) => {
    // Added async for potential async login operation
    e.preventDefault();
    setLoading(true); // Show loading indicator
    // Your login logic here
    // For demonstration purpose, let's assume authentication always fails
    setError("Invalid email or password.");
    setLoading(false); // Hide loading indicator after login attempt
    console.log("Register", formData);
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
        <div className="container py-8 px-6 md:p-10 md:py-16">
          <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
            <div className="w-full">
              <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
                <div className="g-0 lg:flex lg:flex-wrap">
                  {/* <!-- Left column container--> */}
                  <div
                    className="flex items-center rounded-t-lg lg:w-6/12 lg:rounded-l-lg lg:rounded-tr-none"
                    style={{
                      background:
                        "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                    }}
                  >
                    <div className="py-12 p-8 text-white md:mx-6 md:p-12">
                      {/* <!--Logo--> */}
                      <div className="text-center">
                        <img
                          className="mx-auto w-32 rounded-lg"
                          src={logo}
                          alt="logo"
                        />
                        <h4 className="mb-8 mt-4 pb-1 text-xl font-semibold">
                          We are The VVMA Team
                        </h4>
                      </div>
                      <h4 className="mb-6 text-xl font-semibold">
                        We are more than just a company
                      </h4>
                      <p className="text-sm">
                        Through our unwavering commitment to innovation,
                        collaboration, and compassion, we are poised to catalyze
                        lasting change in communities worldwide. Together, let
                        us build a future where healthcare is a universal right,
                        not a privilege, for all.
                      </p>
                    </div>
                  </div>

                  {/* <!-- Right column container with background and description--> */}
                  <div className="relative p-10 md:px-0 md:py-0 lg:w-6/12">
                    <div className="md:mx-6 md:p-12">
                      <div className="absolute top-4 left-5 md:top-8 md:left-10">
                        <Link
                          to="/login"
                          style={{ cursor: "pointer", color: "#57a8e4" }}
                        >
                          &#x261A; Back to login
                        </Link>
                      </div>

                      <form
                        onSubmit={handleLogin}
                        className="flex flex-col justify-center m-auto mt-4"
                      >
                        <p className="mb-4 mt-4">Fill in your details pls:</p>
                        {/* <!--Username input--> */}
                        <div className="flex flex-col sm:flex-row gap-0 sm:gap-4">
                          <CommonInput
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            label="First Name"
                            required
                          />
                          <CommonInput
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            label="Last Name"
                            required
                          />
                        </div>
                        <CommonInput
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          label="Email"
                          required
                        />
                        <div className="flex flex-col sm:flex-row gap-0 sm:gap-4">
                          <CommonInput
                            type="text"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            label="Password"
                            required
                          />
                          <CommonInput
                            type="text"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                            compareWith={{ value: formData.password }}
                            passError={matchError}
                            label="Confirm Password"
                            required
                          />
                        </div>
                        <p className="flex items-center gap-1 mt-0 font-sans text-sm antialiased font-normal leading-normal text-xs mb-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-4 h-4 -mt-px"
                          >
                            <path
                              fillRule="evenodd"
                              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                          Must be 8 characters with one uppercase, lowercase,
                          number, and a special character.
                        </p>
                        <CommonSelect
                          name="secQues"
                          value={formData.secQues}
                          onChange={handleInputChange}
                          required
                          label="Security Question"
                          options={options}
                        />
                        <CommonInput
                          type="text"
                          name="secAns"
                          value={formData.secAns}
                          onChange={handleInputChange}
                          label="Your Answer"
                          required
                        />

                        {/* <!--Submit button--> */}
                        <div className="mb-2 pb-1 pt-1 text-center">
                          <CommonButton
                            type="submit"
                            disabled={!formValid}
                            className={
                              formValid
                                ? "w-full"
                                : "w-full disabled:opacity-50"
                            }
                          >
                            Register
                          </CommonButton>
                        </div>
                        <span className="text-xs text-neutral-500">
                          Note: You will receive a confirmation email from us,
                          once your account is activated!
                        </span>
                      </form>
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

export default Register;
