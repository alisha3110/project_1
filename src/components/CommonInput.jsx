import React, { useEffect, useState } from "react";

const CommonInput = ({
  type,
  name,
  value,
  onChange,
  label,
  required,
  compareWith,
  passError,
  disableVaidation,
  hideLabel,
  customClass,
  placeholder,
  readOnly,
}) => {
  const [error, setError] = useState("");

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,}$/;

  useEffect(() => {
    setError(passError);
  }, [passError]);

  const handleInputChange = (e) => {
    const { value } = e.target;

    // Check if field is required and empty
    if (required && !value.trim()) {
      setError("This field is required.");
    }

    if (error || !value.length) handleBlur(e);

    onChange(e);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Disable Enter key action
    }
  };

  const handleBlur = (e) => {
    const { value } = e.target;

    // Check if field is required and empty
    if (required && !value.trim()) {
      setError("This field is required.");
    }
    // If the input type is email, check for valid email format
    else if (!disableVaidation && type === "email" && !emailRegex.test(value)) {
      setError("Please enter a valid email address.");
    }
    // If the input type is password, validate the password format
    else if (
      !disableVaidation &&
      type === "password" &&
      !passwordRegex.test(value)
    ) {
      setError("Please maintain standards");
    } else {
      setError("");
    }
    if (!disableVaidation && compareWith && compareWith.value.length) {
      if (value !== compareWith.value) {
        setError("Passwords do not match.");
      } else {
        setError("");
      }
    }
  };

  return (
    <div className="relative w-full min-w-[100px] h-10 mb-4 group">
      <input
        type={type}
        name={name}
        value={value}
        onKeyDown={handleKeyDown} // Disable Enter key
        onChange={handleInputChange}
        readOnly={readOnly}
        onBlur={handleBlur} // Handle validation on blur
        className={`peer w-full h-full bg-transparent ${
          error
            ? "border-red-500"
            : hideLabel
            ? "focus:border-t-black"
            : "focus:border-t-transparent"
        } text-blue-gray-700 font-sans border-t-0 font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2  text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900 ${
          customClass || ""
        } ${readOnly ? "bg-input-disabled" : ""} `}
        placeholder={placeholder}
      />
      {!hideLabel && (
        <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
          {label}
        </label>
      )}

      {/* Error tooltip shown on hover  */}
      {error && (
        <div className="absolute right-2 w-auto text-red-500 top-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-right">
          {error}
        </div>
      )}
    </div>
  );
};

export default CommonInput;
