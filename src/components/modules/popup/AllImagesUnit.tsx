import type { ImageData } from '_scripts/imagesExtractor'
import { X, Download } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useState } from 'react'

type Tab = 'images' | 'icons' | 'svgs'

export function AllImagesView({
  data,
  onClose,
}: {
  data: ImageData[]
  onClose: () => void
}) {
  const [activeTab, setActiveTab] = useState<Tab>('images')

  const images = data.filter(d => d.type === 'img' || d.type === 'bg-image')
  const icons = data.filter(d => d.type === 'icon' && !d.src.endsWith('.svg'))
  const svgs = data.filter(d => d.src.endsWith('.svg'))

  const map: Record<Tab, ImageData[]> = {
    images,
    icons,
    svgs,
  }

  return (
    <div className="fixed inset-0 bg-background z-50 flex flex-col">

      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-control">
        <div className="flex gap-1 text-sm">
          {(['images', 'icons', 'svgs'] as Tab[]).map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                'px-3 py-1.5 rounded-md capitalize',
                activeTab === tab
                  ? 'bg-control text-white'
                  : 'text-gray hover:bg-control/50'
              )}
            >
              {tab}
            </button>
          ))}
        </div>

        <button
          onClick={onClose}
          className="p-2 rounded-md hover:bg-control"
        >
          <X className="size-4" />
        </button>
      </div>

      {/* Content */}
      <div
        className={cn(
          'flex-1 overflow-y-auto p-3',
          'scrollbar-none'
        )}
      >
        {map[activeTab].length === 0 ? (
          <div className="h-full grid place-items-center text-gray text-sm">
            No {activeTab} detected
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-2">
            {map[activeTab].map(({ src }, i) => (
              <div
                key={src + i}
                className="relative aspect-square rounded-lg overflow-hidden group bg-control"
              >
                <img
                  src={src}
                  className="size-full object-cover group-hover:scale-105 duration-300"
                />

                {/* Hover actions */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 duration-200 flex items-center justify-center">
                  <a
                    href={src}
                    download
                    className="p-2 bg-control rounded-md hover:bg-control/70"
                  >
                    <Download className="size-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
