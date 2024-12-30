import type { Config } from 'tailwindcss'

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
  },
  plugins: [
    //@ts-expect-error --xx
    function ({ addUtilities }) {
      addUtilities(
        {
          p: {
            marginBottom: '1rem',
          },
          ul: {
            marginBottom: '1rem',
          },
        },
        ['responsive', 'hover']
      )
    },
  ],
} satisfies Config
