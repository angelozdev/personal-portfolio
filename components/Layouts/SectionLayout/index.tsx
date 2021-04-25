import * as React from "react";

/* Components */
import { Title, Wrapper } from "components";

/* Styles */
import { Container, Content } from "./sectionLayout.styles";

function SectionLayout({ children, title }) {
  return (
    <Container className="bg-white dark-bg-gray-800">
      <Wrapper>
        <Title
          max="4rem"
          min="2rem"
          percent="2vw"
          center={true}
          className="color-black dark-color-white"
        >
          {title}
        </Title>
        <Content>{children}</Content>
      </Wrapper>
    </Container>
  );
}

export default SectionLayout;
