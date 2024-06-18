import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const FormInput = ({ label }) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="mb-4 relative">
      <label className="block text-lg font-medium text-gray-700">
        {label}
      </label>
      <input
        type={showPassword ? 'text' : 'password'}
        className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-600 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg"
      />
      <span 
        className="absolute inset-y-0 right-3 flex items-center cursor-pointer top-8"
        onClick={toggleShowPassword}
      >
        <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} className="w-6 h-6 text-gray-500" />
      </span>
    </div>
  );
};

export default FormInput;