module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  // Ensure these match with .storybook/preview.js
  theme: {
    extend: {
      boxShadow: {
        t2xl:'0 -25px 50px -12px rgb(0 0 0 / 0.25)',
      },
      colors: {
        primary: '#F50101',
        darkPrimary: '#e60000',
        lightGray: '#EAEAE4',
        darkGray: '#212121',
      },
    },
    screens: {
      xs: '375px',
      sm: '600px',
      md: '900px',
      lg: '1200px',
      xl: '1536px',
    },
    fontFamily: {
      accent: ["accent"],
      body: ['Inter', 'sans-serif'],
    }
  },
  plugins: [],
};
