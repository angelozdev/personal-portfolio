import { PropsWithChildren } from "react";

/* Nextjs */
import Image from "next/image";

/* Styles */
import {
  BackgroundContainer,
  Container,
  Content,
  Link,
  LinkItem,
  LinksContainer,
  Text,
  Title,
} from "./projectItem.styles";

/* Components */
import { Wrapper } from "components";
import { GitHub } from "components/Icons";

/* Local types */
interface Props {
  urls: {
    repository?: string;
    official?: string;
  };
  backgroundColor: string;
  backgroundImage?: string;
  size: number;
  title: string;
}

function ProjectItem({
  backgroundColor,
  backgroundImage,
  children,
  urls,
  size,
  title,
}: PropsWithChildren<Props>) {
  return (
    <Container theme={{ size }}>
      <Link href={urls.official} target="_blank">
        {urls.repository && (
          <LinksContainer className="bg-gray-900">
            <LinkItem href={urls.repository} target="_blank">
              <GitHub className="fill-white" width="15px" height="15px" />
            </LinkItem>
          </LinksContainer>
        )}

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
