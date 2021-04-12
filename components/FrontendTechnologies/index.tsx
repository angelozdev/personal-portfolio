import * as React from "react";

/* Component */
import { SectionLayout } from "components/Layouts";
import { Technology } from "components/";

/* Fixtures */
import { frontendTechnologies as technologies } from "fixtures";

/* Styles */
import { Container } from "./technologies.styles";

function FrontendTechnologies() {
  const [showMore, setShowMore] = React.useState(false);

  return (
    <SectionLayout title="Frontend Technologies.">
      <Container>
        {technologies
          .slice(0, showMore ? technologies.length : 6)
          .map(({ Icon, color, title, href }) => (
            <Technology
              key={title.toLowerCase()}
              color={color}
              title={title}
              href={href}
              Icon={Icon}
            />
          ))}
      </Container>
      <button onClick={() => setShowMore(!showMore)}>
        {showMore ? "Show less" : "Show more"}
      </button>
    </SectionLayout>
  );
}

export default FrontendTechnologies;
