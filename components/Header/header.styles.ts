import styled from "@emotion/styled";

export const Container = styled.header`
  width: 100%;
  padding: max(1.2rem, 2vh) 0;
  box-shadow: 0px 1rem 2rem -2rem rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1;
  background-color: ${({ theme }) => {
    return theme.colors["bg-100"];
  }};

  color: ${({ theme }) => {
    return theme.colors.text;
  }};
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
`;

export const Item = styled.li`
  margin-left: max(1rem, 3vw);
`;

export const Anchor = styled.a`
  color: ${({ theme }) => {
    return theme.colors.text;
  }};
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
  padding: 0.25rem 0.5rem;
  cursor: pointer;
`;

export default {
  Container,
  Content,
  LogoContainer,
  Navigation,
  ItemList,
  Item,
  Anchor,
  Button,
};
