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
} from "@mui/material";
import ForwardOutlinedIcon from "@mui/icons-material/ForwardOutlined";
import { useNavigate } from "react-router-dom";
import "./Home.scss";
import { ButtonWithIcon, WithLoad } from "../Common";

const Home: React.FC = () => {
  const navigation = useNavigate();
  const handleMoreAbout = () => {
    navigation("/about");
  };
  const $IconButton = styled(IconButton)(() => ({
    margin: "0px -11px 0 5px",
    backgroundColor: "#ffcc00",
  }));

  return (
    <Box className="home-container">
      <Box className="box-item">
        <Card
          sx={{
            maxWidth: 350,
            borderRadius: "25px",
            borderTop: 1,
            borderBottom: 1,
            borderColor: "#ffcc00",
            borderWidth: "6px",
          }}
        >
          <CardMedia
            sx={{ height: "100%", objectFit: "cover" }}
            image={`${process.env.PUBLIC_URL}/assets/images/profilePic.jpg`}
            component="img"
          />
        </Card>
      </Box>
      <Box className="box-item">
        <Stack spacing={1}>
          <Stack
            sx={{
              maxWidth: 400,
            }}
            spacing={1}
          >
            <Stack spacing={0}>
              <Typography
                variant="h4"
                align="right"
                color="#ffcc00"
                fontWeight={800}
              >
                I'm Rajitha Sanjayamal
              </Typography>
              <Typography
                variant="h5"
                gutterBottom
                align="right"
                fontWeight={500}
                color="#766f6f"
              >
                Senoir Software Engineer
              </Typography>
            </Stack>
            <Typography align="right" paragraph={true}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
              quam cupiditate amet nam minus incidunt blanditiis rerum corrupti
              delectus dolore, maiores, ipsam nihil sapiente consequatur ratione
              impedit quos eveniet assumenda. Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Voluptatem mollitia enim
              perspiciatis harum explicabo, quos et debitis inventore
              consequatur ad accusantium in soluta quod necessitatibus dolor
              saepe perferendis. Obcaecati, voluptates?
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
