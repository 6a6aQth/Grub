import { Navbar } from '@/components/navbar'
import { Button } from '@/components/ui/button'
import { QrCode, Menu, BarChart3, Zap } from 'lucide-react'
import Link from 'next/link'
import { SparklesCore } from '@/components/ui/sparkles'
import NextImage from 'next/image'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-secondary">
      <Navbar />

      <section
        className="relative overflow-hidden pt-0 pb-16 md:pb-24 bg-black"
      >
        {/* Sparkles & Flare Effect */}
        <div className="absolute top-[25px] left-1/2 -translate-x-1/2 w-full max-w-[40rem] h-40 z-0 pointer-events-none">
          {/* Gradients */}
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-[#692b39] to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-[#692b39] to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-[#E8E4D4] to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-[#E8E4D4] to-transparent h-px w-1/4" />

          {/* Core component */}
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full"
            particleColor="#E8E4D4"
          />

          {/* Radial Gradient to prevent sharp edges */}
          <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,#000)]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-0 pb-0 w-full flex flex-col lg:flex-row items-center lg:items-start justify-between gap-20 lg:gap-12">
          <div className="max-w-xl z-20 pt-8 md:pt-12 text-center lg:text-left flex flex-col items-center lg:items-start">
            <h1 className="font-serif text-5xl md:text-7xl xl:text-8xl font-bold text-white leading-[1.1] mb-8 tracking-tight">
              Scan.<br />
              Browse.<br />
              <span className="text-accent">Order.</span>
            </h1>

            <p className="text-lg text-white/80 mb-10 leading-relaxed max-w-lg font-light mx-auto lg:mx-0">
              Grub is the modern digital menu platform that transforms how
              restaurants serve their customers. No printing, no waste, always
              up-to-date.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start w-full sm:w-auto z-30 relative">
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

          {/* New Image Grid/Cluster - Cross-Browser Height Stability */}
          <div className="relative flex-none lg:flex-1 w-full max-w-[400px] md:max-w-[500px] min-h-[500px] md:min-h-[500px] lg:min-h-[550px] z-10 pt-4 mx-auto lg:mx-0">
            {/* Top Left - Wings - Scaled Down */}
            <div className="absolute top-[5%] left-[2%] lg:left-0 w-[55%] aspect-square z-20 animate-in fade-in slide-in-from-left-8 duration-700">
              <NextImage
                src="/Hero Image 1 Top left.png"
                alt="Wings"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Top Right - Seafood */}
            <div className="absolute top-[3.5%] right-0 lg:right-[-4%] w-[55%] aspect-square z-10 animate-in fade-in slide-in-from-right-8 duration-700 delay-100">
              <NextImage
                src="/Hero Image 2 Top Right.png"
                alt="Seafood Platter"
                fill
                className="object-contain transition-transform hover:scale-105 duration-500"
              />
            </div>

            {/* Bottom Left - QR Code - Enlarged and Moved Left */}
            <div className="absolute bottom-[0%] left-0 lg:left-[-17.5%] w-[55%] aspect-square z-30 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
              <NextImage
                src="/Hero Image 3 QR Code Bottom Left.png"
                alt="QR Code"
                fill
                className="object-contain drop-shadow-2xl"
              />
            </div>

            {/* Bottom Right - Coffee/Chocolate */}
            <div className="absolute bottom-0 lg:bottom-[-7.5%] right-0 lg:right-[-10%] w-[65%] lg:w-[70%] aspect-square z-20 animate-in fade-in slide-in-from-right-8 duration-700 delay-300">
              <NextImage
                src="/Hero Image 4 Bottom Right.png"
                alt="Desserts and Coffee"
                fill
                className="object-contain"
              />
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
              <div className="relative w-[240px] md:w-[300px] h-16 mb-4 -ml-4">
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
