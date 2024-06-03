/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)',
        'custom-gradient-hover': 'linear-gradient(to right, #b44593, #dd3675, #d8363a, #ee7724)',
      },
      colors: {
        custom: {
          'orange': '#FF720D',
          'custom-gradient': 'linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)',
        },

      },
      fontFamily: {
        urbanist: ['Urbanist', 'sans-serif'],
        orelega: ['Orelega One', 'cursive'],
      },
    },
  },
  variants: {
    extend: {
      backgroundImage: ['hover'],
    },
  },
  plugins: [],
};
