//DEPENDENCIES
const express = require(`express`)

//CONFIGURATION
require(`dotenv`).config()
const PORT = process.env.PORT
const app = express()
console.log(PORT)

//ROUTES
app.get(`/`, function(req, res) {
    res.send(`Welcome to an Awesome App about Breads!`)
})

//BREADS
const breadsController = require(`./controllers/bread_controller.js`)
app.use(`/breads`, breadsController)

//MIDDLEWARE
app.set(`views`, __dirname + `/views`)
app.set(`view engine`, `jsx`)
app.engine(`jsx`, require(`express-react-views`).createEngine())

//LISTEN
app.listen(PORT, function() {
    console.log(`nomming at port`, PORT)
})
