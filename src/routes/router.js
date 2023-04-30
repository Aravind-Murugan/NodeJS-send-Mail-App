const express = require('express')
const router = new express.Router()
const nodemailer = require('nodemailer')

const sendMail = require('../controllers/controllerSendMail')

// path['/'] GET Method will print to display on the web-browser (I am an API Server)
/* 
  This code creates a route for a GET request to the root endpoint `/`. When a GET request is made to
  this endpoint, it sends a response with a message "I am an API Server" to display on the
  web-browser. 
*/
router.get('/', (req, res) => {
  res.send(`I am an API Server`)
  /* 
    console.log(process.env.EMAIL)
    console.log(process.env.PASSWORD) 
  */
})

// path['/'] GET Method will send the JSON value to the requester as (You have Triger a default GET Method API...)
/* 
  This code creates a route for a GET request to the `/api/` endpoint. When a GET request is made to
  this endpoint, it sends a JSON response with a status code of 200 and a message "You have Triger a
  default GET Method API...". The `res.status(200).json()` method is used to send the response in JSON
  format. 
*/
router.get('/api/', (req, res) => {
  res.status(200).json({ 
    status: 200,
    "content-type" : "application/json", 
    "Body" : "You have Triger a default GET Method API..." 
  })
})

// path['/sendMail'] POST Method go to the controller {sendMail} which will send the mail by getting the mail content from the requester.
/* 
  `router.post('/api/sendMail', sendMail)` is creating a route for a POST request to the
  `/api/sendMail` endpoint. When a POST request is made to this endpoint, the `sendMail` function from
  the `controllerSendMail` module will be executed to send an email with the content provided in the
  request body. 
*/
router.post('/api/sendMail', sendMail)

module.exports = router