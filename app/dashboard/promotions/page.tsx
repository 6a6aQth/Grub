'use client'

import React from "react"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Plus, Trash2, Eye } from 'lucide-react'

const mockPromotions = [
  {
    id: '1',
    title: 'Happy Hour Special!',
    description: 'Get 20% off all beverages until 6 PM',
    type: 'promotion',
    active: true,
  },
  {
    id: '2',
    title: 'Valentine\'s Day Menu',
    description: 'Special 3-course menu for couples',
    type: 'holiday',
    active: true,
  },
  {
    id: '3',
    title: 'Grand Opening Celebration',
    description: 'Enjoy 15% off your entire order this week',
    type: 'announcement',
    active: false,
  },
]

export default function PromotionsPage() {
  const [promotions, setPromotions] = useState(mockPromotions)
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    type: 'promotion',
  })

  const handleInputChange = (e: any) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleAddPromotion = (e: React.FormEvent) => {
    e.preventDefault()
    const newPromotion = {
      id: Date.now().toString(),
      ...formData,
      active: true,
    }
    setPromotions([...promotions, newPromotion])
    setFormData({ title: '', description: '', type: 'promotion' })
    setShowForm(false)
  }

  const handleDeletePromotion = (id: string) => {
    setPromotions(promotions.filter((p) => p.id !== id))
  }

  const handleToggleActive = (id: string) => {
    setPromotions(
      promotions.map((p) =>
        p.id === id ? { ...p, active: !p.active } : p
      )
    )
  }

  return (
    <div className="p-6 md:p-8">
      <div className="max-w-4xl">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">
              Promotions & Banners
            </h1>
            <p className="text-muted-foreground mt-1">
              Create and manage promotional banners for your menu
            </p>
          </div>
          <Button
            onClick={() => setShowForm(!showForm)}
            className="bg-accent text-white hover:bg-accent/90"
          >
            <Plus size={20} className="mr-2" />
            New Promotion
          </Button>
        </div>

        {showForm && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              Create New Promotion
            </h2>
            <form onSubmit={handleAddPromotion} className="space-y-4">
              <div>
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="e.g., Happy Hour Special"
                  required
                />
              </div>

              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Describe the promotion..."
                  rows={3}
                  required
                />
              </div>

              <div>
                <Label htmlFor="type">Type</Label>
                <select
                  id="type"
                  name="type"
                  value={formData.type}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="promotion">Promotion</option>
                  <option value="holiday">Holiday</option>
                  <option value="announcement">Announcement</option>
                </select>
              </div>

              <div className="flex gap-3 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setShowForm(false)}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="bg-primary text-white hover:bg-primary/90"
                >
                  Create Promotion
                </Button>
              </div>
            </form>
          </div>
        )}

        <div className="grid gap-4">
          {promotions.map((promo) => (
            <div
              key={promo.id}
              className="bg-white rounded-lg shadow-sm border border-gray-100 p-6"
            >
              <div className="flex justify-between items-start gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold text-foreground">
                      {promo.title}
                    </h3>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        promo.active
                          ? 'bg-green-100 text-green-700'
                          : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      {promo.active ? 'Active' : 'Inactive'}
                    </span>
                  </div>
                  <p className="text-muted-foreground">
                    {promo.description}
                  </p>
                  <span className="text-xs text-gray-400 mt-2 block">
                    Type: {promo.type}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleToggleActive(promo.id)}
                  >
                    <Eye size={16} />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="text-red-600 hover:text-red-700 hover:bg-red-50 bg-transparent"
                    onClick={() => handleDeletePromotion(promo.id)}
                  >
                    <Trash2 size={16} />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {promotions.length === 0 && (
          <div className="text-center py-12 bg-white rounded-lg border border-gray-100">
            <p className="text-muted-foreground mb-4">
              No promotions yet. Create your first promotion!
            </p>
            <Button
              onClick={() => setShowForm(true)}
              className="bg-primary text-white hover:bg-primary/90"
            >
              Create Promotion
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
