'use client'

import { useState } from 'react'
import { PromoBanner } from '@/components/promo-banner'
import { CategoryTabs } from '@/components/category-tabs'
import { DishCard } from '@/components/dish-card'
import { DishDetailModal } from '@/components/dish-detail-modal'
import { MapPin, ArrowLeft, X } from 'lucide-react'
import Link from 'next/link'

const mockRestaurant = {
  name: 'The Green Plate',
  location: '123 Main St, Downtown',
  rating: 4.8,
}

const mockDishes = [
  {
    id: '1',
    name: 'Grilled Salmon',
    category: 'Main Courses',
    image: '/grilled salmon.webp',
    price: 24.99,
    description: 'Fresh Atlantic salmon with herb butter',
    rating: 4.9,
    inStock: true,
  },
  {
    id: '2',
    name: 'Caesar Salad',
    category: 'Salads',
    image: '/Caesar Salad.jpg',
    price: 12.99,
    description: 'Crisp romaine with parmesan and croutons',
    rating: 4.6,
    inStock: true,
  },
  {
    id: '3',
    name: 'Truffle Risotto',
    category: 'Main Courses',
    image: '/Truffle Risotto.jpg',
    price: 22.99,
    description: 'Creamy arborio rice with black truffle',
    rating: 4.8,
    inStock: true,
  },
  {
    id: '4',
    name: 'Chocolate Lava Cake',
    category: 'Desserts',
    image: '/Chocolate Lava Cake.jpg',
    price: 9.99,
    description: 'Warm chocolate cake with melting center',
    rating: 4.9,
    inStock: true,
  },
  {
    id: '5',
    name: 'Margherita Pizza',
    category: 'Main Courses',
    image: '/margherita pizza.jpg',
    price: 16.99,
    description: 'Classic pizza with fresh mozzarella and basil',
    rating: 4.7,
    inStock: false,
  },
  {
    id: '6',
    name: 'Espresso Martini',
    category: 'Beverages',
    image: '/Espresso Martini.jpg',
    price: 14.99,
    description: 'Coffee liqueur with vodka and cream',
    rating: 4.5,
    inStock: true,
  },
  {
    id: '7',
    name: 'Grilled Vegetables',
    category: 'Sides',
    image: '/Grilled Vegetables.jpg',
    price: 8.99,
    description: 'Seasonal vegetables with garlic oil',
    rating: 4.4,
    inStock: true,
  },
  {
    id: '8',
    name: 'Shrimp Pasta',
    category: 'Main Courses',
    image: '/Shrimp Pasta.jpg',
    price: 19.99,
    description: 'Fresh shrimp in white wine sauce',
    rating: 4.8,
    inStock: true,
  },
]

const categories = [
  'All',
  'Main Courses',
  'Salads',
  'Desserts',
  'Beverages',
  'Sides',
]

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedDish, setSelectedDish] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const filteredDishes =
    activeCategory === 'All'
      ? mockDishes
      : mockDishes.filter((dish) => dish.category === activeCategory)

  return (
    <div className="min-h-screen bg-background relative">
      <div className="absolute top-6 right-6 z-50">
        <Link
          href="/"
          className="flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm border border-gray-100 rounded-full shadow-sm hover:shadow-md transition-all text-muted-foreground hover:text-foreground group"
        >
          <X size={18} className="group-hover:rotate-90 transition-transform duration-300" />
          <span className="text-sm font-medium">Exit Menu</span>
        </Link>
      </div>


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <div className="flex items-center gap-2 mb-4">
          <MapPin size={20} className="text-accent" />
          <span className="text-muted-foreground text-sm font-medium">{mockRestaurant.location}</span>
        </div>
        <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-3">
          {mockRestaurant.name}
        </h1>
        <p className="text-lg text-muted-foreground">
          ⭐ {mockRestaurant.rating} · {mockDishes.filter(d => d.inStock).length} items available
        </p>
      </div>

      <PromoBanner
        title="Happy Hour Special!"
        description="Get 20% off all beverages until 6 PM"
        type="promotion"
        fullWidth
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <CategoryTabs
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        <div className="px-4 sm:px-6 py-8">
          {filteredDishes.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                No dishes available in this category
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredDishes.map((dish) => (
                <DishCard
                  key={dish.id}
                  {...dish}
                  onSelect={(selectedDish) => {
                    setSelectedDish(selectedDish)
                    setIsModalOpen(true)
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      <DishDetailModal
        dish={selectedDish}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false)
          setSelectedDish(null)
        }}
      />

      <footer className="bg-primary text-white py-8 mt-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center text-sm text-white/80">
          <p>Copyright 2024 Grub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
