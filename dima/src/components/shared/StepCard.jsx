import React from "react";

/**
 * Reusable StepCard component for displaying numbered steps with modern styling
 * @param {number} stepNumber - The step number to display
 * @param {string} content - The main content text
 * @param {string} url - Optional URL to display as a link
 * @param {string} className - Additional CSS classes
 */
export function StepCard({ stepNumber, content, url, className = "" }) {
  return (
    <div className={`bg-gradient-to-br from-indigo-50 to-blue-50 p-6 rounded-xl border border-indigo-200 hover:shadow-lg transition-all duration-300 hover:scale-[1.01] group ${className}`}>
      <div className="flex items-start gap-4">
        <div className="bg-indigo-500 rounded-full p-3 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
          <span className="text-white font-bold text-lg">{stepNumber}</span>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-gray-700 leading-relaxed break-words">
            {content}
            {url && (
              <>
                {" "}
                <strong className="break-all">
                  <a 
                    href={url} 
                    className="text-blue-600 hover:text-blue-800 underline transition-colors duration-200 break-all"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {url}
                  </a>
                </strong>
              </>
            )}
            .
          </p>
        </div>
      </div>
    </div>
  );
}
