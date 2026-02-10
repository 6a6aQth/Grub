'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Star } from 'lucide-react'

interface DishCardProps {
  id: string
  name: string
  image: string
  price: number
  description: string
  rating: number
  inStock: boolean
  onSelect: (dish: any) => void
}

export function DishCard({
  id,
  name,
  image,
  price,
  description,
  rating,
  inStock,
  onSelect,
}: DishCardProps) {
  return (
    <button
      onClick={() =>
        onSelect({
          id,
          name,
          image,
          price,
          description,
          rating,
          inStock,
        })
      }
      className="text-left rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100"
      disabled={!inStock}
    >
      <div className="relative h-40 w-full bg-gray-100">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {!inStock && (
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <span className="text-white text-sm font-semibold">
              Out of Stock
            </span>
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-foreground line-clamp-2 mb-1">
          {name}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
          {description}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-primary">${price}</span>
          <div className="flex items-center gap-1">
            <Star size={16} className="fill-accent text-accent" />
            <span className="text-sm font-medium text-foreground">
              {rating}
            </span>
          </div>
        </div>
      </div>
    </button>
  )
}
