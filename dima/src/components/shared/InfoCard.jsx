import React from "react";
import { User, Lock } from "lucide-react";

/**
 * Icon mapping for InfoCard component
 */
const iconMap = {
  User: User,
  Lock: Lock
};

/**
 * Reusable InfoCard component for displaying information with icons
 * @param {string} icon - Icon name (User, Lock, etc.)
 * @param {string} title - Card title
 * @param {string} description - Main description text
 * @param {string} example - Optional example text
 * @param {string} note - Optional note text
 * @param {string} bgColor - Background gradient colors
 * @param {string} iconColor - Icon background color
 * @param {string} className - Additional CSS classes
 */
export function InfoCard({ 
  icon, 
  title, 
  description, 
  example, 
  note, 
  bgColor = "from-blue-50 to-indigo-50",
  iconColor = "bg-blue-500",
  className = "" 
}) {
  const IconComponent = iconMap[icon] || User;

  return (
    <div className={`bg-gradient-to-br ${bgColor} p-6 rounded-xl border border-blue-200 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] ${className}`}>
      <div className="flex items-start gap-4">
        <div className={`${iconColor} rounded-full p-3 flex-shrink-0`}>
          <IconComponent className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="font-bold text-gray-800 text-lg mb-3">{title}</h3>
          <p className="text-gray-600 leading-relaxed">
            {description}
            {example && (
              <>
                {" "}
                <span className="font-mono bg-white px-2 py-1 rounded text-blue-600">
                  {example}
                </span>
                {note && ` ${note}`}
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
