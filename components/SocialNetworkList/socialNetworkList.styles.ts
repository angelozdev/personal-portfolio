import styled from "@emotion/styled";

type Theme = { theme: { color: string } };

export const Item = styled.li`
  border: solid 1px;
  border-color: var(--color-white);
  transition: var(--transition-base) border-color;
  height: fit-content;

  & path {
    transition: var(--transition-base) fill;
  }

  &:hover {
    border-color: ${({ theme }) => theme.color};
  }

  &:hover path {
    fill: ${({ theme }: Theme) => theme.color};
  }
`;

export const Container = styled.ul`
  display: flex;
  list-style: none;
  padding-left: 0;
  gap: 1rem;
  margin-top: 3rem;

  @supports not (gap: 1rem) {
    & ${Item} {
      margin-right: 1rem;
    }
  }
`;

export const Anchor = styled.a`
  padding: 0.5rem;
  display: flex;
  place-items: center;
`;
