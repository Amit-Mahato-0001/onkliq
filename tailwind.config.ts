import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  theme: {
    fontFamily: {
      sans: ['SF Pro Display', ...defaultTheme.fontFamily.sans],
    },
    fontWeight: {
      normal: '400',
    },
    colors: {
      background: '#0B0B0C',
      unit: '#343434',
      control: '#1D1D1D',
      white: '#FAFAFA',
      gray: '#909095',
      transparent: 'transparent'
    }
  },
  plugins: [],
} satisfies Config
