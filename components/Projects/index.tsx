import { Children } from "react";

/* Components */
import { Button, Divider, ProjectItem } from "components";
import { SectionLayout } from "components/Layouts";

/* Fixtures */
import { projects } from "fixtures";

/* Styles */
import { Grid } from "./projects.styles";
import { useShowMore } from "hooks";

const INITIAL_PROJECTS_LENGTH = 3;

function Projects({ id }: { id?: string }) {
  const [showMore, handleClick] = useShowMore(
    INITIAL_PROJECTS_LENGTH,
    projects.length
  );

  return (
    <SectionLayout id={id} title="Projects">
      <Grid>
        {Children.toArray(
          projects.slice(0, showMore).map((project) => (
            <ProjectItem
              size={project.size}
              backgroundColor={project.color}
              href={project.urls.official}
              backgroundImage={project.cover || null}
            >
              <ProjectItem.Title>{project.title}</ProjectItem.Title>
              <Divider center={true} />
              <ProjectItem.Text>{project.description}</ProjectItem.Text>
            </ProjectItem>
          ))
        )}
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
