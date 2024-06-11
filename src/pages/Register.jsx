import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/brand_logo.jpg";
import { Link, useLocation } from "react-router-dom";

const Register = ({ login }) => {
    const [redirectToDashboard, setRedirectToDashboard] = useState(false);
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [error, setError] = useState("");
    let input_text = "peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"

    let input_label = "flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900"

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleLogin = () => {
        // Validation logic
        if (!formData.email || !formData.password) {
            setError("Enter email and password.");
            return;
        }

        // Your login logic here
        // For example, you can call an API to authenticate the user
        // If authentication fails, set an appropriate error message
        // If authentication succeeds, redirect the user to the dashboard
        // For demonstration purpose, let's assume authentication always fails
        setError("Invalid email or password.");
    };

    // Redirect to the dashboard if redirectToDashboard is true
    if (redirectToDashboard) {
        return <Navigate to="/dashboard" />;
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="h-full flex flex-col items-center justify-center"
        >
            <section className="" style={{ maxHeight: "calc(100vh - 73px)" }}>
                <div className="container p-4 md:p-10">
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
                                        <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                                            {/* <!--Logo--> */}
                                            <div className="text-center">
                                                <img
                                                    className="mx-auto w-32"
                                                    src={logo}
                                                    alt="logo"
                                                />
                                                <h4 className="mb-8 mt-1 pb-1 text-xl font-semibold">
                                                    We are The VVMA Team
                                                </h4>
                                            </div>
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

                                    {/* <!-- Right column container with background and description--> */}
                                    <div className="relative px-4 py-6 md:px-0 md:py-0 lg:w-6/12">
                                        <div className="md:mx-6 md:p-12">
                                            <div className="absolute top-2 left-5 md:top-4 md:left-10">

                                                <Link
                                                    to="/login"
                                                    style={{ cursor: "pointer", color: "#57a8e4" }}
                                                >
                                                    &#x261A; Back to login
                                                </Link>
                                            </div>

                                            <form className="flex flex-col justify-center w-90 m-auto mt-4">
                                                <p className="mb-4 mt-4">Fill in your details pls:</p>
                                                {/* <!--Username input--> */}
                                                <div className="flex flex-col sm:flex-row gap-0 sm:gap-4 mb-4">
                                                    <div className="relative w-full min-w-[150px] h-10 mb-4 sm:mb-0">
                                                        <input
                                                            type="text"
                                                            name="email"
                                                            value={formData.email}
                                                            onChange={handleInputChange}
                                                            className={input_text}
                                                            placeholder=""
                                                        />
                                                        <label
                                                            className={input_label}
                                                        >
                                                            First name
                                                        </label>
                                                    </div>
                                                    <div className="relative w-full min-w-[150px] h-10">
                                                        <input
                                                            type="text"
                                                            name="email"
                                                            value={formData.email}
                                                            onChange={handleInputChange}
                                                            className={input_text}
                                                            placeholder=""
                                                        />
                                                        <label
                                                            className={input_label}
                                                        >
                                                            Last name
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="relative w-full min-w-[150px] h-10 mb-4">
                                                    <input
                                                        type="text"
                                                        name="email"
                                                        value={formData.email}
                                                        onChange={handleInputChange}
                                                        className={input_text}
                                                        placeholder=""
                                                    />
                                                    <label
                                                        className={input_label}
                                                    >
                                                        Email
                                                    </label>
                                                </div>
                                                <div className="flex flex-col sm:flex-row gap-0 sm:gap-4">
                                                    <div className="relative w-full min-w-[150px] h-10 mb-4 sm:mb-0">
                                                        <input
                                                            type="password"
                                                            name="email"
                                                            value={formData.email}
                                                            onChange={handleInputChange}
                                                            className={input_text}
                                                            placeholder=""
                                                        />
                                                        <label
                                                            className={input_label}
                                                        >
                                                            Password
                                                        </label>
                                                    </div>
                                                    <div className="relative w-full min-w-[150px] h-10">
                                                        <input
                                                            type="password"
                                                            name="email"
                                                            value={formData.email}
                                                            onChange={handleInputChange}
                                                            className={input_text}
                                                            placeholder=""
                                                        />
                                                        <label
                                                            className={input_label}
                                                        >
                                                            Confirm Password
                                                        </label>
                                                    </div>
                                                </div>
                                                <p class="flex items-center gap-1 mt-2 font-sans text-sm antialiased font-normal leading-normal text-gray-700 text-xs mb-4" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 -mt-px" >
                                                        <path fill-rule="evenodd"
                                                            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                                                            clip-rule="evenodd"></path>
                                                    </svg>
                                                    Use at least 8 characters, one uppercase, one lowercase and one number.
                                                </p>
                                                <div className="relative w-full min-w-[150px] h-auto mb-4">
                                                    <label for="countries" class="block mb-2 text-sm  text-gray-700 dark:text-white">Security Question</label>
                                                    <select id="countries" class="bg-gray-50 border border-gray-300 text-blue-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                        <option selected>Choose a country</option>
                                                        <option value="US">United States</option>
                                                        <option value="CA">Canada</option>
                                                        <option value="FR">France</option>
                                                        <option value="DE">Germany</option>
                                                    </select>
                                                </div>
                                                <div className="relative w-full min-w-[150px] h-10 mb-4">
                                                    <input
                                                        type="password"
                                                        name="password"
                                                        value={formData.password}
                                                        onChange={handleInputChange}
                                                        className={input_text}
                                                        placeholder=""
                                                    />
                                                    <label
                                                        className={input_label}
                                                    >
                                                        Your answer
                                                    </label>
                                                </div>

                                                {/* <!--Submit button--> */}
                                                <div className="mb-12 pb-1 pt-1 text-center">
                                                    <div className="w-full">
                                                        <button
                                                            onClick={handleLogin}
                                                            className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] "
                                                            type="button"
                                                            style={{
                                                                background:
                                                                    "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                                                            }}
                                                        >
                                                            Register
                                                        </button>
                                                    </div>
                                                </div>

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
