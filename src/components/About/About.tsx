import React from "react";
import { WithLoad } from "../Common";
import { Box, Stack } from "@mui/material";
import { PersonalInfo } from "./PersonalInfo";
import { Skills } from "./Skills";

const About: React.FC = () => {
  return (
    <Stack spacing={3}>
      <PersonalInfo />
      <Skills />
    </Stack>
  );
};

export default WithLoad(About);
