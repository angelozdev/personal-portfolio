import * as React from "react";

/* Components */
import { Title, Wrapper } from "components";

/* Styles */
import { Container, Content, Subtitle } from "./hero.styles";

function Hero() {
  return (
    <Container className="bg-gray-100 dark-bg-gray-800">
      <Wrapper>
        <Content>
          <Title
            className="color-gray-900 dark-color-gray-200"
            center
            min="1rem"
            max="5rem"
            percent="5vw"
          >
            Angelo Zambrano
          </Title>
          <Subtitle className="color-gray-900 dark-color-gray-200">
            Frontend Developer | React.js | TypeScript - JavaScript
          </Subtitle>
        </Content>
      </Wrapper>
    </Container>
  );
}

export default Hero;
