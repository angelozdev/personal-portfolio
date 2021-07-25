import type { ImgHTMLAttributes, ReactNode } from "react";

/* Components */
import { Title } from "components";
import Image, { ImageProps } from "next/image";

/* Styles */
import {
  Container,
  Content,
  ImageContainer,
  Text,
  Avatar,
} from "./card.styles";

/* Local types */
type AvatarProps = ImgHTMLAttributes<HTMLImageElement>;
interface Props {
  background: string;
  children: ReactNode;
  hasPadding?: boolean;
}

interface TextAndTitleProps {
  children: ReactNode;
  className?: string;
}

/* MAIN COMPONENT */
function Card(props: Props) {
  const { background, children, hasPadding = true } = props;
  return (
    <Container theme={{ hasPadding }} className={background}>
      <Content>{children}</Content>
    </Container>
  );
}

Card.Title = function CardTitle({ children, className }: TextAndTitleProps) {
  return <Title className={className}>{children}</Title>;
};

Card.Cover = function CardCover({ src, ...rest }: ImageProps) {
  return <Image src={src} {...rest} />;
};

Card.Avatar = function CardAvatar({ src, ...rest }: AvatarProps) {
  return (
    <ImageContainer>
      <Avatar src={src} {...rest} />
    </ImageContainer>
  );
};

Card.Text = function CardText({ children, className }: TextAndTitleProps) {
  return <Text className={className}>{children}</Text>;
};

export default Card;
