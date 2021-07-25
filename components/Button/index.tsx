import { PropsWithChildren } from "react";

/* Styles */
import { Container } from "./button.styles";

/* Types */
interface Props {
  handleClick?: () => void;
}

function Button({ handleClick, children }: PropsWithChildren<Props>) {
  return (
    <Container
      className="color-black dark-color-white border-color-gray-100 dark-border-color-gray-700"
      type="button"
      onClick={handleClick}
    >
      {children}
    </Container>
  );
}

export default Button;
