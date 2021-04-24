import styled from "@emotion/styled";

export const Grid = styled.ul`
  list-style: none;
  padding-left: 0;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
`;
