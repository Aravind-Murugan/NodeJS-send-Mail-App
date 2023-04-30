const express = require("express")
const cors = require("cors")
require("dotenv").config()

const router = require("./routes/router.js")

const APP = express()
const PORT = process.env.PORT

// middle ware
/* 
====================================================================================================
*  This middleware is used to set CORS headers for all requests.
`APP.use(express.json())` is a middleware function that parses incoming requests with JSON payloads.
It basically allows the server to accept JSON data in the request body and parse it into a
JavaScript object that can be easily used in the server-side code. 

*  CORS middleware
`APP.use(cors())` is a middleware function that enables Cross-Origin Resource Sharing (CORS) for the
Express application. CORS is a security feature implemented in web browsers that restricts web pages
from making requests to a different domain than the one that served the web page. By using `cors()`,
the Express application allows requests from any domain to access its resources, which is useful
when building APIs that need to be accessed by different clients from different domains.

`APP.use('/', router)` is mounting the `router` middleware on the root path of the `APP` Express
application. This means that any requests that come to the root path of the application will be
handled by the `router` middleware. The `router` middleware is responsible for handling all the
routes defined in the `router.js` file and returning the appropriate responses.
====================================================================================================
*/
APP.use(express.json())
APP.use(cors())
APP.use('/', router)

/**
  is an asynchronous function that starts a server and logs a message to the console indicating
  the port number where the server is running.

  `APP.listen(PORT, () => {...})` is starting the server by calling the `listen()` method on the
  `APP` object and passing in the `PORT` variable as an argument. The `listen()` method starts the
  server and listens for incoming requests on the specified port. The callback function passed as
  the second argument to `listen()` logs a message to the console indicating the port number where
  the server is running.
**/
const MainFunction = async () => {
  try {
    APP.listen(PORT, () => {
      console.log(`server start at PORT no :${PORT}`)
    })
  } catch (ERROR) {
    console.log(`Error: ${ERROR}`)
  }
}

/* 
  `MainFunction()` is an asynchronous function that starts the server by calling the `listen()` method
  on the `APP` object and passing in the `PORT` variable as an argument. The `listen()` method starts
  the server and listens for incoming requests on the specified port. The callback function passed as
  the second argument to `listen()` logs a message to the console indicating the port number where the
  server is running. The `try-catch` block is used to handle any errors that may occur while starting
  the server.
*/
MainFunction()
