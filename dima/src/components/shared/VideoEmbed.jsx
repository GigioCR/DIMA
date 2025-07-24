import React from "react";
import { Play } from "lucide-react";

/**
 * Reusable VideoEmbed component for YouTube videos with modern styling
 * @param {string} src - YouTube embed URL
 * @param {string} title - Video title for accessibility
 * @param {string} className - Additional CSS classes
 * @param {boolean} showPlayIcon - Whether to show the play icon overlay
 */
export function VideoEmbed({ 
  src, 
  title = "Video", 
  className = "", 
  showPlayIcon = true 
}) {
  return (
    <div className={`relative group ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
      <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-2 shadow-xl border border-white/50">
        <iframe 
          src={src}
          width="600" 
          height="300" 
          className="rounded-xl shadow-lg w-full h-48 sm:h-64 md:h-80"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={title}
        />
      </div>
    </div>
  );
}
