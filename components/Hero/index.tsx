import { Title, Wrapper } from "components";
import * as React from "react";

/* Styles */
import { Container, Content, Subtitle } from "./hero.styles";

function Hero() {
  return (
    <Container>
      <Wrapper>
        <Content>
          <Title min="1rem" max="5rem" percent="5vw">
            Angelo Zambrano
          </Title>
          <Subtitle>
            Frontend Developer | React.js | TypeScript - JavaScript
          </Subtitle>
        </Content>
      </Wrapper>
    </Container>
  );
}

export default Hero;
