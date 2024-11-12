/** @type {import('tailwindcss').Config} */
(
  module.exports = {
    content: ["./src/**/*.{html,ts}"],
    plugins: [require("daisyui")],
    daisyui: {
      themes: [
        {
          light: {
            ...require("daisyui/src/theming/themes")["light"],
            primary: "#1e40af",
            secondary: "#0000ff",
            accent: "#0891b2",
            neutral: "#78716c",
            "base-100": "#f3f4f6",
            info: "#c026d3",
            success: "#4ade80",
            warning: "#fde047",
            error: "#e11d48",
          },
        },
        {
          dark: {
            ...require("daisyui/src/theming/themes")["dark"],
            primary: "red",
            secondary: "red",
          },
        },
      ],
    },
    darkMode: ["class", '[data-theme="dark"]'],
  }
);
