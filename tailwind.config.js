/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    container: {
      screens: {
        lg: '960px',
        xl: '960px',
        '2xl': '960px',
      },
    },
  },
  plugins: [],
};
