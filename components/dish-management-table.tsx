'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Edit2, Trash2, Eye, EyeOff } from 'lucide-react'
import { useState } from 'react'

interface Dish {
  id: string
  name: string
  image: string
  price: number
  inStock: boolean
  views: number
}

interface DishManagementTableProps {
  dishes: Dish[]
  onEdit: (dish: Dish) => void
  onDelete: (id: string) => void
  onToggleAvailability: (id: string, inStock: boolean) => void
}

export function DishManagementTable({
  dishes,
  onEdit,
  onDelete,
  onToggleAvailability,
}: DishManagementTableProps) {
  const [deleteId, setDeleteId] = useState<string | null>(null)

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-200 bg-secondary">
            <th className="text-left px-4 py-3 font-semibold text-foreground">
              Dish
            </th>
            <th className="text-left px-4 py-3 font-semibold text-foreground">
              Price
            </th>
            <th className="text-left px-4 py-3 font-semibold text-foreground">
              Views
            </th>
            <th className="text-left px-4 py-3 font-semibold text-foreground">
              Status
            </th>
            <th className="text-left px-4 py-3 font-semibold text-foreground">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {dishes.map((dish) => (
            <tr
              key={dish.id}
              className="border-b border-gray-100 hover:bg-secondary/50 transition-colors"
            >
              <td className="px-4 py-4">
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12">
                    <Image
                      src={dish.image || "/placeholder.svg"}
                      alt={dish.name}
                      fill
                      className="object-cover rounded"
                      sizes="48px"
                    />
                  </div>
                  <span className="font-medium text-foreground">
                    {dish.name}
                  </span>
                </div>
              </td>
              <td className="px-4 py-4 font-semibold text-primary">
                ${dish.price}
              </td>
              <td className="px-4 py-4 text-foreground">{dish.views}</td>
              <td className="px-4 py-4">
                <button
                  onClick={() =>
                    onToggleAvailability(dish.id, !dish.inStock)
                  }
                  className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                    dish.inStock
                      ? 'bg-green-100 text-green-700 hover:bg-green-200'
                      : 'bg-red-100 text-red-700 hover:bg-red-200'
                  }`}
                >
                  {dish.inStock ? <Eye size={16} /> : <EyeOff size={16} />}
                  {dish.inStock ? 'In Stock' : 'Out of Stock'}
                </button>
              </td>
              <td className="px-4 py-4">
                <div className="flex items-center gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => onEdit(dish)}
                  >
                    <Edit2 size={16} />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="text-red-600 hover:text-red-700 hover:bg-red-50 bg-transparent"
                    onClick={() => setDeleteId(dish.id)}
                  >
                    <Trash2 size={16} />
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
