import * as React from "react";

/* Components */
import { SocialNetworkList, Wrapper } from "components";

/* Styles */
import {
  Container,
  Content,
  Grid,
  Pane,
  Title,
  Text,
  Anchor,
} from "./footer.styles";

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
