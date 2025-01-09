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
        purple_primary:'#6A1E55',
        blue_primary:'#7A1CAC',
        foreground: "var(--foreground)",
      },
      Shadow:{
        custom_shadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
      }
    },
  },
  plugins: [],
};
