import React from 'react';

const Button = ({ text }) => {
  return (
    <button
      type="submit"
      className="w-full bg-naranja text-white py-3 px-4 rounded-md hover:bg-naranja text-lg"
    >
      {text}
    </button>
  );
};

export default Button;