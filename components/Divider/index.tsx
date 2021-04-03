import * as React from "react";

/* Styles */
import { Container, Div } from "./divider.styles";

function Divider({ center = false }) {
  return (
    <Container theme={{ center }}>
      <Div />
    </Container>
  );
}

export default Divider;
