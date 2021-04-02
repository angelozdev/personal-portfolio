import * as React from "react";

/* Components */
import { Divider, Wrapper } from "components";
/* Styles */

import { Container, Content, Text } from "./about.styles";
import { Title } from "components";

function About() {
  return (
    <Container id="about">
      <Wrapper maxWidth="640px">
        <Content>
          <Title center>Hi, there! I'm Angelo.</Title>
          <Divider center />
          <Text>
            I’m a frontend developer specialized in Reactjs. Web development
            fascinates me, I’m always looking to improve my skills and I’m
            continually learning new technologies. I’m currently part of the
            Platzi Master program where the best Platzi students are.
          </Text>
        </Content>
      </Wrapper>
    </Container>
  );
}

export default About;
