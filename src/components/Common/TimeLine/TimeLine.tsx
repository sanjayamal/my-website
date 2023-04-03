import React from "react";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";
import "./TimeLine.scss";
import { Typography } from "@mui/material";
import { $TimeLineSeparator } from "./Components";
import WorkOutlinedIcon from '@mui/icons-material/WorkOutlined';

interface ITimeLine {
  title: string;
  childrens?: any;
}
const $TimeLine: React.FC<ITimeLine> = ({ title, childrens }) => {
  return (
    <Timeline className="timeline">
      {/* Header */}
      <TimelineItem className="timeline-header">
        <TimelineSeparator>
          <TimelineDot className="timeline-header-dot" ><WorkOutlinedIcon/></TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" className="timeline-title">
            {title}
          </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <$TimeLineSeparator />
        <TimelineContent>Code</TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};

export default $TimeLine;
