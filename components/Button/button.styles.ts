import styled from "@emotion/styled";

export const Container = styled.button`
  padding: 0.7rem 1rem;
  cursor: pointer;
  background-color: transparent;
  border: 1px solid;
  transition: var(--transition-base) all;
  text-transform: uppercase;
  display: block;
  width: 100%;
  max-width: 350px;
  margin: 0 auto;

  &:hover {
    box-shadow: 0.5rem 0.5rem 1.5rem 0rem rgba(0, 0, 0, 0.1);
    transform: translateY(-0.1rem);
  }
`;
