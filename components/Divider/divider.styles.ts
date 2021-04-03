import styled from "@emotion/styled";

interface LocalTheme {
  center?: boolean;
}

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: ${({ theme }: { theme: LocalTheme }) =>
    theme.center ? "center" : "start"};
  align-items: center;
  padding: 1rem 0;
`;

export const Div = styled.span`
  width: 6rem;
  height: 0.2rem;
  display: inline-block;
`;
