import type { ImageData } from '_scripts/imagesExtractor'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'

export function AllImagesView({
  data,
  onClose,
}: {
  data: ImageData[]
  onClose: () => void
}) {
  const images = data.filter(d => d.type === 'img' || d.type === 'bg-image')
  const icons = data.filter(d => d.type === 'icon' && !d.src.endsWith('.svg'))
  const svgs = data.filter(d => d.src.endsWith('.svg'))

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm">
      <div className="absolute inset-4 bg-background rounded-xl p-4 overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">All Assets</h2>
          <button onClick={onClose}>
            <X className="size-5" />
          </button>
        </div>

        <Section title="Images" items={images} />
        <Section title="Icons" items={icons} />
        <Section title="SVGs" items={svgs} />
      </div>
    </div>
  )
}

function Section({
  title,
  items,
}: {
  title: string
  items: ImageData[]
}) {
  if (items.length === 0) return null

  return (
    <div className="mb-6">
      <h3 className="mb-2 text-sm font-medium text-gray">
        {title} ({items.length})
      </h3>

      <div className="grid grid-cols-4 gap-2">
        {items.map(({ src }) => (
          <a
            key={src}
            href={src}
            target="_blank"
            className={cn(
              'h-20 rounded-lg overflow-hidden bg-control',
              'grid place-items-center group'
            )}
          >
            <img
              src={src}
              className="object-cover size-full group-hover:scale-105 duration-300"
            />
          </a>
        ))}
      </div>
    </div>
  )
}
