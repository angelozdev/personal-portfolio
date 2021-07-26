/* Styles */
import { Item, IconContainer, Text } from "./technology.styles";
import { colors } from "styles/theme";

/* Types */
import { Technology } from "types";

const setDarkColor = (tecnologyColor: string): string => {
  const dic = {
    [colors.next]: "dark-fill-white",
    [colors.stylus]: "dark-fill-stylus2",
    [colors.typescript]: "dark-fill-typescript2",
  };

  return dic[tecnologyColor] || "";
};

function TechnologyItem({ title, color, href, Icon }: Partial<Technology>) {
  return (
    <Item
      className={["border-color-gray-100", "dark-border-color-gray-700"].join(
        " "
      )}
    >
      <IconContainer target="_blank" href={href}>
        <Icon width="5rem" fill={color} className={setDarkColor(color)} />
        <Text className="color-black dark-color-white">{title}</Text>
      </IconContainer>
    </Item>
  );
}

export default TechnologyItem;
