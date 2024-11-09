import React, { useState, useEffect } from "react";
import { Facebook, Twitter, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import Modal from "../components/Modal";
import axios from "axios";

const TeamMember = ({ member, onClick }) => {
  const socialLinks = JSON.parse(member.social);

  return (
    <motion.div
      className="p-6 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex flex-col items-center text-center mb-8 cursor-pointer"
      whileHover={{ scale: 1.05 }}
      onClick={() => onClick(member)}
    >
      <div className="w-full h-full flex flex-col">
        <div className="max-h-[400px] min-h-[400px] w-full mb-4 overflow-hidden rounded-md">
          <img
            className="h-full w-full object-cover"
            src={member.imageurl}
            alt={`${member.firstName} ${member.lastName}`}
          />
        </div>
        <div className="flex flex-col w-full">
          <div className="flex justify-between space-x-3 px-3">
            <h3 className="text-xl font-semibold mb-1 text-gray-900 dark:text-gray-100 text-left">
              {member.firstName} {member.lastName}
            </h3>
            {socialLinks.linkedIn && (
              <a
                href={socialLinks.linkedIn}
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            )}
            {/* Add other social links if available */}
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-2 text-left text-sm px-3">
            {member.designation}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const Team = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [selectedMember, setSelectedMember] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const openModal = (member) => {
    setSelectedMember(member);
  };

  const closeModal = () => {
    setSelectedMember(null);
  };

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const response = await axios.get(
          "https://project-1-be.onrender.com/auth/users"
        );
        setTeamMembers(response.data.sort((x, y) => x.id - y.id));
        sessionStorage.setItem(
          "team-members",
          JSON.stringify(response.data.sort((x, y) => x.id - y.id))
        );
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch team members");
        setLoading(false);
      }
    };
    if (!sessionStorage.getItem("team-members")) fetchTeamMembers();
    else {
      setTeamMembers(JSON.parse(sessionStorage.getItem("team-members")) || []);
    }
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="h-full flex flex-col items-center justify-center min_height"
    >
      <section className="py-16 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-8 text-gray-900 dark:text-gray-100">
            Meet The Team
          </h2>
          <p className="w-[80vw] md:w-[60vw] m-auto text-center text-gray-600 text-sm md:text-base mt-2 pb-8">
            Vital Voices stands at the forefront of a transformative movement to
            redefine healthcare accessibility and equity. Through our unwavering
            commitment to innovation, collaboration, and compassion, we are
            poised to catalyze lasting change in communities worldwide.
            Together, let us build a future where healthcare is a universal
            right, not a privilege, for all.
          </p>
          {loading ? (
            <div role="status" className="flex justify-center mt-10">
              <svg
                aria-hidden="true"
                class="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span class="sr-only">Loading...</span>
            </div>
          ) : (
            <div className="flex flex-wrap">
              {teamMembers.map((member) => (
                <TeamMember
                  key={member.id}
                  member={member}
                  onClick={openModal}
                />
              ))}
            </div>
          )}
        </div>

        {selectedMember && (
          <Modal
            isOpen={!!selectedMember}
            onClose={closeModal}
            member={selectedMember}
          >
            <div className="flex flex-col md:flex-row justify-start rounded-md border-b-2 mb-6 pt-3 ">
              <div className="w-full md:w-3/5 lg:w-3/5 xl:w-2/5 h-auto">
                <img
                  src={selectedMember.imageurl}
                  alt={`${selectedMember.firstName} ${selectedMember.lastName}`}
                  className="w-full max-h-[400px] min-h-[400px] object-cover rounded-md md:rounded-l-md"
                />
              </div>
              <div className="flex flex-col p-8 md:p-4 md:px-12 w-full">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                  {selectedMember.firstName} {selectedMember.lastName}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {selectedMember.designation}
                </p>
                <div className="flex flex-wrap text-sm text-left">
                  <p className="w-full md:w-1/2 lg:w-1/2 p-2 text-gray-800 dark:text-gray-200">
                    <strong>Email:</strong> <br />
                    {selectedMember.email}
                  </p>
                  <div className="text-left p-2 pt-4">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      A Bit About Me
                    </h3>
                    <div className="md:max-h-60 overflow-y-auto">
                      <p className="text-gray-600 dark:text-gray-300">
                        {selectedMember.about}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Modal>
        )}
      </section>
    </motion.div>
  );
};

export default Team;
