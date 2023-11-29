import React, { useEffect, useRef } from "react";
import { Typography, TextField, Box } from "@mui/material";
import ReCAPTCHA from "react-google-recaptcha";
import { Title, TitleText } from "./styled-components.jsx";
import Button from "../Button/index.jsx";

const ContactForm = ({ isDesktop, width }) => {
  const [contact, setContact] = React.useState(null);
  const [captcha, setCaptcha] = React.useState(null);
  const [isValid, setIsValid] = React.useState(false);

  const recaptchaRef = useRef();

  const onChangeValue = (value, prop) => {
    let currentContact = { ...contact };
    currentContact[prop] = value;
    setContact(currentContact);
  };
  const onChangeCaptcha = (value) => {
    setCaptcha(value);
  };

  const onSubmit = (e, contact, captcha) => {
    e.preventDefault();
    recaptchaRef.current.reset();
    setContact({});
    setCaptcha(null);
  };

  useEffect(() => {
    if (contact?.name && contact?.email && contact?.message && captcha) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [contact, captcha]);

  return (
    <Box
      component="form"
      onSubmit={(e) => {
        onSubmit(e, contact, captcha, recaptchaRef);
      }}
      sx={{
        "& .MuiTextField-root": { m: 1 },
        "& .MuiInputLabel-standard": { color: "#FFFFFF" },
        backgroundColor: "rgba(1, 1, 1, 0.8)",
        display: "grid",
        gridTemplateColumns: { sm: "1fr" },
        gap: isDesktop ? 4 : 1,
        padding: isDesktop ? "15px 40px" : "5px 10px",
        width: isDesktop ? width ?? "initial" : "initial",
      }}
      noValidate={false}
      autoComplete="off"
    >
      <Title>
        <Typography variant="button" color="secondary" textAlign={"left"}>
          Free Consultation
        </Typography>
        <TitleText variant="title" color="primary.light" textAlign={"right"}>
          GET A FREE QUOTE
        </TitleText>
      </Title>
      <TextField
        required
        label={contact?.name ? "Full name" : ""}
        placeholder="Enter your full name"
        color="secondary"
        variant="standard"
        value={contact?.name ?? ""}
        name="name"
        onChange={(e) => onChangeValue(e.target.value, e.target.name)}
      />
      <TextField
        label={contact?.phone ? "Phone number" : ""}
        placeholder="Enter your phone number"
        color="secondary"
        variant="standard"
        value={contact?.phone ?? ""}
        name="phone"
        onChange={(e) => onChangeValue(e.target.value, e.target.name)}
      />
      <TextField
        required
        label={contact?.email ? "Email" : ""}
        placeholder="Enter your email"
        color="secondary"
        variant="standard"
        value={contact?.email ?? ""}
        name="email"
        onChange={(e) => onChangeValue(e.target.value, e.target.name)}
      />
      <TextField
        label={contact?.address ? "Address" : ""}
        placeholder="Enter your address"
        color="secondary"
        variant="standard"
        value={contact?.address ?? ""}
        name="address"
        onChange={(e) => onChangeValue(e.target.value, e.target.name)}
      />
      <TextField
        required
        label={contact?.message ? "Message" : ""}
        placeholder="Enter a message for us"
        color="secondary"
        variant="standard"
        multiline
        rows={3}
        value={contact?.message ?? ""}
        name="message"
        onChange={(e) => onChangeValue(e.target.value, e.target.name)}
      />

      <ReCAPTCHA
        ref={recaptchaRef}
        sitekey="6LcB-ysUAAAAAE_uDz0N0IiwjdwFGbqUTfcFi_Ey"
        onChange={onChangeCaptcha}
        theme="dark"
      />
      <Button text="GET A FREE QUOTE" type="submit" disabled={!isValid} />
    </Box>
  );
};

export default ContactForm;
