/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'logo-blue': '1C214D',
        'bg-app': 'BDC1C8',
        'red-hki': 'CF1515'
      }
    },
  },
  plugins: [
    
  ],
}