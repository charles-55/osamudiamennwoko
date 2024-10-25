const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

// server used to send emails
const app = express();
app.use(cors({
  origin: `https://charles-55.github.io/osamudiamennwoko/api`,
  credentials: true
}));
app.use(express.json());
app.use("/", router);
// app.listen(5000, () => console.log("Server Running"));

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// const mailOptions = {
//   from: {
//     name: "Your Name",
//     address: process.env.EMAIL_USER
//   },
//   to: "recipient@example.com",
//   subject: "Test Email",
//   text: "Hello from Node.js",
//   html: "<b></b>"
// };

const sendMail = async (mail) => {
  try {
    const info = await transporter.sendMail(mail);
    // console.log("Message sent: %s", info.messageId);
    // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    console.log("Email sent successfully!");
  } catch (error) {
    console.error(error);
  }
};

// const contactEmail = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: "********@gmail.com",
//     pass: ""
//   },
// });

// contactEmail.verify((error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Ready to Send");
//   }
// });

router.post("/contact", (req, res) => {
  const name = req.body.firstName + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  const mail = {
    from: {
      name: name,
      address: email
    },
    to: process.env.EMAIL_USER,
    subject: "Contact Form Submission - Portfolio",
    // text: "Hello from Node.js",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`

    // from: name,
    // to: "********@gmail.com",
    // subject: "Contact Form Submission - Portfolio",
    // html: `<p>Name: ${name}</p>
    //        <p>Email: ${email}</p>
    //        <p>Phone: ${phone}</p>
    //        <p>Message: ${message}</p>`,
  };
  sendMail(mail, (error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});
