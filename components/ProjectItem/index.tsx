import * as React from "react";

/* Styles */
import { Container, Title, Text, Content, Link } from "./projectItem.styles";

/* Types */
import { ComponentWithChildren } from "types";

/* Components */
import { Wrapper } from "components";

/* Local types */
interface Props extends ComponentWithChildren {
  href: string;
  backgroundColor: string;
  backgroundImage?: string;
}

function ProjectItem({
  children,
  href,
  backgroundColor,
  backgroundImage,
}: Props) {
  return (
    <Container theme={{ backgroundColor, backgroundImage }}>
      <Link href={href} target="_blank">
        <Wrapper maxWidth="640px">
          <Content>{children}</Content>
        </Wrapper>
      </Link>
    </Container>
  );
}

ProjectItem.Title = function ProjectTitle({ children }: ComponentWithChildren) {
  return <Title>{children}</Title>;
};

ProjectItem.Text = function ProjectText({ children }: ComponentWithChildren) {
  return <Text>{children}</Text>;
};

export default ProjectItem;
