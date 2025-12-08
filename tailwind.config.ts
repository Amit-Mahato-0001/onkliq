import type {Config} from 'tailwindcss'
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
      background: '#000000ff',
      unit: '#FE4101',
      control: '#1E1E1E',
      white: '#FFFFFF',
      gray: '#9A9A9A',
      transparent: 'transparent',
    },
  },
  plugins: [],
} satisfies Config