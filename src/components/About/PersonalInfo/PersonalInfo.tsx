import {
  Card,
  CardContent,
  Grid,
  IconButton,
  styled,
  Typography,
} from "@mui/material";
import React from "react";
import { InfoItem } from "./Components";
import moment from "moment";
import { ButtonWithIcon } from "../../Common";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import "./PersonalInfo.scss";

const PersonalInfo: React.FC = () => {
  const $IconButton = styled(IconButton)(() => ({
    margin: "0px -11px 0 5px",
    backgroundColor: "#ffcc00",
  }));

  const onDownload = () => {
    const link = document.createElement("a");
    link.download = `rajitha-sanjayamal-SSE.pdf`;
    link.href = `${process.env.PUBLIC_URL}/assets/pdfs/rajitha-sanjayamal-SSE.pdf`;
    link.click();
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={8}>
        <Typography
          sx={{
            color: "rgba(0, 0, 0, 0.54)",
            textAlign: "center",
            marginTop: "10px",
            fontWeight: "800",
          }}
          variant="h5"
        >
          PERSONAL INFOs
        </Typography>
        <Grid container spacing={1} sx={{ padding: "3%", marginLeft: "10%" }}>
          <Grid item xs={12} sm={6} className="item">
            <InfoItem label="FIRST NAME" value="Rajitha" />
          </Grid>
          <Grid item xs={12} sm={6} className="item">
            <InfoItem label="LAST NAME" value="Sanjayamal" />
          </Grid>
          <Grid item xs={12} sm={6} className="item">
            <InfoItem
              label="AGE"
              value={`${moment().diff("1994-06-25", "years")} Years`}
            />
          </Grid>
          <Grid item xs={12} sm={6} className="item">
            <InfoItem
              label="ADDRESS"
              value="Palagaspalatha,Parappuwa,Kosgoda"
            />
          </Grid>
          <Grid item xs={12} sm={6} className="item">
            <InfoItem label="EMAIL" value="rajithasanjayamal0918@gmail.com" />
          </Grid>
          <Grid item xs={12} sm={6} className="item">
            <InfoItem label="PHONE" value="+94717084765 / +94773664768" />
          </Grid>
          <ButtonWithIcon
            variant="outlined"
            sx={{ marginTop: "16px" }}
            endIcon={
              <$IconButton aria-label="send">
                <DownloadOutlinedIcon />
              </$IconButton>
            }
            onClick={onDownload}
          >
            DOWNLOAD CV
          </ButtonWithIcon>
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        md={4}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid item xs={6} sm={6}>
          <Card
            variant="outlined"
            sx={{
              marginTop: "10px",
            }}
          >
            <CardContent>
              <Typography
                sx={{
                  color: "#ffcc00",
                  textAlign: "center",
                  marginTop: "10px",
                  fontWeight: "800",
                }}
                variant="h3"
              >
                {`${moment().diff("2020-01-01", "years")}+`}
              </Typography>
              <Typography
                sx={{
                  color: "rgba(0, 0, 0, 0.54)",
                  textAlign: "start",
                  marginTop: "10px",
                  fontWeight: "500",
                }}
                variant="h6"
              >
                YEARS OF EXPERIENCE
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default PersonalInfo;
