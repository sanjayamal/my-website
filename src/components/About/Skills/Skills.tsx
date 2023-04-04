import React from "react";
import { SkillItem } from "./Components";
import { Grid } from "@mui/material";
import { skillList } from "./Constants/skillList";
import "./skills.scss";

const Skills: React.FC = () => {
  return (
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
