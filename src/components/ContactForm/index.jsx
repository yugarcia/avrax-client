import React, { useEffect, useRef } from "react";
import { TextField, Box } from "@mui/material";
import ReCAPTCHA from "react-google-recaptcha";
import { Title, TitleText } from "./styled-components.jsx";
import Button from "../Button/index.jsx";
import env from "../../env.json";
const SITE_KEY = "6LcHpCcpAAAAAOwr52iyUUPRxHpprwhvTdxfvRAq";

const ContactForm = ({ isDesktop, width, opacity = 0.8 }) => {
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
    sendEmail(contact);
    setContact({});
    setCaptcha(null);
  };

  // Example using fetch
  const sendEmail = (contact) => {
    fetch(env.api + "/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        subject:
          "Avrax consulting - " +
          contact.name +
          " - " +
          contact.email +
          " - " +
          (contact.phone ?? ""),
        text: contact.message,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));
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
        backgroundColor: `rgba(1, 1, 1, ${opacity})`,
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
        <TitleText variant="title" color="primary.light" textAlign={"right"}>
          GET A FREE QUOTE
        </TitleText>
      </Title>
      <TextField
        required
        label={contact?.name ? "Full name" : ""}
        placeholder="Full name"
        color="secondary"
        variant="standard"
        value={contact?.name ?? ""}
        name="name"
        onChange={(e) => onChangeValue(e.target.value, e.target.name)}
      />
      <TextField
        label={contact?.phone ? "Phone number" : ""}
        placeholder="Phone number"
        color="secondary"
        variant="standard"
        value={contact?.phone ?? ""}
        name="phone"
        onChange={(e) => onChangeValue(e.target.value, e.target.name)}
      />
      <TextField
        required
        label={contact?.email ? "Email" : ""}
        placeholder="Email"
        color="secondary"
        variant="standard"
        value={contact?.email ?? ""}
        name="email"
        onChange={(e) => onChangeValue(e.target.value, e.target.name)}
      />
      <TextField
        label={contact?.address ? "Address" : ""}
        placeholder="Address or Change to zip code"
        color="secondary"
        variant="standard"
        value={contact?.address ?? ""}
        name="address"
        onChange={(e) => onChangeValue(e.target.value, e.target.name)}
      />
      <TextField
        required
        label={contact?.message ? "Message" : ""}
        placeholder="Message for us"
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
        sitekey={SITE_KEY}
        onChange={onChangeCaptcha}
        theme="dark"
      />
      <Button text="GET A FREE QUOTE" type="submit" disabled={!isValid} />
    </Box>
  );
};

export default ContactForm;
