import { Typography } from "@mui/material";
import React from "react";

interface IInfoItem {
  label: string;
  value: string;
}
const InfoItem: React.FC<IInfoItem> = ({ value, label }) => {
  return (
    <Typography sx={{ color: "rgba(0, 0, 0, 0.54)" }}>
      {label} :{" "}
      <span style={{ color: "rgba(0, 0, 0, 0.54)", fontWeight: "450" }}>
        {value}
      </span>
    </Typography>
  );
};

export default InfoItem;
