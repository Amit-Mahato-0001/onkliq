import {cn} from '@/lib/utils'

type Token = 'fonts' | 'colors' | 'images'

type Props = {
  token: Token
  className?: string
  children: React.ReactNode
}

export const unitStyles = 'p-1.5 bg-transparent border border-unit'

export default function Unit({token, className, children}: Props) {
  return (
    <section data-section={`${token}-unit`} className="space-y-1">
      <h4 className="text-base text-gray first-letter:uppercase">{token}</h4>

      <div className={cn(unitStyles, className)}>{children}</div>
    </section>
  )
}