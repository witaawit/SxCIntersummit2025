// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Pastikan semua komponen React disertakan
  ],
  theme: {
    extend: {
      screens: {
        'xl': '1280px',
      },
      colors: {
        'navbar-green': '#abdc57', // warna khusus untuk navbar
        "variable-collection-crayola-100":
          "var(--variable-collection-crayola-100)",
        "variable-collection-crayola-200":
          "var(--variable-collection-crayola-200)",
        "variable-collection-crayola-300":
          "var(--variable-collection-crayola-300)",
        "variable-collection-crayola-400":
          "var(--variable-collection-crayola-400)",
        "variable-collection-crayola-50":
          "var(--variable-collection-crayola-50)",
        "variable-collection-crayola-500":
          "var(--variable-collection-crayola-500)",
        "variable-collection-crayola-600":
          "var(--variable-collection-crayola-600)",
        "variable-collection-crayola-700":
          "var(--variable-collection-crayola-700)",
        "variable-collection-crayola-800":
          "var(--variable-collection-crayola-800)",
        "variable-collection-crayola-900":
          "var(--variable-collection-crayola-900)",
        "variable-collection-mblue-100": "var(--variable-collection-mblue-100)",
        "variable-collection-mblue-200": "var(--variable-collection-mblue-200)",
        "variable-collection-mblue-300": "var(--variable-collection-mblue-300)",
        "variable-collection-mblue-400": "var(--variable-collection-mblue-400)",
        "variable-collection-mblue-50": "var(--variable-collection-mblue-50)",
        "variable-collection-mblue-500": "var(--variable-collection-mblue-500)",
        "variable-collection-mblue-600": "var(--variable-collection-mblue-600)",
        "variable-collection-mblue-700": "var(--variable-collection-mblue-700)",
        "variable-collection-mblue-800": "var(--variable-collection-mblue-800)",
        "variable-collection-mblue-900": "var(--variable-collection-mblue-900)",
        "variable-collection-purple-50": "var(--variable-collection-purple-50)",
        "variable-collection-rpurple-100":
          "var(--variable-collection-rpurple-100)",
        "variable-collection-rpurple-200":
          "var(--variable-collection-rpurple-200)",
        "variable-collection-rpurple-300":
          "var(--variable-collection-rpurple-300)",
        "variable-collection-rpurple-400":
          "var(--variable-collection-rpurple-400)",
        "variable-collection-rpurple-50":
          "var(--variable-collection-rpurple-50)",
        "variable-collection-rpurple-500":
          "var(--variable-collection-rpurple-500)",
        "variable-collection-rpurple-600":
          "var(--variable-collection-rpurple-600)",
        "variable-collection-rpurple-700":
          "var(--variable-collection-rpurple-700)",
        "variable-collection-rpurple-800":
          "var(--variable-collection-rpurple-800)",
        "variable-collection-rpurple-900":
          "var(--variable-collection-rpurple-900)",


          "primary-button": "var(--primary-button)",
        "purple-200": "var(--purple-200)",
        "purple-800": "var(--purple-800)",
        "variable-collection-crayola-100":
          "var(--variable-collection-crayola-100)",
        "variable-collection-crayola-200":
          "var(--variable-collection-crayola-200)",
        "variable-collection-crayola-300":
          "var(--variable-collection-crayola-300)",
        "variable-collection-crayola-400":
          "var(--variable-collection-crayola-400)",
        "variable-collection-crayola-50":
          "var(--variable-collection-crayola-50)",
        "variable-collection-crayola-500":
          "var(--variable-collection-crayola-500)",
        "variable-collection-crayola-600":
          "var(--variable-collection-crayola-600)",
        "variable-collection-crayola-700":
          "var(--variable-collection-crayola-700)",
        "variable-collection-crayola-800":
          "var(--variable-collection-crayola-800)",
        "variable-collection-crayola-900":
          "var(--variable-collection-crayola-900)",
        "variable-collection-mblue-100": "var(--variable-collection-mblue-100)",
        "variable-collection-mblue-200": "var(--variable-collection-mblue-200)",
        "variable-collection-mblue-300": "var(--variable-collection-mblue-300)",
        "variable-collection-mblue-400": "var(--variable-collection-mblue-400)",
        "variable-collection-mblue-50": "var(--variable-collection-mblue-50)",
        "variable-collection-mblue-500": "var(--variable-collection-mblue-500)",
        "variable-collection-mblue-600": "var(--variable-collection-mblue-600)",
        "variable-collection-mblue-700": "var(--variable-collection-mblue-700)",
        "variable-collection-mblue-800": "var(--variable-collection-mblue-800)",
        "variable-collection-mblue-900": "var(--variable-collection-mblue-900)",
        "variable-collection-purple-50": "var(--variable-collection-purple-50)",
        "variable-collection-purple200-70":
          "var(--variable-collection-purple200-70)",
        "variable-collection-rpurple-100":
          "var(--variable-collection-rpurple-100)",
        "variable-collection-rpurple-200":
          "var(--variable-collection-rpurple-200)",
        "variable-collection-rpurple-300":
          "var(--variable-collection-rpurple-300)",
        "variable-collection-rpurple-400":
          "var(--variable-collection-rpurple-400)",
        "variable-collection-rpurple-50":
          "var(--variable-collection-rpurple-50)",
        "variable-collection-rpurple-500":
          "var(--variable-collection-rpurple-500)",
        "variable-collection-rpurple-600":
          "var(--variable-collection-rpurple-600)",
        "variable-collection-rpurple-700":
          "var(--variable-collection-rpurple-700)",
        "variable-collection-rpurple-800":
          "var(--variable-collection-rpurple-800)",
        "variable-collection-rpurple-900":
          "var(--variable-collection-rpurple-900)",
        "variable-collection-text": "var(--variable-collection-text)",
      },
      fontFamily: {
        'rubik': ['Rubik', 'sans-serif'],
        'plus-jakarta-sans': ['Plus Jakarta Sans', 'sans-serif'],

        "body-16": "var(--body-16-font-family)",
        h1: "var(--h1-font-family)",

      },
    },
  },
  plugins: [
    require('@codaworks/react-glow/tailwind'),
    require('tailwindcss-animate')
  ],
}
