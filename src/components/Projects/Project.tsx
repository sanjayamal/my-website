import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Chip,
  Box,
  Link,
  CardActions,
  Button,
} from "@mui/material";

interface IProject {
  name: string;
  description: string;
  technologies: string[];
  link: string;
  repoLink: string;
}

const Project: React.FC<IProject> = ({
  name,
  description,
  technologies,
  link,
  repoLink,
}) => {
  return (
    <Card>
      <CardContent>
        <Typography gutterBottom variant="h5">
          {link ? (
            <Link href={link} underline="hover" color="inherit">
              {name}
            </Link>
          ) : (
            <> {name}</>
          )}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "4px",
            paddingTop: "8px",
          }}
        >
          {technologies.map((tech, index) => (
            <Chip color="info" label={tech} key={index} variant="outlined" />
          ))}
        </Box>
      </CardContent>
      {repoLink && (
        <CardActions>
          <Typography gutterBottom variant="subtitle2">
            <Link href={repoLink} underline="hover" color="primary">
              Repository
            </Link>
          </Typography>
        </CardActions>
      )}
    </Card>
  );
};
export default Project;
