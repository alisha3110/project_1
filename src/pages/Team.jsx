import React, { useState } from "react";
import { Facebook, Twitter, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { teamMembers } from "../constants";
import Modal from "../components/Modal";

const TeamMember = ({ member, onClick }) => {
  return (
    <motion.div
      className="p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/3 flex flex-col items-center text-center mb-8 cursor-pointer"
      whileHover={{ scale: 1.05 }}
      onClick={() => onClick(member)}
    >
      <div className="w-85">
        <img
          className="w-100 h-100 object-cover mb-4 rounded-md"
          src={member.imageUrl}
          alt={member.name}
        />
        <div className="w-full flex justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-1 text-gray-900 dark:text-gray-100">
              {member.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2 text-left text-sm">
              {member.role}
            </p>
          </div>
          <div className="flex space-x-3 justify-center text-sm">
            <a
              href={member.social.facebook}
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
            >
              <Facebook className="w-4" />
            </a>
            <a
              href={member.social.twitter}
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
            >
              <Twitter className="w-4" />
            </a>
            <a
              href={member.social.linkedin}
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
            >
              <Linkedin className="w-4" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const openModal = (member) => {
    setSelectedMember(member);
  };

  const closeModal = () => {
    setSelectedMember(null);
  };

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
          <div className="flex flex-wrap">
            {teamMembers.map((member) => (
              <TeamMember
                key={member.name}
                member={member}
                onClick={openModal}
              />
            ))}
          </div>
        </div>

        {selectedMember && (
          <Modal
            isOpen={!!selectedMember}
            onClose={closeModal}
            member={selectedMember}
          >
            <div className="flex flex-col md:flex-row justify-start rounded-md border-b-2 border-black dark:border-gray-600 mb-6">
              <div className="w-full md:w-3/5 lg:w-3/5 xl:w-2/5 h-auto">
                <img
                  src={selectedMember.imageUrl}
                  alt={selectedMember.name}
                  className="w-full h-full object-cover rounded-md md:rounded-l-md"
                />
              </div>
              <div className="flex flex-col p-8 md:p-4 md:px-12 w-full">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                  {selectedMember.name}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {selectedMember.role}
                </p>
                <div className="flex flex-wrap text-sm text-left">
                  <p className="w-full md:w-1/2 lg:w-1/2 p-2 text-gray-800 dark:text-gray-200">
                    <strong>Phone:</strong> <br />
                    {selectedMember.phone}
                  </p>
                  <p className="w-full md:w-1/2 lg:w-1/2 p-2 text-gray-800 dark:text-gray-200">
                    <strong>Email:</strong> <br />
                    {selectedMember.email}
                  </p>
                  <p className="w-full md:w-1/2 lg:w-1/2 p-2 text-gray-800 dark:text-gray-200">
                    <strong>Address:</strong> <br />
                    {selectedMember.address}
                  </p>
                  <p className="w-full md:w-1/2 lg:w-1/2 p-2 text-gray-800 dark:text-gray-200">
                    <strong>Date of Birth:</strong> <br />
                    {selectedMember.dob}
                  </p>
                </div>
              </div>
            </div>
            <div className="text-left p-8 md:px-12 pt-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                A Bit About Me
              </h3>
              <div className="md:max-h-60 overflow-y-auto">
                <p className="text-gray-600 dark:text-gray-300">
                  {selectedMember.about}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  {selectedMember.moreAbout}
                </p>
              </div>
            </div>
          </Modal>
        )}
      </section>
    </motion.div>
  );
};

export default Team;
