import { PropsWithChildren } from "react";

/* Components */
import { Title, Wrapper } from "components";

/* Styles */
import { Container, Content } from "./sectionLayout.styles";

/* Local types */
interface Props {
  title: string;
  id?: string;
}

function SectionLayout({ children, title, id }: PropsWithChildren<Props>) {
  return (
    <Container id={id} className="bg-white dark-bg-gray-800">
      <Wrapper>
        <Title
          max="4rem"
          min="2rem"
          percent="2vw"
          center={true}
          className="color-black dark-color-white"
        >
          {title}
        </Title>
        <Content>{children}</Content>
      </Wrapper>
    </Container>
  );
}

export default SectionLayout;
