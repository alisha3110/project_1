import React, { useState } from "react";

const Tabs = ({ tabs, defaultActiveTab = 0, onTabChange }) => {
  const [activeTab, setActiveTab] = useState(defaultActiveTab);

  const handleTabClick = (index) => {
    setActiveTab(index);
    if (onTabChange) onTabChange(index);
  };

  return (
    <div className="w-full">
      {/* Tab Headers */}
      <div className="flex space-x-6 relative">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`relative py-2 px-6 font-medium transform transition-transform duration-300 ease-out ${
              activeTab === index
                ? "scale-110 text-white"
                : "text-gray-500 hover:text-darkgray-500 hover:scale-105"
            }`}
            onClick={() => handleTabClick(index)}
          >
            {tab.label}
            {/* Fancy Underline */}
            <span
              className={`absolute left-0 right-0 -bottom-1 h-[3px] rounded bg-white transition-all duration-300 ease-out ${
                activeTab === index ? "w-full" : "w-0"
              }`}
            ></span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-6 rounded-lg transition-opacity duration-500 ease-in-out">
        {tabs[activeTab] && tabs[activeTab].content}
      </div>
    </div>
  );
};

export default Tabs;
