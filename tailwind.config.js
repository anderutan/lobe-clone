/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#333',
        secondary: '#767676',
        button: '#04ddb2',
      },
    },
  },
  plugins: [],
};
