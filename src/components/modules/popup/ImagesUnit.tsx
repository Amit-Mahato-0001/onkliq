import type { ImageData } from '_scripts/imagesExtractor'
import { cn } from '@/lib/utils'
import { ChevronRight, Download } from 'lucide-react'
import { useState } from 'react'

import Unit from '~/UI/Unit'
import { AllImagesView } from './AllImagesUnit'

export default function ImagesUnit({ data }: { data: ImageData[] | undefined }) {
  const [open, setOpen] = useState(false)

  if (!data || data.length === 0) {
    return <Unit token="images">No images detected</Unit>
  }

  return (
    <>
      <Unit token="images" className={cn('flex gap-2 items-center')}>
        {data
          .filter(({ type }) => type === 'img')
          .slice(0, 4)
          .map(({ src }) => (
            <div
              key={src}
              className={cn(
                'relative w-full h-20 rounded-lg',
                'overflow-hidden group bg-control'
              )}
            >
              {/* Image */}
              <img
                src={src}
                className="object-cover size-full group-hover:scale-[1.05] duration-300"
              />

              {/* Hover overlay */}
              <div
                className={cn(
                  'absolute inset-0',
                  'bg-black/40 opacity-0 group-hover:opacity-100',
                  'duration-200 flex items-center justify-center'
                )}
              >
                <a
                  href={src}
                  download
                  className={cn(
                    'p-2 rounded-md bg-control',
                    'hover:bg-control/70 duration-200'
                  )}
                >
                  <Download className="size-4" />
                </a>
              </div>
            </div>
          ))}

        {/* Arrow button */}
        <button
          onClick={() => setOpen(true)}
          className={cn(
            'h-20 aspect-square rounded-lg bg-control',
            'grid place-items-center hover:bg-control/70 duration-200'
          )}
        >
          <ChevronRight className="size-5" />
        </button>
      </Unit>

      {open && (
        <AllImagesView
          data={data}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  )
}
