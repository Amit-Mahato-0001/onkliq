import { cn } from '@/lib/utils'
import logo from '@/assets/logo.png'
import Button from '~/UI/Button'

export default function Header() {
  return (
    <div className="flex items-center px-3.5 py-3 border-b-2 border-control">

      <div className="flex items-center gap-2">
        <div className={cn('size-10 rounded-full overflow-hidden', 'group')}>
          <img
            src={logo}
            alt="logo"
            className={cn(
              'size-full object-cover',
              'group-hover:scale-105 duration-300'
            )}
          />
        </div>

        <span className="text-white text-lg font-semibold tracking-wide">
          ONKLIQ
        </span>

        <Button variant="secondary">Button</Button>
      </div>
      
    </div>
  )
}
