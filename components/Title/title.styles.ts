import styled from "@emotion/styled";

export interface Theme {
  min?: "1rem" | "1.5rem" | "2rem";
  max?: "2rem" | "3rem" | "4rem" | "5rem" | "6rem";
  percent?: "1vw" | "2vw" | "3vw" | "4vw" | "5vw";
  uppercase?: boolean;
  center?: boolean;
}

export const Container = styled.h1`
  font-size: min(
    calc(
      ${({ theme }: { theme: Theme }) => theme.min} +
        ${({ theme }) => theme.percent}
    ),
    ${({ theme }) => theme.max}
  );
  margin: 0;
  transition: transform var(--transition-animate);
  text-transform: ${({ theme }) => (theme.uppercase ? "uppercase" : "none")};
  text-align: ${({ theme }) => (theme.center ? "center" : "left")};
`;
