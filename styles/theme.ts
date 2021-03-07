export type screens = "640px" | "768px" | "1024px" | "1280px" | "1536px";

export enum Colors {
  "BLACK-100" = "#1f1f1f",
  "BLACK-200" = "#1a1a1a",
  "WHITE-100" = "#fefefefe",
  "WHITE-200" = "#f7f7f7",
  "YELLOW" = "#ffb963",
  "BLUE" = "#084ac3",
}

export const themeColors = {
  light: {
    font: Colors["BLACK-100"],
    "bg-100": Colors["WHITE-100"],
    "bg-200": Colors["WHITE-200"],
  },
  dark: {
    font: Colors["WHITE-100"],
    "font-200": Colors["WHITE-200"],
    "bg-100": Colors["BLACK-100"],
    "bg-200": Colors["BLACK-200"],
  },
};

export enum transitions {
  DEFAULT = "300ms ease",
}

export default { themeColors };
