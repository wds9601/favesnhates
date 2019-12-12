//Declare new express router
let router = require('express').Router()

//Define the routes
router.get('/animals', (req, res) => {
    res.render('faves/animals', {title: 'Favorite Animals', animals: ['flamingo', 'penguin', 'lion']})
})

router.get('/foods', (req, res) => {
    res.render('faves/foods', {title: 'Favorite Foods', foods: ['Pizza', 'tacos', 'Franch fries', 'Sushi']})
})

//Make sure this file is include-able in other files
module.exports = router