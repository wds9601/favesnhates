//Require any needed modules
let express = require('express')

//Declare app variables
let app = express()

//Declare routes
app.get('/', (req, res) => {
    res.send('<h1>STUB HOME PAGE</h1>')
})

//Listen on a port
app.listen(3000)
