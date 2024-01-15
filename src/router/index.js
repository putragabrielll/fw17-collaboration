const router = require('express').Router()

router.use('/products', require('./products.router'))

module.exports = router