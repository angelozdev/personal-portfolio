import styled from "@emotion/styled";
import { breakpoints } from "styles/theme";

export const Container = styled.section`
  padding: 4rem 0 0 0;
  transition: background-color var(--transition-base);
`;

export const Content = styled.div``;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));

  @media (max-width: ${breakpoints.md}) {
    & {
      grid-template-columns: 1fr;
    }
  }
`;
