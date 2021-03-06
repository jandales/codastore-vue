/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': "var(--primary)",
        'secondary': "var(--secondary)",
        'main': "var(--main)",
        'background': "var(--background)",
        'header': "var(--header)",
        'accent': "var(--accent)",
        'theme' : "var(--theme)",
        'lightGray' : '#f5f5f5',
        'light' : "#777",
        'dark' : '#333',
        'darkGray' : '#d0d0d0',
      },
      backgroundImage: {
      
      }
    },
  },
  plugins: [
    
  ],
}
