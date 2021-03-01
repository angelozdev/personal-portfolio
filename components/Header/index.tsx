import * as React from "react";

/* Components */
import { Wrapper } from "components";
import { Logo, Moon, Sun } from "components/Icons";

/* Styles */
import {
  Container,
  Content,
  LogoContainer,
  Navigation,
  ItemList,
  Item,
  Anchor,
  Button,
} from "./header.styles";
import { colors, colorsDark } from "styles/theme";

/* Fixtures */
import { navigation } from "fixtures";

/* Context */
import DarkModeContext from "context/darkMode/context";

function Header() {
  const { isDark, setIsDark } = React.useContext(DarkModeContext);
  return (
    <Container>
      <Wrapper>
        <Content>
          <Anchor href="#">
            <Logo fill={isDark ? colorsDark.text : colors.text} />
          </Anchor>

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
          <Button onClick={() => setIsDark(!isDark)}>
            {isDark ? (
              <Sun width="1rem" color={colors.yellow} />
            ) : (
              <Moon width="1rem" color={colors.blue} />
            )}
          </Button>
        </Content>
      </Wrapper>
    </Container>
  );
}

export default Header;
