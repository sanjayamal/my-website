import React from "react";
import { SkillItem } from "./Components";
import { Box, Grid } from "@mui/material";
import "./skills.scss";
import { skillList } from "./skillList";

const Skills: React.FC = () => {
  return (
    // <Box className="skill-container ">
    //   {skillList.map(
    //     ({
    //       programmingLanguage,
    //       rate,
    //     }: {
    //       programmingLanguage: string;
    //       rate: number;
    //     },index:number) => (
    //       <SkillItem rate={rate} programmingLanguage={programmingLanguage} />
    //     )
    //   )}
    // </Box>
    <Grid container spacing={2} className="skill-container">
      {skillList.map(
        (
          {
            programmingLanguage,
            rate,
          }: {
            programmingLanguage: string;
            rate: number;
          },
          index: number
        ) => (
          <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
            <SkillItem rate={rate} programmingLanguage={programmingLanguage} />
          </Grid>
        )
      )}
    </Grid>
  );
};
export default Skills;