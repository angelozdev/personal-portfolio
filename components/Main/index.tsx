import { ReactNode } from "react";

/* Styles */
import { Container } from "./main.styles";

/* Local Types */
interface Props {
  children: ReactNode;
}

function Main({ children }: Props) {
  return <Container>{children}</Container>;
}

export default Main;
