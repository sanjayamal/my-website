import Project from "./Project";
import { PageTitle } from "../Common";
import { Box } from "@mui/material";
import { PROJECTS } from "../../constants";

const Projects = () => {
  return (
    <>
      <PageTitle title="Projects" />
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1.5rem",
          flexDirection: "column",
          padding: "10px",
        }}
      >
        {PROJECTS.map((project, index) => (
          <Project {...project} key={index} />
        ))}
      </Box>
    </>
  );
};

export default Projects;
