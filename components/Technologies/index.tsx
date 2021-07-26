/* Component */
import { SectionLayout } from "components/Layouts";
import { Button, Technology as Item } from "components/";

/* Styles */
import { Container } from "./technologies.styles";

/* Types */
import { Technology } from "types";

/* Hooks */
import { useShowMore } from "hooks";

/* Utils */
import { formatKey } from "utils";

/* Local types */
interface Props {
  technologies: Technology[];
  title: string;
  id?: string;
}

const INITIAL_TECHNOLOGIES_LENGTH = 4;

function Technologies({ technologies = [], title, id }: Props) {
  const [showMore, handleClick] = useShowMore(
    INITIAL_TECHNOLOGIES_LENGTH,
    technologies.length
  );

  return (
    <SectionLayout id={id} title={title}>
      <Container>
        {technologies.slice(0, showMore).map(({ Icon, color, title, href }) => (
          <Item
            key={formatKey(title)}
            color={color}
            title={title}
            href={href}
            Icon={Icon}
          />
        ))}
      </Container>

      {INITIAL_TECHNOLOGIES_LENGTH < technologies.length && (
        <Button handleClick={handleClick}>
          {technologies.length > showMore ? "Show all" : "Show less"}
        </Button>
      )}
    </SectionLayout>
  );
}

export default Technologies;
