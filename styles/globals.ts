import { css } from "@emotion/react";
import { themeColors } from "./theme";

export const globals = css`
  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI",
      "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
    color: ${themeColors.light.font.normal};
    background-color: ${themeColors.light.bg.normal};
  }

  a {
    color: ${themeColors.light.font.normal};
    text-decoration: none;
  }

  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    margin: 0px;
    background: rgb(70, 69, 66);
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: rgb(102, 102, 102);
    border-radius: 4px;
  }
`;

export default globals;
