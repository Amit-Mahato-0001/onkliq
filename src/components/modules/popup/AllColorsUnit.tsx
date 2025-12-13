import type { ColorData } from '_scripts/colorsExtractor'
import { X, Copy, Check } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useState } from 'react'

export function AllColorsView({
  data,
  onClose,
}: {
  data: ColorData[]
  onClose: () => void
}) {
  const [copied, setCopied] = useState<string | null>(null)

  const handleCopy = async (color: string) => {
    try {
      await navigator.clipboard.writeText(color)
      setCopied(color)
      setTimeout(() => setCopied(null), 1000)
    } catch (err) {
      console.error('Copy failed', err)
    }
  }

  return (
    <div className="fixed inset-0 bg-background z-50 flex flex-col">

      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-control">
        <span className="text-sm text-white">All Colors</span>

        <button
          onClick={onClose}
          className="p-2 rounded-md hover:bg-control"
        >
          <X className="size-4" />
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-3 scrollbar-none">
        <div className="grid grid-cols-3 gap-2">
          {data.map(({ color, isContrasted }, i) => (
            <div
              key={color + i}
              className={cn(
                'relative group aspect-square rounded-lg overflow-hidden',
                !isContrasted && 'ring ring-gray/35'
              )}
              style={{ backgroundColor: color }}
            >
              {/* Overlay – THIS handles click */}
              <button
                onClick={() => handleCopy(color)}
                className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 duration-200 flex flex-col items-center justify-center gap-1"
              >
                {copied === color ? (
                  <Check className="size-4 text-green-400" />
                ) : (
                  <Copy className="size-4 text-white" />
                )}

                <span className="text-xs text-white bg-black/50 px-2 py-0.5 rounded">
                  {copied === color ? 'Copied!' : color}
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
