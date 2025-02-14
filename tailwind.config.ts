import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#9A7FDD",
          DEFAULT: "#6C529E",
          dark: "#B49AFF",
        },
        secondary: {
          light: "#2081E2",
          DEFAULT: "#186CC0",
          dark: "#0C4883",
        },
        background: {
          light: "#E0E3FF",
          dark: "#090A10",
        },
        gradient: {
          light: "#B49AFF",
          dark: "#6574FF",
        },
      },
      fontSize: {
        'xxs': ['0.625rem', '0.875rem'],
        'xxxs': ['0.5rem', '0.75rem'],
        'xxxxs': ['0.375rem', '0.5rem'],
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        dmsans: ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config
