import * as React from "react";

/* Components */
import { Title, Wrapper } from "components";

/* Styles */
import { Container, Content } from "./sectionLayout.styles";

/* Types */
import { ComponentWithChildren } from "types";

/* Local types */
interface Props extends ComponentWithChildren {
  title: string;
  id?: string;
}

function SectionLayout({ children, title, id }: Props) {
  return (
    <Container id={id} className="bg-white dark-bg-gray-800">
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
