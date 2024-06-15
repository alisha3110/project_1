import React, { useState } from "react";
import { Facebook, Twitter, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { teamMembers } from "../constants";
import Modal from '../components/Modal'

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
    <section className="py-12 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8 text-gray-900 dark:text-gray-100">
          Meet The Team
        </h2>
        <div className="flex flex-wrap -mx-4">
          {teamMembers.map((member) => (
            <TeamMember key={member.name} member={member} onClick={openModal} />
          ))}
        </div>
      </div>

      <Modal isOpen={!!selectedMember} onClose={closeModal} member={selectedMember} />
    </section>
    </motion.div>
  );
};

export default Team;
