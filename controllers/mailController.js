const nodemailer = require("nodemailer");

exports.send = async (req, res, next) => {
  const { firstname, lastname, gender, email, url } = req;
  switch (gender) {
    case "masculino":
      genero = "o";
      break;
    case "femenino":
      genero = "a";
      break;
    default:
      genero = "o/a";
      break;
  }

  const contentHTML = `
  <center>
    <table>
    <style>
      @font-face {
        font-family: "Nunito Sans";
        font-style: normal;
        font-weight: 300;
        src: url(https://fonts.gstatic.com/s/nunitosans/v6/pe03MImSLYBIv1o4X1M8cc8WAc5tU1E.woff2)
          format("woff2");
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
          U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
          U+2212, U+2215, U+FEFF, U+FFFD;
      }
    </style>

    <div
      style="
        margin: 0;
        padding: 0;
        width: 600px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-family: 'Nunito Sans';
      "
    >
      <div>
        <img
          style="padding: 10px"
          src="https://i.postimg.cc/280x9x04/Black.png"
          alt="Logo"
        />
      </div>
      <section
        style="background-color: #06e2b3; width: 100%; text-align: center"
      >
        <p style="font-weight: bold; font-size: 25px">
         ${
           firstname + " " + lastname
         }, bienvenid${genero} a <br />#AdelantaTuPago!
        </p>
        <p style="margin-bottom: 30px">¡Adelanta tu pago cuando quieras!</p>
        <a
          href="${url}"
          target="_blank"
          type="button"
          style="
            padding: 10px 50px;
            background-color: #146fd1;
            text-decoration: none;
            color: #f9f9f9;
            margin-bottom: 50px;
          "
          >Activa tu cuenta ahora</a
        >

        <p style="margin-top: 30px; margin-bottom: 0">
          Utilizando el siguiente código
        </p>
        <p style="font-weight: bold; margin-top: 0; padding: 0">9988899</p>
      </section>
      <section style="padding-bottom: 20px">
        <div>
          <p style="text-align: center; padding: 30px">
            Tu empleador te elegió para que disfrutes de estos
            <br />beneficios con
            <a
              href="http://www.adelantatupago.com"
              style="text-decoration: none"
              >www.adelantatupago.com</a
            >:
          </p>
          <ul style="text-align: left">
            <li style="padding: 5px">
              Recibe tu sueldo acumulado instantáneamente. Si lo<br />
              trabajaste, ya lo ganaste.
            </li>
            <li style="padding: 15px">
              Te consginamos directamente a tu cuenta.
            </li>
            <li style="padding: 15px">
              Sin autorizaciones. Sin intereses. Sin burocracia. Sin<br />
              intermediarios.
            </li>
          </ul>
        </div>
        <div
          style="
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-around;
          "
        >
          <div
            style="
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: space-around;
            "
          >
            <img
              src="https://i.postimg.cc/htC5kd0d/infoIcon.png"
              style="margin: 10px"
              alt="Icono alert"
            />
            <a
              href="https://adelantatupago.com/#comofunciona"
              style="text-decoration: none; color: black"
              target="_blank"
            >
              ¿Cómo funciona <br /><b>Advance</b>?</a
            >
          </div>
          <div
            style="
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: space-around;
            "
          >
            <img
              src="https://i.postimg.cc/KYPJZ3Pf/FAQIcon.png"
              style="margin: 10px"
              alt="icono chat"
            />
            <a
              href="https://wa.me/573153595911"
              style="text-decoration: none; color: black"
              target="_blank"
            >
              ¿Necesitas <b>ayuda</b>?</a
            >
          </div>
        </div>
      </section>
      <section
        style="
          font-family: Nunito Sans;
          background-color: #f9f9f9;
          width: 100%;
          text-align: center;
          padding-top: 20px;
        "
      >
        <p style="font-size: 12px">
          Este es un email automatizado, por favor no responder.
        </p>
        <div style="display: flex; justify-content: center">
          <a
            href="https://www.linkedin.com/company/advance-adelanta-tu-pago/"
            target="_blank"
          >
            <img
              src="https://i.postimg.cc/D0NV3psR/002-linkedin.png"
              style="margin: 10px"
              alt="icono linkedin"
          /></a>
          <a
            href="https://www.facebook.com/Advance-Adelanta-Tu-Pago-106772917773603"
            target="_blank"
          >
            <img
              src="https://i.postimg.cc/NFSnz9vc/001-facebook.png"
              style="margin: 10px"
              alt="icono facebook"
          /></a>
          <a href="https://wa.me/573153595911" target="_blank">
            <img
              src="https://i.postimg.cc/WzZRj6n3/Wp.png"
              style="margin: 10px"
              alt="icono whatsapp"
          /></a>
        </div>
        <p style="font-size: 10px; margin: 20px">
          Copyright 2020 Advance Your Pay Limited. Todos los derechos
          reservados
        </p>
        <img
          src="https://i.postimg.cc/BbpTjRNw/Logo-Advance.png"
          alt="Logo de advance"
        />
      </section>
    </div>
  </table>
  </center>`;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "activationmailadvance@gmail.com",
      pass: "eQmG74AQSGyyLzS",
    },
  });

  const mailOptions = {
    from: "'activation-noreply' <activationmailadvance@gmail.com>",
    to: email,
    subject: "Activa tu cuenta",
    html: contentHTML,
  };

  await transporter.sendMail(mailOptions, (e, info) => {
    if (e) {
      res.status(500).send({
        message: "No se pudo enviar el email.",
      });
      console.log(e);
    } else {
      res.status(200).json(info);
    }
  });
};
