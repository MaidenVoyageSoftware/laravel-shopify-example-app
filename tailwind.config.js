/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
        "./node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx}",
        "./node_modules/flowbite/**/*.js",
    ],
  theme: {
    extend: {},
  },
  plugins: [],
}

