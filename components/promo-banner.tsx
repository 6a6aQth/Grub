'use client'

interface PromoBannerProps {
  title: string
  description?: string
  type?: 'promotion' | 'holiday' | 'announcement'
}

export function PromoBanner({
  title,
  description,
  type = 'promotion',
}: PromoBannerProps) {
  const typeStyles = {
    promotion: 'bg-accent text-white',
    holiday: 'bg-primary text-white',
    announcement: 'bg-secondary text-foreground border border-gray-200',
  }

  return (
    <div className={`p-4 rounded-lg ${typeStyles[type]} text-center`}>
      <h2 className="text-lg font-bold">{title}</h2>
      {description && (
        <p className="text-sm mt-1 opacity-90">{description}</p>
      )}
    </div>
  )
}
