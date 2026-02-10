import { ReactNode } from 'react'

interface StatCardProps {
  label: string
  value: string | number
  icon?: ReactNode
  trend?: {
    value: number
    direction: 'up' | 'down'
  }
}

export function StatCard({ label, value, icon, trend }: StatCardProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm font-medium text-muted-foreground">{label}</p>
          <p className="text-3xl font-bold text-foreground mt-2">{value}</p>
          {trend && (
            <p
              className={`text-sm mt-2 ${
                trend.direction === 'up'
                  ? 'text-green-600'
                  : 'text-red-600'
              }`}
            >
              {trend.direction === 'up' ? '↑' : '↓'} {trend.value}% from last
              week
            </p>
          )}
        </div>
        {icon && (
          <div className="text-primary opacity-20 text-4xl">{icon}</div>
        )}
      </div>
    </div>
  )
}
