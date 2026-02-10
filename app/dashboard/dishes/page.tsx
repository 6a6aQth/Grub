'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { DishManagementTable } from '@/components/dish-management-table'
import { AddDishForm } from '@/components/add-dish-form'
import { Plus } from 'lucide-react'

const mockDishes = [
  {
    id: '1',
    name: 'Grilled Salmon',
    image: 'https://placehold.co/300x200?text=Grilled+Salmon',
    price: 24.99,
    inStock: true,
    views: 487,
  },
  {
    id: '2',
    name: 'Caesar Salad',
    image: 'https://placehold.co/300x200?text=Caesar+Salad',
    price: 12.99,
    inStock: true,
    views: 234,
  },
  {
    id: '3',
    name: 'Truffle Risotto',
    image: 'https://placehold.co/300x200?text=Truffle+Risotto',
    price: 22.99,
    inStock: true,
    views: 358,
  },
  {
    id: '4',
    name: 'Chocolate Lava Cake',
    image: 'https://placehold.co/300x200?text=Lava+Cake',
    price: 9.99,
    inStock: true,
    views: 412,
  },
  {
    id: '5',
    name: 'Margherita Pizza',
    image: 'https://placehold.co/300x200?text=Margherita+Pizza',
    price: 16.99,
    inStock: false,
    views: 298,
  },
]

export default function DishesPage() {
  const [dishes, setDishes] = useState(mockDishes)
  const [showForm, setShowForm] = useState(false)
  const [editingDish, setEditingDish] = useState<any>(null)

  const handleAddDish = (formData: any) => {
    if (editingDish) {
      setDishes(
        dishes.map((d) =>
          d.id === editingDish.id
            ? { ...editingDish, ...formData }
            : d
        )
      )
      setEditingDish(null)
    } else {
      const newDish = {
        ...formData,
        id: Date.now().toString(),
        views: 0,
      }
      setDishes([...dishes, newDish])
    }
    setShowForm(false)
  }

  const handleEditDish = (dish: any) => {
    setEditingDish(dish)
    setShowForm(true)
  }

  const handleDeleteDish = (id: string) => {
    setDishes(dishes.filter((d) => d.id !== id))
  }

  const handleToggleAvailability = (id: string, inStock: boolean) => {
    setDishes(
      dishes.map((d) =>
        d.id === id ? { ...d, inStock } : d
      )
    )
  }

  return (
    <div className="p-6 md:p-8">
      <div className="max-w-6xl">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">
              Manage Dishes
            </h1>
            <p className="text-muted-foreground mt-1">
              Add, edit, or remove dishes from your menu
            </p>
          </div>
          <Button
            onClick={() => {
              setEditingDish(null)
              setShowForm(true)
            }}
            className="bg-accent text-white hover:bg-accent/90"
          >
            <Plus size={20} className="mr-2" />
            Add Dish
          </Button>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
          <DishManagementTable
            dishes={dishes}
            onEdit={handleEditDish}
            onDelete={handleDeleteDish}
            onToggleAvailability={handleToggleAvailability}
          />
        </div>

        {dishes.length === 0 && (
          <div className="text-center py-12 bg-white rounded-lg border border-gray-100">
            <p className="text-muted-foreground mb-4">
              No dishes yet. Create your first dish!
            </p>
            <Button
              onClick={() => setShowForm(true)}
              className="bg-primary text-white hover:bg-primary/90"
            >
              Add First Dish
            </Button>
          </div>
        )}

        {showForm && (
          <AddDishForm
            onSubmit={handleAddDish}
            onCancel={() => {
              setShowForm(false)
              setEditingDish(null)
            }}
            initialData={editingDish}
          />
        )}
      </div>
    </div>
  )
}
