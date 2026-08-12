/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 0 0 1px rgba(125, 211, 252, 0.12), 0 24px 80px rgba(2, 6, 23, 0.45)',
      },
    },
  },
  plugins: [],
};
