/**
 * TOC for Express Intro code along
 * 
 * 1. npm init -> initialize your node environment and packager
 * 1.1. add .gitignore "node_modules/"
 * 2. npm install express
 * 3. Import the newly installed express module (library)
 * 4. Setup the express.app()
 * 5. Tell express.app() what it need to respond to (set a URL route)
 * 6. Prepare the .html ang .img resourses
 * 7. Sart the express.app() so it "listens" to a port
 */

// * 3. Import the newly installed express module (library)
const express = require('express')

// * 4. Setup the express.app()
const app = express()

// * 5. Tell express.app() what it need to respond to (set a URL route)
// Http verbs GET POST
// -> GET : reads from the server
// -> POST : Writes to the server
// all stands for both GET and POST
app.all('/', mainRouteHandler)
// We path-match all URLS and all verbs

function mainRouteHandler(request, response){
  // Just inspect the http verb in the console
  console.log(request.method)
  // Return some text to the user
  response.send(`Hey you send me a request with the http verb ${request.method}`)
}