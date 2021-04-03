import * as React from "react";

/* Next */
import Image, { ImageProps } from "next/image";

/* Styles */
import { Container } from "./avatar.styles";

type Props = ImageProps & { maxWidth?: string };

function Avatar({ maxWidth = "200px", ...rest }: Props) {
  return (
    <Container className="border-color-gray-700" theme={{ maxWidth }}>
      <Image {...rest} />
    </Container>
  );
}

export default Avatar;
