import React, { useEffect, useState } from "react";

const CommonSelect = ({ options, name, value, onChange, label, required }) => {
  const [error, setError] = useState("");

  const handleSelectChange = (e) => {
    const { value } = e.target;
    if (required && !value.trim()) {
      setError("This field is required.");
    } else {
      setError("");
    }
    onChange(e);
  };

  return (
    <div
      className={`relative w-full min-w-[100px] h-auto mb-4 group ${
        error ? "border-red-500" : ""
      }`}
    >
      <label
        htmlFor={name}
        className="block mb-2 text-sm text-gray-700 dark:text-white"
      >
        {label}
      </label>
      <select
        name={name}
        onBlur={() => handleSelectChange({ target: { value } })}
        value={value}
        onChange={handleSelectChange}
        className={`bg-gray-50 border ${
          error ? "border-red-500" : "border-gray-300"
        } text-blue-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
      >
        <option value="" disabled hidden className="text-gray-700">
          Choose one
        </option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {/* Error tooltip on hover */}
      {error && (
        <div className="absolute right-2 w-full text-red-500 top-2/3 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-right">
          {error}
        </div>
      )}
    </div>
  );
};

export default CommonSelect;
