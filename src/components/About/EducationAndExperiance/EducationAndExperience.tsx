import { Grid } from "@mui/material";
import React from "react";
import { $TimeLine } from "../../Common";
import WorkOutlinedIcon from "@mui/icons-material/WorkOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import HistoryEduOutlinedIcon from "@mui/icons-material/HistoryEduOutlined";
import { experiences, professionals, educations } from "./Constants";

const EducationAndExperience: React.FC = () => {
  return (
    <Grid container spacing={2} sx={{ marginLeft: "65px !important" }}>
      <Grid item xs={12} md={6}>
        <$TimeLine
          title="WORK EXPERIENCE"
          icon={<WorkOutlinedIcon />}
          data={experiences}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <$TimeLine
              title="EDUCATION QUALIFICATIONS"
              icon={<SchoolOutlinedIcon />}
              data={educations}
            />
          </Grid>
          <Grid item xs={12} md={12} sx={{ marginTop: "-25px" }}>
            <$TimeLine
              title="PROFESSIONAL QUALIFICATIONS"
              icon={<HistoryEduOutlinedIcon />}
              data={professionals}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default EducationAndExperience;
