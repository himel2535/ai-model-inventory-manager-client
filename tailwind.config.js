import daisyui from "daisyui";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ai-dark': '#0a0f1f',
        'ai-blue': '#00FFFF',
        'ai-purple': '#8A2BE2',
        'ai-light-blue': '#3DF0FF',
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        ai: {
          "primary": "#00FFFF",
          "secondary": "#8A2BE2",
          "accent": "#151a3c",
          "neutral": "#0a0f1f",
          "base-100": "#0a0f1f",  // page background
          "base-200": "#12172b",  // card background
          "base-300": "#1a2033",  // hover / secondary surfaces
          "info": "#3ABFF8",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
        },
      },
    ],
    darkTheme: "ai",
    defaultTheme: "ai",
  },
};
