import React from 'react';
import { User } from 'lucide-react';

export function PersonCard({ person, onClick }) {
  return (
    <div 
      className="group bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-300 transition-all duration-500 hover:shadow-xl hover:scale-105 hover:bg-white/80 text-center cursor-pointer"
      onClick={() => onClick(person)}
    >
      <div className="mb-4 flex justify-center">
        <div className="w-24 h-24 bg-gradient-to-br from-sky-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
          <User className="w-12 h-12 text-white" />
        </div>
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-sky-600 transition-colors duration-300">
        {person.name}
      </h3>
      <p className="text-gray-600 font-medium">
        {person.role}
      </p>
    </div>
  );
}
