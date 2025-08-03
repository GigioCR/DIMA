import { X, ExternalLink, Download } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "../../shared/Button";
import { useEffect, useRef } from "react";

export function TopicModal({ isOpen, onClose, topic }) {
  const modalRef = useRef(null);
  const previousActiveElement = useRef(null);

  useEffect(() => {
    if (isOpen) {
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
  }, [isOpen, onClose]);

  if (!isOpen || !topic) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleDiagnosticClick = () => {
    window.open(topic.diagnosticUrl, "_blank");
  };

  const handlePracticeClick = () => {
    window.open(topic.practiceUrl, "_blank");
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
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <Card 
        ref={modalRef}
        className="max-w-4xl w-full max-h-[85vh] flex flex-col relative p-0 overflow-hidden"
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

        {/* Header */}
        <CardHeader className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6 rounded-t-xl flex-shrink-0">
          <CardTitle id="modal-title" className="text-2xl font-bold pr-12">{topic.title}</CardTitle>
        </CardHeader>

        {/* Content */}
        <CardContent className="p-6 overflow-y-auto flex-1">
          <div className="space-y-6">
            {topic.contents && topic.contents.map((section, sectionIndex) => (
              <div key={sectionIndex} className="space-y-3">
                <h3 className="text-lg font-semibold text-blue-700 border-b border-blue-200 pb-2">
                  Sección {sectionIndex + 1}
                </h3>
                <ul className="space-y-2">
                  {section.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-700 leading-relaxed flex items-start">
                      <span className="text-blue-500 mr-3 flex-shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </CardContent>

        {/* Footer */}
        <div className="bg-gray-50 p-6 border-t border-gray-200 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 rounded-b-xl flex-shrink-0">
          <p className="text-gray-600 text-sm">
            Accede al diagnóstico para evaluar tus conocimientos en este tema
          </p>
          <Button
            onClick={handleDiagnosticClick}
            text="Ir al Diagnóstico"
            icon={<ExternalLink size={18} />}
          />
          <Button
            onClick={handlePracticeClick}
            text="Práctica"
            icon={<Download size={18} />}
          />
        </div>
      </Card>
    </div>
  );
}
