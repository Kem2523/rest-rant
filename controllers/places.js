const router = require('express').Router()

router.get('/new', (req, res) => {
    res.render('places/new')
  })
  
// GET /places
router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/cbr.JPG'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/loaded.JPG'
      }]
      
      res.render('places/index', { places })

  })
  

module.exports = router
