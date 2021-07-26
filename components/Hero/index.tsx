/* Components */
import { Title, Wrapper } from "components";

/* Styles */
import { Container, Content, Subtitle } from "./hero.styles";

function Hero() {
  return (
    <Container className="bg-white dark-bg-gray-800">
      <Wrapper>
        <Content>
          <Title
            className="color-gray-900 dark-color-white"
            center
            min="1rem"
            max="5rem"
            percent="5vw"
          >
            Angelo Zambrano
          </Title>
          <Subtitle className="color-gray-900 dark-color-white">
            Frontend Developer | React.js | TypeScript - JavaScript
          </Subtitle>
        </Content>
      </Wrapper>
    </Container>
  );
}

export default Hero;
