import React from "react";

/**
 * Reusable SectionHeader component for consistent section titles
 * @param {string} title - The main title text
 * @param {string} subtitle - Optional subtitle text
 * @param {string} className - Additional CSS classes
 */
export function SectionHeader({ title, subtitle, className = "" }) {
  return (
    <div className={`text-center mb-12 ${className}`}>
      <h1 className="text-[#3E49C4] text-3xl md:text-4xl font-bold mb-4 tracking-tight">
        {title}
      </h1>
      <div className="w-24 h-1 bg-gradient-to-r from-[#3E49C4] to-sky-500 mx-auto rounded-full"></div>
      {subtitle && (
        <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
