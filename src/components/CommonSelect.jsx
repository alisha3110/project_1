import React, { useState } from "react";
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
        <div className="relative w-full min-w-[100px] h-auto mb-4">
            <label htmlFor="select" className="block mb-2 text-sm text-gray-700 dark:text-white">
                {label}
            </label>
            <select
                name={name}
                value={value}
                onChange={handleSelectChange}
                className="bg-gray-50 border border-gray-300 text-blue-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
        </div>
    );
};

export default CommonSelect;
