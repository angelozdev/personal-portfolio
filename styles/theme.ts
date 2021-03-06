export type screens = "640px" | "768px" | "1024px" | "1280px" | "1536px";

export enum Colors {
  "BLACK-100" = "#212121",
  "BLACK-200" = "#1f1f1f",
  "BLACK-300" = "#1a1a1a",
  "WHITE-100" = "#fefefefe",
  "WHITE-200" = "#f9f9f9f9",
  "WHITE-300" = "#f7f7f7",
  "YELLOW" = "#ffb963",
  "BLUE" = "#084ac3",
}

export const themeColors = {
  light: {
    font: Colors["BLACK-300"],
    bg: Colors["WHITE-100"],
  },
  dark: {
    font: Colors["WHITE-100"],
    bg: Colors["BLACK-300"],
  },
};

export enum transitions {
  DEFAULT = "300ms ease-out",
}

export default { themeColors };
