import { Colors } from "./theme";
import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    colors?: {
      font: Colors;
      "bg-100": Colors;
      "bg-200": Colors;
    };
  }
}

// You are also able to use a 3rd party theme this way:
import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {}
}
