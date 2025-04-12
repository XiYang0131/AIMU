/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6c44fc',
          dark: '#5a35e0',
          light: '#8a6aff'
        },
        secondary: {
          DEFAULT: '#ff7eee',
          dark: '#e55dd0',
          light: '#ffa2f3'
        },
        accent: {
          DEFAULT: '#44cafc',
          dark: '#2bb3e7',
          light: '#6ad5ff'
        },
        dark: {
          DEFAULT: '#0a0a0a',
          light: '#121212',
          lighter: '#1a1a1a'
        },
        light: {
          DEFAULT: '#ffffff',
          dark: '#f0f0f0',
          darker: '#e0e0e0'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, var(--tw-colors-primary), var(--tw-colors-secondary))'
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      boxShadow: {
        'glow': '0 0 15px rgba(108, 68, 252, 0.5)',
        'glow-lg': '0 0 30px rgba(108, 68, 252, 0.5)',
      }
    },
  },
  plugins: [],
} 