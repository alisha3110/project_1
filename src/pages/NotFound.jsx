import { useNavigate } from "react-router-dom";
import CommonButton from "../components/CommonButton";
import { motion } from "framer-motion";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="h-full flex flex-col items-center min_height"
    >
      <main class="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
        <div class="text-center">
          <p class="text-base font-semibold text-indigo-600">404</p>
          <h1 class="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Page not found
          </h1>
          <p class="mt-6 text-base leading-7 text-gray-600">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div class="mt-10 flex items-center justify-center gap-x-6">
            <CommonButton onClick={() => navigate("/")}>
              Go to Homepage
            </CommonButton>
          </div>
        </div>
      </main>
    </motion.div>
  );
}
