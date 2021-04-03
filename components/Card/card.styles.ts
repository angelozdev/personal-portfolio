import styled from "@emotion/styled";

/* Components */
import { Container as Title } from "components/Title/title.styles";
import { Div as Divider } from "components/Divider/divider.styles";

type Theme = { theme: { hasPadding: boolean } };

export const Text = styled.p`
  transition: transform var(--transition-animate);
`;

export const Container = styled.div`
  padding: ${({ theme }: Theme) => {
    return theme.hasPadding ? "4rem max(1.5rem, 2vw)" : "0";
  }};
  position: relative;

  &:hover ${Title} {
    transform: translateY(-0.5rem);
  }

  &:hover ${Text} {
    transform: translateY(0.5rem);
  }

  &:hover ${Divider} {
    transform: scale(1.1) translateY(0.25rem);
  }
`;

export const Content = styled.div`
  height: 100%;
`;

export const Avatar = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  object-fit: cover;
`;

export const ImageContainer = styled.figure`
  margin: 0;
  padding: 0;
  min-height: 300px;
`;
