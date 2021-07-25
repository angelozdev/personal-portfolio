/* Components */
import { Card, SocialNetworkList, Wrapper } from "components";

/* Styles */
import { Container, Content, Grid } from "./contact.styles";
import { Divider } from "components/";

function Contact() {
  return (
    <Container className="bg-white dark-bg-gray-800">
      <Wrapper maxWidth="900px">
        <Content>
          <Grid>
            <Card background="bg-cyan-900">
              <Card.Title className="color-white">Contact Me.</Card.Title>
              <Divider />
              <Card.Text className="color-white">
                I was born on December 17, 1997, in Bogotá, Colombia. I am
                passionate about web technologies, mainly because of React. I
                love TypeScript. One of my greatest motivations is to learn. I
                started programming since I was in school learning from YouTube
                videos and online education platforms like Platzi and Udemy.
              </Card.Text>

              <SocialNetworkList />
            </Card>
            <Card hasPadding={false} background="bg-white">
              <Card.Cover
                objectFit="cover"
                layout="fill"
                loading="lazy"
                src="/image.jpg"
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
