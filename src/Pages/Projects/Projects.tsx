import Page from "../../Components/Page/Page";
import ProjectsTitle from "../Projects/ProjectsTitle";
import Card from "../Projects/StatCardsProjects.tsx";
import ProjectShowcase from "../Projects/ProjectShowcase";
import ProjectExperience from "../Projects/ProjectExperience";

const Projects = () => {
  return (
    <Page>
      <ProjectsTitle />
      <Card />
      <ProjectShowcase />
      <ProjectExperience />
    </Page>
  );
};

export default Projects;
