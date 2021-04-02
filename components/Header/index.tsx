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
    <Container className="color-bg-100 dark-bg-gray-900">
      <Wrapper>
        <Content>
          <Anchor href="#">
            <Logo className="fill-gray-900 dark-fill-gray-50" />
          </Anchor>

          <Navigation>
            <ItemList>
              {React.Children.toArray(
                navigation.map((item) => {
                  const { href, title } = item;
                  return (
                    <Item>
                      <Anchor
                        className="color-gray-900 dark-color-gray-100"
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
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "dark" ? (
              <Sun width="1rem" className="color-yellow-500" />
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
