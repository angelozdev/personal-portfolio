import * as React from "react";

/* Component */
import { SectionLayout } from "components/Layouts";
import { Technology as Item } from "components/";

/* Styles */
import { Container, Button } from "./technologies.styles";

/* Types */
import { Technology } from "types";

/* Local types */
interface Props {
  technologies: Technology[];
  title: string;
}

const INITIAL_TECHNOLOGIES_LENGTH = 4;

function Technologies({ technologies = [], title }: Props) {
  const [showMore, setShowMore] = React.useState<number>(
    INITIAL_TECHNOLOGIES_LENGTH
  );
  const technologiesLength = technologies.length;

  const handleReset = () => {
    if (technologiesLength > showMore) {
      setShowMore(technologiesLength);
    } else {
      setShowMore(INITIAL_TECHNOLOGIES_LENGTH);
    }
  };

  return (
    <SectionLayout title={title}>
      <Container>
        {technologies.slice(0, showMore).map(({ Icon, color, title, href }) => (
          <Item
            key={title.toLowerCase()}
            color={color}
            title={title}
            href={href}
            Icon={Icon}
          />
        ))}
      </Container>

      {INITIAL_TECHNOLOGIES_LENGTH < technologiesLength && (
        <Button
          className="color-black dark-color-white border-color-gray-100 dark-border-color-gray-700"
          type="button"
          onClick={handleReset}
        >
          {technologiesLength > showMore ? "Show all" : "Show less"}
        </Button>
      )}
    </SectionLayout>
  );
}

export default Technologies;
