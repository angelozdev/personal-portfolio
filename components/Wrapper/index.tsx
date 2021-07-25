import { ReactNode } from "react";
import { screens } from "styles/theme";

/* Styles */
import { Container } from "./wrapper.styles";

/* Types */
interface Props {
  children: ReactNode;
  maxWidth?: screens;
  hasPadding?: boolean;
}

function Wrapper({
  children,
  maxWidth = "1024px",
  hasPadding = true,
}: Props): JSX.Element {
  return <Container theme={{ maxWidth, hasPadding }}>{children}</Container>;
}

export default Wrapper;
