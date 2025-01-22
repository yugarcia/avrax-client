// server.js

const express = require("express");
const cors = require("cors");

const sgMail = require("@sendgrid/mail");
const bodyParser = require("body-parser");
const env = require("./src/env.json");

const AWS = require("aws-sdk");

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
    to: "garciayunnier@gmail.com",
    from: "garciayunnier@gmail.com", // Establece la dirección de correo electrónico del remitente
    subject,
    text,
  };

  sgMail
    .send(msg)
    .then(() => res.send("Correo electrónico enviado exitosamente"))
    .catch((error) => {
      console.error("SendGrid error:", error.response?.body || error.message);
      res.status(500).send("Error al enviar el correo electrónico");
    });
});

// Configuración de AWS SDK para DigitalOcean Spaces
const spacesEndpoint = new AWS.Endpoint("nyc3.digitaloceanspaces.com"); // Reemplaza con tu región de DigitalOcean Spaces
const s3 = new AWS.S3({
  endpoint: spacesEndpoint,
  accessKeyId: "DO00X928ULD6PKUTWA7V",
  secretAccessKey: "DKLBtlCSpw35yY59W1NuQ5Coe5XnY1pJ6UIGX/yFJcs",
});

// Ruta para obtener las imágenes desde DigitalOcean Spaces
app.get("/get-images", cors(corsOptions), async (req, res) => {
  try {
    // Configura el nombre de tu Space y la carpeta de imágenes
    const spaceName = "avrax";
    const folderPath = req.query.carpeta || ""; // Si no se proporciona, utiliza una cadena vacía

    // Realiza una solicitud para listar objetos en la carpeta de imágenes
    const response = await s3
      .listObjectsV2({
        Bucket: spaceName,
        Prefix: folderPath,
      })
      .promise();

    // Construye las URL de las imágenes
    const images = response.Contents.filter(
      (obj) => !obj.Key.endsWith("/")
    ).map((obj) => `https://${spaceName}.${spacesEndpoint.host}/${obj.Key}`);

    // Envía las URL de las imágenes como respuesta
    res.json({ imagenes: images });
  } catch (error) {
    console.error(
      "Error al obtener imágenes desde DigitalOcean Spaces:",
      error
    );
    res.status(500).json({ error: "Error interno del servidor" });
  }
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
