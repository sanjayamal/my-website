import React from "react";
import { PageTitle, WithLoad } from "../Common";
import { Grid, Stack } from "@mui/material";
import { PersonalInfo } from "./PersonalInfo";
import { Skills } from "./Skills";
import { EducationAndExperience } from "./EducationAndExperiance";

const About: React.FC = () => {
  return (
    <>
      <PageTitle title="ABOUT ME" />

      <Grid container spacing={2}>
        {/* <Grid item xs={12} sm={12}>
          <PersonalInfo />
        </Grid> */}
        <Grid item xs={12} sm={12}>
          <EducationAndExperience />
        </Grid>
        <Grid item xs={12} sm={12}>
          <Skills />
        </Grid>
      </Grid>
    </>
  );
};

export default WithLoad(About);
