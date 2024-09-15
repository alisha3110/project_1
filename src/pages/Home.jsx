import CommonButton from "../components/CommonButton";
import CommonInput from "../components/CommonInput";
import { useState } from "react";
import { motion } from "framer-motion";
import logo from "../assets/modal_bg.jpeg";

const Home = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
  });

  // State to manage form validity
  const [formValid, setFormValid] = useState(false);

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Validate form after each input change
    validateForm({ ...formData, [name]: value });
  };

  // Form validation function
  const validateForm = (data) => {
    const { fname, lname, email } = data;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if all fields are filled and email is valid
    if (fname && lname && emailRegex.test(email)) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  };

  // Handle form submission
  const handleLogin = (e) => {
    e.preventDefault();

    // Additional validation before submitting (if needed)
    if (formValid) {
      console.log("Form submitted successfully:", formData);
      // Perform the submit action here (e.g., API call)
    } else {
      console.log("Form is not valid.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="h-full items-center min_height"
    >
      <div>
        {/* Hero Section with Background Image */}
        <div
          className="relative bg-cover bg-center h-[70vh] flex items-center justify-center text-center"
          style={{
            backgroundImage: `url(${logo})`, // Adjust the image URL
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <h1 className="relative z-10 text-white text-4xl font-bold sm:text-5xl md:text-6xl p-6">
            Welcome to Our Services
          </h1>
        </div>

        {/* Services Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-full md:max-w-[70vw] mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 md:text-4xl">
                Our Services
              </h2>
              <p className="px-4 md:px-8 pb-14 text-gray-600">
                Beautifully designed, expertly crafted components and templates,
                built by the makers of Tailwind CSS. The perfect starting point
                for your next project.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[90vw] m-auto">
              <div className="bg-white rounded-lg shadow-md p-6 text-center ">
                <h3 className="text-2xl font-semibold text-gray-700 mb-4">
                  Web Design
                </h3>
                <p className="text-gray-600">
                  Creating responsive and modern websites tailored to your
                  needs.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center ">
                <h3 className="text-2xl font-semibold text-gray-700 mb-4">
                  Web Design
                </h3>
                <p className="text-gray-600">
                  Creating responsive and modern websites tailored to your
                  needs.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center ">
                <h3 className="text-2xl font-semibold text-gray-700 mb-4">
                  Web Design
                </h3>
                <p className="text-gray-600">
                  Creating responsive and modern websites tailored to your
                  needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Get a Free Quote Form Section */}
        <section className="mx-auto max-w-[95vw] md:max-w-[80vw]  bg-gray-100  bg-gray-100 p-8 rounded-lg shadow-lg mb-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Get a Free Quote
            </h2>
            <p className="mb-6">Somne text below free quote title</p>
            <div className="">
              <form
                onSubmit={handleLogin}
                className="flex gap-4 justify-center flex-wrap md:flex-nowrap"
              >
                {/* <!--Username input--> */}
                <CommonInput
                  type="text"
                  name="fname"
                  value={formData.fname}
                  onChange={handleInputChange}
                  label="First Name"
                  required
                />
                <CommonInput
                  type="text"
                  name="lname"
                  value={formData.lname}
                  onChange={handleInputChange}
                  label="Last Name"
                  required
                />

                <CommonInput
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  label="Email"
                  required
                />

                {/* <!--Submit button--> */}
                <div className="pt-1 text-center min-w-[150px]">
                  <div className="w-full mb-2">
                    <CommonButton
                      type="submit"
                      disabled={!formValid}
                      className={
                        formValid ? "w-full" : "w-full disabled:opacity-50"
                      }
                    >
                      Get a Quote
                    </CommonButton>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default Home;
