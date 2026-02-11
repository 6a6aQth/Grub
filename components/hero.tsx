'use client'

import { Button } from '@/components/ui/button'
import { SparklesCore } from '@/components/ui/sparkles'
import NextImage from 'next/image'
import Link from 'next/link'

export function Hero() {
    return (
        <section className="relative overflow-hidden pt-12 pb-16 md:pb-24 bg-black">
            {/* Sparkles & Flare Effect */}
            <div className="absolute top-[17.5px] left-1/2 -translate-x-1/2 w-full max-w-[40rem] h-40 z-0 pointer-events-none">
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-[#692b39] to-transparent h-[2px] w-3/4 blur-sm" />
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-[#692b39] to-transparent h-px w-3/4" />
                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-[#E8E4D4] to-transparent h-[5px] w-1/4 blur-sm" />
                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-[#E8E4D4] to-transparent h-px w-1/4" />

                <SparklesCore
                    background="transparent"
                    minSize={0.4}
                    maxSize={1}
                    particleDensity={1200}
                    className="w-full h-full"
                    particleColor="#E8E4D4"
                />

                <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,#000)]"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-0 pb-0 w-full flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-12">
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
                        <Button variant="premium" className="px-8" asChild>
                            <Link href="/menu">View Sample Menu</Link>
                        </Button>
                        <Button variant="premium" className="px-8" asChild>
                            <Link href="/login">For Restaurants</Link>
                        </Button>
                    </div>
                </div>

                {/* Hero Image Grid/Cluster */}
                <div className="relative flex-none lg:flex-1 w-full max-w-[400px] md:max-w-[500px] min-h-[400px] md:min-h-[500px] lg:min-h-[550px] z-10 pt-4 mx-auto lg:mx-0 mt-[-120px] lg:mt-0">
                    {/* Top Left - Wings */}
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

                    {/* Bottom Left - QR Code */}
                    <div className="absolute bottom-[0%] left-0 lg:left-[-17.5%] w-[55%] aspect-square z-30 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
                        <NextImage
                            src="/Hero Image 3 QR Code Bottom Left.png"
                            alt="QR Code"
                            fill
                            className="object-contain drop-shadow-2xl"
                        />
                    </div>

                    {/* Bottom Right - Coffee/Chocolate */}
                    <div className="absolute bottom-[0%] right-[-15%] lg:bottom-[-7.5%] lg:right-[-10%] w-[65%] lg:w-[70%] aspect-square z-20 animate-in fade-in slide-in-from-right-8 duration-700 delay-300">
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
    )
}
