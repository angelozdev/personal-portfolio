import { css } from "@emotion/react";
import { classesGenerator, getDesignTokens } from "utils";
import { colors, transition } from "./theme";

export const globals = css`
  :root {
    ${getDesignTokens(transition, { name: "transition" })}
  }

  /* COLORS */
  ${classesGenerator(colors, {
    name: "color",
    attribute: "color",
    hasDarkMode: true,
    hover: true,
  })}

  /* BACKGROUNDS */
  ${classesGenerator(colors, {
    name: "bg",
    attribute: "background-color",
    hasDarkMode: true,
    hover: true,
  })}

  ${classesGenerator(colors, {
    name: "fill",
    attribute: "fill",
    hasDarkMode: true,
  })}

  ${classesGenerator(colors, {
    name: "border-color",
    attribute: "border-color",
    isImportant: true,
    hasDarkMode: true,
  })}


  html {
    scroll-behavior: smooth;
    scroll-padding-top: 2rem;
    line-height: 1.35;
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

  ::selection {
    background-color: ${colors.blue[300]};
    color: ${colors.black};
  }
`;

export default globals;
