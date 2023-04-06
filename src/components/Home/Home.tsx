import React from "react";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  Button,
  Stack,
  IconButton,
  styled,
  useMediaQuery,
  Grid,
} from "@mui/material";
import ForwardOutlinedIcon from "@mui/icons-material/ForwardOutlined";
import { useNavigate } from "react-router-dom";
import "./Home.scss";
import { ButtonWithIcon, WithLoad } from "../Common";
import moment from "moment";

const Home: React.FC = () => {
  const navigation = useNavigate();
  const handleMoreAbout = () => {
    navigation("/about");
  };
  const isSmallScreen = useMediaQuery((theme: any) =>
    theme.breakpoints.down("sm")
  );
  const $IconButton = styled(IconButton)(() => ({
    margin: "0px -11px 0 5px",
    backgroundColor: "#ffcc00",
  }));

  return (
    <Box className="home-container">
      <Box className="box-item">
        <Grid container spacing={2} sx={{ justifyContent: "center" }}>
          <Grid item xs={12} md={8} lg={8}>
            <Card
              sx={{
                height: "auto",
                borderRadius: "25px",
                borderTop: 1,
                borderBottom: 1,
                borderColor: "#ffcc00",
                borderWidth: "6px",
              }}
            >
              <CardMedia
                sx={{ height: "100%", objectFit: "cover", maxWidth: "100%" }}
                image={`${process.env.PUBLIC_URL}/assets/images/profilePic.jpg`}
                component="img"
              />
            </Card>
          </Grid>
        </Grid>
      </Box>
      <Box className="box-item">
        <Stack spacing={1}>
          <Stack
            sx={{
              maxWidth: 400,
            }}
            spacing={1}
          >
            <Stack spacing={0} sx={{ marginTop: "10px" }}>
              <Typography
                variant={isSmallScreen ? "h5" : "h4"}
                align="right"
                color="#ffcc00"
                fontWeight={800}
              >
                I'm Rajitha Sanjayamal
              </Typography>
              <Typography
                variant={isSmallScreen ? "caption" : "h6"}
                gutterBottom
                align="right"
                fontWeight={500}
                color="#766f6f"
              >
                Senior Software Engineer
              </Typography>
            </Stack>
            <Typography
              align="right"
              variant={isSmallScreen ? "body2" : "body1"}
              paragraph={true}
              sx={{
                color: "#766f6f",
                marginLeft: "-7px !important",
                marginBottom: "10px !important",
              }}
            >
              {`I'm a full stack developer a passion for creating innovative and functional 
            web application. My expertise includes both front-end and backend development, as well as
            experience with various web development frameworks and technologies over ${moment().diff(
              "2020-01-01",
              "years"
            )}
            years in IT industry. Take a look around and feel free to contact me.`}
            </Typography>
          </Stack>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <ButtonWithIcon
              variant="outlined"
              endIcon={
                <$IconButton aria-label="more">
                  <ForwardOutlinedIcon />
                </$IconButton>
              }
              onClick={handleMoreAbout}
            >
              More About Me
            </ButtonWithIcon>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default WithLoad(Home);
