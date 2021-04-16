import * as React from "react";

/* Component */
import { SectionLayout } from "components/Layouts";
import { Technology } from "components/";

/* Fixtures */
import { frontendTechnologies as technologies } from "fixtures";

/* Styles */
import { Container, Button } from "./technologies.styles";

function FrontendTechnologies() {
  const [showMore, setShowMore] = React.useState<number>(4);

  const handleReset = () => {
    if (technologies.length > showMore) {
      setShowMore(technologies.length);
    } else {
      setShowMore(4);
    }
  };

  return (
    <SectionLayout title="Frontend Technologies.">
      <Container>
        {technologies.slice(0, showMore).map(({ Icon, color, title, href }) => (
          <Technology
            key={title.toLowerCase()}
            color={color}
            title={title}
            href={href}
            Icon={Icon}
          />
        ))}
      </Container>

      <Button
        className="color-black dark-color-white border-color-gray-100 dark-border-color-gray-700"
        type="button"
        onClick={handleReset}
      >
        {technologies.length > showMore ? "Show all" : "Show less"}
      </Button>
    </SectionLayout>
  );
}

export default FrontendTechnologies;
