import logo1 from "../assets/brand_logo.png";
import logo2 from "../assets/about_2.png";
import { motion } from "framer-motion";
import SEO from "../components/SEO";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="h-full flex flex-col items-center min_height"
    >
      <SEO
        title="About Us | Vital Voices Medical Advocacy (VVMA) | Youth-Led Global Health Non-Profit"
        description="Learn about Vital Voices Medical Advocacy (VVMA - vvmadvocacy.com), founded by Anvitha Rayala. Discover our youth-led global health non-profit mission in healthcare accessibility advocacy, community health education and CPR workshops, and underserved rural medical outreach."
        keywords="vvmadvocacy.com, Vital Voices Medical Advocacy, VVMA youth health advocacy, Anvitha Rayala VVMA, Anvitha Rayala, youth-led global health non-profit, healthcare accessibility advocacy, community health education and CPR workshops, underserved rural medical outreach, about VVMA"
        canonical="https://vvmadvocacy.com/#/about"
      />
      <div className="container min-h-screen flex flex-col items-center px-6 py-16">
        {/* About Section */}
        <div className="text-center max-w-3xl mb-16">
          <p className="text-gray-600 text-lg md:text-xl mb-2 font-medium">
            The Full Story
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
            About Vital Voices Medical Advocacy (VVMA)
          </h1>
          <p className="text-gray-600 text-sm md:text-base mt-2 px-6 leading-relaxed">
            <strong>Vital Voices Medical Advocacy (VVMA)</strong> at <strong>vvmadvocacy.com</strong> is a <strong>youth-led global health non-profit</strong> founded by <strong>Anvitha Rayala</strong>. Our organization was born from a singular conviction: healthcare is a universal human right. Driven by <strong>VVMA youth health advocacy</strong>, we lead <strong>healthcare accessibility advocacy</strong> that connects grassroots activism with institutional healthcare reform. Beyond producing in-depth medical research and policy blogs, we are active on the ground conducting <strong>community health education and CPR workshops</strong> and leading <strong>underserved rural medical outreach</strong> to empower individuals and families facing severe healthcare barriers.
          </p>
        </div>

        {/* Mission and Vision Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-0 mb-8">
          {/* Image on the left */}
          <div className="flex items-center justify-center">
            <img
              src={logo1}
              alt="Vital Voices Medical Advocacy Mission - Healthcare Accessibility Advocacy"
              className="w-full h-auto object-cover shadow-lg rounded-lg"
              loading="lazy"
            />
          </div>

          {/* Mission Section */}
          <div className="flex flex-col items-center justify-center px-4 md:px-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6">
              Healthcare Accessibility Advocacy & Our Mission
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              To drive transformative, lasting change in global healthcare through <strong>community health education and CPR workshops</strong>, innovative youth leadership, and <strong>underserved rural medical outreach</strong> that ensures accessible care for every community.
            </p>
          </div>

          <hr className="block md:hidden border-gray-300 my-4" />

          {/* Vision Section */}
          <div className="flex flex-col items-center justify-center px-4 md:px-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6">
              Global Health Equity & Our Vision
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              To build a global healthcare landscape where every individual in underserved rural regions and beyond possesses equal access to life-saving emergency medical knowledge, quality preventative care, and vital health resources.
            </p>
          </div>

          {/* Image on the right */}
          <div className="flex items-center justify-center">
            <img
              src={logo2}
              alt="Vital Voices Vision - Underserved Rural Medical Outreach & CPR Workshops"
              className="w-full h-auto object-cover shadow-lg rounded-lg"
              loading="lazy"
            />
          </div>
        </div>

        <div className="relative my-8 w-full m-auto">
          <div className="absolute inset-0 flex items-center">
            <div className="w-4/5 m-auto border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="px-3 bg-white text-lg font-medium text-gray-500 rounded-lg">
              &#x2618;
            </span>
          </div>
        </div>

        {/* Marketing and Outreach Section */}
        <section className="py-12 pb-6">
          <div className="container mx-auto px-4">
            <div className="max-w-full md:max-w-[70vw] mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 md:text-4xl">
                Community Outreach & VVMA Youth Health Advocacy
              </h2>
              <p className="px-4 md:px-8 pb-14 text-gray-600">
                Empowering communities with <strong>community health education and CPR workshops</strong>, an advocacy platform for healthcare accessibility, and <strong>underserved rural medical outreach</strong>.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-[75vw] m-auto">
              <div className="bg-white rounded-lg shadow-md p-8 text-center">
                <h3 className="text-2xl font-semibold text-gray-700 mb-4">
                  Youth Health Advocacy & Digital Outreach
                </h3>
                <p className="text-gray-600">
                  Mobilizing youth leaders through digital media platforms to spread stories of impact, patient advocacy, and actionable health knowledge globally.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-8 text-center">
                <h3 className="text-2xl font-semibold text-gray-700 mb-4">
                  Community Health Education and CPR Workshops
                </h3>
                <p className="text-gray-600">
                  Organizing hands-on CPR training camps, health fairs, and underserved rural medical outreach missions that equip families with life-saving skills.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
}
