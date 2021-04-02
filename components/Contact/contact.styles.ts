import styled from "@emotion/styled";
import { transitions } from "styles/theme";

export const Container = styled.section`
  padding: 4rem 0;
  transition: background-color ${transitions.DEFAULT};
`;

export const Content = styled.div``;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;
