import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export function FAQItem({ question, answer, index }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white/70 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 overflow-hidden transition-all duration-300 hover:shadow-xl">
      {/* Question Header */}
      <button
        onClick={toggleOpen}
        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-sky-50/50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-inset"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
      >
        <div className="flex items-start gap-4">
          <span className="flex-shrink-0 w-8 h-8 bg-sky-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">
            {index + 1}
          </span>
          <h3 className="text-lg font-semibold text-gray-800 leading-relaxed">
            {question}
          </h3>
        </div>
        <div className="flex-shrink-0 ml-4">
          {isOpen ? (
            <ChevronUp className="w-5 h-5 text-sky-500 transition-transform duration-200" />
          ) : (
            <ChevronDown className="w-5 h-5 text-sky-500 transition-transform duration-200" />
          )}
        </div>
      </button>

      {/* Answer Content */}
      <div
        id={`faq-answer-${index}`}
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-6">
          <div className="ml-12 pt-2">
            <div className="bg-gradient-to-r from-sky-50 to-blue-50 rounded-lg p-4 border-l-4 border-sky-400">
              <p className="text-gray-700 leading-relaxed">
                {answer}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
