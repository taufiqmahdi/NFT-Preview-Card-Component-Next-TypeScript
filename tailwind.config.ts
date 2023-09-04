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
        primary: {
          "soft-blue": "hsl(215, 51%, 70%)",
          cyan: "hsl(178, 100%, 50%)"
        },
        neutral: {
          "very-dark-blue-main": "hsl(217, 54%, 11%)",
          "very-dark-blue-card": "hsl(216, 50%, 16%)",
          "very-dark-blue-line": "hsl(215, 32%, 27%)",
          white: "hsl(0, 0%, 100%)"
        }
      }
    },
  },
  plugins: [],
}
export default config
