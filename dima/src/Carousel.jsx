import React, { useRef, useEffect, useState } from "react";
// Assuming these imports are correct based on your shadcn/ui setup
import {
  Carousel as ShadCarousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "@/components/ui/carousel";

const images = [
  "https://placehold.co/800x300/4F46E5/FFF?text=Imagen+1",
  "https://placehold.co/800x300/059669/FFF?text=Imagen+2",
  "https://placehold.co/800x300/EA580C/FFF?text=Imagen+3",
  "https://placehold.co/800x300/4F46E5/FFF?text=Imagen+4"
];

export function Carousel() {
  const [selectedIndex, setSelectedIndex] = useState(0);
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
      setSelectedIndex(api.selectedScrollSnap());
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
      const next = (api.selectedScrollSnap() + 1) % images.length;
      api.scrollTo(next);
    },7000);

    // Cleanup function: clear the interval when the component unmounts
    // or when 'api' changes
    return () => clearInterval(interval);
  }, [api, images.length]); // Dependencies: 'api' and 'images.length' (in case image count changes)

  return (
    <div className="w-full max-w-5xl mx-auto">
      <ShadCarousel
        className="relative"
        opts={{ loop: true }}
        // Use setApi from useState to update the API instance
        setApi={setApi}
      >
        <CarouselContent>
          {images.map((src, idx) => (
            <CarouselItem key={idx} className="flex items-center justify-center">
              <img
                src={src}
                alt={`Imagen ${idx + 1}`}
                className="rounded-lg shadow-lg w-full h-72 object-cover"
                // Add onerror for placeholder in case image fails to load
                onError={(e) => {
                  e.currentTarget.src = `https://placehold.co/800x300/CCCCCC/333333?text=Error+Loading+Image`;
                }}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-sky-500"/>
        <CarouselNext className="bg-sky-500"/>
        {/* Indicators */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-4 flex space-x-2 z-10">
          {images.map((_, idx) => (
            <button
              key={idx}
              className={`w-3 h-3 rounded-full transition-colors border border-sky-500 ${
                idx === selectedIndex ? "bg-sky-500" : "bg-white dark:bg-gray-900"
              }`}
              aria-label={`Ir a la imagen ${idx + 1}`}
              // Scroll to the clicked indicator's image
              onClick={() => api && api.scrollTo(idx)}
            />
          ))}
        </div>
      </ShadCarousel>
    </div>
  );
}
