import * as React from "react";

/* Components */
import { Divider, ProjectItem } from "components";
import { SectionLayout } from "components/Layouts";

/* Fixtures */
import { projects } from "fixtures";

/* Styles */
import { Grid } from "./projects.styles";

function Projects() {
  return (
    <SectionLayout title="Projects">
      <Grid>
        {React.Children.toArray(
          projects.map((project) => (
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
    </SectionLayout>
  );
}

export default Projects;
