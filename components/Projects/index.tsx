import { Divider, ProjectItem } from "components";
import { SectionLayout } from "components/Layouts";
import * as React from "react";
import { colors } from "styles/theme";

/* Styles */
import { Grid } from "./projects.styles";

function Projects() {
  return (
    <SectionLayout title="Projects">
      <Grid>
        {/* Image, color, tamaño */}
        <ProjectItem
          backgroundColor={colors.react}
          href="/"
          backgroundImage="https://picsum.photos/700/700"
        >
          <ProjectItem.Title>Muvick - A Streaming Platform</ProjectItem.Title>
          <Divider center={true} />
          <ProjectItem.Text>
            Muvick is an on demand streaming platform where each user can watch
            their favorite movies and series and can get recommendations
            depending on their movies or series watched.
          </ProjectItem.Text>
        </ProjectItem>

        <ProjectItem backgroundColor={colors.apollo} href="/">
          <ProjectItem.Title>Muvick - A Streaming Platform</ProjectItem.Title>
          <Divider center={true} />
          <ProjectItem.Text>
            Muvick is an on demand streaming platform where each user can watch
            their favorite movies and series and can get recommendations
            depending on their movies or series watched.
          </ProjectItem.Text>
        </ProjectItem>
      </Grid>
    </SectionLayout>
  );
}

export default Projects;
