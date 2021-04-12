import styled from "@emotion/styled";
import { breakpoints } from "styles/theme";

export const Container = styled.ul`
  list-style: none;
  padding-left: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5rem 0.5rem;
  border: 1px solid;
  flex-grow: 1;
  flex-basis: 8rem;
  transition: var(--transition-base) all;

  &:hover {
    box-shadow: 0.5rem 0.5rem 1.5rem 0rem rgba(0, 0, 0, 0.1);
  }

  @media (max-width: ${breakpoints.md}) {
    padding: 2rem 0.5rem;
  }
`;

export const IconContainer = styled.a``;

export const Text = styled.p`
  margin-bottom: 0;
  text-align: center;
`;
