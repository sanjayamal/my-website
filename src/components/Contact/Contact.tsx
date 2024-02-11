import React, { useRef, useState } from "react";
import { ButtonWithIcon, PageTitle, WithLoad } from "../Common";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import {
  Alert,
  Box,
  Chip,
  Grid,
  IconButton,
  Snackbar,
  Stack,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import emailjs from "@emailjs/browser";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import "./Contact.scss";
import { socialMedia } from "./SocialMedia";

interface IAlert {
  isOpen: boolean;
  severity: "success" | "error";
  message: string;
}
const Contact: React.FC = () => {
  const ref = useRef();
  const {
    reset,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const [alert, setAlert] = useState<IAlert>({
    isOpen: false,
    severity: "success",
    message: "",
  });

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

  const onSubmit = (data: any) => {
    ref.current &&
      emailjs
        .sendForm(
          "service_kfv8r4f",
          "template_jpia5wk",
          ref.current,
          "1ztIM4zFvVTqgBwW0"
        )
        .then(
          (result) => {
            setAlert({
              isOpen: true,
              severity: "success",
              message: "Successfully sent",
            });
            reset();
          },
          (error) => {
            setAlert({
              isOpen: true,
              severity: "error",
              message: "Sending Fail!",
            });
          }
        );
  };

  const handleClose = () => {
    setAlert({
      isOpen: false,
      severity: "success",
      message: "",
    });
  };

  return (
    <>
      <PageTitle title="GET IN TOUCH" />
      <Box className="contact-container">
        <Box className="flex-item-left">
          <Box
            component="form"
            className="contact-form"
            onSubmit={handleSubmit(onSubmit)}
            ref={ref}
          >
            <Grid container spacing={1}>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="email"
                  control={control}
                  rules={{
                    required: true,
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Please enter a valid email address",
                    },
                  }}
                  render={({ field }) => (
                    <$TextField
                      {...field}
                      label="Email"
                      error={!!errors.email}
                      helperText={
                        errors.email ? (errors.email.message as string) : ""
                      }
                      fullWidth
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="name"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <$TextField
                      {...field}
                      label="Name"
                      error={!!errors.name}
                      helperText={errors.name ? "Please enter your name" : ""}
                      fullWidth
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name="subject"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <$TextField
                      {...field}
                      label="Subject"
                      error={!!errors.subject}
                      helperText={
                        errors.subject ? "Please enter the subject" : ""
                      }
                      fullWidth
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name="message"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <$TextField
                      {...field}
                      label="Message"
                      error={!!errors.message}
                      helperText={
                        errors.message ? "Please enter your message" : ""
                      }
                      multiline
                      rows={5}
                      fullWidth
                    />
                  )}
                />
              </Grid>
              <Grid
                item
                xs={12}
                sx={{ display: "flex", justifyContent: "flex-end" }}
              >
                <ButtonWithIcon
                  variant="outlined"
                  type="submit"
                  endIcon={
                    <$IconButton aria-label="send">
                      <SendOutlinedIcon />
                    </$IconButton>
                  }
                >
                  Send
                </ButtonWithIcon>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Box className="flex-item-right">
          <Stack spacing={2}>
            <Box>
              <Chip
                icon={
                  <LocationOnOutlinedIcon
                    sx={{ color: "rgba(0, 0, 0, 0.54)" }}
                  />
                }
                label="ADDRESS"
                variant="outlined"
                sx={{ color: "#ffcc00", border: "none", fontSize: "18px" }}
              />
              <Typography className="info-item">Elpitiya, Galle</Typography>
              <Typography className="info-item">Galle</Typography>
              <Typography className="info-item">Sri Lanka</Typography>
            </Box>
            <Box>
              <Chip
                icon={<EmailOutlinedIcon sx={{ color: "red" }} />}
                label="MAIL ME"
                variant="outlined"
                sx={{ color: "#ffcc00", border: "none", fontSize: "18px" }}
              />
              <Typography className="info-item">
                rajithasanjayamal0918@gmail.com
              </Typography>
            </Box>
            {/* <Box>
              <Chip
                icon={<CallOutlinedIcon />}
                label="CALL ME"
                variant="outlined"
                sx={{ color: "#ffcc00", border: "none", fontSize: "18px" }}
              />
              <Typography className="info-item">
                +94717084765 / +94773664768
              </Typography>
            </Box> */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                paddingTop: "20px",
              }}
            >
              <Stack direction="row" spacing={3}>
                {socialMedia.map(
                  (
                    { icon, link }: { icon: any; link: string },
                    index: number
                  ) => (
                    <a key={index} href={link}>
                      {icon}
                    </a>
                  )
                )}
              </Stack>
            </Box>
          </Stack>
        </Box>
        <Snackbar
          open={alert.isOpen}
          autoHideDuration={6000}
          onClose={handleClose}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <Alert
            onClose={handleClose}
            severity={alert.severity}
            sx={{ width: "100%" }}
          >
            {alert.message}
          </Alert>
        </Snackbar>
      </Box>
    </>
  );
};

export default WithLoad(Contact);
