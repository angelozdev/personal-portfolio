import styled from "@emotion/styled";
import { breakpoints } from "styles/theme";

export const Container = styled.footer`
  padding: 3rem 0;
  transition: var(--transition-base) background-color;
  border-top: 1px solid;
`;

export const Content = styled.div``;

export const Grid = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: ${breakpoints.sm}) {
    justify-content: center;
  }
`;

export const Pane = styled.div`
  text-align: right;
  flex-basis: 300px;

  @media (max-width: ${breakpoints.sm}) {
    text-align: center;
  }
`;

export const Title = styled.h2`
  margin-top: 0;
`;

export const Text = styled.p`
  margin-bottom: 0;
`;
