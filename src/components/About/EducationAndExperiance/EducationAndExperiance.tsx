import { Grid } from "@mui/material";
import React from "react";
import { $TimeLine } from "../../Common";

const EducationAndExperiance: React.FC = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <$TimeLine title="WORK EXPERINCE" />
      </Grid>
      <Grid item xs={12} md={6}>
        <$TimeLine title="WORK EXPERINCE" />
      </Grid>
    </Grid>
  );
};

export default EducationAndExperiance;
