import React, { useEffect, useRef } from 'react';
import { User, X } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import './PersonModal.css';

export function PersonModal({ person, onClose }) {
  const modalRef = useRef(null);
  const previousActiveElement = useRef(null);

  useEffect(() => {
    if (person) {
      // Store the currently focused element
      previousActiveElement.current = document.activeElement;
      
      // Prevent body scroll
      document.body.style.overflow = 'hidden';
      
      // Focus the modal
      if (modalRef.current) {
        modalRef.current.focus();
      }
      
      // Handle escape key
      const handleEscape = (e) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };
      
      document.addEventListener('keydown', handleEscape);
      
      return () => {
        // Cleanup: restore body scroll and focus
        document.body.style.overflow = 'unset';
        document.removeEventListener('keydown', handleEscape);
        
        // Restore focus to the previously focused element
        if (previousActiveElement.current) {
          previousActiveElement.current.focus();
        }
      };
    }
  }, [person, onClose]);

  if (!person) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Focus trap handler
  const handleKeyDown = (e) => {
    if (e.key === 'Tab') {
      const focusableElements = modalRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (e.shiftKey) {
        // Shift + Tab
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        // Tab
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="person-modal-title"
    >
      <Card 
        ref={modalRef}
        className="max-w-2xl w-full max-h-[90vh] relative animate-modal-appear overflow-hidden"
        tabIndex={-1}
        onKeyDown={handleKeyDown}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-300 z-10"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>

        {/* Modal Content with Custom Scrollbar */}
        <CardContent className="p-8 max-h-[90vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent hover:scrollbar-thumb-gray-400">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="mb-6 flex justify-center">
              <div className="w-32 h-32 bg-gradient-to-br from-sky-500 to-blue-600 rounded-full flex items-center justify-center shadow-xl">
                <User className="w-16 h-16 text-white" />
              </div>
            </div>
            <h2 id="person-modal-title" className="text-3xl font-bold text-gray-800 mb-2">
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
        </CardContent>
      </Card>
    </div>
  );
}
