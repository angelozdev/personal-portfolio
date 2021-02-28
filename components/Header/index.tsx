import * as React from "react";

/* Components */
import { Wrapper } from "components";

/* Styles */
import {
  Container,
  Content,
  LogoContainer,
  Navigation,
  ItemList,
  Item,
  Anchor,
} from "./header.styles";
import { Logo } from "components/Icons";

/* Fixtures */
import { navigation } from "fixtures";

function Header() {
  return (
    <Container>
      <Wrapper>
        <Content>
          <LogoContainer>
            <Logo />
          </LogoContainer>

          <Navigation>
            <ItemList>
              {React.Children.toArray(
                navigation.map((item) => {
                  const { href, title } = item;
                  return (
                    <Item>
                      <Anchor href={href}>{title}</Anchor>
                    </Item>
                  );
                })
              )}
            </ItemList>
          </Navigation>
        </Content>
      </Wrapper>
    </Container>
  );
}

export default Header;
