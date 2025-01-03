import { Platform } from '../types';

export const platforms: Platform[] = [
  {
    id: 'netflix',
    name: 'Netflix',
    price: 649,
    description: 'Stream award-winning Netflix originals, movies, and TV shows in Ultra HD.',
    features: ['4K Streaming', '4 Screens', 'Ad-free', 'Downloads Available'],
    image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=800&q=80',
    category: 'streaming'
  },
  {
    id: 'prime',
    name: 'Amazon Prime Video',
    price: 299,
    description: 'Watch exclusive Amazon Originals, movies, and TV shows with Prime benefits.',
    features: ['Multiple Profiles', 'X-Ray Feature', 'Prime Benefits', '4K Quality'],
    image: 'https://images.unsplash.com/photo-1585647347483-22b66260dfff?auto=format&fit=crop&w=800&q=80',
    category: 'streaming'
  },
  {
    id: 'hotstar',
    name: 'Disney+ Hotstar',
    price: 299,
    description: 'Stream Disney+, Hotstar Specials, live sports, and more.',
    features: ['Live Sports', 'Disney+ Content', 'Regional Shows', 'Ad-free Premium'],
    image: 'https://images.unsplash.com/photo-1616469829581-73993eb86b02?auto=format&fit=crop&w=800&q=80',
    category: 'streaming'
  },
  {
    id: 'sonyliv',
    name: 'SonyLIV',
    price: 299,
    description: 'Watch live sports, TV shows, movies, and originals.',
    features: ['Live Sports', 'Original Series', 'TV Shows', '2 Screens'],
    image: 'https://images.unsplash.com/photo-1578022761797-b8636ac1773c?auto=format&fit=crop&w=800&q=80',
    category: 'live'
  },
  {
    id: 'zee5',
    name: 'ZEE5',
    price: 199,
    description: 'Stream ZEE5 originals, TV shows, movies, and live channels.',
    features: ['Original Content', 'Live TV', 'Regional Shows', 'Downloads'],
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80',
    category: 'streaming'
  },
  {
    id: 'voot',
    name: 'Voot',
    price: 149,
    description: 'Watch Voot originals, Colors TV shows, and more.',
    features: ['Voot Originals', 'Colors Shows', 'Kids Content', 'Ad-free'],
    image: 'https://images.unsplash.com/photo-1586899028174-e7098604235b?auto=format&fit=crop&w=800&q=80',
    category: 'streaming'
  },
  {
    id: 'altbalaji',
    name: 'ALTBalaji',
    price: 99,
    description: 'Stream original series and exclusive shows.',
    features: ['Original Series', 'Exclusive Shows', 'Ad-free', '3 Screens'],
    image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=800&q=80',
    category: 'streaming'
  },
  {
    id: 'mxplayer',
    name: 'MX Player',
    price: 199,
    description: 'Watch free content and premium MX Gold shows.',
    features: ['Original Series', 'Live TV', 'Music', 'Downloads'],
    image: 'https://images.unsplash.com/photo-1578022761797-b8636ac1773c?auto=format&fit=crop&w=800&q=80',
    category: 'streaming'
  },
  {
    id: 'jiocinema',
    name: 'JioCinema',
    price: 99,
    description: 'Stream movies, TV shows, and Jio exclusives.',
    features: ['Live Sports', 'Movies', 'TV Shows', 'Kids Content'],
    image: 'https://images.unsplash.com/photo-1586899028174-e7098604235b?auto=format&fit=crop&w=800&q=80',
    category: 'streaming'
  },
  {
    id: 'erosnow',
    name: 'Eros Now',
    price: 79,
    description: 'Watch Bollywood movies, music, and originals.',
    features: ['Bollywood Movies', 'Original Series', 'Music', 'Downloads'],
    image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=800&q=80',
    category: 'streaming'
  },
  {
    id: 'aha',
    name: 'aha',
    price: 149,
    description: '100% Telugu & Tamil entertainment platform.',
    features: ['Regional Content', 'Original Series', 'Movies', 'Live Events'],
    image: 'https://images.unsplash.com/photo-1578022761797-b8636ac1773c?auto=format&fit=crop&w=800&q=80',
    category: 'streaming'
  },
  {
    id: 'sunnxt',
    name: 'Sun NXT',
    price: 149,
    description: 'South Indian movies, TV shows, and live channels.',
    features: ['South Indian Content', 'Live TV', 'Movies', 'TV Shows'],
    image: 'https://images.unsplash.com/photo-1586899028174-e7098604235b?auto=format&fit=crop&w=800&q=80',
    category: 'streaming'
  },
  {
    id: 'hungama',
    name: 'Hungama Play',
    price: 99,
    description: 'Movies, music, and original content in multiple languages.',
    features: ['Multi-language Content', 'Music', 'Movies', 'Live TV'],
    image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=800&q=80',
    category: 'streaming'
  },
  {
    id: 'lionsgate',
    name: 'Lionsgate Play',
    price: 149,
    description: 'Premium Hollywood content and originals.',
    features: ['Hollywood Movies', 'Original Series', 'Premium Content', 'HD Quality'],
    image: 'https://images.unsplash.com/photo-1585647347483-22b66260dfff?auto=format&fit=crop&w=800&q=80',
    category: 'streaming'
  },
  {
    id: 'curiosity',
    name: 'CuriosityStream',
    price: 199,
    description: 'Documentary and non-fiction streaming service.',
    features: ['Documentaries', 'Science Content', '4K Quality', 'Original Productions'],
    image: 'https://images.unsplash.com/photo-1578022761797-b8636ac1773c?auto=format&fit=crop&w=800&q=80',
    category: 'streaming'
  },
  {
    id: 'docubay',
    name: 'DocuBay',
    price: 149,
    description: 'International documentary streaming service.',
    features: ['Global Documentaries', 'HD Quality', 'Offline Viewing', 'Multiple Devices'],
    image: 'https://images.unsplash.com/photo-1586899028174-e7098604235b?auto=format&fit=crop&w=800&q=80',
    category: 'streaming'
  },
  {
    id: 'epicon',
    name: 'Epic On',
    price: 99,
    description: 'India-centric infotainment content platform.',
    features: ['Historical Content', 'Mythology', 'Documentary', 'Original Series'],
    image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=800&q=80',
    category: 'streaming'
  },
  {
    id: 'hoichoi',
    name: 'Hoichoi',
    price: 129,
    description: 'Bengali entertainment streaming platform.',
    features: ['Bengali Content', 'Original Series', 'Movies', 'Music'],
    image: 'https://images.unsplash.com/photo-1585647347483-22b66260dfff?auto=format&fit=crop&w=800&q=80',
    category: 'streaming'
  },
  {
    id: 'manorama',
    name: 'Manorama Max',
    price: 99,
    description: 'Malayalam entertainment platform.',
    features: ['Malayalam Content', 'News', 'Shows', 'Movies'],
    image: 'https://images.unsplash.com/photo-1578022761797-b8636ac1773c?auto=format&fit=crop&w=800&q=80',
    category: 'streaming'
  },
  {
    id: 'nammaflix',
    name: 'Namma Flix',
    price: 99,
    description: 'South Indian regional content platform.',
    features: ['Regional Movies', 'Series', 'Live TV', 'Music'],
    image: 'https://images.unsplash.com/photo-1586899028174-e7098604235b?auto=format&fit=crop&w=800&q=80',
    category: 'streaming'
  },
  {
    id: 'planetmarathi',
    name: 'Planet Marathi',
    price: 99,
    description: 'Marathi entertainment streaming platform.',
    features: ['Marathi Content', 'Original Series', 'Movies', 'Shows'],
    image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=800&q=80',
    category: 'streaming'
  },
  {
    id: 'shemaroo',
    name: 'ShemarooMe',
    price: 129,
    description: 'Classic and contemporary Indian entertainment.',
    features: ['Bollywood Classics', 'Regional Movies', 'TV Shows', 'Music'],
    image: 'https://images.unsplash.com/photo-1585647347483-22b66260dfff?auto=format&fit=crop&w=800&q=80',
    category: 'streaming'
  },
  {
    id: 'spuul',
    name: 'Spuul',
    price: 99,
    description: 'Indian movies and TV shows streaming platform.',
    features: ['Indian Movies', 'TV Shows', 'Original Content', 'Multi-language'],
    image: 'https://images.unsplash.com/photo-1578022761797-b8636ac1773c?auto=format&fit=crop&w=800&q=80',
    category: 'streaming'
  },
  {
    id: 'tvfplay',
    name: 'TVFPlay',
    price: 99,
    description: 'Original web series and youth content.',
    features: ['Original Series', 'Comedy Shows', 'Youth Content', 'Ad-free'],
    image: 'https://images.unsplash.com/photo-1586899028174-e7098604235b?auto=format&fit=crop&w=800&q=80',
    category: 'streaming'
  },
  {
    id: 'ullu',
    name: 'Ullu',
    price: 99,
    description: 'Original web series and entertainment content.',
    features: ['Original Series', 'Movies', 'Web Shows', 'Multi-language'],
    image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=800&q=80',
    category: 'streaming'
  },
  {
    id: 'vootkids',
    name: 'Voot Kids',
    price: 99,
    description: 'Kids entertainment and educational content.',
    features: ['Kids Content', 'Educational Shows', 'Parental Controls', 'Downloads'],
    image: 'https://images.unsplash.com/photo-1585647347483-22b66260dfff?auto=format&fit=crop&w=800&q=80',
    category: 'streaming'
  },
  {
    id: 'yupptv',
    name: 'YuppTV',
    price: 199,
    description: 'Live TV channels and catch-up TV platform.',
    features: ['Live TV', 'Movies', 'TV Shows', 'Regional Content'],
    image: 'https://images.unsplash.com/photo-1578022761797-b8636ac1773c?auto=format&fit=crop&w=800&q=80',
    category: 'live'
  },
  {
    id: 'zee5global',
    name: 'ZEE5 Global',
    price: 249,
    description: 'Global access to Indian entertainment.',
    features: ['International Access', 'Original Content', 'Live TV', 'Movies'],
    image: 'https://images.unsplash.com/photo-1586899028174-e7098604235b?auto=format&fit=crop&w=800&q=80',
    category: 'streaming'
  }
];