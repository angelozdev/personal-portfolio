import styled from "@emotion/styled";

export const Container = styled.header`
  width: 100%;
  padding: max(1rem, 2vh) 0;
  box-shadow: 0px 0.1rem 0.5rem rgba(0, 0, 0, 0.1);
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

export const Anchor = styled.a``;

export default {
  Container,
  Content,
  LogoContainer,
  Navigation,
  ItemList,
  Item,
  Anchor,
};
