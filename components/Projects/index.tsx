/* Components */
import { Button, Divider, ProjectItem } from "components";
import { SectionLayout } from "components/Layouts";

/* Fixtures */
import { projects } from "fixtures";

/* Styles */
import { Grid } from "./projects.styles";
import { useShowMore } from "hooks";

/* Utils */
import { formatKey } from "utils";

const INITIAL_PROJECTS_LENGTH = 3;

function Projects({ id }: { id?: string }) {
  const [showMore, handleClick] = useShowMore(
    INITIAL_PROJECTS_LENGTH,
    projects.length
  );

  return (
    <SectionLayout id={id} title="Projects">
      <Grid>
        {projects
          .slice(0, showMore)
          .map(({ color, description, size, title, urls, cover }) => (
            <ProjectItem
              key={formatKey(title)}
              size={size}
              backgroundColor={color}
              urls={urls}
              backgroundImage={cover}
              title={title}
            >
              <ProjectItem.Title>{title}</ProjectItem.Title>
              <Divider center={true} />
              <ProjectItem.Text>{description}</ProjectItem.Text>
            </ProjectItem>
          ))}
      </Grid>

      {INITIAL_PROJECTS_LENGTH < projects.length && (
        <Button handleClick={handleClick}>
          {projects.length > showMore ? "Show all" : "Show less"}
        </Button>
      )}
    </SectionLayout>
  );
}

export default Projects;
