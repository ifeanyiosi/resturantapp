/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Karla: ["Karla", "sans-serif"],
        Beautiste: ["Beautiste", "sans-serif"],
      },
      colors: {
        cardOverlay: "rgba(256,256,256,0.4)",
        lighttextgray: '#9ca0ab',
        primary: {
          1: "#EBF9FF", // Light Blue | Blue +3
          2: "#75D2F6", // Medium Blue | Blue +2
          3: "#9BB5D4", // Accent Blue | Blue +1
          4: "#00ADEE", // Primary Blue | Blue 0
          5: "#009CD6", // Primary Button Hover Color | Blue -1
          6: "#016596", // Primary Medium Dark-3 | Blue -2
          7: "#324F73", // Primary Medium Dark-2 | Blue -3
          8: "#082546", // Primary Medium Dark | Blue -4
          9: "#031E3F", // Primary Dark | Blue -5
          10: "#001C3D",
          11: "#031E49", // Primary Darkest | Blue -6
          12: "#f5f3f3",
        },
        accent: {
          1: "#FFF7EB",
          2: "#FFF0DA",
          3: "#FBAE40",
          4: "#FA710F",
        },
        gray: {
          1: "#F6FAFD",
          2: "#F0F7FB",
          3: "#E0E6ED",
          4: "#A6B4C4",
          5: "#748394",
          6: "#435265",
          7: "#001024",
        },
        success: {
          1: "#00EE8A",
          2: "#EBFFF6",
        },
        warning: {
          1: "#FFF7EB",
          2: "#FA710F",
        },
        error: {
          1: "#EE0000",
          2: "#FFF5F5",
        },
      },

      fontSize: {
        "2xl": "2rem",
        xl: "1.5rem",
        lg: "1.125rem",
        base: "1rem",
        sm: "0.875rem",
        xs: "0.625rem",
      },
      lineHeight: {
        sm: "17px",
        default: "21px",
      },
      letterSpacing: {
        tightest: "-0.04em",
        veryTight: "-0.06em",
      },
      boxShadow: {
        top: "0 -2px 8px 0 rgba(0, 28, 61, 0.02), 0 -8px 24px 0 rgba(0, 28, 61, 0.02)",
        bottom:
          "0 2px 8px 0 rgba(0, 28, 61, 0.02), 0 8px 24px 0 rgba(0, 28, 61, 0.02)",
      },
      backgroundImage: {
        "mask-1": "url('./assets/img/mask.svg')",
      },
      screens: {
        vs: { max: "468px" },
        vsm: "469px",
      },
    },
  },
  plugins: [],
};
