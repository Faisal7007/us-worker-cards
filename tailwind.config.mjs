/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        bounceHorizontal: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(15px)' },
        },
      },
      animation: {
        bounceHorizontal: 'bounceHorizontal 5s infinite',
      },
      colors: {
        background: "var(--background)",
        purple_primary: '#6A1E55',
        // purple_primary: '#B59F78',


        blue_primary: '#7A1CAC',
        foreground: "var(--foreground)",
      },
      fontFamily: {
        smooch: ['"Smooch Sans"', 'sans-serif'],
        slabo: ['"Slabo 27px"', 'serif'],
      },
      Shadow: {
        custom_shadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
      },
      screens: {
        // Max-width breakpoints (renamed for compatibility)
        'max-480': '480px',
        'max-450': '450px',
        'max-1298': '1298px',
        'max-1015': '1015px',
        'max-1022': '1022px',
        'max-1336': '1336px',
        'max-1360': '1360px',
        'max-1212': '1212px',
        'max-1206': '1206px',
        'max-982': '982px',
        'max-935': '935px',
        'max-760': '760px',
        'max-700': '700px',
        'max-690': '690px',
        'max-655': '655px',
        'max-600': '600px',
        'max-545': '545px',
        'max-522': '522px',
        'max-510': '510px',
        'max-492': '492px',
        'max-470': '470px',
        'max-460': '460px',
        'max-410': '410px',

        // Ranges (you can't use these with `min-*` or `max-*` variants)
        // You can use them in `@media` queries inside custom CSS instead.
        'between360': '360px',  // Use manually in combination
        'between545': '545px',
        'between640': '640px',
        'between750': '750px',
        'between1024': '1024px',
        'between1200': '1200px',
      }

    },
  },
  plugins: [],
};
