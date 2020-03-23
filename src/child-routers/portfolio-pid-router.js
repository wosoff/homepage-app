const express = require('express')
const router = express.Router()


// define the about route
router.get('/pid', function (req, res) {
  res.send('pid')
  res.end()
})

module.exports = router