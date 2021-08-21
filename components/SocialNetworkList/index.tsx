/* Fixtures */
import { socialNetworks } from "fixtures";

/* Utils */
import { formatKey } from "utils";

/* Styles */
import { Container, Item, Anchor } from "./socialNetworkList.styles";

function SocialNetworkList() {
  return (
    <Container>
      {socialNetworks.map(({ Icon, color, title, href }) => (
        <Item
          className="border-color-white"
          key={formatKey(title)}
          theme={{ color }}
        >
          <Anchor href={href} target="_blank">
            <Icon fill="white" width="1.5rem" height="1.5rem" />
          </Anchor>
        </Item>
      ))}
    </Container>
  );
}

export default SocialNetworkList;
