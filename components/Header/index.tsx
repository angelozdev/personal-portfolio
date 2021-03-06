import * as React from "react";

/* Components */
import { Wrapper } from "components";
import { Logo, Moon, Sun } from "components/Icons";

/* Styles */
import { Colors, themeColors } from "styles/theme";
import {
  Container,
  Content,
  Navigation,
  ItemList,
  Item,
  Anchor,
  Button,
} from "./header.styles";

/* Fixtures */
import { navigation } from "fixtures";

/* Context */
import DarkModeContext from "context/darkMode/context";

function Header() {
  const { setTheme, theme } = React.useContext(DarkModeContext);
  return (
    <Container>
      <Wrapper>
        <Content>
          <Anchor href="#">
            <Logo fill={themeColors[theme]["font"]} />
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
          <Button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? (
              <Sun width="1rem" color={Colors.YELLOW} />
            ) : (
              <Moon width="1rem" color={Colors.BLUE} />
            )}
          </Button>
        </Content>
      </Wrapper>
    </Container>
  );
}

export default Header;
