var express = require('express')
var app = express()
app.use(express.static('./'))


app.get('/', function(req, res){
    console.log("we're logging on the server!")
    res.send("<h1>Welcome to the internet!</h1>")
})


app.listen(80)

// port 80 is the default port for HTTP traffic.
// var httpServer = HTTP.createServer(app)
// httpServer.listen(80)
