import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CategorySidebar } from './CategorySidebar';
import { RideCard } from './RideCard';
import { CarouselControls } from './CarouselControls';
import { rides } from '../data/rides';

export function RidesSection() {
  const [activeCategory, setActiveCategory] = useState('Land');
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoScrollRef = useRef<NodeJS.Timeout>();

  const filteredRides = rides.filter(ride => ride.category === activeCategory);
  const visibleRides = 4; // Number of rides visible at once

  const scroll = (direction: 'left' | 'right') => {
    if (!carouselRef.current) return;
    
    const newIndex = direction === 'left' 
      ? Math.max(currentIndex - 1, 0)
      : Math.min(currentIndex + 1, filteredRides.length - visibleRides);
    
    setCurrentIndex(newIndex);
    
    const scrollAmount = newIndex * 320; // Card width + gap
    carouselRef.current.scrollTo({
      left: scrollAmount,
      behavior: 'smooth'
    });
  };

  // Auto-scroll functionality
  useEffect(() => {
    const startAutoScroll = () => {
      autoScrollRef.current = setInterval(() => {
        if (currentIndex >= filteredRides.length - visibleRides) {
          setCurrentIndex(0);
          if (carouselRef.current) {
            carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
          }
        } else {
          scroll('right');
        }
      }, 5000); // Scroll every 5 seconds
    };

    const stopAutoScroll = () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
    };

    startAutoScroll();

    return () => stopAutoScroll();
  }, [currentIndex, filteredRides.length]);

  // Reset index when category changes
  useEffect(() => {
    setCurrentIndex(0);
    if (carouselRef.current) {
      carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex">
          <CategorySidebar
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
          
          <div className="flex-1 pl-48">
            <div className="flex flex-col min-h-[calc(100vh-6rem)]">
              <h1 className="text-5xl font-bold text-white mb-12">OUR ICONIC RIDES</h1>
              
              <div className="relative flex-grow">
                <div
                  ref={carouselRef}
                  className="flex space-x-6 overflow-x-hidden scroll-smooth"
                >
                  <AnimatePresence mode="wait">
                    {filteredRides.map((ride, index) => (
                      <motion.div
                        key={ride.id}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ 
                          opacity: 1, 
                          x: 0,
                          scale: index >= currentIndex && index < currentIndex + visibleRides ? 1 : 0.9
                        }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ 
                          duration: 0.5,
                          type: "spring",
                          stiffness: 100
                        }}
                      >
                        <RideCard ride={ride} />
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
                
                <CarouselControls
                  onPrevious={() => scroll('left')}
                  onNext={() => scroll('right')}
                />
              </div>
              
              <div className="mt-auto pb-8 text-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-yellow-400 text-gray-900 px-12 py-4 rounded-full font-medium text-lg hover:bg-yellow-500 transition-colors shadow-lg"
                >
                  Explore All Rides!
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}