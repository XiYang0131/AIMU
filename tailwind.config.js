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
          light: '#8c6aff'
        },
        secondary: {
          DEFAULT: '#ff7eee',
          dark: '#e55fd0',
          light: '#ff9df2'
        },
        dark: {
          DEFAULT: '#121212',
          light: '#1e1e1e',
          lighter: '#2a2a2a'
        },
        light: {
          DEFAULT: '#f8f9fa',
          dark: '#e9ecef'
        },
        accent: {
          DEFAULT: '#00e5ff',
          dark: '#00c8e0',
          light: '#4eeeff'
        }
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif']
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, var(--tw-colors-primary), var(--tw-colors-secondary))'
      }
    },
  },
  plugins: [],
} 