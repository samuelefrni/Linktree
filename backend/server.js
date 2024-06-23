require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const bodyparser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(bodyparser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("/send-email", (req, res) => {
  const { email, subject, message } = req.body;
  console.log(req.body);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.USER,
      pass: process.env.PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: "samuelefurnari9@gmail.com",
    subject,
    text: message,
  };

  transporter.sendMail(mailOptions, (error, data) => {
    if (error) {
      console.error("Error sending email:", error);
      return res.status(500).send({ error });
    }
    console.log("Email sent:", data.response);
    return res.status(200).send(`Email send: ${data.response}`);
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
