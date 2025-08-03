import React from "react";
import { Play } from "lucide-react";

/**
 * Reusable VideoEmbed component for YouTube and Facebook videos with modern styling
 * @param {string} src - Video URL (YouTube embed or Facebook video)
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
  // Check if it's a Facebook video
  const isFacebookVideo = src.includes('facebook.com');
  
  // Convert Facebook video URL to embed format
  const getEmbedUrl = (url) => {
    if (isFacebookVideo) {
      // For Facebook videos, we need to use the Facebook embed player
      return `https://www.facebook.com/plugins/video.php?height=314&href=${encodeURIComponent(url)}&show_text=false&width=560&t=0`;
    }
    return url; // Return as-is for YouTube embeds
  };

  return (
    <div className={`relative group ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
      <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-2 shadow-xl border border-white/50">
        <iframe 
          src={getEmbedUrl(src)}
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
