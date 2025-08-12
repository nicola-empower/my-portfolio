import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'background': '#0F172A', 
        'primary': '#9A5B8F',
        'secondary': '#468585',
        'accent': '#7A93AC',
        'light-bg': '#E0D8E6',
        'text-main': '#F2F2F2',
        'text-muted': '#A9A9A9',
      },
      boxShadow: {
        'glow-nav': '0px 2px 20px 2px rgba(154, 91, 143, 0.4)',
        'glow-card': '0px 0px 15px 0px rgba(70, 133, 133, 0.3)',
      },
      animation: {
        'blob': 'blob 7s infinite',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
      },
    },
  },
  plugins: [],
}
export default config