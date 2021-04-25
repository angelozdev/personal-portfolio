import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Div as Divider } from "components/Divider/divider.styles";
import { breakpoints } from "styles/theme";

/* Local types */
type ContainerTheme = {
  theme: { backgroundColor: string; backgroundImage: string; size: number };
};

const imageAttributes = (backgroundImage: string) => {
  if (!backgroundImage) return "";

  return css`
    background-image: url(${backgroundImage});
    background-repeat: no-repeat;
    background-position: center top;
    background-size: cover;

    &::before {
      opacity: 0.9;
      transition: var(--transition-base);
    }

    &:hover::before {
      opacity: 0.85;
    }
  `;
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
  ${({ theme }: ContainerTheme) => imageAttributes(theme.backgroundImage)}
  grid-column-start: span ${({ theme }) => theme.size};

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: ${({ theme }: ContainerTheme) => theme.backgroundColor};
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

  @media (max-width: ${breakpoints.md}) {
    grid-column-start: span 2;
  }
`;

export const Content = styled.div`
  text-align: center;
`;

export const Link = styled.a`
  display: block;
  padding: max(5rem, 5vh) 1rem;
  position: relative;
  z-index: 10;
  color: var(--color-white);
`;
