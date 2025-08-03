import React from "react";

/**
 * Reusable StepCard component for displaying numbered steps with Pasos styling
 * @param {number} stepNumber - The step number to display (can also use 'step' prop for compatibility)
 * @param {string} content - The main content text (can also use 'text' prop for compatibility)
 * @param {string} url - Optional URL to display as a link
 * @param {string} className - Additional CSS classes
 * @param {boolean} allowHTML - Whether to render HTML content (default: false)
 */
export function StepCard({ 
  stepNumber, 
  step, 
  content, 
  text, 
  url, 
  className = "",
  allowHTML = false 
}) {
  // Support both prop naming conventions for compatibility
  const displayStep = stepNumber || step;
  const displayText = content || text;

  const renderContent = () => {
    if (allowHTML) {
      return <span dangerouslySetInnerHTML={{ __html: displayText }} />;
    }
    return displayText;
  };

  return (
    <li className={`flex items-start gap-3 ${className}`}>
      <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">
        {displayStep}
      </span>
      <span className="text-base leading-relaxed min-w-0 flex-1">
        {renderContent()}
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
      </span>
    </li>
  );
}
