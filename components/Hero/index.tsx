import { Wrapper } from "components";
import * as React from "react";

/* Styles */
import { Container, Content, Title, Subtitle } from "./hero.styles";

function Hero() {
  return (
    <Container>
      <Wrapper>
        <Content>
          <Title>Angelo Zambrano</Title>
          <Subtitle>
            Frontend Developer | React.js | TypeScript - JavaScript
          </Subtitle>
        </Content>
      </Wrapper>
    </Container>
  );
}

export default Hero;
