import React, { useRef, useEffect, useState } from "react";
// Assuming these imports are correct based on your shadcn/ui setup
import {
  Carousel as ShadCarousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "@/components/ui/carousel";
import { CAROUSEL_IMAGES } from "./data/data";

export function Carousel() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [clickedIndex, setClickedIndex] = useState(null);
  // Using a state to hold the API ensures that components re-render when it's set
  // and effects dependent on it can react. useRef is generally for values that don't
  // trigger re-renders, but here we need the effect to re-run when it's populated.
  // Using useState for `api` directly can be more explicit for dependencies.
  const [api, setApi] = useState(null);


  // Listen for slide change events to update indicator
  useEffect(() => {
    // Only proceed if the API is available
    if (!api) return;

    const onSelect = () => {
      const newIndex = api.selectedScrollSnap();
      setSelectedIndex(newIndex);
    };

    // Call onSelect immediately to set the initial index
    onSelect();

    // Attach the event listener
    api.on("select", onSelect);

    // Cleanup function: remove the event listener when the component unmounts
    // or when 'api' changes (though it should only be set once)
    return () => {
      api.off("select", onSelect);
    };
  }, [api]); // Dependency: 'api' state. This effect will re-run when 'api' changes from null to the actual instance.

  // Autoplay: advance slide every 5 seconds
  useEffect(() => {
    // Only proceed if the API is available
    if (!api) return;

    const interval = setInterval(() => {
      // Calculate the next index, ensuring it loops back to 0
      const next = (api.selectedScrollSnap() + 1) % CAROUSEL_IMAGES.length;
      api.scrollTo(next);
    },7000);

    // Cleanup function: clear the interval when the component unmounts
    // or when 'api' changes
    return () => clearInterval(interval);
  }, [api, CAROUSEL_IMAGES.length]); // Dependencies: 'api' and 'images.length' (in case image count changes)

  // Handle image click with animation feedback
  const handleImageClick = (index) => {
    console.log(`Image ${index + 1} clicked`);
    setClickedIndex(index);
    
    // Reset click animation after a short delay
    setTimeout(() => {
      setClickedIndex(null);
    }, 200);

  };

  return (
    <div className="w-full max-w-6xl flex flex-col items-center justify-center mt-8 mx-auto px-4">
      <div className="relative w-full group">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700"></div>
      <ShadCarousel className="relative flex flex-col items-center bg-white/80 backdrop-blur-sm rounded-3xl p-4 shadow-2xl border border-white/50" opts={{ loop: true }} setApi={setApi}>
        <CarouselContent>
          {CAROUSEL_IMAGES.map((src, idx) => (
            <CarouselItem key={idx} className="flex items-center justify-center">
              <div 
                className={`w-3/4 relative cursor-pointer group/image transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${
                  clickedIndex === idx ? 'animate-pulse scale-[0.98]' : ''
                }`}
                onClick={() => handleImageClick(idx)}
              >
                <img
                  src={src}
                  alt={`Imagen ${idx + 1}`}
                  className="rounded-lg shadow-lg w-full h-40 sm:h-56 md:h-72 object-cover transition-all duration-500 group-hover/image:shadow-2xl group-hover/image:brightness-110"
                  onError={(e) => {
                    e.currentTarget.src = `https://placehold.co/800x300/CCCCCC/333333?text=Error+Loading+Image`;
                  }}
                />
                {/* Overlay for click feedback */}
                <div className={`absolute inset-0 bg-white/20 rounded-lg opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 ${
                  clickedIndex === idx ? 'opacity-100 bg-white/40' : ''
                }`}></div>
                
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* Controls and indicators below carousel image, but inside Carousel context */}
        <div className="flex flex-col items-center gap-2 w-full mt-4">
          <div className="flex gap-4">
          <CarouselPrevious className="border-2 border-sky-500 bg-white/90 backdrop-blur-sm hover:bg-sky-500 hover:border-sky-600 transition-all duration-300 hover:scale-110 hover:shadow-lg active:scale-95 cursor-pointer" />
          <CarouselNext className="border-2 border-sky-500 bg-white/90 backdrop-blur-sm hover:bg-sky-500 hover:border-sky-600 transition-all duration-300 hover:scale-110 hover:shadow-lg active:scale-95 cursor-pointer" />
          </div>
          <div className="flex space-x-2 z-10 mt-2">
            {CAROUSEL_IMAGES.map((_, idx) => (
              <button
                key={idx}
                className={`w-3 h-3 rounded-full transition-colors border border-sky-500 focus:outline-none cursor-pointer
                  ${idx === selectedIndex ? "bg-sky-500" : "bg-white dark:bg-gray-900"}
                  hover:bg-sky-500 hover:scale-130 transition-all duration-300 hover:shadow-md hover:border-sky-700`}
                aria-label={`Ir a la imagen ${idx + 1}`}
                onClick={() => api && api.scrollTo(idx)}
              />
            ))}
          </div>
        </div>
      </ShadCarousel>
      </div>
    </div>
  );
}
