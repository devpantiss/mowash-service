import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // colors: {
      //   background: "var(--background)",
      //   foreground: "var(--foreground)",
      // },
      backgroundImage: {
        'custom-image': "url('https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726501728/lk_okjesa.jpg')",
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        rotateEffect: {
          '0%, 100%': { transform: 'rotate(0deg)' }, // normal position
          '25%': { transform: 'rotate(30deg)' }, // rotate clockwise
          '50%': { transform: 'rotate(0deg)' }, // back to normal
          '75%': { transform: 'rotate(-30deg)' }, // rotate counterclockwise
        },
      },
      animation: {
        vibration: 'rotateEffect 1.5s ease-in-out infinite', // 3s for the full cycle
        marquee: 'marquee 30s linear infinite', // Adjust the speed by changing the duration (15s here)
      },
    },
  },
  plugins: [],
};
export default config;
