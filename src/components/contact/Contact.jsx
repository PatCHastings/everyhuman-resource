import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { TextField, Button, Box, Typography, Alert } from "@mui/material";

function Contact() {
  const form = useRef();
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_USER_ID"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccessMessage("Message sent successfully!");
          setErrorMessage("");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          setErrorMessage("Failed to send message. Please try again later.");
          setSuccessMessage("");
        }
      );
  };

  return (
    <Box
      component="form"
      ref={form}
      onSubmit={sendEmail}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        maxWidth: "500px",
        margin: "0 auto",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography>

      {successMessage && <Alert severity="success">{successMessage}</Alert>}
      {errorMessage && <Alert severity="error">{errorMessage}</Alert>}

      <TextField
        label="Your Name"
        name="user_name"
        fullWidth
        required
        margin="normal"
      />

      <TextField
        label="Your Email"
        name="user_email"
        type="email"
        fullWidth
        required
        margin="normal"
      />

      <TextField
        label="Message"
        name="message"
        multiline
        rows={4}
        fullWidth
        required
        margin="normal"
      />

      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{ marginTop: "20px" }}
      >
        Send Message
      </Button>
    </Box>
  );
}

export default Contact;
