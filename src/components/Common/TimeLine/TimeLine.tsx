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

interface ITimeLineData {
  title: string;
  date: string;
  description: string;
}
interface ITimeLine {
  title: string;
  icon: React.ReactElement;
  data: Array<ITimeLineData>;
}
const $TimeLine: React.FC<ITimeLine> = ({ title, icon, data }) => {
  return (
    <Timeline className="timeline">
      <TimelineItem className="timeline-header">
        <TimelineSeparator>
          <TimelineDot className="timeline-header-dot">{icon}</TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" className="timeline-title">
            {title}
          </Typography>
        </TimelineContent>
      </TimelineItem>
      {data.map(({ title, date, description }: ITimeLineData,index:number) => (
        <TimelineItem key={index}>
          <$TimeLineSeparator />
          <TimelineContent className="item-content">
            <Typography className="item-titile">{title}</Typography>
            <Typography variant="caption" className="item-date">
              {date}
            </Typography>
            <Typography variant="body2" className="item-description">
              {description}
            </Typography>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

export default $TimeLine;
