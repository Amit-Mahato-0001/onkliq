import { cn } from '@/lib/utils'
import type { ColorData } from '_scripts/colorsExtractor'
import { ChevronRight } from 'lucide-react'
import { useState } from 'react'

import Unit from '~/UI/Unit'
import { AllColorsView } from './AllColorsUnit'

export default function ColorsUnit({ data }: { data: ColorData[] | undefined }) {
  const [tooltip, setTooltip] = useState('')
  const [open, setOpen] = useState(false)

  if (!data || data.length === 0) {
    return <Unit token="colors">No colors detected</Unit>
  }

  const handleCopy = async (color: string) => {
    try {
      await navigator.clipboard.writeText(color)
      setTooltip('Copied!')
      setTimeout(() => setTooltip(''), 1200)
    } catch {
      setTooltip('Failed to copy!')
    }
  }

  return (
    <>
      <Unit token="colors">
        <div className="flex gap-2 items-center">
          {data.slice(0, 5).map(({ color, isContrasted }) => (
            <div
              key={color}
              onClick={() => handleCopy(color)}
              onMouseEnter={() => setTooltip(color)}
              onMouseLeave={() => setTooltip('')}
              className={cn(
                'relative group grid place-items-center',
                'w-full h-14 rounded-lg cursor-pointer',
                !isContrasted && 'ring ring-gray/35'
              )}
              style={{ backgroundColor: color }}
            >
              <span
                className={cn(
                  'absolute -top-[35px] left-1/2 -translate-x-1/2',
                  'px-1.5 py-1 text-sm rounded-md',
                  'bg-white text-background',
                  'opacity-0 group-hover:opacity-100 transition-opacity'
                )}
              >
                {tooltip || color}
              </span>
            </div>
          ))}

          {/* Arrow button */}
          <button
            onClick={() => setOpen(true)}
            className={cn(
              'h-14 aspect-square rounded-lg bg-control',
              'grid place-items-center hover:bg-control/70 duration-200'
            )}
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      </Unit>

      {open && (
        <AllColorsView
          data={data}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  )
}
