import CommonButton from "../components/CommonButton";
import CommonInput from "../components/CommonInput";
import { useState } from "react";
import { motion } from "framer-motion";
import logo from "../assets/home_bg.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import SEO from "../components/SEO";

const Home = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
  });
  const navigate = useNavigate();

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

  const tabCLickHanlder = (route) => {
    navigate(`/${route}`);
  };

  useEffect(() => {
    const fetchBlogs = async () => {
      await axios.get("https://project-1-be.onrender.com/blogs");
    };
    fetchBlogs();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="h-full items-center min_height"
    >
      <SEO
        title="Vital Voices Medical Advocacy (VVMA) | Youth-Led Global Health Non-Profit"
        description="Vital Voices Medical Advocacy (VVMA - vvmadvocacy.com), founded by Anvitha Rayala, is a youth-led global health non-profit leading healthcare accessibility advocacy, community health education and CPR workshops, and underserved rural medical outreach."
        keywords="vvmadvocacy.com, Vital Voices Medical Advocacy, VVMA youth health advocacy, Anvitha Rayala VVMA, Anvitha Rayala, youth-led global health non-profit, healthcare accessibility advocacy, community health education and CPR workshops, underserved rural medical outreach, VVMA, healthcare advocacy, global health equity, rural healthcare, CPR workshops, medical education, youth healthcare organization, healthcare non-profit, health accessibility"
        canonical="https://vvmadvocacy.com/"
      />
      <div>
        {/* Hero Section with Background Image */}
        <div className="relative bg-cover bg-center h-[70vh] flex flex-col items-center justify-center text-center">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${logo})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "blur(2px)",
              zIndex: 0,
            }}
          ></div>
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <h1 className="relative z-10 text-white text-3xl font-bold sm:text-5xl md:text-6xl p-6">
            Vital Voices :
            <span className="pt-3 block">Vital Voices Medical Advocacy</span>
            <span className="pt-3 block text-xl sm:text-2xl md:text-3xl font-semibold text-blue-200">
              Youth-Led Global Health Non-Profit
            </span>
          </h1>
          <p className="relative text-white max-w-[90vw] md:max-w-[70vw] text-base md:text-lg">
            VVMA (<strong>vvmadvocacy.com</strong>) is a trailblazing <strong>youth-led global health non-profit</strong> founded by <strong>Anvitha Rayala</strong>, advancing <strong>VVMA youth health advocacy</strong> and <strong>healthcare accessibility advocacy</strong> to make quality care accessible for everyone, everywhere.
          </p>
        </div>

        <section className="py-12 pb-6">
          <div className="container mx-auto px-4">
            <div className="max-w-full md:max-w-[70vw] mx-auto text-center">
              <p className="px-4 md:px-8 text-gray-600 leading-relaxed text-base md:text-lg">
                <strong>Vital Voices Medical Advocacy (VVMA)</strong> is a youth-led movement revolutionizing <strong>healthcare accessibility advocacy</strong> worldwide. Founded by <strong>Anvitha Rayala</strong>, our mission is to eliminate healthcare disparities and create a world where quality medical care is universally accessible. We achieve this through two dynamic avenues: hands-on <strong>underserved rural medical outreach</strong> delivering <strong>community health education and CPR workshops</strong>, and our <strong>VVMA youth health advocacy</strong> digital platform—publishing research and articles on global public health equality. With every workshop and outreach mission, we empower local communities and pave the way for a healthier, more equitable future.
              </p>
            </div>
          </div>
        </section>

        {/* Objectives Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-full md:max-w-[70vw] mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 md:text-4xl">
                Healthcare Accessibility Advocacy & Core Objectives
              </h2>
              <p className="px-4 md:px-8 pb-14 text-gray-600">
                Vital Voices Medical Advocacy drives transformative change in global healthcare through community health education and CPR workshops, youth leadership, and underserved rural medical outreach.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[90vw] m-auto">
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <h3 className="text-2xl font-semibold text-gray-700 mb-4">
                  Community Health Education and CPR Workshops
                </h3>
                <p className="text-gray-600">
                  Deliver life-saving medical education, including CPR training
                  and practical workshops, to empower underserved rural
                  communities with vital emergency response skills.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <h3 className="text-2xl font-semibold text-gray-700 mb-4">
                  VVMA Youth Health Advocacy
                </h3>
                <p className="text-gray-600">
                  Use our dynamic online platform to champion healthcare accessibility advocacy, raise global health awareness, and inspire youth changemakers worldwide.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <h3 className="text-2xl font-semibold text-gray-700 mb-4">
                  Underserved Rural Medical Outreach
                </h3>
                <p className="text-gray-600">
                  Collaborate with local providers to distribute vital care packages, medications, and resources, offering direct support to vulnerable patients in rural areas.
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
                Services: Youth-Led Global Health Non-Profit Initiatives
              </h2>
              <p className="px-4 md:px-8 pb-14 text-gray-600">
                Empowering communities with community health education and CPR workshops, an advocacy platform for healthcare accessibility, and underserved rural medical outreach.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[90vw] m-auto">
              <motion.div
                className="bg-white rounded-lg shadow-md p-6 text-center cursor-pointer"
                onClick={() => tabCLickHanlder("ourwork")}
                whileHover={{ scale: 1.01 }}
              >
                <h3 className="text-2xl font-semibold text-gray-700 mb-4">
                  Community Health Education and CPR Workshops
                </h3>
                <p className="text-gray-600">
                  We offer tailored workshops and CPR training sessions that equip
                  community members with life-saving skills and essential
                  medical knowledge to protect and care for their families.
                </p>
              </motion.div>
              <motion.div
                className="bg-white rounded-lg shadow-md p-6 text-center cursor-pointer"
                onClick={() => tabCLickHanlder("blog")}
                whileHover={{ scale: 1.01 }}
              >
                <h3 className="text-2xl font-semibold text-gray-700 mb-4">
                  Healthcare Accessibility Advocacy
                </h3>
                <p className="text-gray-600">
                  Our online hub serves as a space for raising awareness on
                  critical healthcare disparities, engaging the public, and
                  inspiring global action toward public health equality.
                </p>
              </motion.div>
              <motion.div
                className="bg-white rounded-lg shadow-md p-6 text-center cursor-pointer"
                onClick={() => tabCLickHanlder("ourwork")}
                whileHover={{ scale: 1.01 }}
              >
                <h3 className="text-2xl font-semibold text-gray-700 mb-4">
                  Underserved Rural Medical Outreach
                </h3>
                <p className="text-gray-600">
                  We deliver compassionate care packages and critical medical resources
                  directly to patients facing health challenges in underserved rural communities.
                </p>
              </motion.div>
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
        {/* <section className="py-12">
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
        </section> */}

        {/* <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-4/5 m-auto border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="px-3 bg-white text-lg font-medium text-gray-500 rounded-lg">
              &#x2618;
            </span>
          </div>
        </div> */}

        {/* Target Audience Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-full md:max-w-[70vw] mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 md:text-4xl">
                Underserved Rural Medical Outreach & Global Youth Leadership
              </h2>
              <p className="px-4 md:px-8 pb-14 text-gray-600">
                Vital Voices Medical Advocacy is dedicated to <strong>underserved rural medical outreach</strong> worldwide, with a strong focus on communities lacking critical medical infrastructure. Through <strong>VVMA youth health advocacy</strong>, we mobilize passionate youth volunteers and future medical leaders to champion universal <strong>healthcare accessibility advocacy</strong> and life-saving <strong>community health education and CPR workshops</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* Get a Free Quote Form Section */}
        <section className="mx-auto max-w-[95vw] md:max-w-[80vw]  bg-gray-100  bg-gray-100 p-8 rounded-lg shadow-lg mb-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Get Involved Now!
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
                      Submit
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
