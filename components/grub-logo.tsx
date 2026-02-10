export function GrubLogo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={`${className} text-primary`}
      fill="none"
      stroke="currentColor"
      strokeWidth="8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="50" cy="100" r="40" />
      <circle cx="50" cy="100" r="25" />
      <circle cx="50" cy="100" r="10" />
    </svg>
  )
}

export function GrubLogoWithText({
  className = "w-32",
}: { className?: string }) {
  return (
    <div className="flex items-center gap-2">
      <svg
        viewBox="0 0 200 200"
        className={`${className} text-primary`}
        fill="none"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="50" cy="100" r="40" />
        <circle cx="50" cy="100" r="25" />
        <circle cx="50" cy="100" r="10" />
      </svg>
      <span className="text-2xl font-bold text-primary hidden sm:block">
        grub
      </span>
    </div>
  )
}
