import * as React from "react";

/* Styles */
import { Item, IconContainer, Text } from "./technology.styles";

/* Types */
import { Technology } from "types";
import { colors } from "styles/theme";

const setDarkColor = (tecnologyColor: string) => {
  const dic = {
    [colors.next]: "dark-fill-white",
    [colors.stylus]: "dark-fill-stylus2",
    [colors.typescript]: "dark-fill-typescript2",
  };

  return dic[tecnologyColor] || null;
};

function TechnologyItem({ title, color, href, Icon }: Technology) {
  return (
    <Item className="border-color-gray-100 dark-border-color-gray-700">
      <IconContainer target="_blank" href={href}>
        <Icon width="5rem" fill={color} className={setDarkColor(color)} />
      </IconContainer>
      <Text className="color-black dark-color-white">{title}</Text>
    </Item>
  );
}

export default TechnologyItem;
