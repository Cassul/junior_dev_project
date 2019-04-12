const express = require('express')
const router = express.Router()

// start simple hello world app on port 7777
router.get('/', (req, res) => {
  console.log('Get request for home page')
  res.render('index')
})

router.get('/about', (req, res) => {
  console.log('Get request for about page')
  res.render('about')
})


module.exports = router