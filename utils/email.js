const nodemailer = require('nodemailer');

const sendEmail = async options => {
  // 1) Crear un transportador
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  // 2) Definir las opciones del mensaje
  const message = {
    from: 'Gustavo <gustavo.jaen@email.com>',
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  // 3) Enviar email utilizando el transportador y las opciones del mensaje
  await transporter.sendMail(message);
};

module.exports = sendEmail;