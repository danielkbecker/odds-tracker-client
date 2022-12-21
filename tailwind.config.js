/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}', './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {},
  },
  // eslint-disable-next-line global-require
  plugins: [
    // eslint-disable-next-line global-require
    require('flowbite/plugin'),
  ],
};
