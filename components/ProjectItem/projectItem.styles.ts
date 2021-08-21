import styled from "@emotion/styled";
import { Div as Divider } from "components/Divider/divider.styles";
import { opacity } from "styles/keyframes";
import { breakpoints } from "styles/theme";

/* Local types */
type ContainerTheme = {
  theme: { size: number };
};

type BackgroundContainerTheme = {
  theme: { backgroundColor: string };
};

const LINKS_CONTAINER_HEIGHT = "60px";

/* COMPONENTS */
export const Title = styled.h2`
  margin: 0;
  font-size: 1.7rem;
  transition: var(--transition-animate);
`;

export const Text = styled.p`
  transition: var(--transition-animate);
`;

export const BackgroundContainer = styled.div`
  position: absolute;
  overflow: hidden;
  z-index: -2;
  inset: 0;

  & img {
    transition: var(--transition-base);
    transform-origin: top center;
  }

  &::before {
    content: "";
    transition: var(--transition-base);
    position: absolute;
    width: 100%;
    inset: 0;
    background-color: ${({ theme }: BackgroundContainerTheme) =>
      theme.backgroundColor};
    z-index: 1;
    opacity: 0.9;
  }
`;

export const LinksContainer = styled.div`
  position: absolute;
  top: ${"-" + LINKS_CONTAINER_HEIGHT};
  right: 0.5rem;
  transition: all var(--transition-base);

  @media (max-width: ${breakpoints.sm}) {
    top: 0;
  }
`;

export const Container = styled.li`
  position: relative;
  grid-column-start: span ${({ theme }: ContainerTheme) => theme.size};
  animation: ${opacity} 2s ease;
  animation-fill-mode: forwards;
  overflow: hidden;

  &:hover ${LinksContainer} {
    transform: translateY(${LINKS_CONTAINER_HEIGHT});

    @media (max-width: ${breakpoints.sm}) {
      transform: translateY(0);
    }
  }

  &:hover ${Title} {
    transform: translateY(-0.5rem);
  }

  &:hover ${Text} {
    transform: translateY(0.5rem);
  }

  &:hover ${Divider} {
    transform: translateY(0.25rem) scale(1.1);
  }

  &:hover ${BackgroundContainer} img {
    transform: scale(1.01);
  }

  &:hover ${BackgroundContainer}::before {
    opacity: 0.85;
  }

  @media (max-width: ${breakpoints.md}) {
    grid-column-start: span 2;
  }
`;

export const Content = styled.div`
  text-align: center;
`;

export const Link = styled.a`
  display: flex;
  flex-direction: column;
  place-content: center;
  padding: 4rem 0;
  position: relative;
  z-index: 10;
  height: 100%;
  min-height: 300px;
`;

export const LinkItem = styled.a`
  display: inline-block;
  padding: 1rem;
`;
