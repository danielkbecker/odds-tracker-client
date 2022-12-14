/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  // eslint-disable-next-line global-require
  plugins: [require('flowbite/plugin')],
};
