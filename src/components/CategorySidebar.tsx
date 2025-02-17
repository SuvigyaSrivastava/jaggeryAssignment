import { motion } from 'framer-motion';
import { FerrisWheel as Ferris, Waves, Baby } from 'lucide-react';
import clsx from 'clsx';

interface CategorySidebarProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const categories = [
  { name: 'Land', icon: Ferris, count: 72 },
  { name: 'Water', icon: Waves, count: 54 },
  { name: 'Kids', icon: Baby, count: 35 }
];

export function CategorySidebar({ activeCategory, onCategoryChange }: CategorySidebarProps) {
  return (
    <div className="fixed left-0 h-full">
      <div className="absolute left-0 top-0 h-full w-48 bg-gradient-to-r from-yellow-400 via-yellow-300 to-white rounded-r-full">
        <div className="flex flex-col space-y-8 pt-8 pl-8">
          {categories.map((category) => {
            const Icon = category.icon;
            const isActive = category.name === activeCategory;

            return (
              <motion.button
                key={category.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onCategoryChange(category.name)}
                className={clsx(
                  'flex flex-col items-center w-24 p-4 rounded-lg transition-colors',
                  isActive ? 'bg-blue-100 text-blue-600' : 'text-gray-700 hover:bg-blue-50'
                )}
              >
                <div className="w-16 h-16 flex items-center justify-center bg-white rounded-full shadow-md mb-2">
                  <Icon className="w-8 h-8" />
                </div>
                <span className="font-medium">{category.name}</span>
                <span className="text-sm text-gray-500">{category.count} Rides</span>
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
}