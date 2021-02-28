import styled from "@emotion/styled";
import { screens } from "styles/theme";

interface Theme {
  maxWidth: screens;
  hasPadding: boolean;
}

export const Container = styled.div`
  width: 100%;
  max-width: ${({ theme }: { theme: Theme }) => theme.maxWidth};
  margin: 0 auto;
  padding: 0 ${({ theme }) => (theme.hasPadding ? "2vw" : "0")};
`;
