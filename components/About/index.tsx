/* Components */
import { Divider, Wrapper, Title, Avatar, Anchor } from "components";

/* Styles */
import { Container, Content, Text } from "./about.styles";

function About() {
  return (
    <Container
      id="about"
      className="bg-gray-800 dark-bg-gray-900 border-color-gray-800 dark-border-color-gray-700"
    >
      <Wrapper maxWidth="640px">
        <Content>
          <Avatar
            src="/image.webp"
            objectFit="cover"
            layout="responsive"
            width={100}
            height={100}
            maxWidth="100px"
            loading="lazy"
            quality={100}
          />
          <Title className="color-white" center>
            Hi, there! I'm Angelo.
          </Title>
          <Divider center />
          <Text className="color-white">
            I’m a frontend developer engineer at{" "}
            <Anchor
              href="https://ubidots.com/"
              target="_blank"
              colorOnHover="black"
              color="blue-200"
            >
              Ubidots
            </Anchor>{" "}
            and I'm currently part of the{" "}
            <Anchor
              colorOnHover="black"
              color="cyan-200"
              href="https://platzi.com/master/"
              target="_blank"
            >
              Platzi Master
            </Anchor>{" "}
            program where the best{" "}
            <Anchor
              colorOnHover="black"
              href="https://www.platzi.com"
              target="_blank"
              color="gray-100"
            >
              Platzi
            </Anchor>{" "}
            students are.
          </Text>
        </Content>
      </Wrapper>
    </Container>
  );
}

export default About;
