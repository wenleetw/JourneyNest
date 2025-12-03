export interface Collection {
  id: number;
  title: string;
  description: string;
  image: string;
  duration: string;
  price: string;
  category: string;
  destinations: string[];
  featured: boolean;
  highlights?: string[];
  itinerary?: string[];
  included?: string[];
}

export const collections: Collection[] = [
  {
    id: 1,
    title: 'Cultural Immersion',
    description: 'Deep dive into local traditions, art, and authentic experiences across Asia and Europe.',
    image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    duration: '7-14 days',
    price: 'from $2,500',
    category: 'Culture',
    destinations: ['Kyoto', 'Florence', 'Marrakech'],
    featured: true,
    highlights: [
      'Private guided tours of UNESCO World Heritage sites',
      'Authentic cooking classes with local chefs',
      'Traditional craft workshops',
      'Evening cultural performances',
      'Exclusive access to private collections'
    ],
    itinerary: [
      'Day 1-3: Arrival and cultural orientation in first destination',
      'Day 4-7: Immersive experiences and local interactions',
      'Day 8-11: Travel to second destination, continue cultural exploration',
      'Day 12-14: Final destination with curated experiences and departure'
    ],
    included: [
      'Accommodation in boutique hotels',
      'Private local guides',
      'All cultural experiences and workshops',
      'Breakfast daily, select meals',
      '24/7 concierge support'
    ]
  },
  {
    id: 2,
    title: 'Coastal Escapes',
    description: 'Serene beachfront retreats and coastal adventures in the world\'s most beautiful seaside destinations.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    duration: '5-10 days',
    price: 'from $1,800',
    category: 'Beach',
    destinations: ['Amalfi Coast', 'Santorini', 'Maldives'],
    featured: true,
    highlights: [
      'Luxury beachfront accommodations',
      'Private boat excursions',
      'Sunset dining experiences',
      'Water sports and activities',
      'Spa treatments with ocean views'
    ],
    itinerary: [
      'Day 1-2: Arrival and beachfront relaxation',
      'Day 3-4: Coastal exploration and water activities',
      'Day 5-6: Island hopping and private excursions',
      'Day 7-10: Extended stay options with personalized activities'
    ],
    included: [
      'Beachfront resort accommodation',
      'Private boat transfers',
      'Water sports equipment',
      'Breakfast and select dining',
      'Spa access and treatments'
    ]
  },
  {
    id: 3,
    title: 'Nature & Adventure',
    description: 'Wilderness experiences, hiking trails, and outdoor adventures for the active explorer.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    duration: '6-12 days',
    price: 'from $2,200',
    category: 'Adventure',
    destinations: ['Iceland', 'Patagonia', 'New Zealand'],
    featured: true,
    highlights: [
      'Guided hiking and trekking expeditions',
      'Wildlife watching opportunities',
      'Photography tours with experts',
      'Glacier and natural wonder exploration',
      'Adventure activities (kayaking, climbing, etc.)'
    ],
    itinerary: [
      'Day 1-2: Arrival and gear preparation',
      'Day 3-5: First adventure destination exploration',
      'Day 6-8: Travel and second location activities',
      'Day 9-12: Extended adventures and optional activities'
    ],
    included: [
      'Adventure lodge accommodations',
      'Professional guide services',
      'All adventure equipment',
      'Meals during activities',
      'Safety equipment and support'
    ]
  },
  {
    id: 4,
    title: 'Urban Explorer',
    description: 'Discover the pulse of world-class cities through curated experiences and hidden gems.',
    image: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    duration: '4-7 days',
    price: 'from $1,500',
    category: 'City',
    destinations: ['Tokyo', 'Paris', 'New York'],
    featured: false,
    highlights: [
      'Insider access to local neighborhoods',
      'Private art gallery and museum tours',
      'Culinary experiences with local chefs',
      'Evening entertainment and nightlife',
      'Shopping with personal stylists'
    ],
    itinerary: [
      'Day 1: Arrival and city orientation',
      'Day 2-3: Neighborhood exploration and cultural sites',
      'Day 4-5: Culinary and entertainment experiences',
      'Day 6-7: Personalized activities and departure'
    ],
    included: [
      'Boutique city hotel',
      'Private city guide',
      'Museum and attraction tickets',
      'Select dining experiences',
      'Transportation passes'
    ]
  },
  {
    id: 5,
    title: 'Wellness & Retreat',
    description: 'Rejuvenating journeys focused on mindfulness, spa experiences, and holistic wellness.',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    duration: '5-10 days',
    price: 'from $2,000',
    category: 'Wellness',
    destinations: ['Bali', 'Tuscany', 'Costa Rica'],
    featured: false,
    highlights: [
      'Daily yoga and meditation sessions',
      'Spa treatments and wellness therapies',
      'Healthy gourmet cuisine',
      'Nature immersion activities',
      'Personalized wellness consultations'
    ],
    itinerary: [
      'Day 1-2: Arrival and wellness assessment',
      'Day 3-5: Daily wellness program and treatments',
      'Day 6-8: Extended programs and optional activities',
      'Day 9-10: Integration and departure'
    ],
    included: [
      'Wellness resort accommodation',
      'All wellness activities',
      'Spa treatments package',
      'Healthy meal plans',
      'Wellness consultation'
    ]
  },
  {
    id: 6,
    title: 'Luxury Safari',
    description: 'Exclusive wildlife encounters and luxury accommodations in Africa\'s most pristine reserves.',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    duration: '8-14 days',
    price: 'from $4,500',
    category: 'Safari',
    destinations: ['Serengeti', 'Okavango Delta', 'Masai Mara'],
    featured: false,
    highlights: [
      'Private game drives with expert guides',
      'Luxury tented camps and lodges',
      'Wildlife photography opportunities',
      'Sunrise and sunset safari experiences',
      'Cultural interactions with local communities'
    ],
    itinerary: [
      'Day 1-2: Arrival and camp orientation',
      'Day 3-6: Daily game drives and wildlife viewing',
      'Day 7-10: Extended safari experiences',
      'Day 11-14: Additional destinations and departure'
    ],
    included: [
      'Luxury safari accommodation',
      'Private game drives',
      'Expert safari guides',
      'All meals and beverages',
      'Conservation fees'
    ]
  },
  {
    id: 7,
    title: 'Kyoto, Japan',
    description: 'Ancient temples and sublime gardens. Experience the timeless beauty of Japan\'s cultural capital.',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    duration: '5-7 days',
    price: 'from $2,400',
    category: 'Culture',
    destinations: ['Kyoto'],
    featured: false,
    highlights: [
      'Private tours of UNESCO World Heritage temples',
      'Traditional tea ceremony experiences',
      'Zen garden meditation sessions',
      'Authentic kaiseki dining',
      'Exclusive access to private gardens'
    ],
    itinerary: [
      'Day 1: Arrival in Kyoto, traditional ryokan check-in',
      'Day 2: Fushimi Inari Shrine and Gion district exploration',
      'Day 3: Kinkaku-ji and Ryoan-ji temple visits',
      'Day 4: Arashiyama bamboo grove and traditional crafts',
      'Day 5: Nijo Castle and imperial palace tour',
      'Day 6-7: Optional day trips and cultural workshops'
    ],
    included: [
      'Traditional ryokan accommodation',
      'Private English-speaking guide',
      'JR Pass for local transportation',
      'Traditional kaiseki meals',
      'Temple and garden entrance fees'
    ]
  },
  {
    id: 8,
    title: 'Amalfi Coast, Italy',
    description: 'Cliffside villages and azure waters. Discover the breathtaking beauty of Italy\'s most stunning coastline.',
    image: 'https://images.unsplash.com/photo-1612456225451-bb8d10d0131d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    duration: '6-8 days',
    price: 'from $3,200',
    category: 'Beach',
    destinations: ['Amalfi Coast'],
    featured: false,
    highlights: [
      'Luxury cliffside hotel accommodations',
      'Private boat tours along the coast',
      'Cooking classes with local chefs',
      'Sunset dining with panoramic views',
      'Exclusive access to private beaches'
    ],
    itinerary: [
      'Day 1: Arrival in Positano, coastal hotel check-in',
      'Day 2: Amalfi town exploration and cathedral visit',
      'Day 3: Private boat tour to Capri',
      'Day 4: Ravello gardens and Villa Cimbrone',
      'Day 5: Cooking class and local market tour',
      'Day 6-8: Relaxation and optional excursions'
    ],
    included: [
      'Luxury coastal hotel',
      'Private boat excursions',
      'All breakfasts and select dinners',
      'Private transportation',
      'Local guide services'
    ]
  },
  {
    id: 9,
    title: 'Reykjavik & Iceland',
    description: 'Volcanic landscapes and northern lights. Explore the land of fire and ice with unforgettable adventures.',
    image: 'https://images.unsplash.com/photo-1476610182048-b716b8518aae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    duration: '5-7 days',
    price: 'from $1,800',
    category: 'Adventure',
    destinations: ['Reykjavik', 'Golden Circle', 'Blue Lagoon'],
    featured: false,
    highlights: [
      'Northern lights viewing tours',
      'Golden Circle and geysers exploration',
      'Blue Lagoon spa experience',
      'Glacier hiking and ice cave tours',
      'Whale watching excursions'
    ],
    itinerary: [
      'Day 1: Arrival in Reykjavik, city exploration',
      'Day 2: Golden Circle tour (Geysir, Gullfoss, Thingvellir)',
      'Day 3: Blue Lagoon and Reykjanes Peninsula',
      'Day 4: South Coast tour with waterfalls',
      'Day 5: Northern lights hunting tour',
      'Day 6-7: Optional glacier tours or relaxation'
    ],
    included: [
      'Boutique Reykjavik hotel',
      'Private tour guide and transportation',
      'Blue Lagoon entrance and spa access',
      'Northern lights tour',
      'Breakfast daily'
    ]
  },
];

