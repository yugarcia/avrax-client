const express = require("express");
const cors = require("cors");

const sgMail = require("@sendgrid/mail");
const bodyParser = require("body-parser");
const env = require("./src/env.json");

const https = require("https");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 3005;

// Configura SendGrid con tu API key
sgMail.setApiKey(env.apiKey);

// Utiliza bodyParser para parsear el cuerpo de las solicitudes como JSON
app.use(bodyParser.json());

// Habilita CORS
app.use(cors()); // Agrega esta línea

const corsOptions = {
  origin: "https://avraxwindows.com",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

// Endpoint para enviar correos electrónicos
app.post("/send-email", cors(corsOptions), (req, res) => {
  const { subject, text } = req.body;

  const msg = {
    to: "sales@avraxwindows.com",
    from: "sales@avraxwindows.com", // Establece la dirección de correo electrónico del remitente
    subject,
    text,
  };

  sgMail
    .send(msg)
    .then(() => res.send("Correo electrónico enviado exitosamente"))
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error al enviar el correo electrónico");
    });
});

// Configuración de HTTPS
const options = {
  key: fs.readFileSync("/root/avraxwindows.com_private_key.key"),
  cert: fs.readFileSync("/root/avraxwindows.com_ssl_certificate.cer"),
};

// Crear servidor HTTPS
https.createServer(options, app).listen(PORT, () => {
  console.log(`El servidor está en funcionamiento en el puerto ${PORT}`);
});
