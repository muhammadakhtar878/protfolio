export interface Product {
  id: string
  title: string
  price: number
  originalPrice?: number
  image: string
  images: string[]
  brand: string
  category: string
  rating: number
  reviews: number
  inStock: boolean
  description: string
  features: string[]
  tags: string[]
  isHalal?: boolean
  isEidSpecial?: boolean
}

export interface Category {
  id: string
  name: string
  icon: string
  image: string
  productCount: number
}

export interface Brand {
  id: string
  name: string
  logo: string
  featured: boolean
}

export const categories: Category[] = [
  { id: '1', name: 'Islamic Books', icon: 'BookOpen', image: 'https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg', productCount: 245 },
  { id: '2', name: 'Prayer Items', icon: 'Heart', image: 'https://images.pexels.com/photos/8849295/pexels-photo-8849295.jpeg', productCount: 189 },
  { id: '3', name: 'Modest Fashion', icon: 'Shirt', image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg', productCount: 432 },
  { id: '4', name: 'Halal Food', icon: 'Apple', image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg', productCount: 156 },
  { id: '5', name: 'Islamic Art', icon: 'Palette', image: 'https://images.pexels.com/photos/1187317/pexels-photo-1187317.jpeg', productCount: 98 },
  { id: '6', name: 'Electronics', icon: 'Smartphone', image: 'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg', productCount: 267 },
  { id: '7', name: 'Home Decor', icon: 'Home', image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg', productCount: 203 },
  { id: '8', name: 'Beauty Care', icon: 'Sparkles', image: 'https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg', productCount: 134 }
]

export const brands: Brand[] = [
  { id: '1', name: 'Al-Noor', logo: 'https://images.pexels.com/photos/1187317/pexels-photo-1187317.jpeg', featured: true },
  { id: '2', name: 'Barakah', logo: 'https://images.pexels.com/photos/1187317/pexels-photo-1187317.jpeg', featured: true },
  { id: '3', name: 'Sabeel', logo: 'https://images.pexels.com/photos/1187317/pexels-photo-1187317.jpeg', featured: true },
  { id: '4', name: 'Rahma', logo: 'https://images.pexels.com/photos/1187317/pexels-photo-1187317.jpeg', featured: true },
]

export const products: Product[] = [
  {
    id: '1',
    title: 'Premium Quran with Translation',
    price: 89.99,
    originalPrice: 129.99,
    image: 'https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg',
    images: [
      'https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg',
      'https://images.pexels.com/photos/1112048/pexels-photo-1112048.jpeg'
    ],
    brand: 'Al-Noor',
    category: 'Islamic Books',
    rating: 4.8,
    reviews: 234,
    inStock: true,
    description: 'Beautiful leather-bound Quran with English translation and commentary. Perfect for daily reading and study.',
    features: ['Leather binding', 'Gold embossing', 'Translation included', 'Arabic text'],
    tags: ['Quran', 'Islamic', 'Religious'],
    isHalal: true
  },
  {
    id: '2',
    title: 'Elegant Prayer Mat',
    price: 45.99,
    image: 'https://images.pexels.com/photos/8849295/pexels-photo-8849295.jpeg',
    images: [
      'https://images.pexels.com/photos/8849295/pexels-photo-8849295.jpeg'
    ],
    brand: 'Barakah',
    category: 'Prayer Items',
    rating: 4.6,
    reviews: 89,
    inStock: true,
    description: 'Soft and comfortable prayer mat with beautiful Islamic patterns.',
    features: ['Soft material', 'Non-slip bottom', 'Easy to clean', 'Compact size'],
    tags: ['Prayer', 'Mat', 'Islamic'],
    isHalal: true
  },
  {
    id: '3',
    title: 'Modern Hijab Collection',
    price: 24.99,
    originalPrice: 34.99,
    image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg',
    images: [
      'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg'
    ],
    brand: 'Sabeel',
    category: 'Modest Fashion',
    rating: 4.7,
    reviews: 156,
    inStock: true,
    description: 'Collection of premium quality hijabs in various colors and styles.',
    features: ['Premium fabric', 'Various colors', 'Breathable material', 'Easy care'],
    tags: ['Hijab', 'Fashion', 'Modest'],
    isEidSpecial: true
  },
  {
    id: '4',
    title: 'Organic Halal Dates',
    price: 19.99,
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
    images: [
      'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg'
    ],
    brand: 'Rahma',
    category: 'Halal Food',
    rating: 4.9,
    reviews: 312,
    inStock: true,
    description: 'Premium organic dates from the finest farms. Perfect for breaking fast.',
    features: ['Organic certified', 'Premium quality', 'Fresh packaging', 'Nutrient rich'],
    tags: ['Dates', 'Halal', 'Organic'],
    isHalal: true,
    isEidSpecial: true
  }
]

export const flashDeals = products.filter(p => p.originalPrice).slice(0, 6)

export const banners = [
  {
    id: '1',
    title: 'Eid Mubarak Sale',
    subtitle: 'Up to 50% off on Islamic items',
    image: 'https://images.pexels.com/photos/1187317/pexels-photo-1187317.jpeg',
    cta: 'Shop Now'
  },
  {
    id: '2',
    title: 'New Arrivals',
    subtitle: 'Discover the latest products',
    image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg',
    cta: 'Explore'
  },
  {
    id: '3',
    title: 'Premium Quality',
    subtitle: 'Certified halal products',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
    cta: 'Learn More'
  }
]

export interface User {
  id: string
  name: string
  email: string
  avatar?: string
}

export interface Order {
  id: string
  userId: string
  items: Array<{
    productId: string
    quantity: number
    price: number
  }>
  total: number
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled'
  createdAt: string
  shippingAddress: {
    name: string
    address: string
    city: string
    zipCode: string
    country: string
  }
}

export const mockOrders: Order[] = [
  {
    id: 'ORD-001',
    userId: '1',
    items: [
      { productId: '1', quantity: 1, price: 89.99 },
      { productId: '2', quantity: 2, price: 45.99 }
    ],
    total: 181.97,
    status: 'delivered',
    createdAt: '2024-01-15',
    shippingAddress: {
      name: 'Ahmed Hassan',
      address: '123 Main Street',
      city: 'Dubai',
      zipCode: '12345',
      country: 'UAE'
    }
  }
]