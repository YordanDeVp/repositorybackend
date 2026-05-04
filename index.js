require('dotenv').config()
const http = require('http')

// Added req (request) and res (response) parameters
function requestController(req, res){
    console.log('Bienvenidos al curso')
    
    // Send a response back to the client so the browser doesn't hang
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end('Bienvenidos al curso') 
}

const server = http.createServer(requestController)

// Added a fallback port (3000) just in case process.env.PORT is undefined
const PORT = process.env.PORT || 3000

server.listen(PORT, function(){
    console.log("Aplicacion corriendo en: " + PORT)
})