import * as React from "react";

/* Components */
import { Card, Wrapper } from "components";

/* Styles */
import { Container, Content, Grid } from "./contact.styles";

function Contact() {
  return (
    <Container className="bg-white dark-bg-gray-800">
      <Wrapper maxWidth="1280px">
        <Content>
          {/* <Title
            className="color-black dark-color-white"
            percent="4vw"
            max="4rem"
          >
            Contact Me
          </Title> */}

          <Grid>
            <Card background="bg-teal-800">
              <Card.Title className="color-white">Contact Me</Card.Title>
              <Card.Text className="color-white">
                I was born on December 17, 1997, in Bogotá, Colombia. I am
                passionate about web technologies, mainly because of React. I
                love TypeScript. One of my greatest motivations is to learn. I
                started programming since I was in school learning from YouTube
                videos and online education platforms like Platzi and Udemy.
              </Card.Text>
            </Card>
            <Card background="bg-white">
              <Card.Cover
                loading="lazy"
                src="https://picsum.photos/300"
                width="300"
                height="300"
                alt="avatar angelo zambrano"
              />
            </Card>
          </Grid>
        </Content>
      </Wrapper>
    </Container>
  );
}

export default Contact;
