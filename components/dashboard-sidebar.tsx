'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LayoutDashboard, UtensilsCrossed, Megaphone, LogOut } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function DashboardSidebar() {
  const pathname = usePathname()

  const menuItems = [
    {
      href: '/dashboard',
      label: 'Overview',
      icon: LayoutDashboard,
    },
    {
      href: '/dashboard/dishes',
      label: 'Manage Dishes',
      icon: UtensilsCrossed,
    },
    {
      href: '/dashboard/promotions',
      label: 'Promotions',
      icon: Megaphone,
    },
  ]

  return (
    <aside className="hidden md:flex flex-col w-64 bg-primary text-white border-r border-primary-foreground/10">
      <div className="p-6 border-b border-primary-foreground/10">
        <h2 className="text-xl font-bold">Restaurant Admin</h2>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors ${
                isActive
                  ? 'bg-primary-foreground/20 text-white'
                  : 'text-primary-foreground hover:bg-primary-foreground/10'
              }`}
            >
              <Icon size={20} />
              {item.label}
            </Link>
          )
        })}
      </nav>

      <div className="p-4 border-t border-primary-foreground/10">
        <Button
          variant="outline"
          className="w-full text-primary border-primary-foreground/20 hover:bg-primary-foreground/10 bg-transparent"
          asChild
        >
          <Link href="/">
            <LogOut size={18} className="mr-2" />
            Back to Menu
          </Link>
        </Button>
      </div>
    </aside>
  )
}
