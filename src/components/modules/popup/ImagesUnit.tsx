import type { ImageData } from '_scripts/imagesExtractor'
import { cn } from '@/lib/utils'
import { ChevronRight } from 'lucide-react'
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
            <a
              href={src}
              key={src}
              target="_blank"
              className={cn(
                'w-full h-20 rounded-lg',
                'grid place-items-center overflow-hidden group'
              )}
            >
              <img
                src={src}
                className="object-cover size-full bg-control group-hover:scale-[1.05] duration-300"
              />
            </a>
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
