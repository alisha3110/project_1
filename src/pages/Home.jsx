import CommonButton from "../components/CommonButton";
import CommonInput from "../components/CommonInput";
import { useState } from "react";
import { motion } from "framer-motion";
import logo from "../assets/home_bg.jpg";
import { useNavigate } from "react-router-dom";

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

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="h-full items-center min_height"
    >
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
          <p className="relative z-10 text-white text-4xl font-bold sm:text-5xl md:text-6xl p-6">
            Vital Voices :
            <span className="pt-4 block">Vital Voices Medical Advocacy</span>
          </p>
          <p className="relative text-white max-w-[90vw] md:max-w-[70vw]">
            VVMA is a trailblazing youth-led organization focused on reshaping
            global healthcare to make it accessible for everyone, everywhere.
          </p>
        </div>

        <section className="py-12 pb-6">
          <div className="container mx-auto px-4">
            <div className="max-w-full md:max-w-[70vw] mx-auto text-center">
              <p className="px-4 md:px-8 text-gray-600">
                VVMA is a bold movement revolutionizing global healthcare. Our
                mission? To break barriers and create a world where quality
                healthcare is accessible to all. We do this through two powerful
                avenues: hands-on health service projects in underserved
                communities, bringing education, support, and medical aid to
                those who need it most, and our advocacy platform—a space for
                cutting-edge blogs on the latest healthcare news, breakthroughs,
                and the fight for public health equality. With every project and
                post, we’re sparking change, challenging norms, and paving the
                way for a healthier, more equitable future.
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
                We aim to drive transformative change in global healthcare by
                focusing on education, advocacy, and compassionate support to
                create sustainable health equity.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[90vw] m-auto">
              <div className="bg-white rounded-lg shadow-md p-6 text-center ">
                <h3 className="text-2xl font-semibold text-gray-700 mb-4">
                  Healthcare Education
                </h3>
                <p className="text-gray-600">
                  Deliver essential medical education, including CPR training
                  and practical workshops, to empower underserved rural
                  communities with the knowledge and skills to improve their
                  health.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center ">
                <h3 className="text-2xl font-semibold text-gray-700 mb-4">
                  Leadership in Advocacy
                </h3>
                <p className="text-gray-600">
                  Use our dynamic online platform to raise awareness on critical
                  global healthcare issues, advocating for change and inspiring
                  action to promote public health equality.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center ">
                <h3 className="text-2xl font-semibold text-gray-700 mb-4">
                  Compassionate Support
                </h3>
                <p className="text-gray-600">
                  Collaborate with local healthcare providers to distribute
                  vital care packages and resources, offering direct support to
                  patients facing medical challenges.
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
                Services
              </h2>
              <p className="px-4 md:px-8 pb-14 text-gray-600">
                Empowering communities with CPR workshops, an advocacy platform
                for healthcare awareness, and compassionate care packages for
                patients in need.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[90vw] m-auto ">
              <motion.div
                className="bg-white rounded-lg shadow-md p-6 text-center cursor-pointer"
                onClick={() => tabCLickHanlder("blog")}
                whileHover={{ scale: 1.01 }}
              >
                <h3 className="text-2xl font-semibold text-gray-700 mb-4">
                  Empowering Workshops
                </h3>
                <p className="text-gray-600">
                  We offer tailored workshops and training sessions that equip
                  community members with life-saving skills and essential
                  medical knowledge, empowering them to make a difference in
                  their communities.
                </p>
              </motion.div>
              <motion.div
                className="bg-white rounded-lg shadow-md p-6 text-center cursor-pointer"
                onClick={() => tabCLickHanlder("blog")}
                whileHover={{ scale: 1.01 }}
              >
                <h3 className="text-2xl font-semibold text-gray-700 mb-4">
                  Advocacy Platform
                </h3>
                <p className="text-gray-600">
                  Our online hub serves as a space for raising awareness on
                  critical healthcare issues. Through informative articles,
                  multimedia content, and interactive resources, we engage the
                  public and inspire action toward better healthcare equality.
                </p>
              </motion.div>
              <motion.div
                className="bg-white rounded-lg shadow-md p-6 text-center cursor-pointer"
                onClick={() => tabCLickHanlder("blog")}
                whileHover={{ scale: 1.01 }}
              >
                <h3 className="text-2xl font-semibold text-gray-700 mb-4">
                  Compassionate Care Packages
                </h3>
                <p className="text-gray-600">
                  We aim to deliver care packages and essential resources to
                  support patients facing medical challenges
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
