const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  //   host: "smtp.ethereal.email",
  service: "gmail",
  port: 465,
  secure: true, // Use `true` for port 465, `false` for all other ports
  logger: true,
  debug: true,
  secureConnection: false,
  auth: {
    user: " ",
    pass: "",
  },
  tls: {
    rejectUnauthorized: true,
  },
});

// async..await is not allowed in global scope, must use a wrapper
exports.sendMails = async function main() {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>', // sender address
    to: "bar@example.com, baz@example.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  // // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
};

// main().catch(console.error);
