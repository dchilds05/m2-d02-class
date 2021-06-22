/**
 * TOC for Express Intro code along
 * 
 * 1. npm init -> initialize your node environment and packager
 * 1.1. add .gitignore "node_modules/"
 * 2. npm install express
 * 3. Import the newly installed express module (library)
 * 4. Setup the express.app()
 * 5. Tell express.app() what it need to respond to (set a URL route)
 * 6. Sart the express.app() so it "listens" to a port
 * 7. Prepare the .html ang .img resourses
 * 8. Set static files serve
 * 9. Route the files
 */

// Library to build corect path strings for the OS
const path = require('path')

// * 3. Import the newly installed express module (library)
const express = require('express')

// * 4. Setup the express.app()
const app = express()


// * 8. Route the files
app.use(express.static('public'))

// * 5. Tell express.app() what it need to respond to (set a URL route)
// Http verbs GET POST
// -> GET : reads from the server
// -> POST : Writes to the server
// all stands for both GET and POST
app.all('/', mainRouteHandler)
// We path-match all URLS and all verbs

//  * 7. Prepare the .html ang .img resourses
// * 8. Route the files

function mainRouteHandler(request, response){
  // We don't want to use full path we ask the OS for relative path ... /Users/MS/Dev/Ironhack/PizzaBytes/m2-d02-class/01_code-Express_intro/app.js
  response.sendFile(path.join(__dirname, '/public/index.html'))
}



app.listen(3000)


/* function mainRouteHandler(request, response){
  // Just inspect the http verb in the console
  console.log(request.method)
  // Return some text to the user
  response.send(`<h1>Hey you send me a request with the http verb ${request.method}</h1>`)
}


app.all('/hello', helloRouteHandler)

function helloRouteHandler(request, response){
  response.send(`<h1>Hello from my first Express.js app!</h1>`)
}

app.all('/students/helloFran', franHelloRouteHandler)

function franHelloRouteHandler(request, response){
  response.send(`<h1>Hello from Fran Express.js app!</h1>`)
}

app.all("/students/morgane", morganeRouteHandler)

function morganeRouteHandler(request, response) {
    response.send(`<h2>You are on Morgane's page!</h2>`)
}

app.all('/students/raul', raulrouteHandler)
function raulrouteHandler(request, response) {
  response.send(`<p>I've been bitten twice by a mosquito this morning ;( </p>`)
}

app.listen(3000)
*/