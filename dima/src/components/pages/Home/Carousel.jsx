import React, {useEffect, useState } from "react";
import {
  Carousel as ShadCarousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "@/components/ui/carousel";
import { CAROUSEL_IMAGES } from "../../../data/data";

const arrowButtonsStyle = "border-2 border-sky-500 rounded-full bg-gradient-to-r from-white to-gray-50 border-2 border-sky-500 hover:from-sky-500 hover:to-blue-500 hover:border-sky-600 text-black hover:text-white transition-all duration-300 ease-out hover:scale-105 hover:shadow-xl active:scale-95 cursor-pointer";

export function Carousel() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [clickedIndex, setClickedIndex] = useState(null);
  const [api, setApi] = useState(null);
  const [resetTimer, setResetTimer] = useState(0);


  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      const newIndex = api.selectedScrollSnap();
      setSelectedIndex(newIndex);
    };

    onSelect();

    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  // Autoplay: advance slide every 7 seconds, reset when user interacts
  useEffect(() => {
    // Only proceed if the API is available
    if (!api) return;

    const interval = setInterval(() => {
      // Calculate the next index, ensuring it loops back to 0
      const next = (api.selectedScrollSnap() + 1) % CAROUSEL_IMAGES.length;
      api.scrollTo(next);
    }, 7000);

    return () => clearInterval(interval);
  }, [api, CAROUSEL_IMAGES.length, resetTimer]);

  // Handle image click with animation feedback
  const handleImageClick = (index) => {
    const image = CAROUSEL_IMAGES[index];
    
    // If the image has a destination URL, navigate to it
    if (image.destination && image.destination.trim() !== "") {
      window.open(image.destination, '_blank');
      return;
    }
    
    // Otherwise, show click animation feedback
    setClickedIndex(index);
    
    setTimeout(() => {
      setClickedIndex(null);
    }, 200);
  };

  // Handle navigation button clicks (prev/next)
  const handleNavigation = (direction) => {
    if (!api) return;
    
    if (direction === 'prev') {
      api.scrollPrev();
    } else if (direction === 'next') {
      api.scrollNext();
    }
    
    setResetTimer(prev => prev + 1);
  };

  const handleIndicatorClick = (index) => {
    if (!api) return;
    api.scrollTo(index);
    // Reset the autoplay timer
    setResetTimer(prev => prev + 1);
  };

  return (
    <div className="w-full max-w-6xl flex flex-col items-center justify-center mt-8 mx-auto px-4">
      <div className="relative w-full group">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700"></div>
      <ShadCarousel className="relative flex flex-col items-center bg-white/80 backdrop-blur-sm rounded-3xl p-4 shadow-2xl border border-white/50" opts={{ loop: true }} setApi={setApi}>
        <CarouselContent>
          {CAROUSEL_IMAGES.map((image, idx) => (
            <CarouselItem key={idx} className="flex items-center justify-center">
              <div 
                className={`w-full max-w-4xl relative cursor-pointer group/image transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${
                  clickedIndex === idx ? 'animate-pulse scale-[0.98]' : ''
                }`}
                onClick={() => handleImageClick(idx)}
              >
                <img
                  src={image.image}
                  alt={`Imagen ${idx + 1}`}
                  className="rounded-lg shadow-lg w-full h-auto max-h-80 object-contain transition-all duration-500 group-hover/image:shadow-2xl group-hover/image:brightness-110"
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
          <CarouselPrevious 
            className={arrowButtonsStyle} 
            onClick={() => handleNavigation('prev')}
          />
          <CarouselNext 
            className={arrowButtonsStyle} 
            onClick={() => handleNavigation('next')}
          />
          </div>
          <div className="flex space-x-2 z-10 mt-2">
            {CAROUSEL_IMAGES.map((_, idx) => (
              <button
                key={idx}
                className={`w-3 h-3 rounded-full transition-colors border border-sky-500 focus:outline-none cursor-pointer
                  ${idx === selectedIndex ? "bg-sky-500" : "bg-white dark:bg-gray-900"}
                  hover:bg-sky-500 hover:scale-130 transition-all duration-300 hover:shadow-md hover:border-sky-700`}
                aria-label={`Ir a la imagen ${idx + 1}`}
                onClick={() => handleIndicatorClick(idx)}
              />
            ))}
          </div>
        </div>
      </ShadCarousel>
      </div>
    </div>
  );
}
