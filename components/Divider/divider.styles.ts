import styled from "@emotion/styled";
import { Colors } from "styles/theme";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
`;

export const Div = styled.span`
  width: 6rem;
  height: 0.2rem;
  display: inline-block;
  background-color: ${Colors["WHITE-100"]};
`;
