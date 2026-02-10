import { Navbar } from '@/components/navbar'
import { Button } from '@/components/ui/button'
import { QrCode, Menu, BarChart3, Zap } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-secondary">
      <Navbar />

      <section className="relative bg-black overflow-hidden py-0">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/3 rounded-full blur-3xl -ml-32 -mb-32"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="z-10">
              <div className="inline-block mb-6">
                <div className="px-4 py-2 bg-accent/20 rounded-full">
                  <p className="text-accent text-sm font-semibold tracking-wide">MODERN DINING EXPERIENCE</p>
                </div>
              </div>

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
                  className="bg-accent text-primary hover:bg-accent/90 text-lg h-14 px-8 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                  asChild
                >
                  <Link href="/menu">View Sample Menu</Link>
                </Button>
                <Button
                  className="text-lg h-14 px-8 border-2 border-white text-white hover:bg-white hover:text-primary rounded-lg font-semibold transition-all duration-300"
                  asChild
                >
                  <Link href="/login">For Restaurants</Link>
                </Button>
              </div>

              <div className="mt-12 flex items-center gap-6">
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full bg-accent/30 border-2 border-primary flex items-center justify-center text-white text-xs font-bold">1K+</div>
                </div>
                <p className="text-white/70 text-sm">
                  <span className="text-accent font-semibold">1,000+</span> restaurants trust Grub
                </p>
              </div>
            </div>

            <div className="relative z-10 hidden md:flex justify-center items-center h-96">
              <div className="relative w-full max-w-sm">
                {/* Premium food imagery showcase */}
                <div className="absolute top-0 right-0 w-40 h-40 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                  <div className="w-full h-full bg-gradient-to-br from-yellow-600 to-red-700 flex items-center justify-center">
                    <span className="text-white/80 text-center px-4 font-serif text-xl">Premium<br/>Cuisine</span>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 w-48 h-48 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                  <div className="w-full h-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                    <span className="text-white/80 text-center px-4 font-serif text-xl">Fresh<br/>Ingredients</span>
                  </div>
                </div>

                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-2xl overflow-hidden shadow-2xl border-4 border-primary bg-accent flex items-center justify-center z-20">
                  <span className="text-white text-center font-serif text-4xl font-bold">QR</span>
                </div>
              </div>
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
                <Image
                  src="/salad-fresh.jpg"
                  alt="Fresh salad"
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
                <Image
                  src="/burger-gourmet.jpg"
                  alt="Gourmet burger"
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
                <Image
                  src="/dessert-chocolate.jpg"
                  alt="Chocolate dessert"
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
              <h4 className="font-serif text-xl font-semibold mb-4">Grub</h4>
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
