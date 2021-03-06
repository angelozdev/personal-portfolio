import { Colors } from "styles/theme";

export interface ThemeProvider {
  colors?: {
    light: {
      font: {
        normal: Colors;
        invert: Colors;
      };
      bg: {
        normal: Colors;
        invert: Colors;
      };
    };
    dark: {
      font: {
        normal: Colors;
        invert: Colors;
      };
      bg: {
        normal: Colors;
        invert: Colors;
      };
    };
  };
}
