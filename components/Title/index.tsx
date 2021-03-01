import * as React from "react";

/* Styles */
import { Container, Theme } from "./title.styles";

/* Local Props */
interface Props extends Theme {
  children: React.ReactNode;
}

function Title({
  children,
  min = "1.5rem",
  max = "3rem",
  percent = "2vw",
}: Props) {
  return <Container theme={{ min, max, percent }}>{children}</Container>;
}

export default Title;
