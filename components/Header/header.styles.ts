import styled from "@emotion/styled";

export const Container = styled.header`
  width: 100%;
  padding: max(1.2rem, 2vh) 0;
  box-shadow: 0px 1rem 3rem -1rem rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1;
  transition: background-color var(--transition-base),
    border-color var(--transition-base);
  border-bottom: 1px solid;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoContainer = styled.span`
  display: flex;
`;

export const Navigation = styled.nav``;

export const ItemList = styled.ul`
  list-style: none;
  padding-left: 0;
  margin: 0;
  display: flex;
  gap: 1rem;
`;

export const Item = styled.li``;

export const Anchor = styled.a``;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
  padding: 0.25rem 0.5rem;
  cursor: pointer;
`;
