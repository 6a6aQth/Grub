'use client'

import { StatCard } from '@/components/stat-card'
import { UtensilsCrossed, Eye, TrendingUp, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function DashboardPage() {
  return (
    <div className="p-6 md:p-8">
      <div className="max-w-6xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            Welcome back! Here's an overview of your restaurant.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            label="Total Dishes"
            value="24"
            icon={<UtensilsCrossed />}
            trend={{ value: 5, direction: 'up' }}
          />
          <StatCard
            label="In Stock"
            value="22"
            icon={<UtensilsCrossed />}
            trend={{ value: 2, direction: 'down' }}
          />
          <StatCard
            label="Total Views"
            value="2,847"
            icon={<Eye />}
            trend={{ value: 12, direction: 'up' }}
          />
          <StatCard
            label="Avg. Rating"
            value="4.7"
            icon={<TrendingUp />}
            trend={{ value: 3, direction: 'up' }}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <h2 className="text-lg font-semibold text-foreground mb-4">
              Quick Actions
            </h2>
            <div className="space-y-3">
              <Link href="/dashboard/dishes">
                <Button className="w-full justify-start bg-primary text-white hover:bg-primary/90">
                  <UtensilsCrossed size={18} className="mr-2" />
                  Manage Dishes
                </Button>
              </Link>
              <Link href="/dashboard/promotions">
                <Button
                  variant="outline"
                  className="w-full justify-start bg-transparent"
                >
                  Create Promotion
                </Button>
              </Link>
              <Button variant="outline" className="w-full justify-start bg-transparent">
                View Analytics
              </Button>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <h2 className="text-lg font-semibold text-foreground mb-4">
              Top Performing Dishes
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                <span className="text-foreground font-medium">
                  Grilled Salmon
                </span>
                <span className="text-primary font-bold">487 views</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                <span className="text-foreground font-medium">
                  Chocolate Lava Cake
                </span>
                <span className="text-primary font-bold">412 views</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-foreground font-medium">
                  Truffle Risotto
                </span>
                <span className="text-primary font-bold">358 views</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold text-foreground mb-4">
            Recent Activity
          </h2>
          <div className="space-y-4">
            {[
              { action: 'Added new dish: Shrimp Pasta', time: '2 hours ago' },
              { action: 'Updated Grilled Salmon price', time: '5 hours ago' },
              { action: 'Created promotion: Happy Hour', time: '1 day ago' },
              {
                action: 'Toggled Margherita Pizza availability',
                time: '2 days ago',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center pb-4 border-b border-gray-100 last:border-b-0"
              >
                <span className="text-foreground">{item.action}</span>
                <span className="text-sm text-muted-foreground">
                  {item.time}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
