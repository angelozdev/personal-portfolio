import styled from "@emotion/styled";
import { breakpoints } from "styles/theme";

type Theme = { theme: { maxWidth: string } };

export const Container = styled.figure`
  margin: 0 auto;
  padding: 0;
  width: 100%;
  height: 100%;
  max-width: ${({ theme }: Theme) => theme.maxWidth};
  border-radius: 50%;
  overflow: hidden;
  border: 1px solid;
  margin-bottom: 2rem;

  @media (min-width: ${breakpoints.md}) {
    & {
      display: none;
    }
  }
`;
