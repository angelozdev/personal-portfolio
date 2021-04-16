import * as React from "react";

/* Fixtures */
import { socialNetworks } from "fixtures";

/* Styles */
import { Container, Item, Anchor } from "./socialNetworkList.styles";

function SocialNetworkList() {
  return (
    <Container>
      {socialNetworks.map(({ Icon, color, title, href }) => (
        <Item key={`${title}-${color}`} theme={{ color }}>
          <Anchor href={href} target="_blank">
            <Icon fill="white" width="1.5rem" height="1.5rem" />
          </Anchor>
        </Item>
      ))}
    </Container>
  );
}

export default SocialNetworkList;
