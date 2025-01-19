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
      },
      screens: {
        "media-max-480px": { max: "480px" },
        "media-max-450px": { max: "450px" },
        "media-max-1298px": { max: "1298px" },
        "media-max-1015px": { max: "1015px" },
        "media-max-935px": { max: "935px" },
        "media-max-760px": { max: "760px" },
        "media-max-655px": { max: "655px" },
        "media-max-690px": { max: "690px" },

        "media-max-600px": { max: "600px" },
        "media-max-545px": { max: "545px" },
        "media-max-522px": { max: "522px" },
        "media-max-510px": { max: "510px" },
        "media-max-470px": { max: "470px" },
        "media-max-410px": { max: "410px" },



        "between360-545": { min: "360px", max: "545px" },

      },
    },
  },
  plugins: [],
};
