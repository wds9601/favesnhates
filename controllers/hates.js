//Declare new router
let router = require('express').Router()

//Define the routes
router.get('/hate-animals', (req, res) => {
    res.render('hates/hate-animals', {title: 'Hated Animals', animals: ['Spider', 'Wasp', 'Opossum']})
})

router.get('/hate-foods', (req, res) => {
    res.render('hates/hate-foods', {title: 'Hated Foods', foods: ['Mushrooms', 'Mushrooms', 'Mushrooms', 'Stinky Cheese']})
})

//Make sure the file is include-able
module.exports = router