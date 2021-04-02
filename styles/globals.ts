import { css } from "@emotion/react";
import { classesGenerator } from "utils";
import { colors } from "./theme";

export const globals = css`
  /* COLORS */
  ${classesGenerator(colors, {
    name: "color",
    attribute: "color",
    hasDarkMode: true,
  })}

  /* BACKGROUNDS */
  ${classesGenerator(colors, {
    name: "bg",
    attribute: "background-color",
    hasDarkMode: true,
  })}

  ${classesGenerator(colors, {
    name: "fill",
    attribute: "fill",
    hasDarkMode: true,
  })}


  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI",
      "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
  }

  a {
    text-decoration: none;
  }

  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    margin: 0px;
    background: ${colors.gray[400]};
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${colors.gray[500]};
    border-radius: 4px;
  }
`;

export default globals;
