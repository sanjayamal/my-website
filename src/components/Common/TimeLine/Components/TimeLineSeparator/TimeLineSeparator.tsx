import React from "react";
import { TimelineConnector, TimelineDot, TimelineSeparator } from "@mui/lab";
import "../../TimeLine.scss";

const $TimeLineSeparator: React.FC = () => {
  return (
    <TimelineSeparator className="timeline-separator">
      <TimelineDot variant="outlined" className="timeline-dot" />
      <TimelineConnector />
    </TimelineSeparator>
  );
};

export default $TimeLineSeparator;
