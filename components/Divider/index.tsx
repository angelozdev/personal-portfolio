/* Styles */
import { Container, Div } from "./divider.styles";

/* Types */
interface Props {
  center?: boolean;
  className?: string;
}

function Divider({ center = false, className = "bg-white" }: Props) {
  return (
    <Container theme={{ center }}>
      <Div className={className} />
    </Container>
  );
}

export default Divider;
