import { css } from "@emotion/react";
import { colors } from "./theme";

export const globals = css`
  body {
    font-family: "Inter", sans-serif;
    color: ${colors.text};
  }
  a {
    color: ${colors.text};
    text-decoration: none;
  }
`;

export default globals;
