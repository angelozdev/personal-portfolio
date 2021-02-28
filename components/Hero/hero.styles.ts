import styled from "@emotion/styled";

/* Types */

export const Container = styled.section`
  padding: max(5vh, 2rem) 0;
  min-height: 150px;
  height: 70vh;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => {
    return theme.colors["bg-200"];
  }};
  color: ${({ theme }) => theme.colors["text"]};
`;
export const Content = styled.div`
  text-align: center;
  margin-top: -5rem;
`;
export const Title = styled.h1`
  font-size: min(calc(1rem + 5vw), 6rem);
  margin: 0; ;
`;
export const Subtitle = styled.h2`
  font-size: min(calc(0.5rem + 2vw), 1.5rem);
  font-weight: 300;
  margin: 0;
  margin-top: 0.5rem;
`;

export default { Container, Content, Title, Subtitle };
