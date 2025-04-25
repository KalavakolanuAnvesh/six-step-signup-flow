
import React from 'react';

interface FeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Feature = ({ title, description, icon }: FeatureProps) => {
  return (
    <div className="bg-botplanet-dark-blue p-8 rounded-lg flex flex-col items-center text-center animate-fade-in">
      <div className="mb-4 text-botplanet-purple text-4xl">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

export default Feature;
