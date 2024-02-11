import Project from "./Project";
import { PageTitle } from "../Common";
import {
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import { PERSONAL_PROJECTS, COMPANY_PROJECTS } from "../../constants";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Projects = () => {
  return (
    <>
      <PageTitle title="Projects" />
      <Box
        sx={{
          padding: "10px",
        }}
      >
        <Accordion defaultExpanded elevation={0}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} id="panel1-header">
            <Typography variant="h5" gutterBottom color="#858279">
              Enterprise Projects
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1.5rem",
                flexDirection: "column",
                padding: "10px",
              }}
            >
              {COMPANY_PROJECTS.map((project, index) => (
                <Project {...project} key={index} />
              ))}
            </Box>
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded elevation={0}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} id="panel2-header">
            <Typography variant="h5" gutterBottom color="#858279">
              Personal Projects
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1.5rem",
                flexDirection: "column",
                padding: "10px",
              }}
            >
              {PERSONAL_PROJECTS.map((project, index) => (
                <Project {...project} key={index} />
              ))}
            </Box>
          </AccordionDetails>
        </Accordion>
      </Box>
    </>
  );
};

export default Projects;
