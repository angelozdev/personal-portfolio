import * as React from "react";

/* Components */
import { Wrapper } from "components";
import { Logo, Moon, Sun } from "components/Icons";

/* Styles */
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
    <Container className="bg-white dark-bg-gray-900 border-color-gray-100 dark-border-color-gray-700">
      <Wrapper>
        <Content>
          <Anchor href="#">
            <Logo className="fill-black dark-fill-white" />
          </Anchor>

          <Navigation>
            <ItemList>
              {React.Children.toArray(
                navigation.map((item) => {
                  const { href, title } = item;
                  return (
                    <Item>
                      <Anchor
                        className="color-black dark-color-white"
                        href={href}
                      >
                        {title}
                      </Anchor>
                    </Item>
                  );
                })
              )}
            </ItemList>
          </Navigation>
          <Button
            aria-label="active dark mode"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "dark" ? (
              <Sun width="1rem" className="color-amber-400" />
            ) : (
              <Moon width="1rem" className="color-blue-700" />
            )}
          </Button>
        </Content>
      </Wrapper>
    </Container>
  );
}

export default Header;
