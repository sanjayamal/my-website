import { Box, Typography } from "@mui/material";
import React from "react";

interface IInfoItem {
  label: string;
  value: string;
}
const InfoItem: React.FC<IInfoItem> = ({ value, label }) => {
  return (
    <Box sx={{ margin: "1px" }}>
      <Typography sx={{ color: "rgba(0, 0, 0, 0.54)" }}>{label}</Typography>
      <Typography sx={{ color: "rgba(0, 0, 0, 0.54)", fontWeight: "450" }}>
        {value}
      </Typography>
    </Box>
  );
};

export default InfoItem;
