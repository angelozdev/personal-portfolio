/* Components */
import { SocialNetworkList, Wrapper, Anchor } from "components";

/* Styles */
import { Container, Content, Grid, Pane, Title, Text } from "./footer.styles";

function Footer() {
  return (
    <Container className="bg-gray-800 dark-bg-gray-900 border-color-800 dark-border-color-gray-700">
      <Wrapper>
        <Content className="color-white">
          <Grid>
            <SocialNetworkList />

            <Pane>
              <Title>Never stop learning</Title>

              <Text>
                Handcrafted by me,{" "}
                <Anchor
                  colorOnHover="black"
                  color="cyan-200"
                  className="color-white"
                  target="_blank"
                  href="https://www.linkedin.com/in/angelozdev"
                >
                  @angelozdev
                </Anchor>
              </Text>

              <Text>Made with ReactJS</Text>
            </Pane>
          </Grid>
        </Content>
      </Wrapper>
    </Container>
  );
}

export default Footer;
