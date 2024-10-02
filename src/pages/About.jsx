import logo from "../assets/modal_bg.jpeg";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="h-full flex flex-col items-center min_height"
    >
      <div className="container min-h-screen flex flex-col items-center px-6 py-16">
        {/* About Section */}
        <div className="text-center max-w-3xl mb-16">
          <h1 className="text-gray-600 text-lg md:text-xl mb-2">
            The Full Story
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
            About
          </h2>
          <p className="text-gray-600 text-sm md:text-base mt-2 px-6">
            VVMA is a pioneering youth-led organization dedicated to
            revolutionizing global healthcare accessibility. Our mission is
            clear: to foster equality within the healthcare industry worldwide.
            We achieve this through our multifaceted approach, centered on our
            informative blog featuring research entries and weekly articles on
            pressing health issues. Additionally, we conduct service projects in
            underserved rural communities, providing comprehensive medical
            education, advocacy campaigns, and sustainable support initiatives.
            Through strategic partnerships and innovative programs, we are
            committed to eliminating healthcare disparities and ensuring
            equitable access to quality healthcare for all, regardless of
            socio-economic status or geographic location.
          </p>
        </div>

        {/* Mission and Vision Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-0 mb-8">
          {/* Image on the left */}
          <div className="flex items-center justify-center">
            <img
              src={logo} // Placeholder image path, replace with the actual image path
              alt="Mission Image"
              className="w-full h-auto object-cover shadow-lg rounded-lg"
            />
          </div>

          {/* Mission Section */}
          <div className="flex flex-col items-center justify-center px-4 md:px-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6">
              Mission
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              To catalyze transformative change in rural healthcare ecosystems
              globally, leveraging education, advocacy, and strategic
              partnerships to foster sustainable health equity.
            </p>
          </div>

          <hr className="block md:hidden border-gray-300 my-4" />

          {/* Vision Section */}
          <div className="flex flex-col items-center justify-center px-4 md:px-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6">
              Vision
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              To pioneer a shift in global healthcare, where every individual
              enjoys equal access to life-saving medical resources, knowledge
              and services.
            </p>
          </div>

          {/* Image on the right */}
          <div className="flex items-center justify-center">
            <img
              src={logo} // Placeholder image path, replace with the actual image path
              alt="Vision Image"
              className="w-full h-auto object-cover shadow-lg rounded-lg"
            />
          </div>
        </div>

        <div class="relative my-8 w-full m-auto">
          <div class="absolute inset-0 flex items-center">
            <div class="w-4/5 m-auto border-t border-gray-300"></div>
          </div>
          <div class="relative flex justify-center">
            <span class="px-3 bg-white text-lg font-medium text-gray-500 rounded-lg">
              &#x2618;
            </span>
          </div>
        </div>

        {/* Marketing and Outreach Section */}
        <section className="py-12 pb-6">
          <div className="container mx-auto px-4">
            <div className="max-w-full md:max-w-[70vw] mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 md:text-4xl">
                Marketing and Outreach
              </h2>
              <p className="px-4 md:px-8 pb-14 text-gray-600">
                Empowering communities with CPR workshops, an advocacy platform
                for healthcare awareness, and compassionate care packages for
                patients in need.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-[75vw] m-auto">
              <div className="bg-white rounded-lg shadow-md p-8 text-center ">
                <h3 className="text-2xl font-semibold text-gray-700 mb-4">
                  Strategic Social Media Presence
                </h3>
                <p className="text-gray-600">
                  Platforms such as Tik tok, Instagram, and to spread our
                  stories, impact, and opportunities.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-8 text-center ">
                <h3 className="text-2xl font-semibold text-gray-700 mb-4">
                  Community-Centric Events
                </h3>
                <p className="text-gray-600">
                  Hosting health fairs, workshops, and outreach events in local
                  areas to foster connections and promote our objectives.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
}
