import styled from "@emotion/styled";

export const Container = styled.ul`
  list-style: none;
  padding-left: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const Button = styled.button`
  padding: 0.5rem 1rem;
  cursor: pointer;
  background-color: transparent;
  border: 1px solid;
  transition: var(--transition-base) all;
  text-transform: uppercase;
  display: block;
  width: 100%;
  max-width: 300px;
  margin: 0 auto;

  &:hover {
    box-shadow: 0.5rem 0.5rem 1.5rem 0rem rgba(0, 0, 0, 0.1);
  }
`;
