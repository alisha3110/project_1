import logo from "../assets/modal_bg.jpeg";
import logo1 from "../assets/brand_logo.png";
import logo2 from "../assets/about_2.png";
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
            VVMA is a youth-led organization breaking barriers in global
            healthcare accessibility. Our mission is rooted in creating
            equitable opportunities for communities often left behind. We
            combine thoughtful advocacy with hands-on action, sharing impactful
            research and weekly articles on pressing health issues through our
            blog. Beyond raising awareness, we’re on the ground in underserved
            rural areas, delivering medical education, driving advocacy
            initiatives, and building sustainable support systems. Through
            collaboration and innovative programs, we’re working toward a future
            where quality healthcare is a universal reality, no matter your
            background or location.
          </p>
        </div>

        {/* Mission and Vision Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-0 mb-8">
          {/* Image on the left */}
          <div className="flex items-center justify-center">
            <img
              src={logo1} // Placeholder image path, replace with the actual image path
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
              To drive transformative change in healthcare worldwide by
              leveraging education, advocacy, and strategic partnerships to
              build sustainable health equity.
            </p>
          </div>

          <hr className="block md:hidden border-gray-300 my-4" />

          {/* Vision Section */}
          <div className="flex flex-col items-center justify-center px-4 md:px-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6">
              Vision
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              To inspire a global healthcare system where every individual has
              equal access to life-saving medical resources, knowledge, and
              services.
            </p>
          </div>

          {/* Image on the right */}
          <div className="flex items-center justify-center">
            <img
              src={logo2} // Placeholder image path, replace with the actual image path
              alt="Vision Image"
              className="w-full h-auto object-cover shadow-lg rounded-lg"
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
                Marketing and Outreach
              </h2>
              <p className="px-4 md:px-8 pb-14 text-gray-600">
                Empowering communities with workshops, an advocacy platform for
                healthcare awareness, and compassionate care packages for
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
