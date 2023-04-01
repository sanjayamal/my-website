import React from "react";
import { ButtonWithIcon, WithLoad } from "../Common";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import { Box, Grid, IconButton, TextField, styled } from "@mui/material";
import "./Contact.scss";

const Contact: React.FC = () => {
  const $IconButton = styled(IconButton)(() => ({
    margin: "0px -11px 0 5px",
    backgroundColor: "#ffcc00",
  }));

  const $TextField = styled(TextField)({
    "& label.Mui-focused": {
      color: "#ffcc00",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#ffcc00",
    },
    "& .MuiOutlinedInput-root": {
      "&:hover fieldset": {
        borderColor: "#ffcc00",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#ffcc00",
      },
    },
  });
  return (
    <Box className="contact-container">
      <Box className="flex-item-left">
        <Box component="form" className="contact-form">
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              <$TextField required id="email" label="Email" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
              <$TextField required id="name" label="Name" fullWidth />
            </Grid>
            <Grid item xs={12}>
              <$TextField required id="subject" label="Subject" fullWidth />
            </Grid>
            <Grid item xs={12}>
              <$TextField
                id="message"
                label="Message"
                multiline
                rows={5}
                fullWidth
                required
              />
            </Grid>
            <Grid
              item
              xs={12}
              sx={{ display: "flex", justifyContent: "flex-end" }}
            >
              <ButtonWithIcon
                variant="outlined"
                endIcon={
                  <$IconButton aria-label="send">
                    <SendOutlinedIcon />
                  </$IconButton>
                }
                onClick={() => {}}
              >
                Send
              </ButtonWithIcon>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box className="flex-item-right">xxxxxxxxxxxxxxxx</Box>
    </Box>
  );
};

export default WithLoad(Contact);
