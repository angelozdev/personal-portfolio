import * as React from "react";

/* Components */
import { Title, Divider } from "components";

/* Styles */
import { Colors } from "styles/theme";
import { Container, Content, Text } from "./card.styles";

/* Local types */
interface Props {
  title?: string;
  color: Colors;
  children: React.ReactNode;
}
function Card({ title, color, children }: Props) {
  return (
    <Container theme={{ color }}>
      <Content>
        {title && (
          <React.Fragment>
            <Title max="2rem">{title}</Title>
            <Divider />
          </React.Fragment>
        )}

        <Text>{children}</Text>
      </Content>
    </Container>
  );
}

export default Card;
