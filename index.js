//Require any needed modules
let express = require('express')
let layouts = require('express-ejs-layouts')

//Declare app variables
let app = express()

//Settings and middleware
app.set('view engine', 'ejs')
app.use(layouts)
app.use('/', express.static('static'))

//Include controllers (AKA routers)
app.use('/faves', require('./controllers/faves'))
app.use('/hates', require('./controllers/hates'))

//Declare routes
app.get('/', (req, res) => {
    res.render('home')
})

//Listen on a port
app.listen(3000)
