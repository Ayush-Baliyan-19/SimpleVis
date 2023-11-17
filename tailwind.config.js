
const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#ECE1FF",

          secondary: "#5A44D5",

          white: "#FFFFFF",

          accent: "#f3cc30",

          neutral: "#221551",

          "base-100": "#1a103c",

          info: "#53c0f3",

          success: "#71ead2",

          warning: "#f3cc30",

          error: "#e24056",
        },
      },
    ],
  },

  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("daisyui")],
};

export default config;
