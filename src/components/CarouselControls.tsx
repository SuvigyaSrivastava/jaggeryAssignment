import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselControlsProps {
  onPrevious: () => void;
  onNext: () => void;
}

export function CarouselControls({ onPrevious, onNext }: CarouselControlsProps) {
  return (
    <div className="absolute right-8 top-8 flex space-x-4">
      {[
        { icon: ChevronLeft, onClick: onPrevious, label: 'Previous' },
        { icon: ChevronRight, onClick: onNext, label: 'Next' }
      ].map(({ icon: Icon, onClick, label }) => (
        <motion.button
          key={label}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={onClick}
          aria-label={label}
          className="w-14 h-14 flex items-center justify-center bg-yellow-400 rounded-full text-gray-900 hover:bg-yellow-500 transition-colors shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
        >
          <Icon className="w-8 h-8" strokeWidth={2.5} />
        </motion.button>
      ))}
    </div>
  );
}