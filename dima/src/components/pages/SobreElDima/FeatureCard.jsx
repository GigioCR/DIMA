import React from 'react';

export function FeatureCard({ feature }) {
  const IconComponent = feature.icon;

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200 shadow-lg hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
      <div className="flex items-start gap-4">
        {feature.icon ? <div className="bg-blue-500 rounded-full p-3 flex-shrink-0">
           <IconComponent className="w-6 h-6 text-white" />
        </div> : null}
        
        <div>
          <h3 className="font-bold text-gray-800 text-lg mb-3">
            {feature.title}
          </h3>
          <p className="text-gray-600 leading-relaxed">
            {feature.description}
          </p>
        </div>
      </div>
    </div>
  );
}
