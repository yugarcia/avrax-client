// server.js

const express = require('express');
const sgMail = require('@sendgrid/mail');
const AWS = require('aws-sdk');
const bodyParser = require('body-parser');
const cors = require('cors'); // Agrega esta línea

const app = express();
const PORT = process.env.PORT || 3005;

// Configura SendGrid con tu API key
sgMail.setApiKey('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');

// Utiliza bodyParser para parsear el cuerpo de las solicitudes como JSON
app.use(bodyParser.json());


// Habilita CORS
app.use(cors()); // Agrega esta línea

// Endpoint para enviar correos electrónicos
app.post('/send-email', (req, res) => {
  const {  subject, text } = req.body;

  const msg = {
    to: 'sales@avraxwindows.com',
    from: 'sales@avraxwindows.com', // Establece la dirección de correo electrónico del remitente
    subject,
    text,
  };

  sgMail
    .send(msg)
    .then(() => res.send('Correo electrónico enviado exitosamente'))
    .catch(error => {
      console.error(error);
      res.status(500).send('Error al enviar el correo electrónico');
    });
});


// Configuración de AWS SDK para DigitalOcean Spaces
const spacesEndpoint = new AWS.Endpoint('nyc3.digitaloceanspaces.com'); // Reemplaza con tu región de DigitalOcean Spaces
const s3 = new AWS.S3({
  endpoint: spacesEndpoint,
  accessKeyId: 'DO007ZT7BV393PRN4BU4',
  secretAccessKey: 'BL/pIfNuwUeu7ob7gbzJys6kXELEi6Go0zYV5+t3Ijg',
});

// Ruta para obtener las imágenes desde DigitalOcean Spaces
app.get('/get-images', async (req, res) => {
  try {
    // Configura el nombre de tu Space y la carpeta de imágenes
    const spaceName = 'avrax';
    const folderPath = req.query.carpeta || ''; // Si no se proporciona, utiliza una cadena vacía

    // Realiza una solicitud para listar objetos en la carpeta de imágenes
    const response = await s3.listObjectsV2({
      Bucket: spaceName,
      Prefix: folderPath,
    }).promise();

    // Construye las URL de las imágenes
    const images = response.Contents.filter(obj => !obj.Key.endsWith('/')).map(obj => `https://${spaceName}.${spacesEndpoint.host}/${obj.Key}`);

    // Envía las URL de las imágenes como respuesta
    res.json({ imagenes: images });
  } catch (error) {
    console.error('Error al obtener imágenes desde DigitalOcean Spaces:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`El servidor está en funcionamiento en el puerto ${PORT}`);
});
