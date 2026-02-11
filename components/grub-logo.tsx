import NextImage from 'next/image'

export function GrubLogo({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <NextImage
        src="/Logo.png"
        alt="Grub Logo"
        fill
        className="object-contain"
      />
    </div>
  )
}

export function GrubLogoWithText({
  className = "w-[300px] h-16",
}: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <NextImage
        src="/Logo.png"
        alt="Grub Logo"
        fill
        className="object-contain"
      />
    </div>
  )
}
