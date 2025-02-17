export interface Ride {
  id: number;
  name: string;
  location: string;
  description: string;
  image: string;
  category: 'Land' | 'Water' | 'Kids';
}

export const rides: Ride[] = [
  // Land Rides
  {
    id: 1,
    name: 'Y-Scream',
    location: 'Bengaluru',
    description: 'Strap in tight to swing, spin and scream on this dizzying 360-degree thrill fest!',
    image: 'https://images.unsplash.com/photo-1620298290248-c0b55a656d11?w=800&auto=format&fit=crop',
    category: 'Land'
  },
  {
    id: 2,
    name: 'G Fall',
    location: 'Hyderabad',
    description: 'Brace yourself for a heart-pounding, high-speed plunge into a dizzying freefall!',
    image: 'https://images.unsplash.com/photo-1620298290074-b0779a2ec9e4?w=800&auto=format&fit=crop',
    category: 'Land'
  },
  {
    id: 3,
    name: 'Spinning Coaster',
    location: 'Bhubaneswar',
    description: 'A heart-pounding roller coaster ride that twists, turns and spins you around!',
    image: 'https://images.unsplash.com/photo-1513889961551-628c1e5e2ee9?w=800&auto=format&fit=crop',
    category: 'Land'
  },
  {
    id: 4,
    name: 'Air Race',
    location: 'Kochi',
    description: 'An exhilarating flight simulation with banks, loops and dives.',
    image: 'https://images.unsplash.com/photo-1563911892437-1feda0179e1b?w=800&auto=format&fit=crop',
    category: 'Land'
  },
  {
    id: 5,
    name: 'Space Gun',
    location: 'Kochi',
    description: 'See the world upside-down, dangling from high up above the ground!',
    image: 'https://images.unsplash.com/photo-1597466599360-3b9775841aec?w=800&auto=format&fit=crop',
    category: 'Land'
  },
  // Water Rides
  {
    id: 6,
    name: 'Rapids',
    location: 'Hyderabad',
    description: 'Navigate through rushing waters and unexpected drops in this wild river adventure!',
    image: 'https://images.unsplash.com/photo-1582622621966-96132f4fe423?w=800&auto=format&fit=crop',
    category: 'Water'
  },
  {
    id: 7,
    name: 'Tsunami',
    location: 'Kochi',
    description: 'Ride the massive wave that sends you soaring through twists and turns!',
    image: 'https://images.unsplash.com/photo-1582622621959-6c453c2f7e2c?w=800&auto=format&fit=crop',
    category: 'Water'
  },
  {
    id: 8,
    name: 'Water Falls',
    location: 'Bhubaneswar',
    description: 'Get drenched under cascading waterfalls while navigating through rocky terrain!',
    image: 'https://images.unsplash.com/photo-1582622621955-9b9c99dc0f06?w=800&auto=format&fit=crop',
    category: 'Water'
  },
  {
    id: 9,
    name: 'Aqua Loop',
    location: 'Hyderabad',
    description: 'Experience weightlessness in this first-of-its-kind looping water slide!',
    image: 'https://images.unsplash.com/photo-1582622621949-c99d056d5745?w=800&auto=format&fit=crop',
    category: 'Water'
  },
  {
    id: 10,
    name: 'Wave Pool',
    location: 'Bengaluru',
    description: 'Experience the thrill of ocean waves in our massive wave pool!',
    image: 'https://images.unsplash.com/photo-1582622621942-86d7de7c1443?w=800&auto=format&fit=crop',
    category: 'Water'
  },
  // Kids Rides
  {
    id: 11,
    name: 'Mini Coaster',
    location: 'Bengaluru',
    description: 'A gentle roller coaster perfect for young adventurers!',
    image: 'https://images.unsplash.com/photo-1597466765990-64ad457b3c84?w=800&auto=format&fit=crop',
    category: 'Kids'
  },
  {
    id: 12,
    name: 'Flying Elephants',
    location: 'Kochi',
    description: 'Soar through the air on magical flying elephants!',
    image: 'https://images.unsplash.com/photo-1597466765728-7c54324e56ac?w=800&auto=format&fit=crop',
    category: 'Kids'
  },
  {
    id: 13,
    name: 'Carousel',
    location: 'Hyderabad',
    description: 'Classic merry-go-round with beautifully decorated horses!',
    image: 'https://images.unsplash.com/photo-1597466765661-9b0d1a23a076?w=800&auto=format&fit=crop',
    category: 'Kids'
  },
  {
    id: 14,
    name: 'Tea Cups',
    location: 'Bhubaneswar',
    description: 'Spin and twirl in giant colorful tea cups!',
    image: 'https://images.unsplash.com/photo-1597466765483-5a166a0a3d7c?w=800&auto=format&fit=crop',
    category: 'Kids'
  },
  {
    id: 15,
    name: 'Mini Train',
    location: 'Bengaluru',
    description: 'Take a scenic train ride through a magical wonderland!',
    image: 'https://images.unsplash.com/photo-1597466765225-3c3b6a62f099?w=800&auto=format&fit=crop',
    category: 'Kids'
  }
];