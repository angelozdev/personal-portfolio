import { PropsWithChildren } from "react";

/* Styles */
import { Container, Title, Text, Content, Link } from "./projectItem.styles";

/* Components */
import { Wrapper } from "components";

/* Local types */
interface Props {
  href: string;
  backgroundColor: string;
  backgroundImage?: string;
  size: number;
}

function ProjectItem({
  children,
  href,
  backgroundColor,
  backgroundImage,
  size,
}: PropsWithChildren<Props>) {
  return (
    <Container theme={{ backgroundColor, backgroundImage, size }}>
      <Link href={href} target="_blank">
        <Wrapper maxWidth="640px">
          <Content>{children}</Content>
        </Wrapper>
      </Link>
    </Container>
  );
}

ProjectItem.Title = function ProjectTitle({ children }: PropsWithChildren<{}>) {
  return <Title>{children}</Title>;
};

ProjectItem.Text = function ProjectText({ children }: PropsWithChildren<{}>) {
  return <Text>{children}</Text>;
};

export default ProjectItem;
