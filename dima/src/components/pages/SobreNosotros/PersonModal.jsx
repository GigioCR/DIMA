import React from 'react';
import { User, X } from 'lucide-react';

export function PersonModal({ person, onClose }) {
  if (!person) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative animate-modal-appear">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-300 z-10"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>

        {/* Modal Content */}
        <div className="p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="mb-6 flex justify-center">
              <div className="w-32 h-32 bg-gradient-to-br from-sky-500 to-blue-600 rounded-full flex items-center justify-center shadow-xl">
                <User className="w-16 h-16 text-white" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              {person.name}
            </h2>
            <p className="text-xl text-sky-600 font-semibold">
              {person.role}
            </p>
          </div>

          {/* Bio Section */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-3">Biografía</h3>
            <p className="text-gray-700 leading-relaxed">
              {person.bio}
            </p>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-2xl p-4">
              <h4 className="font-bold text-gray-800 mb-2">Educación</h4>
              <p className="text-gray-700">{person.education}</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-4">
              <h4 className="font-bold text-gray-800 mb-2">Experiencia</h4>
              <p className="text-gray-700">{person.experience}</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-6 bg-sky-50 rounded-2xl p-4">
            <h4 className="font-bold text-gray-800 mb-2">Contacto</h4>
            <p className="text-sky-600">{person.email}</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes modal-appear {
          from { opacity: 0; transform: scale(0.9) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-modal-appear {
          animation: modal-appear 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
