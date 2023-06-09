/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#fdfcff",
          "200": "#2d2442",
          "300": "#201b2d",
          "400": "#191523",
          "500": "#fafafa",
          "600": "#949494",
          "700": "#939097",
          "800": "#8d8d8d",
          "900": "#8d8b8b",
          "1000": "#8a8a8a",
          "1100": "#808080",
          "1200": "#767676",
          "1500": "#1f1f1f",
          "1600": "#1d1921",
          "1800": "#171717",
          "1900": "#141414",
          "2000": "#04111d",
          "2100": "#0a0a0a",
          "2200": "rgba(255, 255, 255, 0.52)",
        },
        blueviolet: {
          "100": "#834aff",
          "200": "#8f3eec",
          "300": "#743dff",
        },
        lightslategray: {
          "100": "#9e94b8",
          "200": "#958bac",
        },
        white: "#fff",
        darkgray: {
          "100": "#b4b4b4",
          "200": "#9f9f9f",
          "300": "#9d9d9d",
        },
        thistle: {
          "100": "#e8d3ff",
          "200": "#ddcfff",
          "300": "#e2c8ff",
          "400": "#ddc8f6",
          "500": "#d1c1f8",
          "600": "#b4a9d1",
          "700": "#aea5c5",
        },
        aliceblue: {
          "100": "#f4fafe",
          "200": "#e5eaef",
        },
        mediumblue: "#6d2aff",
        darkslateblue: {
          "100": "#675787",
          "200": "#1d569a",
          "300": "#4b3c6c",
          "400": "#493577",
        },
        black: "#000",
        dimgray: {
          "100": "#747474",
          "200": "#6f6f6f",
          "300": "#656565",
          "400": "#606060",
          "500": "#5f5f5f",
          "600": "#5b5b5b",
          "700": "#5b5272",
          "800": "#5d5466",
          "900": "#473d5d",
        },
        plum: {
          "100": "#d3b0ff",
          "200": "#c7a0f4",
          "300": "#a495c5",
        },
        darkorchid: "#954dec",
        dodgerblue: "#2982ec",
        darkslategray: {
          "100": "#464547",
          "200": "#44404b",
        },
        ghostwhite: "#f1eff6",
        blue: "#7808ff",
        lightsteelblue: {
          "100": "#b8d5f5",
          "200": "#b8d4f5",
        },
        lightgray: {
          "100": "#d6d6d6",
          "200": "#cdcdcd",
        },
        mediumpurple: "#bf94f0",
        greenyellow: "#a3f61b",
        goldenrod: "#f6b31b",
        salmon: "#f26566",
        royalblue: "#0058db",
        gainsboro: "#d9d9d9",
        slategray: "#796f8e",
        silver: {
          "100": "#c1c1c1",
          "200": "#bababa",
        },
        cornflowerblue: "#6195fa",
        whitesmoke: "#f4f4f4",
      },
      fontFamily: {
        "miriam-libre": "'Miriam Libre'",
        abandoned: "Abandoned",
      },
      borderRadius: {
        "2xs-2": "10.2px",
        "4xs-7": "8.7px",
        "base-2": "16.2px",
        "5xs-5": "7.5px",
        "11xl": "30px",
        xl: "20px",
        "8xs-1": "4.1px",
        "8xs": "5px",
        "5xs": "8px",
        "3xs-3": "9.3px",
        "12xl-9": "31.9px",
        "6xs": "7px",
        sm: "14px",
        smi: "13px",
        mini: "15px",
        "14xl-2": "33.2px",
        lgi: "19px",
        "7xl": "26px",
        "xs-3": "11.3px",
        "7xs-5": "5.5px",
        "8xl": "27px",
        "3xs": "10px",
      },
    },
    fontSize: {
      "9xl": "28px",
      "xl-3": "20.3px",
      xl: "20px",
      "8xl-5": "27.5px",
      "mid-5": "17.5px",
      "21xl": "40px",
      mini: "15px",
      "13xl-5": "32.5px",
      "sm-7": "13.7px",
      "base-2": "16.2px",
      "2xl-3": "21.3px",
      base: "16px",
      "15xl-6": "34.6px",
      xs: "12px",
      "2xs": "11px",
      lg: "18px",
      "3xl": "22px",
      sm: "14px",
      "7xl": "26px",
      "13xl": "32px",
      "11xl": "30px",
      "base-6": "16.6px",
      "lgi-4": "19.4px",
      "mini-8": "14.8px",
      "23xl": "42px",
      "xl-8": "20.8px",
      "5xl": "24px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
