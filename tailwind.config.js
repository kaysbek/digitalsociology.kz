/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'n8n-dark': '#0E0C15',
        'n8n-purple': '#9f55ff',
        'n8n-blue': '#4b5dff',
      },
      fontFamily: {
        // Указываем, что 'sans' теперь будет использовать Inter
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}