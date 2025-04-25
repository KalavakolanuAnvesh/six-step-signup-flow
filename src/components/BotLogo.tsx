
import React from 'react';

const BotLogo = () => {
  return (
    <div className="w-8 h-8 bg-botplanet-purple rounded-md flex items-center justify-center">
      <svg 
        width="20" 
        height="20" 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="4" y="4" width="16" height="12" rx="2" fill="white" />
        <circle cx="9" cy="10" r="2" fill="#1A1F2C" />
        <circle cx="15" cy="10" r="2" fill="#1A1F2C" />
        <path d="M8 16L12 20L16 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
};

export default BotLogo;
