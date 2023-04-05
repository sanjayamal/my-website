import React from "react";
import { PageTitle, WithLoad } from "../Common";
import { Stack } from "@mui/material";
import { PersonalInfo } from "./PersonalInfo";
import { Skills } from "./Skills";
import { EducationAndExperience } from "./EducationAndExperiance";

const About: React.FC = () => {
  return (
    <>
      <PageTitle title="ABOUT ME" />
      <Stack spacing={3}>
        <PersonalInfo />
        <Skills />
        <EducationAndExperience />
      </Stack>
    </>
  );
};

export default WithLoad(About);
