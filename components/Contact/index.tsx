import { Card, Title, Wrapper } from "components";
import * as React from "react";
/* Components */

/* Styles */
import { Container, Content, Grid } from "./contact.styles";

function Contact() {
  return (
    <Container>
      <Wrapper maxWidth="1280px">
        <Content>
          <Title percent="4vw" max="4rem">
            Contact Me
          </Title>

          <Grid>
            <Card title="Hola mundo" color={"red"}>
              dasdasd
            </Card>
            <Card title="Hola mundo" color={"blue"}>
              asdasdas
            </Card>
          </Grid>
        </Content>
      </Wrapper>
    </Container>
  );
}

export default Contact;
