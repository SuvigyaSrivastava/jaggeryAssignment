import { motion } from 'framer-motion';
import type { Ride } from '../data/rides';

interface RideCardProps {
  ride: Ride;
}

export function RideCard({ ride }: RideCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      className="w-[300px] rounded-xl overflow-hidden shadow-xl bg-white transform transition-all duration-300"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={ride.image}
          alt={ride.name}
          className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 text-gray-800">{ride.name}</h3>
        <p className="text-gray-600 text-sm mb-3">{ride.location}</p>
        <p className="text-gray-700 mb-6 line-clamp-2">{ride.description}</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-yellow-400 text-gray-900 py-3 px-6 rounded-lg font-semibold hover:bg-yellow-500 transition-colors shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
        >
          RIDE DETAILS
        </motion.button>
      </div>
    </motion.div>
  );
}