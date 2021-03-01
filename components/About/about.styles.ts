import styled from "@emotion/styled";

export const Container = styled.section`
  background-color: ${({ theme }) => theme.colors.text};
  color: ${({ theme }) => theme.colors["bg-100"]};
  padding: 4rem 0;
  height: min(50vh, 400px);
`;

export const Content = styled.div`
  text-align: center;
`;

export const Text = styled.p``;
