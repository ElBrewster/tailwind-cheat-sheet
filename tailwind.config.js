/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundSize: {
        "8": "2rem",
      },
      colors: {
        yellow: {
          425: "#9383a0",
          250: "#fcf8ca",
          25: "#f6f1e7",
        },
        red: {
          750: "#9f1035",
        },
        blue: {
          750: "#2628c5",
          650: "#0036f3",
        },
        indigo: {
          650: "#342aac",
          550: "#4a36de",
        },
        violet: {
          850: "#422c67",
          450: "#7d59e8",
        },
        purple: {
          850: "#5a2983",
          450: "#a972ff",
        },
        fuchsia: {
          350: "#b45fe0",
          150: "#dba2f8",
        },
        pink: {
          850: "#340323",
          750: "#85336f",
          650: "#822b60",
          550: "#bb4ea2",
          450: "#bf5e98",
          350: "#cd77a2",
        },
        rose: {
          650: "#cc659a",
          350: "#c65f91",
        },
      },
    },
  },
  plugins: [],
}
