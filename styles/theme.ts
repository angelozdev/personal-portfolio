export type screens = "640px" | "768px" | "1024px" | "1280px" | "1536px";

export const colors = {
  text: "#1a1a1a",
  "bg-100": "#fefefefe",
  "bg-200": "#f9f9f9f9",
  yellow: "#ffb963",
  blue: "#084ac3",
};

export const colorsDark = {
  ...colors,
  text: colors["bg-100"],
  "bg-100": "#1f1f1f",
  "bg-200": colors.text,
};

export default { colors, colorsDark };
