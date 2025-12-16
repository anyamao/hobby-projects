/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        first: "rgba(49, 38, 70, 1)",
        second: "rgba(90, 71, 124, 1)",
        third: "rgba(83, 32, 77, 1)",
        forth: "rgba(148, 89, 141, 1)",
        fifth: "rgba(203, 185, 219, 1)",
        sixth: "rgba(163, 135, 187, 1)",
        seventh: "rgba(183, 150, 212, 1)",
        eight: "rgba(255, 255, 255, 0.22)",
        ninth: "rgba(255, 255, 255, 0.46)",
        tenth: "rgba(122, 92, 151, 1)",
      },
    },
  },
  plugins: [],
};
