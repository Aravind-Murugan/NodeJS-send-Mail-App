"use strict"
const nodemailer = require("nodemailer")

/**
 * This is a function that sends an email using nodemailer and Gmail service.
 * @param req - req is the request object that contains information about the HTTP request made by the
 * client, such as the request headers, request parameters, and request body.
 * @param res - The `res` parameter is the response object that will be sent back to the client after
 * the email has been sent. It contains information such as the status code and any data that needs to
 * be sent back to the client.
**/
const sendMail = async (req, res) => {
  // res.status(200).json({ status: 200,"content-type" : "application/json" })
  const Body = req.body
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
      }
    })
    const mailOptions = {
      from: process.env.EMAIL,
      to: "aravind.m.mail@gmail.com",
      subject: Body.subject,
      html: `
        <p>We have recivied an mail from contact-us section from aravind-resume website.</p>
        <br/>
        <p>user-name: ${Body.name}</p>
        <p>email: ${Body.mail}</p>
        <p>message: ${Body.message}</p>
      `
    }
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log("Error" + error)
        res.status(401).json({status:401,error})
      } else {
        console.log("Email sent:" + info.response)
        res.status(200).json({status:200,info})
      }
    })
  } catch (error) {
    res.status(401).json({status:401, error})
  }
}

module.exports = sendMail