// server.js

const express = require('express');
const sgMail = require('@sendgrid/mail');
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
  const { to, subject, text } = req.body;

  const msg = {
    to,
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

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`El servidor está en funcionamiento en el puerto ${PORT}`);
});
