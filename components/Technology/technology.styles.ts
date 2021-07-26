import styled from "@emotion/styled";
import { opacity } from "styles/keyframes";
import { breakpoints } from "styles/theme";

export const Item = styled.li`
  border: 1px solid;
  flex-grow: 1;
  flex-basis: 8rem;
  transition: var(--transition-base) all;
  animation: ${opacity} 2s ease;
  animation-fill-mode: forwards;

  &:hover {
    box-shadow: 0.5rem 0.5rem 1.5rem 0rem rgba(0, 0, 0, 0.1);
    transform: translateY(-0.1rem);
  }
`;

export const IconContainer = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5rem 0.5rem;

  @media (max-width: ${breakpoints.md}) {
    padding: 2rem 0.5rem;
  }
`;

export const Text = styled.p`
  margin-bottom: 0;
  text-align: center;
`;
