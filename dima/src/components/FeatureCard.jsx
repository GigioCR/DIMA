import React from 'react';

export function FeatureCard({ feature }) {
  const IconComponent = feature.icon;
  
  return (
    <div className="group bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/30 transition-all duration-500 hover:shadow-xl hover:scale-105 hover:bg-white/80">
      <div className="flex items-center mb-6">
        <div className="bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl p-3 mr-4 transition-transform duration-300 group-hover:scale-110">
          <IconComponent className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-gray-800 group-hover:text-sky-600 transition-colors duration-300">
          {feature.title}
        </h3>
      </div>
      <p className="text-gray-700 leading-relaxed text-lg">
        {feature.description}
      </p>
    </div>
  );
}
