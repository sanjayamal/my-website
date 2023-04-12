import * as React from "react";
import CircularProgress, {
  CircularProgressProps,
} from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const SkillItem = (
  props: CircularProgressProps & { language: string; rate: number }
) => {
  const {language,rate}=props
  return (
    <>
      <Box
        sx={{
          position: "relative",
          display: "inline-flex",
        }}
      >
        <CircularProgress
          variant="determinate"
          {...props}
          size={100}
          sx={{ color: "#ffcc00" }}
          value={rate}
        />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="caption"
            component="div"
            color="text.secondary"
            sx={{ fontSize: "25px", fontWeight: "900" }}
          >{`${props.rate}%`}</Typography>
        </Box>
      </Box>
      <Box>
        <Typography
          sx={{
            color: "rgba(0, 0, 0, 0.54)",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          {language}
        </Typography>
      </Box>
    </>
  );
};

export default SkillItem;
