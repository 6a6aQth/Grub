'use client'

import Link from 'next/link'
import { GrubLogoWithText } from './grub-logo'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9">
              <svg
                viewBox="0 0 200 200"
                fill="none"
                stroke="currentColor"
                strokeWidth="8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-accent group-hover:scale-110 transition-transform"
              >
                <circle cx="50" cy="100" r="40" />
                <circle cx="50" cy="100" r="25" />
                <circle cx="50" cy="100" r="10" />
              </svg>
            </div>
            <span className="font-serif font-bold text-lg hidden sm:inline text-foreground">grub</span>
          </Link>

          <div className="hidden md:flex gap-10 items-center">
            <Link
              href="/"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
            >
              Browse Menu
            </Link>
            <Link
              href="/dashboard"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
            >
              For Restaurants
            </Link>
            <Button
              className="bg-accent text-primary hover:bg-accent/90 font-semibold rounded-lg shadow-md hover:shadow-lg transition-all"
              asChild
            >
              <Link href="/login">Sign In</Link>
            </Button>
          </div>

          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 border-t border-border pt-4 space-y-4">
            <Link
              href="/"
              className="block py-2 text-foreground hover:text-accent transition-colors font-medium"
            >
              Browse Menu
            </Link>
            <Link
              href="/dashboard"
              className="block py-2 text-foreground hover:text-accent transition-colors font-medium"
            >
              For Restaurants
            </Link>
            <Button
              className="w-full bg-accent text-primary hover:bg-accent/90 font-semibold rounded-lg"
              asChild
            >
              <Link href="/login">Sign In</Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}
