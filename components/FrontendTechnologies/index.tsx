import * as React from "react";

/* Component */
import { SectionLayout } from "components/Layouts";

/* Fixtures */
import { frontendTechnologies as technologies } from "fixtures";

/* Styles */
import { Container, Item, IconContainer, Text } from "./technologies.styles";

function FrontendTechnologies() {
  const [showMore, setShowMore] = React.useState(false);

  return (
    <SectionLayout title="Frontend Technologies.">
      <Container>
        {technologies
          .slice(0, showMore ? 6 : technologies.length)
          .map(({ Icon, color, title, href }) => (
            <Item className="border-color-gray-100 dark-border-color-gray-700">
              <IconContainer target="_blank" href={href}>
                <Icon width="5rem" fill={color} />
              </IconContainer>
              <Text className="color-black dark-color-white">{title}</Text>
            </Item>
          ))}
      </Container>
      <button onClick={() => setShowMore(!showMore)}>
        {showMore ? "Show more" : "Show less"}
      </button>
    </SectionLayout>
  );
}

export default FrontendTechnologies;
