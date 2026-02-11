import { Navbar } from '@/components/navbar'
import { Button } from '@/components/ui/button'
import { QrCode, Menu, BarChart3, Zap } from 'lucide-react'
import Link from 'next/link'
import NextImage from 'next/image'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-secondary">
      <Navbar />

      <section
        className="relative overflow-hidden py-0 min-h-[80vh] flex items-center bg-black bg-[url('/Hero.jpg')] bg-cover bg-center md:bg-right"
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 w-full">
          <div className="max-w-xl z-10">
            <h1 className="font-serif text-6xl md:text-7xl xl:text-8xl font-bold text-white leading-tight mb-6 tracking-tight">
              Scan. Browse. <span className="text-accent">Order.</span>
            </h1>

            <p className="text-lg text-white/80 mb-10 leading-relaxed max-w-lg font-light">
              Grub is the modern digital menu platform that transforms how
              restaurants serve their customers. No printing, no waste, always
              up-to-date.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="bg-[#F5F5DC] text-[#692b39] hover:bg-[#F5F5DC]/90 text-lg h-14 px-8 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl border-none"
                asChild
              >
                <Link href="/menu">View Sample Menu</Link>
              </Button>
              <Button
                className="bg-[#F5F5DC] text-[#692b39] hover:bg-[#F5F5DC]/90 text-lg h-14 px-8 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl border-none"
                asChild
              >
                <Link href="/login">For Restaurants</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-card py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-4">
              Features for Customers
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything needed for a seamless dining experience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-secondary rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative w-full h-48">
                <NextImage
                  src="/Fresh & Vibrant.jpeg"
                  alt="Fresh & Vibrant"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-8">
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">
                  Fresh & Vibrant
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Browse beautiful photos of every dish with detailed descriptions and ingredient information
                </p>
              </div>
            </div>

            <div className="group bg-secondary rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative w-full h-48">
                <NextImage
                  src="/Easy Ordering.png"
                  alt="Easy Ordering"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-8">
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">
                  Easy Ordering
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Simple one-click ordering process with real-time availability and special instructions
                </p>
              </div>
            </div>

            <div className="group bg-secondary rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative w-full h-48">
                <NextImage
                  src="/Ratings & Reviews.jpg"
                  alt="Ratings & Reviews"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-8">
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">
                  Ratings & Reviews
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  See customer ratings and reviews for each dish to help make the perfect choice
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-white mb-8">
            Ready to Transform Your Restaurant?
          </h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            Join hundreds of restaurants using Grub to modernize their menus and
            enhance customer experience
          </p>
          <Button
            size="lg"
            className="bg-accent text-foreground hover:bg-orange-500 text-lg h-14 px-10 rounded-lg font-semibold"
            asChild
          >
            <Link href="/login">Get Started for Free</Link>
          </Button>
        </div>
      </section>

      <section className="bg-secondary py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-4">
              Why Choose Grub?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The features restaurants need to succeed
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {[
              {
                title: 'Real-Time Updates',
                description:
                  'Update availability and prices instantly. No more out-of-print menus.',
              },
              {
                title: 'Mobile-First Design',
                description:
                  'Optimized for mobile devices. Your customers can browse comfortably.',
              },
              {
                title: 'Customer Reviews',
                description:
                  'Collect valuable feedback directly on each dish to improve your menu.',
              },
              {
                title: 'Sustainability',
                description:
                  'Go digital and reduce paper waste while keeping costs down.',
              },
              {
                title: 'No Setup Fees',
                description:
                  'Start for free with our basic plan. Scale up as you grow.',
              },
              {
                title: '24/7 Support',
                description:
                  'Our team is here to help you succeed with personalized support.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex gap-5 p-7 bg-card rounded-xl shadow-sm border border-border hover:shadow-lg hover:border-accent/50 transition-all duration-300"
              >
                <div className="flex-shrink-0 mt-1">
                  <Zap
                    size={28}
                    className="text-accent strokeWidth={1.5}"
                  />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="relative w-[300px] h-16 mb-4 -ml-4">
                <NextImage
                  src="/Logo.png"
                  alt="Grub Logo"
                  fill
                  className="object-contain brightness-0 invert object-left"
                />
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                Modern digital menus for restaurants that matter
              </p>
            </div>
            <div>
              <h4 className="font-serif font-semibold mb-4 text-white">Product</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#" className="text-white/70 hover:text-accent transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/70 hover:text-accent transition-colors">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-serif font-semibold mb-4 text-white">Resources</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#" className="text-white/70 hover:text-accent transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/70 hover:text-accent transition-colors">
                    Help
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-serif font-semibold mb-4 text-white">Legal</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#" className="text-white/70 hover:text-accent transition-colors">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/70 hover:text-accent transition-colors">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-sm text-white/60">
            <p>&copy; 2024 Grub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
