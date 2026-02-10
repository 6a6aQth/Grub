'use client'

interface CategoryTabsProps {
  categories: string[]
  activeCategory: string
  onCategoryChange: (category: string) => void
}

export function CategoryTabs({
  categories,
  activeCategory,
  onCategoryChange,
}: CategoryTabsProps) {
  return (
    <div className="sticky top-16 z-40 bg-secondary border-b border-gray-200 overflow-x-auto">
      <div className="flex gap-2 px-4 py-3 min-w-min">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`px-4 py-2 rounded-full whitespace-nowrap font-medium transition-all duration-200 ${
              activeCategory === category
                ? 'bg-primary text-white shadow-sm'
                : 'bg-white text-foreground border border-gray-200 hover:border-primary'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  )
}
