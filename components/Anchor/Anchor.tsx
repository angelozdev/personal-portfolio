// styles
import { AnchorStyled } from "./anchor.styles";

// types
import type { AnchorHTMLAttributes } from "react";
import type { Colors } from "styles/theme";

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  color?: Colors;
  colorOnHover: Colors;
}

function Anchor({
  children,
  className,
  color = "gray-100",
  colorOnHover,
  href,
  ...rest
}: Props) {
  return (
    <AnchorStyled
      href={href}
      className={[
        `color-${color}`,
        `border-color-${color}`,
        `hover:bg-${color}`,
        `hover:color-${colorOnHover}`,
      ].join(" ")}
      {...rest}
    >
      {children}
    </AnchorStyled>
  );
}

export default Anchor;
