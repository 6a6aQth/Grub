'use client'

import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Star, X, Heart } from 'lucide-react'
import { useState } from 'react'

interface DishDetailModalProps {
  dish: any
  isOpen: boolean
  onClose: () => void
}

export function DishDetailModal({
  dish,
  isOpen,
  onClose,
}: DishDetailModalProps) {
  const [quantity, setQuantity] = useState(1)
  const [liked, setLiked] = useState(false)

  if (!dish) return null

  const sampleReviews = [
    {
      id: 1,
      name: 'Sarah M.',
      rating: 5,
      text: 'Absolutely delicious! Highly recommend.',
      date: '2 days ago',
    },
    {
      id: 2,
      name: 'John D.',
      rating: 4,
      text: 'Great taste, portion could be bigger.',
      date: '1 week ago',
    },
    {
      id: 3,
      name: 'Emma L.',
      rating: 5,
      text: 'My new favorite dish! Will order again.',
      date: '2 weeks ago',
    },
  ]

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-h-[90vh] overflow-y-auto max-w-2xl">
        <div className="relative h-64 w-full mb-4">
          <Image
            src={dish.image || "/placeholder.svg"}
            alt={dish.name}
            fill
            className="object-cover rounded-lg"
            sizes="100vw"
          />
          <button
            onClick={() => setLiked(!liked)}
            className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
          >
            <Heart
              size={20}
              className={liked ? 'fill-red-500 text-red-500' : 'text-gray-400'}
            />
          </button>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-foreground">{dish.name}</h2>
          <p className="text-gray-600 mt-2">{dish.description}</p>

          <div className="flex items-center gap-4 mt-4">
            <div className="flex items-center gap-1">
              <Star size={18} className="fill-accent text-accent" />
              <span className="font-semibold text-foreground">
                {dish.rating}
              </span>
            </div>
            <span className="text-2xl font-bold text-primary">
              ${dish.price}
            </span>
            {!dish.inStock && (
              <span className="text-sm font-semibold text-red-600">
                Out of Stock
              </span>
            )}
          </div>

          <div className="mt-6 border-t pt-6">
            <h3 className="font-semibold text-foreground mb-4">
              Customer Reviews
            </h3>
            <div className="space-y-4">
              {sampleReviews.map((review) => (
                <div key={review.id} className="pb-4 border-b last:border-b-0">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="font-semibold text-foreground">
                        {review.name}
                      </p>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className={
                              i < review.rating
                                ? 'fill-accent text-accent'
                                : 'text-gray-300'
                            }
                          />
                        ))}
                      </div>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {review.date}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{review.text}</p>
                </div>
              ))}
            </div>

            <Button className="w-full mt-6 bg-accent text-white hover:bg-accent/90">
              Leave a Review
            </Button>
          </div>

          <div className="mt-6 flex gap-3">
            {dish.inStock && (
              <>
                <div className="flex items-center gap-2 border border-gray-200 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 hover:bg-gray-100 transition-colors"
                  >
                    −
                  </button>
                  <span className="px-4 py-2 font-semibold">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 hover:bg-gray-100 transition-colors"
                  >
                    +
                  </button>
                </div>
                <Button className="flex-1 bg-primary text-white hover:bg-primary/90">
                  Add to Order
                </Button>
              </>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
