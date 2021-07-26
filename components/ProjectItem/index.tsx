import { PropsWithChildren } from "react";

/* Nextjs */
import Image from "next/image";

/* Styles */
import {
  BackgroundContainer,
  Container,
  Content,
  Link,
  Text,
  Title,
} from "./projectItem.styles";

/* Components */
import { Wrapper } from "components";

/* Local types */
interface Props {
  href: string;
  backgroundColor: string;
  backgroundImage?: string;
  size: number;
  title: string;
}

function ProjectItem({
  backgroundColor,
  backgroundImage,
  children,
  href,
  size,
  title,
}: PropsWithChildren<Props>) {
  return (
    <Container theme={{ size }}>
      <Link href={href} target="_blank">
        {backgroundImage && (
          <BackgroundContainer theme={{ backgroundColor }}>
            <Image
              src={backgroundImage}
              layout="fill"
              objectFit="cover"
              title={title}
              alt={title}
            />
          </BackgroundContainer>
        )}
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
