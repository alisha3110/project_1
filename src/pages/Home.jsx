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
          className="relative bg-cover bg-center h-[70vh] flex flex-col items-center justify-center text-center"
          style={{
            backgroundImage: `url(${logo})`, // Adjust the image URL
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <h1 className="relative z-10 text-white text-4xl font-bold sm:text-5xl md:text-6xl p-6">
            Vital Voices :
            <div className="pt-4">Medical Advocacy (VVMA) Business Model</div>
          </h1>
          <p className="text-white max-w-[90vw] md:max-w-[70vw]">
            VVMA is a pioneering youth-led organization dedicated to
            revolutionizing global healthcare accessibility.
          </p>
        </div>

        <section className="py-12 pb-6">
          <div className="container mx-auto px-4">
            <div className="max-w-full md:max-w-[70vw] mx-auto text-center">
              <p className="px-4 md:px-8 text-gray-600">
                VVMA is a pioneering youth-led organization dedicated to
                revolutionizing global healthcare accessibility. Our mission is
                clear: to foster equality within the healthcare industry
                worldwide. We achieve this through our multifaceted approach,
                centered on our informative blog featuring research entries and
                weekly articles on pressing health issues. Additionally, we
                conduct service projects in underserved rural communities,
                providing comprehensive medical education, advocacy campaigns,
                and sustainable support initiatives. Through strategic
                partnerships and innovative programs, we are committed to
                eliminating healthcare disparities and ensuring equitable access
                to quality healthcare for all, regardless of socio-economic
                status or geographic location.
              </p>
            </div>
          </div>
        </section>

        {/* Objectives Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-full md:max-w-[70vw] mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 md:text-4xl">
                Objectives
              </h2>
              <p className="px-4 md:px-8 pb-14 text-gray-600">
                To catalyze transformative change in rural healthcare ecosystems
                globally, leveraging education, advocacy, and strategic
                partnerships to foster sustainable health equity.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[90vw] m-auto">
              <div className="bg-white rounded-lg shadow-md p-6 text-center ">
                <h3 className="text-2xl font-semibold text-gray-700 mb-4">
                  Education
                </h3>
                <p className="text-gray-600">
                  Deliver medical education programs, including CPR training and
                  essential skills workshops, in underserved communities to
                  empower rural populations.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center ">
                <h3 className="text-2xl font-semibold text-gray-700 mb-4">
                  Leadership in Advocacy
                </h3>
                <p className="text-gray-600">
                  Drive impactful advocacy entries in a blog style manner
                  through a dynamic online platform, amplifying awareness of
                  critical global healthcare issues.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center ">
                <h3 className="text-2xl font-semibold text-gray-700 mb-4">
                  Compassionate Support
                </h3>
                <p className="text-gray-600">
                  Partner with local healthcare providers to distribute vital
                  care packages and resources to patients facing medical
                  challenges.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-4/5 m-auto  border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="px-3 bg-white text-lg font-medium text-gray-500 rounded-lg">
              &#x2618;
            </span>
          </div>
        </div>

        {/* Services Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-full md:max-w-[70vw] mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 md:text-4xl">
                Products and Services
              </h2>
              <p className="px-4 md:px-8 pb-14 text-gray-600">
                Empowering communities with CPR workshops, an advocacy platform
                for healthcare awareness, and compassionate care packages for
                patients in need.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[90vw] m-auto">
              <div className="bg-white rounded-lg shadow-md p-6 text-center ">
                <h3 className="text-2xl font-semibold text-gray-700 mb-4">
                  Empowering Workshops
                </h3>
                <p className="text-gray-600">
                  Tailored workshops and training sessions to equip community
                  members with life-saving CPR techniques and essential medical
                  skills.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center ">
                <h3 className="text-2xl font-semibold text-gray-700 mb-4">
                  Advocacy Platform
                </h3>
                <p className="text-gray-600">
                  An engaging online hub featuring informative articles,
                  multimedia content, and interactive resources to foster
                  awareness and drive action on pressing healthcare issues.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center ">
                <h3 className="text-2xl font-semibold text-gray-700 mb-4">
                  Compassionate Care Packages
                </h3>
                <p className="text-gray-600">
                  Collaborative initiatives with local healthcare institutions
                  to provide essential care packages and resources to patients
                  in need.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-4/5 m-auto  border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="px-3 bg-white text-lg font-medium text-gray-500 rounded-lg">
              &#x2618;
            </span>
          </div>
        </div>

        {/* Sustainability and Growth Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-full md:max-w-[70vw] mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 md:text-4xl">
                Sustainability and Growth
              </h2>
              <p className="px-4 md:px-8 pb-14 text-gray-600">
                Empowering communities with CPR workshops, an advocacy platform
                for healthcare awareness, and compassionate care packages for
                patients in need.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[90vw] m-auto">
              <div className="bg-white rounded-lg shadow-md p-6 text-center ">
                <h3 className="text-2xl font-semibold text-gray-700 mb-4">
                  Innovative Revenue Strategies
                </h3>
                <p className="text-gray-600">
                  Exploring new revenue streams such as membership programs,
                  merch and strategic partnerships to ensure long-term financial
                  sustainability.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center ">
                <h3 className="text-2xl font-semibold text-gray-700 mb-4">
                  Scalable Impact
                </h3>
                <p className="text-gray-600">
                  Scaling successful programs and initiatives to reach new
                  regions and communities, leveraging technology and strategic
                  partnerships to maximize our reach and impact.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center ">
                <h3 className="text-2xl font-semibold text-gray-700 mb-4">
                  Thoughtful Resource Allocation
                </h3>
                <p className="text-gray-600">
                  Careful; allocation of resources to support ongoing program
                  delivery, organizational growth, and strategic initiatives
                  while maintaining fiscal responsibility and transparency.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-4/5 m-auto border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="px-3 bg-white text-lg font-medium text-gray-500 rounded-lg">
              &#x2618;
            </span>
          </div>
        </div>

        {/* Marketting Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-full md:max-w-[70vw] mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 md:text-4xl">
                Target Audience
              </h2>
              <p className="px-4 md:px-8 pb-14 text-gray-600">
                We are dedicated to serving underserved rural communities
                worldwide, with a particular focus on regions lacking adequate
                healthcare infrastructure. Additionally, we aim to mobilize and
                empower youth volunteers who are passionate about driving
                positive change in healthcare.
              </p>
            </div>
          </div>
        </section>

        {/* Get a Free Quote Form Section */}
        <section className="mx-auto max-w-[95vw] md:max-w-[80vw]  bg-gray-100  bg-gray-100 p-8 rounded-lg shadow-lg mb-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Get a Free Quote
            </h2>
            <p className="mb-6">
              Let us build a future where healthcare is a universal right
            </p>
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
                  type="email"
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
