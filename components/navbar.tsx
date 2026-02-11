'use client'

import Link from 'next/link'
import NextImage from 'next/image'
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
          {/* Logo Section */}
          <div className="flex-1 flex justify-start">
            <Link href="/" className="flex items-center group -ml-4">
              <div className="relative w-[280px] md:w-[450px] h-16 scale-125 origin-left translation-colors">
                <NextImage
                  src="/Logo.png"
                  alt="Grub Logo"
                  fill
                  className="object-contain object-left"
                  priority
                  unoptimized
                />
              </div>
            </Link>
          </div>

          {/* Centered Navigation Links */}
          <div className="hidden md:flex flex-1 justify-center gap-8 items-center">
            <Link
              href="/how-it-works"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium whitespace-nowrap"
            >
              How it works
            </Link>
            <Link
              href="/pricing"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium whitespace-nowrap"
            >
              Pricing
            </Link>
            <Link
              href="/menu"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium whitespace-nowrap"
            >
              Browse Menu
            </Link>
            <Link
              href="/contact"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium whitespace-nowrap"
            >
              Contact
            </Link>
          </div>

          {/* Action Section */}
          <div className="flex-1 flex justify-end items-center gap-4">
            <div className="hidden md:block">
              <Button
                className="bg-brand-crimson text-brand-beige hover:bg-brand-crimson/90 font-semibold rounded-lg shadow-md hover:shadow-lg transition-all"
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
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 border-t border-border pt-4 space-y-4">
            <Link
              href="/how-it-works"
              className="block py-2 text-foreground hover:text-accent transition-colors font-medium"
            >
              How it works
            </Link>
            <Link
              href="/pricing"
              className="block py-2 text-foreground hover:text-accent transition-colors font-medium"
            >
              Pricing
            </Link>
            <Link
              href="/menu"
              className="block py-2 text-foreground hover:text-accent transition-colors font-medium"
            >
              Browse Menu
            </Link>
            <Link
              href="/contact"
              className="block py-2 text-foreground hover:text-accent transition-colors font-medium"
            >
              Contact
            </Link>
            <Button
              className="w-full bg-accent text-secondary hover:bg-accent/90 font-semibold rounded-lg"
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
