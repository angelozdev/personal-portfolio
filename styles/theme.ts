export type screens =
  | "640px" // sm
  | "768px" // md
  | "900px" // lg
  | "1024px" // xl
  | "1280px" // 2xl
  | "1536px"; //3xl

export const breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "900px",
  xl: "1024px",
  "2xl": "1280px",
  "3xl": "1536px",
};

export const colors = {
  black: "#010409",
  white: "#f0f6fc",
  gray: {
    "100": "#c9d1d9",
    "200": "#b1bac4",
    "300": "#8b949e",
    "400": "#6e7681",
    "500": "#484f58",
    "600": "#30363d",
    "700": "#21262d",
    "800": "#161b22",
    "900": "#0d1117",
  },
  blue: {
    "0": "#cae8ff",
    "100": "#a5d6ff",
    "200": "#79c0ff",
    "300": "#58a6ff",
    "400": "#388bfd",
    "500": "#1f6feb",
    "600": "#1158c7",
    "700": "#0d419d",
    "800": "#0c2d6b",
    "900": "#051d4d",
  },
  cyan: {
    "50": "#ECFEFF",
    "100": "#CFFAFE",
    "200": "#A5F3FC",
    "300": "#67E8F9",
    "400": "#22D3EE",
    "500": "#06B6D4",
    "600": "#0891B2",
    "700": "#0E7490",
    "800": "#155E75",
    "900": "#164E63",
  },
  amber: {
    "50": "#FFFBEB",
    "100": "#FEF3C7",
    "200": "#FDE68A",
    "300": "#FCD34D",
    "400": "#FBBF24",
    "500": "#F59E0B",
    "600": "#D97706",
    "700": "#B45309",
    "800": "#92400E",
    "900": "#78350F",
  },
  red: {
    "50": "#FEF2F2",
    "100": "#FEE2E2",
    "200": "#FECACA",
    "300": "#FCA5A5",
    "400": "#F87171",
    "500": "#EF4444",
    "600": "#DC2626",
    "700": "#B91C1C",
    "800": "#991B1B",
    "900": "#7F1D1D",
  },
  "react-router-dom": "#ca4245",
  "styled-components": "#db7093",
  apollo: "#311c87",
  bootstrap: "#563d7c",
  css: "#1572b6",
  github: "#181717",
  gmail: "#d14836",
  graphql: "#e10098",
  html: "#e34f26",
  javascript: "#f7df1e",
  linkedin: "#0077b5",
  mongodb: "#47a248",
  next: "#000000",
  node: "#339933",
  react: "#61dafb",
  redux: "#764abc",
  sass: "#cc6699",
  shopify: "#7ab55c",
  stylus: "#333333",
  tailwind: "#38b2ac",
  twitter: "#1da1f2",
  typescript: "#000077",
  webpack: "#8dd6f9",
};

export const sizes = {
  xs: ".75rem",
  sm: ".875rem",
  tiny: ".875rem",
  base: "1rem",
  lg: "1.125rem",
  xl: "1.25rem",
  "2xl": "1.5rem",
  "3xl": "1.875rem",
  "4xl": "2.25rem",
  "5xl": "3rem",
  "6xl": "4rem",
  "7xl": "5rem",
  "8xl": "6rem",
};

export const transition = {
  base: "300ms ease",
  animate: "300ms cubic-bezier(0.4, 0.01, 0.14, 1.87)",
};
