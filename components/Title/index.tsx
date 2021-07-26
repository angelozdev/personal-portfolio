import { ReactNode } from "react";

/* Styles */
import { Container, Theme } from "./title.styles";

/* Local Props */
interface Props extends Theme {
  children: ReactNode;
  className?: string;
}

function Title({
  children,
  min = "1.5rem",
  max = "3rem",
  percent = "2vw",
  uppercase = false,
  center = false,
  className = "",
}: Props) {
  return (
    <Container
      className={className}
      theme={{ min, max, percent, uppercase, center }}
    >
      {children}
    </Container>
  );
}

export default Title;
