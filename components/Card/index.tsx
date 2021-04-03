import * as React from "react";

/* Components */
import { Title } from "components";

/* Styles */
import { Container, Content, Text, Cover, ImageContainer } from "./card.styles";

/* Local types */
interface Props {
  background: string;
  children: React.ReactNode;
}

interface TextAndTitleProps {
  children: React.ReactNode;
  className?: string;
}

interface CoverProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

/* MAIN COMPONENT */
function Card(props: Props) {
  const { background, children } = props;
  return (
    <Container className={background}>
      <Content>{children}</Content>
    </Container>
  );
}

Card.Title = function CardTitle({ children, className }: TextAndTitleProps) {
  return <Title className={className}>{children}</Title>;
};

Card.Cover = function CardCover({ src, ...rest }: CoverProps) {
  return (
    <ImageContainer>
      <Cover src={src} {...rest} />
    </ImageContainer>
  );
};

Card.Text = function CardText({ children, className }: TextAndTitleProps) {
  return <Text className={className}>{children}</Text>;
};

export default Card;
