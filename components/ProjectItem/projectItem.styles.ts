import styled from "@emotion/styled";
import { Div as Divider } from "components/Divider/divider.styles";
import { breakpoints } from "styles/theme";

/* Local types */
type ContainerTheme = {
  theme: { size: number };
};

type BackgroundContainerTheme = {
  theme: { backgroundColor: string };
};

/* COMPONENTS */
export const Title = styled.h2`
  margin: 0;
  font-size: 1.7rem;
  transition: var(--transition-animate);
`;

export const Text = styled.p`
  transition: var(--transition-animate);
`;

export const Container = styled.li`
  position: relative;
  grid-column-start: span ${({ theme }: ContainerTheme) => theme.size};

  &:hover ${Title} {
    transform: translateY(-0.5rem);
  }

  &:hover ${Text} {
    transform: translateY(0.5rem);
  }

  &:hover ${Divider} {
    transform: translateY(0.25rem) scale(1.1);
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
  color: var(--color-white);
`;

export const BackgroundContainer = styled.div`
  position: absolute;
  overflow: hidden;
  z-index: -2;
  inset: 0;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    inset: 0;
    background-color: ${({ theme }: BackgroundContainerTheme) =>
      theme.backgroundColor};
    z-index: 1;
    opacity: 0.9;
  }
`;
